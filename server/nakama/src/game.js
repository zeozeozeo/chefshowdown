import {
  MATCH_TYPES,
  SS,
  defaultStageForMode,
  modeToMatchType,
  stageConfig,
} from "./settings.js";
import {
  computeReward,
  makeOrderFromEntry,
  makeWaveRunner,
  tickWaveRunner,
} from "./rules.js";
import {
  clone,
  matchesCounts,
  nowMs,
  nowSec,
  parseJson,
  parsePayload,
  sumCounts,
} from "./util.js";
import {
  makeUserInfo,
  readUserDoc,
  writeUserDoc,
} from "./users.js";

var OP = {
  StartMatch: 1,
  UpdateTeams: 2,
  MatchStatus: 3,
  ClientReady: 4,
  MatchSetup: 5,
  ReadyForFollowOn: 6,
  ChefState: 100,
  SellPizza: 102,
  UpdateScores: 103,
  GameOver: 104,
  OrdersUpdated: 107,
  DiscardItems: 108,
  EquipItem: 109,
  RejectOrderItem: 110,
  UpdateBuffs: 111,
  KickBomb: 112,
  ExplodeBomb: 113,
  ExplodeBombUpdateCustomers: 114,
  TimeOut: 201,
  MigrateState: 202,
  MatchWillTerminate: 203,
  MatchDidTerminate: 204,
  DebugAddClientBot: 900,
};

function readData(nk, data) {
  if (typeof data === "string") return data;
  try {
    return nk.binaryToString(data);
  } catch (e) {
    return "";
  }
}

function emptyScore(players) {
  var perPlayer = {};
  Object.keys(players || {}).forEach(function (id) {
    var p = players[id];
    perPlayer[p.sessionId] = {
      cashAwarded: 0,
      tipsAwarded: 0,
      itemsServed: {},
      itemsWasted: {},
      ordersCompleted: 0,
    };
  });
  return {
    cash: 0,
    stars: 0,
    orders: {
      totals: { created: 0, completed: 0, expired: 0 },
      perPlayer: perPlayer,
    },
  };
}

function chefInfo(p) {
  return {
    displayName: p.displayName || "Chef",
    displayNameBase64: "",
    avatarId: p.avatarId || "",
    accentColour: p.color || "#f2b134",
    currentSkin: p.currentSkin || { skinId: "chonk_chef" },
    chefType: "human",
    equippedCosmetic: "none",
    buffs: undefined,
  };
}

function teamsBySession(state, onlyPresent) {
  var a = {};
  var b = {};
  Object.keys(state.players).forEach(function (userId) {
    var p = state.players[userId];
    if (onlyPresent && !state.presences[p.sessionId]) return;
    if (p.team === "b") b[p.sessionId] = chefInfo(p);
    else a[p.sessionId] = chefInfo(p);
  });
  return { a: a, b: b };
}

function activeOrders(state, team) {
  return state.teamState[team] ? clone(state.teamState[team].orders) : {};
}

function buildStartPayload(state, team) {
  var teams = teamsBySession(state);
  var stageCfg = state.stageCfg;
  var def = state.matchTypeDef;
  return {
    teams: teams,
    spectators: {},
    gameMode: state.stage,
    scores: clone(state.scores),
    description: {
      matchType: state.matchType,
      config: clone(def),
      teamMatchDescriptions: {
        a: { matchTypeDefinition: clone(stageCfg) },
        b: { matchTypeDefinition: clone(stageCfg) },
      },
      validGameModes: [],
    },
    startDelaySeconds: 0,
    livesToLose: state.livesToLose,
    playerRecords: {},
    latecomer: false,
    activeOrders: activeOrders(state, team),
    roundNumber: state.teamState[team] && state.teamState[team].runner
      ? state.teamState[team].runner.round
      : 0,
    customerSequence: [],
    serverTime: nowSec(),
    matchStartTime: state.matchStartTime || nowSec() + 1,
    configName: "private",
    followsMatch: false,
    votingCloseTime: nowSec() - 1,
    votes: {},
  };
}


