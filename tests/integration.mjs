import { Client } from "@heroiclabs/nakama-js";
import { randomUUID } from "node:crypto";

const HOST = process.env.NAKAMA_HOST || "127.0.0.1";
const PORT = process.env.NAKAMA_PORT || "7350";
const KEY = process.env.NAKAMA_KEY || "defaultkey";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const failures = [];
function check(cond, message) {
  if (cond) {
    console.log("  ok -", message);
    return true;
  }
  failures.push(message);
  console.error("  FAIL -", message);
  return false;
}

function dataOf(md) {
  if (typeof md.data === "string") return md.data;
  try {
    return new TextDecoder().decode(md.data);
  } catch {
    return "";
  }
}
function parse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

async function waitFor(fn, timeoutMs, label) {
  const deadline = Date.now() + timeoutMs;
  let last;
  while (Date.now() < deadline) {
    try {
      last = fn();
      if (last) return last;
    } catch (err) {
      last = err;
    }
    await sleep(150);
  }
  throw new Error(
    `Timed out waiting for ${label}: ${last instanceof Error ? last.message : JSON.stringify(last)}`,
  );
}

async function makeBot(name) {
  const id = randomUUID();
  const client = new Client(KEY, HOST, PORT, false);
  const session = await client.authenticateCustom(
    id,
    true,
    `${name}-${randomUUID().slice(0, 8)}`,
  );
  const socket = client.createSocket(false, false);
  await socket.connect(session, true);
  const state = {
    name,
    id,
    userId: session.user_id,
    client,
    session,
    socket,
    lobby: null,
    gameId: "",
    sessionId: "",
    team: "",
    orders: [],
    completed: [],
    expired: [],
    rejects: [],
    scores: [],
    snapshots: [],
    gameOver: null,
    start: null,
    phase: "",
  };
  socket.onmatchdata = (md) => {
    const op = md.op_code;
    const d = parse(dataOf(md));
    if (op === 200) {
      for (const ch of Object.values(d.gameChannels || {})) {
        state.phase = ch.phase;
        if (ch.currentGame?.match?.matchId) state.gameId = ch.currentGame.match.matchId;
      }
    } else if (op === 1) {
      state.start = d;
      const teams = d.teams || {};
      if ((teams.a || {})[state.sessionId]) state.team = "a";
      else if ((teams.b || {})[state.sessionId]) state.team = "b";
    } else if (op === 107) {
      state.orders.push(...Object.values(d.orders?.newOrders || {}));
      state.completed.push(...Object.values(d.orders?.completedOrders || {}));
      state.expired.push(...Object.values(d.orders?.expiredOrders || {}));
    } else if (op === 103) {
      state.scores.push(d);
    } else if (op === 110) {
      state.rejects.push(d);
    } else if (op === 990) {
      state.snapshots.push(d);
    } else if (op === 104) {
      state.gameOver = d;
    }
  };
  return state;
}

async function createLobby(mode, stage, bots) {
  const rpc = await bots[0].client.rpc(
    bots[0].session,
    "create_lobby_match",
    JSON.stringify({
      roomCode: "TEST" + Math.random().toString(36).slice(2, 6).toUpperCase(),
      mode,
      stage,
      hostId: bots[0].userId,
      maxPlayers: 8,
      players: bots.map((b) => ({
        userId: b.userId,
        displayName: b.name,
        avatarId: "",
        color: "#f2b134",
        currentSkin: { skinId: "chonk_chef" },
        ready: true,
      })),
    }),
  );
  const payload = typeof rpc.payload === "string" ? JSON.parse(rpc.payload) : rpc.payload;
  return payload.matchId;
}

async function joinGame(bots, lobbyId) {
  for (const b of bots) {
    await b.socket.joinMatch(lobbyId);
    b.lobby = lobbyId;
  }
  await waitFor(() => bots.every((b) => b.gameId), 30000, "game match id");
  const gameId = bots[0].gameId;
  for (const b of bots) {
    const joined = await b.socket.joinMatch(gameId);
    b.sessionId = joined.self.session_id;
  }
  await waitFor(() => bots.every((b) => b.start), 15000, "StartMatch");
  for (const b of bots) {
    await b.socket.sendMatchState(gameId, 4, "{}");
  }
  return gameId;
}

