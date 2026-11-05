import {
  allStagesForMode,
  defaultStageForMode,
  makeAvailableMode,
  modeToMatchType,
  stageConfig,
} from "./settings.js";
import { clone, nowMs, nowSec, parseJson, parsePayload } from "./util.js";

var OP = {
  PlayerJoinQueueRequest: 101,
  PlayerLeaveQueueRequest: 102,
  PlayerReadyToPlayRequest: 103,
  PlayerNotReadyToPlayRequest: 104,
  PlayerPickGameModeRequest: 105,
  PlayerJoinChannel: 106,
  PlayerLeaveChannel: 107,
  StateBroadcast: 200,
  ChannelUpdate: 201,
  MigrationBroadcast: 202,
  GuildPassBoosted: 203,
  AvailableUnlocksUpdated: 204,
  StartTutorialMatchRequest: 300,
  StartPVEMatchRequest: 400,
  PlayerChangeSkinRequest: 600,
  PlayerChangeSkinResponse: 601,
  Ping: 999,
};

function readData(nk, data) {
  if (typeof data === "string") return data;
  try {
    return nk.binaryToString(data);
  } catch (e) {
    return "";
  }
}

function phaseTime(state) {
  return Math.max(0, Math.ceil(state.phaseEndsAt - nowSec()));
}

function playerList(state) {
  var out = {};
  Object.keys(state.expected).forEach(function (userId) {
    var base = state.expected[userId];
    var p = state.presencesByUser[userId];
    var meta = p ? p.meta : null;
    out[userId] = {
      userId: userId,
      displayName: (meta && meta.displayName) || base.displayName || "Chef",
      avatarId: (meta && meta.avatarId) || base.avatarId || "",
      accentColour: (meta && meta.accentColour) || base.color || "#f2b134",
      currentSkin: (base.currentSkin && base.currentSkin) || { skinId: "chonk_chef" },
      joinedAt: (p && p.joinedAt) || base.joinedAt || nowMs(),
      winCount: 0,
      guildId: "",
      guildName: "",
      guildIcon: "",
    };
  });
  return out;
}

function teamUserIds(state) {
  var a = [];
  var b = [];
  Object.keys(state.ready).forEach(function (userId) {
    if (state.ready[userId]) {
      if (state.teams[userId] === "b") b.push(userId);
      else a.push(userId);
    }
  });
  a.sort();
  b.sort();
  return { teamA: a, teamB: b };
}

function buildState(state) {
  var players = playerList(state);
  var userIds = Object.keys(players);
  var members = {};
  userIds.forEach(function (userId) {
    members[userId] = { readyToPlay: !!state.ready[userId] };
  });
  var teams = teamUserIds(state);
  var currentGame = null;
  if (state.phase === "AwaitingModeSelection") {
    currentGame = {
      matchType: state.matchType,
      selectedGameMode: {
        modeName: state.selectedStage,
        stage: state.selectedStage,
        type: state.matchType,
        selectedBy: "server",
      },
      teams: {
        teamA: teams.teamA.map(function (id) {
          return { userId: id };
        }),
        teamB: teams.teamB.map(function (id) {
          return { userId: id };
        }),
      },
      match: null,
    };
  } else if (state.phase === "MatchInProgress" || state.phase === "PostMatch") {
    currentGame = state.currentGame
      ? clone(state.currentGame)
      : {
          matchType: state.matchType,
          selectedGameMode: {
            modeName: state.selectedStage,
            stage: state.selectedStage,
            type: state.matchType,
          },
          teams: { teamA: [], teamB: [] },
          match: null,
        };
  }
  var playerMatch = {};
  if (currentGame && currentGame.match && currentGame.match.matchId) {
    userIds.forEach(function (userId) {
      playerMatch[userId] = {
        match: { matchId: currentGame.match.matchId },
        selectedGameMode: {
          modeName: state.selectedStage,
          stage: state.selectedStage,
          type: state.matchType,
        },
        matchType: state.gameMatchType || state.matchType,
      };
    });
  }
  return {
    time: Math.floor(nowSec()),
    sessionCount: Object.keys(state.presences).length,
    players: players,
    gameChannels: {
      [state.channelKey]: {
        channelKey: state.channelKey,
        members: members,
        queue: [],
        phase: state.phase,
        phaseTimeOut: Math.floor(state.phaseEndsAt),
        maxPlayers: state.maxPlayers,
        currentGame: currentGame,
      },
    },
    availableMode: makeAvailableMode(state.matchType),
    playerMatch: playerMatch,
    forceChannel: state.channelKey,
  };
}