function sendStartTo(state, dispatcher, presence) {
  var p = state.players[presence.userId];
  if (!p) return;
  var team = p.team || "a";
  // StartMatch first: by the time MatchSetup arrives the client has created
  // its MatchHandler and can resolve its match-init promise. Sending setup
  // first can lose it in the join-response race, which leaves the HUD timer
  // stuck at the time limit.
  dispatcher.broadcastMessage(
    OP.MatchSetup,
    JSON.stringify({
      followsMatch: false,
      serverTime: nowSec(),
      matchStartTime: state.matchStartTime || 0,
      votingCloseTime: nowSec() - 1,
      votes: {},
    }),
    [presence],
    null,
    true,
  );
  dispatcher.broadcastMessage(
    OP.StartMatch,
    JSON.stringify(buildStartPayload(state, team)),
    [presence],
    null,
    true,
  );
  // Catch-up state for late joiners.
  if (state.phase === "playing" && state.matchStartTime) {
    dispatcher.broadcastMessage(
      OP.ClientReady,
      JSON.stringify({
        serverTime: nowSec(),
        matchStartTime: state.matchStartTime,
      }),
      [presence],
      null,
      true,
    );
  }
  var ts = state.teamState[team];
  if (ts && Object.keys(ts.orders).length > 0) {
    dispatcher.broadcastMessage(
      OP.OrdersUpdated,
      JSON.stringify({
        serverTime: nowSec(),
        team: team,
        orders: {
          newOrders: clone(ts.orders),
          updatedOrders: {},
          expiredOrders: {},
          completedOrders: {},
          // No roundState here: a false roundStart would be treated by the
          // client as a round-end summary on a normal late join.
          roundState: undefined,
        },
      }),
      [presence],
      null,
      true,
    );
  }
}

function sendScores(state, dispatcher) {
  state.scores.a.livesLeft = state.lives;
  state.scores.b.livesLeft = state.lives;
  dispatcher.broadcastMessage(
    OP.UpdateScores,
    JSON.stringify({ scores: clone(state.scores) }),
    null,
    null,
    true,
  );
}

function sendOrders(state, dispatcher, team, changes) {
  if (!changes) return;
  var has =
    (changes.newOrders && Object.keys(changes.newOrders).length) ||
    (changes.updatedOrders && Object.keys(changes.updatedOrders).length) ||
    (changes.expiredOrders && Object.keys(changes.expiredOrders).length) ||
    (changes.completedOrders && Object.keys(changes.completedOrders).length) ||
    changes.roundState;
  if (!has) return;
  var targets = Object.keys(state.presences).filter(function (sid) {
    var p = state.players[state.presences[sid].userId];
    return p && (p.team || "a") === team;
  }).map(function (sid) {
    return state.presences[sid].presence;
  });
  if (targets.length === 0) return;
  dispatcher.broadcastMessage(
    OP.OrdersUpdated,
    JSON.stringify({
      serverTime: nowSec(),
      team: team,
      orders: {
        newOrders: changes.newOrders || {},
        updatedOrders: changes.updatedOrders || {},
        expiredOrders: changes.expiredOrders || {},
        completedOrders: changes.completedOrders || {},
        roundState: changes.roundState,
      },
    }),
    targets,
    null,
    true,
  );
}

function findFreeSlot(ts, slots) {
  for (var i = 0; i < slots; i++) {
    var used = false;
    Object.keys(ts.orders).forEach(function (key) {
      if (ts.orders[key].slotIndex === i) used = true;
    });
    if (!used) return i;
  }
  return -1;
}

function spawnForTeam(state, team, entry, changes) {
  var ts = state.teamState[team];
  if (!ts) return false;
  var slot = findFreeSlot(ts, ts.runner.slots);
  if (slot < 0) return false;
  var key = "o" + ++state.orderSeq;
  var order = makeOrderFromEntry(entry, ts.runner, state.stageCfg, nowSec(), key);
  order.slotIndex = slot;
  ts.orders[key] = order;
  state.scores[team].orders.totals.created++;
  changes.newOrders[key] = order;
  if (state.matchType === "duel" && team === "a" && state.teamState.b) {
    var mirror = clone(order);
    mirror.pendingItems = JSON.parse(JSON.stringify(order.desiredItems || {}));
    mirror.lastUpdatedBy = "";
    mirror.contributingChefs = [];
    mirror.completedByTeam = "";
    mirror.finishedWithReward = null;
    mirror.reward = null;
    state.teamState.b.orders[key] = mirror;
    state.scores.b.orders.totals.created++;
    sendOrders(state, state._dispatcher, "b", { newOrders: { [key]: mirror } });
  }
  return true;
}

function applyXp(doc, amount) {
  if (!doc.level) doc.level = { level: 1, levelXP: 0 };
  var cfg = (SS && SS.playerLevelConfig) || {};
  var levels = cfg.levels || [];
  var level = Math.max(1, Number(doc.level.level) || 1);
  var xp = Math.max(0, Number(doc.level.levelXP) || 0) + Math.max(0, Number(amount) || 0);
  var guard = 0;
  while (level <= levels.length && xp >= (levels[level - 1].xpRequired || 0) && guard++ < 1000) {
    xp -= levels[level - 1].xpRequired || 0;
    level++;
  }
  doc.level.level = Math.min(level, levels.length + 1);
  doc.level.levelXP = xp;
  return doc;
}