async function snapshot(bots, gameId, label) {
  bots.forEach((b) => (b.snapshots.length = 0));
  await bots[0].client.rpc(
    bots[0].session,
    "debug_signal_match",
    JSON.stringify({
      matchId: gameId,
      signal: { type: "snapshot", targetSessionId: bots[0].sessionId },
    }),
  );
  const snap = await waitFor(() => bots[0].snapshots[0], 8000, label);
  return snap;
}

async function endGame(bots, gameId) {
  await bots[0].client.rpc(
    bots[0].session,
    "debug_signal_match",
    JSON.stringify({ matchId: gameId, signal: { type: "end" } }),
  );
  await waitFor(() => bots.every((b) => b.gameOver), 12000, "GameOver");
  return bots[0].gameOver;
}

async function closeBots(bots, lobbyId, gameId) {
  for (const b of bots) {
    try {
      await b.socket.leaveMatch(gameId);
    } catch {}
    try {
      await b.socket.leaveMatch(lobbyId);
    } catch {}
    try {
      b.socket.disconnect(true);
    } catch {}
  }
}

async function runCoop() {
  console.log("\n=== co-op: shared orders, rejection, idempotent completion ===");
  const bots = [await makeBot("CoopA"), await makeBot("CoopB")];
  const lobbyId = await createLobby("coop", "burgerTime", bots);
  const gameId = await joinGame(bots, lobbyId);

  const order = await waitFor(() => bots[0].orders[0], 15000, "co-op order");
  const snap = await snapshot(bots, gameId, "co-op snapshot");
  check(snap.roomMode === "coop", "snapshot records co-op room mode");
  check(snap.matchType === "classic", "co-op runs the classic match type");
  check(snap.players.length === 2, "two players in the authoritative match");
  check(snap.players.every((p) => p.team === "a"), "co-op players are all on team a");
  check(snap.presenceCount === 2, "both players have presences");
  check(snap.teams.a.orders.length >= 1, "orders are active");
  check(snap.lives === 0, "co-op has no lives");
  check(snap.matchEndTime > snap.matchStartTime, "co-op has a 99s match end time");

  // A wrong ingredient must be rejected and must not advance the order.
  await bots[0].socket.sendMatchState(
    gameId,
    107,
    JSON.stringify({
      uId: bots[0].sessionId,
      orderKey: order.orderKey,
      items: { __not_an_ingredient__: 1 },
    }),
  );
  const rejected = await waitFor(() => bots[0].rejects[0], 6000, "item rejection");
  check(!!rejected.items.__not_an_ingredient__, "server rejected an ingredient the order does not want");

  const before = (await snapshot(bots, gameId, "pre-serve snapshot")).scores.a.cash;
  const items = order.pendingItems || order.desiredItems;
  await bots[0].socket.sendMatchState(
    gameId,
    107,
    JSON.stringify({ uId: bots[0].sessionId, orderKey: order.orderKey, items, cashBonus: 0 }),
  );
  await waitFor(
    () => {
      const last = bots[0].scores[bots[0].scores.length - 1];
      return last && last.scores.a.cash > before;
    },
    6000,
    "score update after serving",
  );
  let afterSnap = await snapshot(bots, gameId, "post-serve snapshot");
  check(afterSnap.scores.a.cash > before, `serving awarded cash (${before} -> ${afterSnap.scores.a.cash})`);
  check(afterSnap.teams.a.completed >= 1, "order counted as completed");
  const servedCash = afterSnap.scores.a.cash;

  // The same order from the other player must not award cash twice.
  await bots[1].socket.sendMatchState(
    gameId,
    107,
    JSON.stringify({ uId: bots[1].sessionId, orderKey: order.orderKey, items, cashBonus: 0 }),
  );
  await sleep(1200);
  afterSnap = await snapshot(bots, gameId, "duplicate-serve snapshot");
  check(
    afterSnap.scores.a.cash === servedCash,
    "duplicate completion by a teammate does not double-count the order",
  );
  const perPlayer = afterSnap.scores.a.orders.perPlayer;
  check(
    perPlayer[bots[0].sessionId] && perPlayer[bots[0].sessionId].cashAwarded > 0,
    "serving chef gets the per-player cash stat",
  );

  const over = await endGame(bots, gameId);
  check(over.status === "FINISHED", "GameOver status is FINISHED");
  check(over.winner === "a", "co-op winner is team a");
  check(over.updatedUserInfo && over.updatedUserInfo.userDoc, "GameOver contains updated user info");
  await closeBots(bots, lobbyId, gameId);
}