function broadcastState(state, dispatcher, presences) {
  var payload = JSON.stringify(buildState(state));
  dispatcher.broadcastMessage(OP.StateBroadcast, payload, presences || null, null, true);
}

function sendStateTo(state, dispatcher, presence) {
  broadcastState(state, dispatcher, [presence]);
}

function allPresences(state) {
  return Object.keys(state.presences).map(function (id) {
    return state.presences[id].presence;
  });
}

function assignTeams(state) {
  var present = Object.keys(state.presencesByUser).sort(function (a, b) {
    return (
      (state.presencesByUser[a].joinedAt || 0) -
      (state.presencesByUser[b].joinedAt || 0)
    );
  });
  var mode = state.roomMode;
  var teams = {};
  if (mode === "coop" || mode === "pve" || present.length === 1) {
    present.forEach(function (userId) {
      teams[userId] = "a";
    });
  } else if (mode === "duel") {
    present.forEach(function (userId, i) {
      teams[userId] = i % 2 === 0 ? "a" : "b";
    });
  } else {
    var aCount = 0;
    var bCount = 0;
    present.forEach(function (userId) {
      if (aCount <= bCount && aCount < 4) {
        teams[userId] = "a";
        aCount++;
      } else if (bCount < 4) {
        teams[userId] = "b";
        bCount++;
      } else {
        teams[userId] = "a";
      }
    });
  }
  return teams;
}

function startGame(ctx, logger, nk, dispatcher, state, stage) {
  var present = Object.keys(state.presencesByUser);
  if (present.length === 0) return;
  state.selectedStage = stage || state.selectedStage || defaultStageForMode(state.mode);
  if (
    state.selectedStage !== "tutorial" &&
    allStagesForMode(state.roomMode).indexOf(state.selectedStage) < 0
  ) {
    state.selectedStage = defaultStageForMode(state.roomMode);
  }
  state.teams = assignTeams(state);
  var players = present.map(function (userId) {
    var p = state.presencesByUser[userId];
    var meta = p.meta || {};
    var base = state.expected[userId] || {};
    return {
      userId: userId,
      sessionId: p.presence.sessionId,
      displayName: meta.displayName || base.displayName || p.presence.username || "Chef",
      avatarId: meta.avatarId || base.avatarId || "",
      color: meta.accentColour || base.color || "#f2b134",
      currentSkin: meta.currentSkin || base.currentSkin || { skinId: "chonk_chef" },
      team: state.teams[userId] || "a",
    };
  });
  // The lobby picker only knows two item types: versus (classic/coop/duel)
  // and score attack (pve). Duel is still a distinct gameplay type.
  var matchType =
    state.roomMode === "pve"
      ? "pve"
      : state.roomMode === "duel"
        ? "duel"
        : "classic";
  var gameMatchId = nk.matchCreate("chef_game", {
    roomCode: state.roomCode,
    roomMode: state.roomMode,
    matchType: matchType,
    stage: state.selectedStage,
    players: players,
    hostId: state.hostId,
    lobbyMatchId: ctx.matchId,
  });
  state.gameMatchType = matchType;
  state.currentGame = {
    matchType: matchType,
    selectedGameMode: {
      modeName: state.selectedStage,
      stage: state.selectedStage,
      type: matchType,
    },
    teams: {
      teamA: players
        .filter(function (p) {
          return p.team === "a";
        })
        .map(function (p) {
          return { userId: p.userId };
        }),
      teamB: players
        .filter(function (p) {
          return p.team === "b";
        })
        .map(function (p) {
          return { userId: p.userId };
        }),
    },
    match: { matchId: gameMatchId, outcome: null },
  };
  state.phase = "MatchInProgress";
  state.autoReady = false;
  state.phaseEndsAt = nowSec() + 60 * 10;
  logger.info("Lobby %s starting game %s (%s %s)", state.roomCode, gameMatchId, matchType, state.selectedStage);
  broadcastState(state, dispatcher, null);
}

function lateJoinTeam(state) {
  if (state.roomMode === "coop" || state.roomMode === "pve") return "a";
  var cur = state.currentGame && state.currentGame.teams;
  var aCount = cur ? cur.teamA.length : 0;
  var bCount = cur ? cur.teamB.length : 0;
  if (state.roomMode === "duel") return aCount <= bCount ? "a" : "b";
  if (aCount < 4 && aCount <= bCount) return "a";
  if (bCount < 4) return "b";
  return "a";
}