function ensurePlayerScore(state, p, previousSessionId) {
  var team = p.team || "a";
  var s = state.scores[team];
  if (!s || !s.orders || !s.orders.perPlayer) return;
  var per = s.orders.perPlayer;
  if (per[p.sessionId]) {
    if (previousSessionId && previousSessionId !== p.sessionId) delete per[previousSessionId];
    return;
  }
  var prior = previousSessionId ? per[previousSessionId] : null;
  per[p.sessionId] = prior || {
    cashAwarded: 0,
    tipsAwarded: 0,
    itemsServed: {},
    itemsWasted: {},
    ordersCompleted: 0,
  };
  if (previousSessionId && previousSessionId !== p.sessionId) delete per[previousSessionId];
}

function scoreForPlayer(state, team, sessionId) {
  var s = state.scores[team];
  if (!s || !s.orders || !s.orders.perPlayer) {
    return { cashAwarded: 0, tipsAwarded: 0, itemsServed: {}, itemsWasted: {}, ordersCompleted: 0 };
  }
  if (!s.orders.perPlayer[sessionId]) {
    s.orders.perPlayer[sessionId] = {
      cashAwarded: 0,
      tipsAwarded: 0,
      itemsServed: {},
      itemsWasted: {},
      ordersCompleted: 0,
    };
  }
  return s.orders.perPlayer[sessionId];
}

function completeOrder(state, dispatcher, team, order, sessionId, cashBonus) {
  var reward = computeReward(order, nowSec(), state.stageCfg);
  reward.cash += Number(cashBonus) || 0;
  order.finishedWithReward = reward;
  order.reward = reward;
  order.completedByTeam = team;
  order.lastUpdatedBy = sessionId;
  if (order.contributingChefs.indexOf(sessionId) < 0) {
    order.contributingChefs.push(sessionId);
  }
  var ts = state.teamState[team];
  delete ts.orders[order.orderKey];
  ts.completed[order.orderKey] = order;
  if (ts.roundOrders) ts.roundOrders.push(order);
  var score = state.scores[team];
  score.cash += reward.cash + reward.tips;
  score.stars += reward.stars;
  score.orders.totals.completed++;
  var ps = scoreForPlayer(state, team, sessionId);
  ps.cashAwarded += reward.cash;
  ps.tipsAwarded += reward.tips;
  ps.ordersCompleted++;
  Object.keys(order.desiredItems || {}).forEach(function (item) {
    ps.itemsServed[item] = (ps.itemsServed[item] || 0) + (order.desiredItems[item] || 0);
  });

  var changes = {
    completedOrders: { [order.orderKey]: order },
    roundState: null,
  };
  sendOrders(state, dispatcher, team, changes);

  if (state.matchType === "duel") {
    // The first team to finish an order steals the mirrored order from the
    // other team. Works in both directions.
    var otherTeam = team === "a" ? "b" : "a";
    var otherState = state.teamState[otherTeam];
    var mirror = otherState && otherState.orders[order.orderKey];
    if (mirror) {
      delete otherState.orders[order.orderKey];
      mirror.completedByTeam = team;
      mirror.lastUpdatedBy = sessionId;
      mirror.contributingChefs = [sessionId];
      mirror.finishedWithReward = null;
      mirror.reward = null;
      otherState.completed[order.orderKey] = mirror;
      if (otherState.roundOrders) otherState.roundOrders.push(mirror);
      state.scores[otherTeam].orders.totals.expired++;
      sendOrders(state, dispatcher, otherTeam, {
        completedOrders: { [order.orderKey]: mirror },
      });
    }
  }
  sendScores(state, dispatcher);
  return reward;
}

function endGame(state, dispatcher) {
  if (state.ended) return;
  state.ended = true;
  state.phase = "ended";
  var a = state.scores.a;
  var b = state.scores.b;
  var winner = "a";
  if (state.matchType === "classic" || state.matchType === "duel") {
    if (b.cash > a.cash) winner = "b";
    else if (b.cash === a.cash && b.stars > a.stars) winner = "b";
  }
  state.winner = winner;
  // Tell the original lobby first so its PostMatch state (and match outcome)
  // is already in the client before GameOver triggers the post-match screen.
  if (state.lobbyMatchId) {
    try {
      state._nk.matchSignal(
        state.lobbyMatchId,
        JSON.stringify({ type: "postmatch", winner: winner, scores: state.scores }),
      );
    } catch (e) {
      state._logger.warn("Could not signal lobby: %s", e.message);
    }
  }
  // Give the lobby broadcast a moment to reach the clients before GameOver,
  // otherwise the client can skip the post-match screen.
  state.gameOverAt = nowSec() + 1.5;
  state.endAt = nowSec() + 45;
}