async function runClassic() {
  console.log("\n=== classic: two teams with separate order streams ===");
  const bots = [await makeBot("ClassicA"), await makeBot("ClassicB")];
  const lobbyId = await createLobby("classic", "burgerTime", bots);
  const gameId = await joinGame(bots, lobbyId);

  const snap = await snapshot(bots, gameId, "classic snapshot");
  const teams = new Set(snap.players.map((p) => p.team));
  check(teams.has("a") && teams.has("b"), "classic splits players across both teams");
  const orderA = await waitFor(() => bots[0].orders[0], 15000, "team a order");
  const orderB = await waitFor(() => bots[1].orders[0], 15000, "team b order");
  check(orderA.orderKey !== orderB.orderKey, "teams receive different orders");

  for (const [bot, order] of [
    [bots[0], orderA],
    [bots[1], orderB],
  ]) {
    await bot.socket.sendMatchState(
      gameId,
      107,
      JSON.stringify({
        uId: bot.sessionId,
        orderKey: order.orderKey,
        items: order.pendingItems || order.desiredItems,
      }),
    );
  }
  await waitFor(
    () => {
      const last = bots[0].scores[bots[0].scores.length - 1];
      return last && last.scores.a.cash > 0 && last.scores.b.cash > 0;
    },
    6000,
    "classic scores",
  );
  const scored = await snapshot(bots, gameId, "classic scored snapshot");
  check(scored.scores.a.cash > 0, "team a scored");
  check(scored.scores.b.cash > 0, "team b scored");
  check(
    scored.scores.a.orders.perPlayer[bots[0].sessionId].cashAwarded > 0,
    "team a per-player stat is attributed to the serving session",
  );

  const over = await endGame(bots, gameId);
  check(over.winner === "a" || over.winner === "b", "classic declares a winning team");
  await closeBots(bots, lobbyId, gameId);
}

async function runDuel() {
  console.log("\n=== duel: shared mirrored orders and stealing ===");
  const bots = [await makeBot("DuelA"), await makeBot("DuelB")];
  const lobbyId = await createLobby("duel", "burgerTime", bots);
  const gameId = await joinGame(bots, lobbyId);

  const snap = await snapshot(bots, gameId, "duel snapshot");
  check(snap.matchType === "duel", "duel match type");
  check(snap.roomMode === "duel", "duel room mode");
  const aTeam = snap.players.find((p) => p.userId === bots[0].userId);
  const bTeam = snap.players.find((p) => p.userId === bots[1].userId);
  console.log("  duel teams:", snap.players.map((p) => `${p.displayName}:${p.team}`).join(", "));
  check(!!aTeam && !!bTeam && aTeam.team !== bTeam.team, "duel puts players on opposite teams");

  const orderA = await waitFor(() => bots[0].orders[0], 15000, "duel team a order");
  await waitFor(() => bots[1].orders[0], 15000, "duel team b mirror order");
  check(
    bots[1].orders[0].orderKey === orderA.orderKey,
    "both teams see the same mirrored order key",
  );

  await bots[0].socket.sendMatchState(
    gameId,
    107,
    JSON.stringify({
      uId: bots[0].sessionId,
      orderKey: orderA.orderKey,
      items: orderA.pendingItems || orderA.desiredItems,
    }),
  );
  await waitFor(
    () => {
      const last = bots[0].scores[bots[0].scores.length - 1];
      return last && last.scores.a.cash > 0;
    },
    6000,
    "duel scores",
  );
  const stolen = await waitFor(
    () =>
      bots[1].completed.find(
        (o) => o.orderKey === orderA.orderKey && o.completedByTeam === "a",
      ),
    6000,
    "team b stolen order notification",
  );
  check(!!stolen, "team b is told its mirror order was stolen");
  check(stolen.finishedWithReward === null, "stolen order carries no reward for team b");

  const scored = await snapshot(bots, gameId, "duel scored snapshot");
  check(scored.scores.a.cash > 0, "stealing team scored");
  check(scored.scores.b.cash === 0, "stolen-from team did not score");
  check(scored.scores.b.orders.totals.expired >= 1, "stolen order counted as expired for team b");

  const over = await endGame(bots, gameId);
  check(over.winner === "a", "team a wins the duel after stealing");
  await closeBots(bots, lobbyId, gameId);
}