function addLateJoiner(state, nk, logger, presence, meta) {
  if (!state.currentGame || !state.currentGame.match) return;
  var matchId = state.currentGame.match.matchId;
  if (!matchId) return;
  var userId = presence.userId;
  var teams = state.currentGame.teams;
  if (
    teams.teamA.some(function (p) { return p.userId === userId; }) ||
    teams.teamB.some(function (p) { return p.userId === userId; })
  ) {
    return;
  }
  var team = lateJoinTeam(state);
  state.teams[userId] = team;
  (team === "b" ? teams.teamB : teams.teamA).push({ userId: userId });
  var base = state.expected[userId] || {};
  var player = {
    userId: userId,
    sessionId: presence.sessionId,
    displayName: (meta && meta.displayName) || base.displayName || presence.username || "Chef",
    avatarId: (meta && meta.avatarId) || base.avatarId || "",
    color: (meta && meta.accentColour) || base.color || "#f2b134",
    currentSkin: (base && base.currentSkin) || { skinId: "chonk_chef" },
    team: team,
  };
  try {
    nk.matchSignal(matchId, JSON.stringify({ type: "player_join", player: player }));
  } catch (e) {
    logger.warn("Could not add late joiner to game: %s", e.message);
  }
}

function maybeStartAfterVotes(state) {
  var ready = Object.keys(state.ready).filter(function (id) {
    return state.ready[id];
  });
  var voters = Object.keys(state.votes);
  if (voters.length >= ready.length && ready.length > 0) {
    var counts = {};
    voters.forEach(function (id) {
      var s = state.votes[id];
      counts[s] = (counts[s] || 0) + 1;
    });
    var best = state.selectedStage;
    var bestN = -1;
    Object.keys(counts).forEach(function (s) {
      if (counts[s] > bestN) {
        best = s;
        bestN = counts[s];
      }
    });
    state.selectedStage = best;
    state.phaseEndsAt = nowSec();
  }
}

function lobbyMatchInit(ctx, logger, nk, params) {
      var p = parsePayload(params);
      var roomCode = p.roomCode || "ROOM";
      var players = p.players || [];
      var expected = {};
      players.forEach(function (pl) {
        expected[pl.userId] = {
          userId: pl.userId,
          displayName: pl.displayName || "Chef",
          avatarId: pl.avatarId || "",
          color: pl.color || "#f2b134",
          currentSkin: pl.currentSkin || { skinId: "chonk_chef" },
          ready: pl.ready !== false,
          joinedAt: nowMs(),
        };
      });
      var mode = p.mode || p.roomMode || "classic";
      var matchType = mode === "pve" ? "pve" : "classic";
      var state = {
        roomCode: roomCode,
        channelKey: matchType === "pve" ? "scoreAttack" : "versus",
        hostId: p.hostId || "",
        mode: mode,
        roomMode: mode,
        matchType: matchType,
        maxPlayers: p.maxPlayers || 8,
        expected: expected,
        presences: {},
        presencesByUser: {},
        ready: {},
        votes: {},
        teams: {},
        phase: "AwaitingChallengers",
        phaseEndsAt: 0,
        selectedStage: p.stage || defaultStageForMode(mode),
        currentGame: null,
        autoReady: true,
        pinged: {},
        lastBroadcast: 0,
        createdAt: nowMs(),
      };
      return {
        state: state,
        tickRate: 5,
        label: JSON.stringify({ room: roomCode, mode: mode, stage: state.selectedStage }),
      };
}

function lobbyMatchJoinAttempt(ctx, logger, nk, dispatcher, tick, state, presence, metadata) {
      if (state.phase === "PostMatch" && Object.keys(state.presences).length >= state.maxPlayers) {
        return { state: state, accept: false, rejectMessage: "Room is full" };
      }
      if (Object.keys(state.presences).length >= state.maxPlayers) {
        return { state: state, accept: false, rejectMessage: "Room is full" };
      }
      state.expected[presence.userId] = state.expected[presence.userId] || {
        userId: presence.userId,
        displayName: presence.username || "Chef",
        avatarId: "",
        color: "#f2b134",
        currentSkin: { skinId: "chonk_chef" },
        joinedAt: nowMs(),
      };
      state.joinMeta = state.joinMeta || {};
      state.joinMeta[presence.sessionId] = parseJson(metadata, {});
      return { state: state, accept: true, rejectMessage: "" };
}