function sendGameOver(state, dispatcher) {
  if (state.gameOverSent) return;
  state.gameOverSent = true;
  var winner = state.winner || "a";
  var presences = Object.keys(state.presences).map(function (id) {
    return state.presences[id].presence;
  });
  presences.forEach(function (presence) {
    var p = state.players[presence.userId];
    if (!p) return;
    var team = p.team || "a";
    var reward = {
      score: state.scores[team].cash,
      previousHighScore: 0,
      stars: state.scores[team].stars,
      cash: state.scores[team].cash,
      tips: 0,
      playerXPAdded: state.matchType === "pve" ? 5 : team === winner ? 15 : 5,
      guildXPAdded: 0,
      playerLevelBefore: { level: 1, levelXP: 0 },
      playerLevelAfter: { level: 1, levelXP: 0 },
      guildLevelBefore: { level: 0, levelXP: 0 },
      guildLevelAfter: { level: 0, levelXP: 0 },
      matchType: state.matchType,
    };
    var userInfo = null;
    try {
      var doc = readUserDoc(state._nk, presence.userId, p);
      doc.cashAmount = (doc.cashAmount || 0) + state.scores[team].cash;
      doc.trophies = doc.trophies || 0;
      doc.lootboxTokens = (doc.lootboxTokens || 0) + Math.max(1, Math.floor(state.scores[team].cash / 100));
      while (doc.lootboxTokens >= 100) {
        doc.lootboxTokens -= 100;
        doc.unopenedBoxes = doc.unopenedBoxes || [];
        doc.unopenedBoxes.push("cardboard");
      }
      doc.unopenedBoxCount = (doc.unopenedBoxes || []).length;
      if (!doc.level) doc.level = { level: 1, levelXP: 0 };
      reward.playerLevelBefore = clone(doc.level);
      applyXp(doc, reward.playerXPAdded);
      reward.playerLevelAfter = clone(doc.level);
      doc.games = doc.games || {};
      doc.games[state.stage] = (doc.games[state.stage] || 0) + 1;
      writeUserDoc(state._nk, presence.userId, doc);
      userInfo = makeUserInfo(doc, "");
    } catch (e) {
      state._logger.error("Failed to persist user %s: %s", presence.userId, e.message);
    }
    var payload = {
      status: "FINISHED",
      scores: clone(state.scores),
      winner: winner,
      matchType: state.matchType,
      updatedUserInfo: userInfo,
      wasSpectating: false,
      followOnMatchId: null,
      allRewards: {},
      reward: reward,
    };
    dispatcher.broadcastMessage(
      OP.GameOver,
      JSON.stringify(payload),
      [presence],
      null,
      true,
    );
  });
}

function debugSnapshot(state) {
  var teams = {};
  Object.keys(state.teamState).forEach(function (team) {
    var ts = state.teamState[team];
    if (!ts) return;
    teams[team] = {
      orders: Object.keys(ts.orders).map(function (key) {
        var o = ts.orders[key];
        return {
          orderKey: o.orderKey,
          slotIndex: o.slotIndex,
          pendingItems: clone(o.pendingItems),
          desiredItems: clone(o.desiredItems),
          expiryTime: o.expiryTime,
          reward: o.finishedWithReward,
        };
      }),
      completed: Object.keys(ts.completed).length,
      expired: Object.keys(ts.expired).length,
      round: ts.runner ? ts.runner.round : 0,
    };
  });
  return {
    type: "snapshot",
    phase: state.phase,
    ended: state.ended,
    matchType: state.matchType,
    roomMode: state.roomMode,
    stage: state.stage,
    matchStartTime: state.matchStartTime,
    matchEndTime: state.matchEndTime || null,
    lives: state.lives,
    serverTime: nowSec(),
    players: Object.keys(state.players).map(function (id) {
      var p = state.players[id];
      return {
        userId: p.userId,
        sessionId: p.sessionId,
        displayName: p.displayName,
        team: p.team,
      };
    }),
    presenceCount: Object.keys(state.presences).length,
    scores: clone(state.scores),
    teams: teams,
  };
}

function lateTeamForGame(state) {
  if (state.roomMode === "coop" || state.roomMode === "pve") return "a";
  var counts = { a: 0, b: 0 };
  Object.keys(state.players).forEach(function (id) {
    var team = state.players[id].team === "b" ? "b" : "a";
    counts[team]++;
  });
  if (state.roomMode === "duel") return counts.a <= counts.b ? "a" : "b";
  if (counts.a < 4 && counts.a <= counts.b) return "a";
  if (counts.b < 4) return "b";
  return "a";
}