async function runPve() {
  console.log("\n=== pve: lives, endless timer, score ===");
  const bots = [await makeBot("PveA")];
  const lobbyId = await createLobby("pve", "burgerTimeScoreAttack", bots);
  const gameId = await joinGame(bots, lobbyId);

  const order = await waitFor(() => bots[0].orders[0], 15000, "pve order");
  const snap = await snapshot(bots, gameId, "pve snapshot");
  check(snap.matchType === "pve", "pve match type");
  check(snap.lives === 3, "pve starts with three lives");
  check(snap.matchEndTime === null, "pve has no time limit");
  check(snap.teams.a.orders.length >= 1, "pve has active orders");
  check(snap.teams.a.round >= 1, "pve waves expose a round number");

  await bots[0].socket.sendMatchState(
    gameId,
    107,
    JSON.stringify({
      uId: bots[0].sessionId,
      orderKey: order.orderKey,
      items: order.pendingItems || order.desiredItems,
    }),
  );
  await waitFor(
    () => {
      const last = bots[0].scores[bots[0].scores.length - 1];
      return last && last.scores.a.cash > 0;
    },
    6000,
    "pve score",
  );
  const scored = await snapshot(bots, gameId, "pve scored snapshot");
  check(scored.scores.a.cash > 0, "pve awards cash for a completed order");
  check(scored.lives === 3, "completing an order does not consume a life");

  const over = await endGame(bots, gameId);
  check(over.winner === "a", "pve reports the co-op team as winner");
  await closeBots(bots, lobbyId, gameId);
}

async function runPveStagePicker() {
  console.log("\n=== pve stage picker: gameMode payload selects the stage ===");
  const bot = await makeBot("Picker");
  const lobbyId = await createLobby("pve", "burgerTimeScoreAttack", [bot]);
  await bot.socket.joinMatch(lobbyId);
  await sleep(400);
  // The original Score Attack picker sends gameMode, not stage.
  await bot.socket.sendMatchState(
    lobbyId,
    400,
    JSON.stringify({ gameMode: "sushiModeScoreAttack" }),
  );
  await waitFor(() => bot.gameId, 20000, "picker game match id");
  const joined = await bot.socket.joinMatch(bot.gameId);
  bot.sessionId = joined.self.session_id;
  await waitFor(() => bot.start, 15000, "picker StartMatch");
  check(bot.start.gameMode === "sushiModeScoreAttack", "StartPVEMatchRequest gameMode selects Sushi");
  check(bot.start.livesToLose === 3, "selected Score Attack stage still has three lives");
  const over = await endGame([bot], bot.gameId);
  check(over.matchType === "pve", "selected stage runs as PvE");
  await closeBots([bot], lobbyId, bot.gameId);
}

async function runLateJoin() {
  console.log("\n=== late join: player joins after the match started ===");
  const first = await makeBot("LateHost");
  const lobbyId = await createLobby("coop", "burgerTime", [first]);
  const gameId = await joinGame([first], lobbyId);
  await waitFor(() => first.orders[0], 15000, "late-join first order");

  const late = await makeBot("LateGuest");
  // Join the already running lobby by id (no new lobby is created for it).
  await late.socket.joinMatch(lobbyId);
  await waitFor(() => late.gameId, 15000, "late joiner receives the running game match");
  const joined = await late.socket.joinMatch(late.gameId || gameId);
  late.sessionId = joined.self.session_id;
  await late.socket.sendMatchState(gameId, 4, "{}");

  let snap = null;
  const deadline = Date.now() + 12000;
  while (Date.now() < deadline) {
    try {
      snap = await snapshot([first], gameId, "late-join snapshot");
      if (snap && snap.players.some((p) => p.userId === late.userId)) break;
    } catch {}
    await sleep(400);
  }
  check(!!snap && snap.players.some((p) => p.userId === late.userId), "late joiner was added to the match");
  if (!snap) {
    await closeBots([first, late], lobbyId, gameId);
    return;
  }
  check(snap.presenceCount === 2, "late joiner has a live presence");
  check(snap.players.every((p) => p.team === "a"), "late joiner is placed on team a in co-op");

  const over = await endGame([first], gameId);
  check(over.status === "FINISHED", "late-join match can still end normally");
  await closeBots([first, late], lobbyId, gameId);
}

try {
  await runCoop();
  await runClassic();
  await runDuel();
  await runPve();
  await runPveStagePicker();
  await runLateJoin();
} catch (err) {
  console.error(err);
  failures.push(err.message);
}

if (failures.length) {
  console.error(`\n${failures.length} integration check(s) failed:`);
  for (const f of failures) console.error(" -", f);
  process.exit(1);
}
console.log("\nALL INTEGRATION CASES PASSED");