function lobbyMatchJoin(ctx, logger, nk, dispatcher, tick, state, presences) {
      for (var i = 0; i < presences.length; i++) {
        var presence = presences[i];
        var meta = (state.joinMeta && state.joinMeta[presence.sessionId]) || {};
        state.presences[presence.sessionId] = {
          presence: presence,
          userId: presence.userId,
          meta: meta,
          joinedAt: nowMs(),
        };
        state.presencesByUser[presence.userId] = {
          presence: presence,
          meta: meta,
          joinedAt: nowMs(),
        };
        if (state.ready[presence.userId] === undefined) {
          state.ready[presence.userId] = state.expected[presence.userId]
            ? state.expected[presence.userId].ready !== false
            : true;
        }
        if (!state.teams[presence.userId]) state.teams[presence.userId] = "a";
        if (state.phase === "MatchInProgress") {
          addLateJoiner(state, nk, logger, presence, meta);
        }
      }
      // The client registers its lobby match listener after the join response.
      // Send on the next tick(s) as well as immediately so it cannot be missed.
      state.sendSoon = nowMs() + 250;
      broadcastState(state, dispatcher, null);
      return { state: state };
}

function lobbyMatchLeave(ctx, logger, nk, dispatcher, tick, state, presences) {
      for (var i = 0; i < presences.length; i++) {
        var presence = presences[i];
        delete state.presences[presence.sessionId];
        delete state.presencesByUser[presence.userId];
        delete state.ready[presence.userId];
        delete state.votes[presence.userId];
        delete state.teams[presence.userId];
        if (state.joinMeta) delete state.joinMeta[presence.sessionId];
      }
      if (Object.keys(state.presences).length === 0 && state.phase !== "MatchInProgress") {
        return null;
      }
      broadcastState(state, dispatcher, null);
      return { state: state };
}

function lobbyMatchLoop(ctx, logger, nk, dispatcher, tick, state, messages) {
      var now = nowSec();
      if (state.phase === "AwaitingChallengers" && state.autoReady) {
        var presentIds = Object.keys(state.presencesByUser);
        var allReady = presentIds.length > 0 && presentIds.every(function (id) {
          return state.ready[id];
        });
        if (allReady) {
          state.phase = "AwaitingModeSelection";
          state.phaseEndsAt = now + 15;
          state.votes = {};
          state.selectedStage = state.selectedStage || defaultStageForMode(state.mode);
          broadcastState(state, dispatcher, null);
        }
      }
      for (var i = 0; i < messages.length; i++) {
        var msg = messages[i];
        var sender = msg.sender;
        var op = msg.opCode;
        var data = parseJson(readData(nk, msg.data), {});
        var user = state.presencesByUser[sender.userId];
        if (!user) continue;

        if (op === OP.Ping) {
          dispatcher.broadcastMessage(
            OP.Ping,
            JSON.stringify({ timestamp: data.timestamp || Date.now() }),
            [sender],
            null,
            true,
          );
          state.pinged[sender.userId] = true;
          sendStateTo(state, dispatcher, sender);
        } else if (op === OP.PlayerReadyToPlayRequest || op === OP.PlayerJoinQueueRequest) {
          state.ready[sender.userId] = true;
          if (state.phase === "AwaitingChallengers") {
            var readyCount = Object.keys(state.ready).filter(function (id) {
              return state.ready[id];
            }).length;
            var presentCount = Object.keys(state.presencesByUser).length;
            if (readyCount >= presentCount && presentCount > 0) {
              state.phase = "AwaitingModeSelection";
              state.phaseEndsAt = now + 20;
              state.votes = {};
              state.selectedStage = state.selectedStage || defaultStageForMode(state.mode);
            }
          }
          broadcastState(state, dispatcher, null);
        } else if (op === OP.PlayerNotReadyToPlayRequest || op === OP.PlayerLeaveQueueRequest) {
          state.ready[sender.userId] = false;
          if (state.phase === "AwaitingModeSelection") {
            state.phase = "AwaitingChallengers";
            state.phaseEndsAt = 0;
          }
          broadcastState(state, dispatcher, null);
        } else if (op === OP.PlayerPickGameModeRequest) {
          if (state.phase === "AwaitingModeSelection") {
            var stage = data.gameMode || data.stage || data.mode || "";
            if (typeof stage === "string" && allStagesForMode(state.mode).indexOf(stage) >= 0) {
              state.votes[sender.userId] = stage;
              maybeStartAfterVotes(state);
            }
          }
        } else if (op === OP.PlayerChangeSkinRequest) {
          var skinId = data.skinId || data.currentSkin || data.item || "chonk_chef";
          if (typeof skinId === "object" && skinId.skinId) skinId = skinId.skinId;
          user.meta.currentSkin = { skinId: skinId };
          user.meta.currentSkinId = skinId;
          if (state.expected[sender.userId]) {
            state.expected[sender.userId].currentSkin = { skinId: skinId };
          }
          dispatcher.broadcastMessage(
            OP.PlayerChangeSkinResponse,
            JSON.stringify({
              userId: sender.userId,
              currentSkin: { skinId: skinId },
            }),
            null,
            null,
            true,
          );
        } else if (op === OP.StartPVEMatchRequest) {
          // The original client sends { gameMode } from the Score Attack
          // stage picker and {} when starting the default stage.
          var requestedStage =
            (typeof data.stage === "string" && data.stage) ||
            (typeof data.gameMode === "string" && data.gameMode) ||
            "";
          var pveStage =
            requestedStage && allStagesForMode("pve").indexOf(requestedStage) >= 0
              ? requestedStage
              : defaultStageForMode("pve");
          state.roomMode = "pve";
          state.mode = "pve";
          state.matchType = "pve";
          if (state.phase !== "MatchInProgress" && state.phase !== "PostMatch") {
            startGame(ctx, logger, nk, dispatcher, state, pveStage);
          }
        } else if (op === OP.StartTutorialMatchRequest) {
          state.roomMode = "pve";
          state.mode = "pve";
          state.matchType = "pve";
          if (state.phase !== "MatchInProgress" && state.phase !== "PostMatch") {
            startGame(ctx, logger, nk, dispatcher, state, "tutorial");
          }
        }
      }

      if (state.phase === "AwaitingModeSelection" && now >= state.phaseEndsAt) {
        var ready = Object.keys(state.ready).filter(function (id) {
          return state.ready[id];
        });
        var voters = Object.keys(state.votes);
        if (voters.length > 0) {
          var counts = {};
          var best = state.selectedStage;
          var bestN = -1;
          voters.forEach(function (id) {
            counts[state.votes[id]] = (counts[state.votes[id]] || 0) + 1;
          });
          Object.keys(counts).forEach(function (s) {
            if (counts[s] > bestN) {
              best = s;
              bestN = counts[s];
            }
          });
          state.selectedStage = best;
        }
        startGame(ctx, logger, nk, dispatcher, state, state.selectedStage);
      }

      if (state.phase === "PostMatch" && now >= state.phaseEndsAt) {
        state.phase = "AwaitingChallengers";
        state.phaseEndsAt = 0;
        state.currentGame = null;
        state.votes = {};
        Object.keys(state.ready).forEach(function (id) {
          state.ready[id] = false;
        });
        broadcastState(state, dispatcher, null);
      }

      if (state.sendSoon && nowMs() >= state.sendSoon) {
        state.sendSoon = 0;
        broadcastState(state, dispatcher, null);
      }
      if (
        Object.keys(state.presences).length === 0 &&
        state.phase !== "MatchInProgress" &&
        nowMs() - state.createdAt > 120000
      ) {
        return null;
      }
      if (Object.keys(state.presences).length === 0) {
        if (!state.emptySince) state.emptySince = nowMs();
        if (nowMs() - state.emptySince > 60000) return null;
      } else {
        state.emptySince = 0;
      }
      return { state: state };
}