function gameMatchInit(ctx, logger, nk, params) {
      var p = parsePayload(params);
      var players = {};
      (p.players || []).forEach(function (pl) {
        players[pl.userId] = {
          userId: pl.userId,
          sessionId: pl.sessionId,
          displayName: pl.displayName || "Chef",
          avatarId: pl.avatarId || "",
          color: pl.color || "#f2b134",
          currentSkin: pl.currentSkin || { skinId: "chonk_chef" },
          team: pl.team || "a",
        };
      });
      var matchType = p.matchType || modeToMatchType(p.roomMode || "classic");
      if (matchType === "coop") matchType = "classic";
      var stageMode = matchType === "pve" ? "pve" : matchType;
      var stage = p.stage || defaultStageForMode(stageMode);
      var cfg = stageConfig(stage, stageMode);
      if (!cfg) {
        stage = defaultStageForMode(stageMode);
        cfg = stageConfig(stage, stageMode) || stageConfig(stage, "classic");
      }
      var def = MATCH_TYPES[matchType] || MATCH_TYPES.classic;
      var slots = (cfg && cfg.customerSlots) || 4;
      var lives = matchType === "pve" ? def.livesForIncomplete || 3 : 0;
      var state = {
        roomCode: p.roomCode || "",
        matchType: matchType,
        roomMode: p.roomMode || "classic",
        stage: stage,
        stageCfg: cfg,
        matchTypeDef: def,
        customerSlots: slots,
        players: players,
        presences: {},
        sessionToUser: {},
        scores: {
          a: emptyScore(players),
          b: emptyScore(players),
        },
        teamState: {
          a: null,
          b: null,
        },
        phase: "waiting",
        firstJoinAt: 0,
        matchStartTime: 0,
        startDeadline: 0,
        ready: {},
        clientReadySent: false,
        lives: lives,
        livesToLose: lives,
        orderSeq: 0,
        ended: false,
        endAt: 0,
        winner: "",
        lobbyMatchId: p.lobbyMatchId || "",
        hostId: p.hostId || "",
        _nk: nk,
        _logger: logger,
      };
      // Initialise per-player score rows using the lobby's known session IDs.
      Object.keys(players).forEach(function (userId) {
        var p = players[userId];
        state.scores[p.team || "a"].orders.perPlayer[p.sessionId] = {
          cashAwarded: 0,
          tipsAwarded: 0,
          itemsServed: {},
          itemsWasted: {},
          ordersCompleted: 0,
        };
      });
      return {
        state: state,
        tickRate: 15,
        label: JSON.stringify({ room: state.roomCode, mode: state.matchType, stage: stage }),
      };
}

function gameMatchJoinAttempt(ctx, logger, nk, dispatcher, tick, state, presence, metadata) {
      if (state.ended) return { state: state, accept: false, rejectMessage: "Match ended" };
      var p = state.players[presence.userId];
      if (!p) {
        // A player who joined the lobby after the match started is announced
        // with a signal first, but the join can beat that signal over the
        // network. The room has already authorised them, so add them here.
        if (state.phase === "waiting") {
          return { state: state, accept: false, rejectMessage: "Not in this room" };
        }
        var lateMeta = parseJson(metadata, {});
        p = state.players[presence.userId] = {
          userId: presence.userId,
          sessionId: presence.sessionId,
          displayName: lateMeta.displayName || presence.username || "Chef",
          avatarId: lateMeta.avatarId || "",
          color: lateMeta.accentColour || "#f2b134",
          currentSkin: lateMeta.currentSkin || { skinId: "chonk_chef" },
          team: lateTeamForGame(state),
        };
        ensurePlayerScore(state, p, "");
      }
      state.joinMeta = state.joinMeta || {};
      state.joinMeta[presence.sessionId] = parseJson(metadata, {});
      return { state: state, accept: true, rejectMessage: "" };
}

function gameMatchJoin(ctx, logger, nk, dispatcher, tick, state, presences) {
      for (var i = 0; i < presences.length; i++) {
        var presence = presences[i];
        state.presences[presence.sessionId] = { presence: presence, userId: presence.userId };
        state.sessionToUser[presence.sessionId] = presence.userId;
        var p = state.players[presence.userId];
        if (p) {
          var previousSessionId = p.sessionId;
          p.sessionId = presence.sessionId;
          ensurePlayerScore(state, p, previousSessionId);
          state.ready[presence.userId] = false;
        }
        if (!state.firstJoinAt) state.firstJoinAt = nowSec();
      }
      state._dispatcher = dispatcher;
      if (state.phase !== "waiting") {
        for (var j = 0; j < presences.length; j++) {
          sendStartTo(state, dispatcher, presences[j]);
        }
      }
      return { state: state };
}

function gameMatchLeave(ctx, logger, nk, dispatcher, tick, state, presences) {
      for (var i = 0; i < presences.length; i++) {
        var presence = presences[i];
        delete state.presences[presence.sessionId];
        delete state.sessionToUser[presence.sessionId];
        delete state.ready[presence.userId];
      }
      dispatcher.broadcastMessage(
        OP.UpdateTeams,
        JSON.stringify({
          teams: teamsBySession(state, true),
          spectators: {},
          teamGameModes: { a: state.stage, b: state.stage },
        }),
        null,
        null,
        true,
      );
      if (Object.keys(state.presences).length === 0) return null;
      return { state: state };
}

function gameMatchLoop(ctx, logger, nk, dispatcher, tick, state, messages) {
      state._dispatcher = dispatcher;
      state._nk = nk;
      state._logger = logger;
      var now = nowSec();

      for (var i = 0; i < messages.length; i++) {
        var msg = messages[i];
        var sender = msg.sender;
        var p = state.players[sender.userId];
        if (!p) continue;
        var op = msg.opCode;
        var raw = readData(nk, msg.data);
        var data = parseJson(raw, {});

        if (op === OP.ClientReady) {
          state.ready[sender.userId] = true;
          if (!state.clientReadySent && state.phase === "starting") {
            var readyCount = Object.keys(state.players).filter(function (uid) {
              return state.ready[uid];
            }).length;
            if (readyCount >= Object.keys(state.players).length || now > state.startDeadline) {
              startPlaying(state, dispatcher);
            }
          }
        } else if (op === OP.ChefState) {
          // The client generates a random `uId` per action. The original server
          // stamps the authoritative chef id (socket session id) and wraps the
          // action as { uId, state } — the client's chef listeners look for
          // chef.uId === playerId and then read chef.state.
          var targets = Object.keys(state.presences).filter(function (sid) {
            return sid !== sender.sessionId;
          }).map(function (sid) {
            return state.presences[sid].presence;
          });
          if (targets.length) {
            var chefEvent = JSON.stringify({
              uId: sender.sessionId,
              state: data,
              clientId: data.clientId,
              timestamp: data.timestamp || 0,
            });
            dispatcher.broadcastMessage(op, chefEvent, targets, sender, false);
          }
        } else if (op === OP.OrdersUpdated) {
          handleOrderUpdate(state, dispatcher, p, data);
        } else if (op === OP.DiscardItems) {
          var team = p.team || "a";
          sendOrders(state, dispatcher, team, null);
          broadcastToTeam(state, dispatcher, team, op, raw, sender);
        } else if (op === OP.EquipItem) {
          var item = data.itemType || "none";
          p.equippedItem = item;
          var equipMap = {};
          equipMap[sender.sessionId] = item;
          dispatcher.broadcastMessage(OP.EquipItem, JSON.stringify(equipMap), null, null, true);
        } else if (op === OP.UpdateBuffs) {
          dispatcher.broadcastMessage(
            OP.UpdateBuffs,
            JSON.stringify({ buffs: [] }),
            [sender],
            null,
            true,
          );
        } else if (op === OP.KickBomb || op === OP.ExplodeBomb || op === OP.ExplodeBombUpdateCustomers) {
          broadcastToTeam(state, dispatcher, p.team || "a", op, raw, sender);
        } else if (op === OP.ReadyForFollowOn || op === OP.DebugAddClientBot) {
          // no-op
        }
      }

      if (state.phase === "waiting") {
        var expected = Object.keys(state.players).length;
        var joined = Object.keys(state.presences).length;
        if (joined >= expected || (state.firstJoinAt && now > state.firstJoinAt + 20)) {
          beginMatch(state, dispatcher);
        }
      } else if (state.phase === "starting") {
        var ready = Object.keys(state.players).filter(function (uid) {
          return state.ready[uid];
        }).length;
        var present = Object.keys(state.presences).length;
        if (!state.clientReadySent && ((present > 0 && ready >= present) || now > state.startDeadline)) {
          startPlaying(state, dispatcher);
        }
      } else if (state.phase === "playing") {
        tickMatch(state, dispatcher, now);
      }

      if (
        state.ended &&
        !state.gameOverSent &&
        state.gameOverAt &&
        now >= state.gameOverAt
      ) {
        sendGameOver(state, dispatcher);
      }
      if (state.phase === "ended" && now > state.endAt) {
        if (!state.gameOverSent) sendGameOver(state, dispatcher);
        return null;
      }
      return { state: state };
}

function gameMatchTerminate(ctx, logger, nk, dispatcher, tick, state, graceSeconds) {
      logger.info("Game %s terminating", state.roomCode);
      return { state: state };
}