function lobbyMatchTerminate(ctx, logger, nk, dispatcher, tick, state, graceSeconds) {
      logger.info("Lobby %s terminating", state.roomCode);
      return { state: state };
}

function lobbyMatchSignal(ctx, logger, nk, dispatcher, tick, state, data) {
      var signal = parseJson(data, {});
      if (signal.type === "postmatch") {
        state.phase = "PostMatch";
        state.phaseEndsAt = nowSec() + 14;
        if (state.currentGame) {
          state.currentGame.match = state.currentGame.match || {};
          var scoreA = (signal.scores && signal.scores.a && signal.scores.a.cash) || 0;
          var scoreB = (signal.scores && signal.scores.b && signal.scores.b.cash) || 0;
          state.currentGame.match.outcome = {
            winningTeam: signal.winner === "b" ? "teamB" : "teamA",
            winner: signal.winner || "a",
            scores: signal.scores || {},
            teamAScore: scoreA,
            teamBScore: scoreB,
            winnerScore: Math.max(scoreA, scoreB),
            loserScore: Math.min(scoreA, scoreB),
          };
        }
        broadcastState(state, dispatcher, null);
      }
      return { state: state, data: JSON.stringify({ ok: true }) };
}

export var lobbyMatchHandler = {
  matchInit: lobbyMatchInit,
  matchJoinAttempt: lobbyMatchJoinAttempt,
  matchJoin: lobbyMatchJoin,
  matchLeave: lobbyMatchLeave,
  matchLoop: lobbyMatchLoop,
  matchTerminate: lobbyMatchTerminate,
  matchSignal: lobbyMatchSignal,
};