function gameMatchSignal(ctx, logger, nk, dispatcher, tick, state, data) {
      var signal = parseJson(data, {});
      if (signal.type === "end") {
        endGame(state, dispatcher);
      } else if (signal.type === "snapshot") {
        var snapshotTargets = null;
        if (signal.targetSessionId && state.presences[signal.targetSessionId]) {
          snapshotTargets = [state.presences[signal.targetSessionId].presence];
        }
        dispatcher.broadcastMessage(
          990,
          JSON.stringify(debugSnapshot(state)),
          snapshotTargets,
          null,
          true,
        );
      } else if (signal.type === "player_join" && signal.player && !state.ended) {
        var pl = signal.player;
        var existing = state.players[pl.userId];
        if (!existing) {
          existing = state.players[pl.userId] = {
            userId: pl.userId,
            sessionId: pl.sessionId || "",
            displayName: pl.displayName || "Chef",
            avatarId: pl.avatarId || "",
            color: pl.color || "#f2b134",
            currentSkin: pl.currentSkin || { skinId: "chonk_chef" },
            team: pl.team === "b" ? "b" : "a",
          };
        }
        ensurePlayerScore(state, existing, "");
        // Tell the new chef who is already in the kitchen immediately; the
        // full start payload is sent when their socket joins the match.
        dispatcher.broadcastMessage(
          OP.UpdateTeams,
          JSON.stringify({
            teams: teamsBySession(state, true),
            spectators: {},
            teamGameModes: { a: state.stage, b: state.stage },
          }),
          null,
          null,
          true,
        );
      }
      return { state: state, data: "" };
}

export var gameMatchHandler = {
  matchInit: gameMatchInit,
  matchJoinAttempt: gameMatchJoinAttempt,
  matchJoin: gameMatchJoin,
  matchLeave: gameMatchLeave,
  matchLoop: gameMatchLoop,
  matchTerminate: gameMatchTerminate,
  matchSignal: gameMatchSignal,
};

function broadcastToTeam(state, dispatcher, team, op, raw, sender) {
  var targets = Object.keys(state.presences).filter(function (sid) {
    var p = state.players[state.presences[sid].userId];
    return p && (p.team || "a") === team;
  }).map(function (sid) {
    return state.presences[sid].presence;
  });
  if (targets.length) dispatcher.broadcastMessage(op, raw, targets, sender || null, false);
}

function beginMatch(state, dispatcher) {
  state.phase = "starting";
  state.matchStartTime = nowSec() + 1;
  state.startDeadline = nowSec() + 60;
  var presences = Object.keys(state.presences).map(function (sid) {
    return state.presences[sid].presence;
  });
  presences.forEach(function (presence) {
    sendStartTo(state, dispatcher, presence);
  });
  dispatcher.broadcastMessage(
    OP.MatchStatus,
    JSON.stringify({ serverTime: nowSec(), matchStartTime: state.matchStartTime }),
    null,
    null,
    true,
  );
}

function startPlaying(state, dispatcher) {
  if (state.clientReadySent) return;
  state.clientReadySent = true;
  state.phase = "playing";
  state.matchStartTime = nowSec() + 0.5;
  var ts = {
    runner: makeWaveRunner(state.stageCfg, state.matchStartTime),
    orders: {},
    completed: {},
    expired: {},
    roundOrders: [],
  };
  state.teamState.a = ts;
  if (state.matchType !== "pve" && state.roomMode !== "coop") {
    state.teamState.b = {
      runner: state.matchType === "duel" ? null : makeWaveRunner(state.stageCfg, state.matchStartTime),
      orders: {},
      completed: {},
      expired: {},
      roundOrders: [],
    };
  }
  dispatcher.broadcastMessage(
    OP.ClientReady,
    JSON.stringify({ serverTime: nowSec(), matchStartTime: state.matchStartTime }),
    null,
    null,
    true,
  );
  state.matchEndTime = state.matchTypeDef.timeLimitSeconds
    ? state.matchStartTime + state.matchTypeDef.timeLimitSeconds
    : Infinity;
  sendScores(state, dispatcher);
}

function tickMatch(state, dispatcher, now) {
  if (state.ended) return;
  var expiredAny = false;
  // A client that was still loading its kitchen can miss the single
  // ClientReady broadcast. Re-send the authoritative start time so every
  // tab's HUD timer lines up, no matter when it finishes loading.
  if (
    state.clientReadySent &&
    state.matchStartTime &&
    now < state.matchStartTime + 90 &&
    now >= (state.lastReadyBroadcast || 0) + 5
  ) {
    state.lastReadyBroadcast = now;
    // The first MatchSetup can be lost while the client is still attaching its
    // match listener. Re-send both so a slow tab still learns the start time.
    dispatcher.broadcastMessage(
      OP.MatchSetup,
      JSON.stringify({
        followsMatch: false,
        serverTime: nowSec(),
        matchStartTime: state.matchStartTime,
        votingCloseTime: nowSec() - 1,
        votes: {},
      }),
      null,
      null,
      true,
    );
    dispatcher.broadcastMessage(
      OP.ClientReady,
      JSON.stringify({
        serverTime: nowSec(),
        matchStartTime: state.matchStartTime,
      }),
      null,
      null,
      true,
    );
  }
  var teams = ["a"];
  if (state.teamState.b) teams.push("b");

  teams.forEach(function (team) {
    var ts = state.teamState[team];
    if (!ts) return;
    var changes = {
      newOrders: {},
      updatedOrders: {},
      expiredOrders: {},
      completedOrders: {},
      roundState: null,
    };
    if (ts.runner) {
      var out = tickWaveRunner(ts.runner, now, state.stageCfg, function (entry) {
        if (state.matchType === "duel" && team === "a") {
          return spawnForTeamDuel(state, entry, changes);
        }
        return spawnForTeam(state, team, entry, changes);
      });
      if (out.roundEnded) {
        // Client expects roundOrders to render the between-round summary.
        changes.roundState = {
          roundNumber: out.endedRound || ts.runner.round,
          roundOrders: ts.roundOrders || [],
        };
        ts.roundOrders = [];
      } else if (out.roundStart) {
        changes.roundState = { roundNumber: ts.runner.round, roundStart: true };
      }
    }
    Object.keys(ts.orders).forEach(function (key) {
      var order = ts.orders[key];
      if (now >= order.expiryTime) {
        delete ts.orders[key];
        ts.expired[key] = order;
        if (ts.roundOrders) ts.roundOrders.push(order);
        state.scores[team].orders.totals.expired++;
        changes.expiredOrders[key] = order;
        if (state.matchType === "pve") {
          state.lives--;
        }
      }
    });
    sendOrders(state, dispatcher, team, changes);
    if (Object.keys(changes.expiredOrders).length > 0) expiredAny = true;
  });

  if (expiredAny) sendScores(state, dispatcher);

  if (state.matchType === "pve" && state.lives <= 0) {
    endGame(state, dispatcher);
    return;
  }
  if (state.matchEndTime && now >= state.matchEndTime) {
    endGame(state, dispatcher);
    return;
  }
}

function spawnForTeamDuel(state, entry, changes) {
  var ts = state.teamState.a;
  var slot = findFreeSlot(ts, ts.runner.slots);
  if (slot < 0) return false;
  var key = "o" + ++state.orderSeq;
  var order = makeOrderFromEntry(entry, ts.runner, state.stageCfg, nowSec(), key);
  order.slotIndex = slot;
  ts.orders[key] = order;
  state.scores.a.orders.totals.created++;
  changes.newOrders[key] = order;
  if (state.teamState.b) {
    var mirror = clone(order);
    mirror.pendingItems = JSON.parse(JSON.stringify(order.desiredItems || {}));
    mirror.lastUpdatedBy = "";
    mirror.contributingChefs = [];
    mirror.completedByTeam = "";
    mirror.finishedWithReward = null;
    mirror.reward = null;
    state.teamState.b.orders[key] = mirror;
    state.scores.b.orders.totals.created++;
    sendOrders(state, state._dispatcher, "b", { newOrders: { [key]: mirror } });
  }
  return true;
}

function handleOrderUpdate(state, dispatcher, p, data) {
  var team = p.team || "a";
  var ts = state.teamState[team];
  if (!ts) return;
  var order = ts.orders[data.orderKey];
  if (!order) {
    var other = state.matchType === "duel" && team === "b" ? state.teamState.a : null;
    if (other) order = other.orders[data.orderKey];
  }
  if (!order) return;
  var sessionId = p.sessionId;
  var items = data.items || {};
  var wildcard = order.bonusOrder && order.bonusOrder.wildcardValue;
  var changed = false;
  var rejected = {};
  if (wildcard) {
    // Wildcard customers accept any single item.
    var any = Object.keys(items).filter(function (k) { return items[k] > 0; })[0];
    if (any) {
      order.pendingItems[any] = (order.pendingItems[any] || 0) + 1;
      changed = true;
    }
  } else {
    Object.keys(items).forEach(function (item) {
      var remaining = order.pendingItems[item] || 0;
      var n = items[item] || 0;
      if (remaining > 0 && n > 0) {
        order.pendingItems[item] = Math.max(0, remaining - n);
        changed = true;
      } else {
        rejected[item] = n;
      }
    });
  }
  if (Object.keys(rejected).length > 0) {
    dispatcher.broadcastMessage(
      OP.RejectOrderItem,
      JSON.stringify({ uId: sessionId, items: rejected }),
      [state.presences[sessionId].presence],
      null,
      true,
    );
  }
  if (!changed) return;
  order.lastUpdatedBy = sessionId;
  if (order.contributingChefs.indexOf(sessionId) < 0) {
    order.contributingChefs.push(sessionId);
  }
  if (wildcard || sumCounts(order.pendingItems) === 0) {
    completeOrder(state, dispatcher, team, order, sessionId, data.cashBonus);
  } else {
    sendOrders(state, dispatcher, team, {
      updatedOrders: { [order.orderKey]: order },
    });
  }
}
