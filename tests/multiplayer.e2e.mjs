/**
 * Real two-browser multiplayer/co-op test.
 *
 * Starts a room with two real PlayCanvas clients and one socket observer, then
 * verifies against the authoritative match that:
 *  - both browsers join the same game match and load the kitchen
 *  - chef state relayed from one browser reaches the other
 *  - server orders and scores reach both browsers
 *  - the observer sees the same authoritative state
 *  - game over reaches everyone
 *
 * Requires the Docker stack (or an equivalent Nakama + web server) to be up.
 */
import { chromium } from "playwright";
import { Client } from "@heroiclabs/nakama-js";
import { randomUUID } from "node:crypto";

const BASE = process.env.BASE_URL || "http://localhost:8080";
const NAKAMA_HOST = process.env.NAKAMA_HOST || "127.0.0.1";
const NAKAMA_PORT = process.env.NAKAMA_PORT || "7350";
const NAKAMA_KEY = process.env.NAKAMA_KEY || "defaultkey";
const MODE = process.env.MP_MODE || "coop";
const STAGE = process.env.MP_STAGE || "burgerTime";

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

async function waitFor(fn, timeoutMs, label) {
  const deadline = Date.now() + timeoutMs;
  let last;
  while (Date.now() < deadline) {
    try {
      last = await fn();
      if (last) return last;
    } catch (err) {
      last = err;
    }
    await sleep(200);
  }
  throw new Error(`Timed out waiting for ${label}: ${last instanceof Error ? last.message : JSON.stringify(last)}`);
}

function decodeMatchData(md) {
  try {
    const raw = typeof md.data === "string" ? atob(md.data) : new TextDecoder().decode(md.data);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function main() {
  const client = new Client(NAKAMA_KEY, NAKAMA_HOST, NAKAMA_PORT, false);
  const chefs = [];
  for (const name of ["Alpha", "Bravo", "Observer"]) {
    const id = randomUUID();
    const session = await client.authenticateCustom(
      id,
      true,
      `${name}-${randomUUID().slice(0, 8)}`,
    );
    chefs.push({ id, name, userId: session.user_id, session });
  }
  const [alpha, bravo, observer] = chefs;

  const room = await fetch(`${BASE}/api/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: alpha.userId,
      displayName: alpha.name,
      mode: MODE,
      stage: STAGE,
      maxPlayers: 4,
    }),
  }).then((r) => r.json());
  if (!room.code) throw new Error("Could not create room: " + JSON.stringify(room));
  for (const c of [bravo, observer]) {
    const res = await fetch(`${BASE}/api/rooms/${room.code}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: c.userId, displayName: c.name }),
    });
    if (!res.ok) throw new Error("Could not join room: " + (await res.text()));
  }
  const started = await fetch(`${BASE}/api/rooms/${room.code}/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: alpha.userId }),
  }).then((r) => r.json());
  if (!started.lobbyMatchId) throw new Error("No lobby match id");

  // Observer socket: joins the lobby, then the game match, and records all
  // authoritative messages.
  const obs = {
    gameId: "",
    sessionId: "",
    orders: [],
    snapshots: [],
    scores: [],
    gameOver: null,
    phases: [],
  };
  obs.socket = client.createSocket(false, false);
  await obs.socket.connect(observer.session, true);
  obs.socket.onmatchdata = (md) => {
    if (md.op_code === 200) {
      for (const ch of Object.values(decodeMatchData(md)?.gameChannels || {})) {
        if (ch.currentGame?.match?.matchId) obs.gameId = ch.currentGame.match.matchId;
        if (ch.phase && obs.phases[obs.phases.length - 1] !== ch.phase) {
          obs.phases.push(ch.phase);
        }
      }
    } else if (md.op_code === 1) {
      // StartMatch; the session id comes from the join result.
    } else if (md.op_code === 107) {
      const d = decodeMatchData(md);
      obs.orders.push(...Object.values(d?.orders?.newOrders || {}));
    } else if (md.op_code === 990) {
      obs.snapshots.push(decodeMatchData(md));
    } else if (md.op_code === 103) {
      obs.scores.push(decodeMatchData(md));
    } else if (md.op_code === 104) {
      obs.gameOver = decodeMatchData(md);
    }
  };
  await obs.socket.joinMatch(started.lobbyMatchId);
  obs.gameId = await waitFor(() => obs.gameId, 30000, "observer game match id");
  const joined = await obs.socket.joinMatch(obs.gameId);
  obs.sessionId = joined.self.session_id;

  const browser = await chromium.launch({
    headless: true,
    args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist", "--no-sandbox"],
  });

  async function openChef(c) {
    const context = await browser.newContext({ viewport: { width: 1024, height: 640 } });
    await context.addInitScript(
      ({ profile, code }) => {
        sessionStorage.setItem("chef.profile", JSON.stringify(profile));
        sessionStorage.setItem("chef.room", code);
        sessionStorage.removeItem("chef.token");
      },
      {
        profile: { id: c.id, name: c.name, avatarUrl: "", color: "#f2b134" },
        code: room.code,
      },
    );
    const page = await context.newPage();
    const info = { page, context, errors: [], roundStarted: false, ws: { sent: [], recv: [] } };
    const record = (dir, frame) => {
      try {
        const text = typeof frame === "string" ? frame : frame.payload;
        if (typeof text !== "string") return;
        const msg = JSON.parse(text);
        const md = msg.match_data || msg.match_data_send;
        if (!md || md.op_code === undefined) return;
        const op = Number(md.op_code);
        if (!Number.isFinite(op)) return;
        let data = null;
        try {
          data = JSON.parse(atob(md.data || ""));
        } catch {}
        info.ws[dir].push({ op, data, at: Date.now() });
      } catch {}
    };
    page.on("websocket", (ws) => {
      ws.on("framesent", (f) => record("sent", f));
      ws.on("framereceived", (f) => record("recv", f));
    });
    page.on("pageerror", (e) => info.errors.push(e.stack || e.message));
    page.on("console", (m) => {
      if (m.text().includes("Round Started")) info.roundStarted = true;
      if (m.type() === "error") info.errors.push(m.text());
    });
    await page.goto(`${BASE}/room/${room.code}`, { waitUntil: "load", timeout: 60000 });
    return info;
  }

  const A = await openChef(alpha);
  const B = await openChef(bravo);
  const pages = [A, B];

  await waitFor(() => A.roundStarted && B.roundStarted, 90000, "both kitchens to start");
  await sleep(3000);
  console.log("Kitchens started");

  async function snapshot(label) {
    obs.snapshots.length = 0;
    await client.rpc(
      alpha.session,
      "debug_signal_match",
      JSON.stringify({
        matchId: obs.gameId,
        signal: { type: "snapshot", targetSessionId: obs.sessionId },
      }),
    );
    return waitFor(() => obs.snapshots[0], 8000, label);
  }

  let snap = await snapshot("initial snapshot");
  check(snap.phase === "playing", `match is playing (phase ${snap.phase})`);
  const byId = Object.fromEntries(snap.players.map((p) => [p.userId, p]));
  console.log("  players:", snap.players.map((p) => `${p.displayName}/${p.team}`).join(", "));
  check(
    !!byId[alpha.userId] && !!byId[bravo.userId] && !!byId[observer.userId],
    "authoritative players include all three chefs",
  );
  check(snap.presenceCount === 3, `three presences are in the game match (${snap.presenceCount})`);
  check(snap.stage === STAGE, `stage is ${STAGE}`);
  check(snap.teams.a && snap.teams.a.orders.length > 0, "co-op has active orders");
  check(snap.players.every((p) => p.team === "a" || MODE !== "coop"), "co-op players share team a");
  check(byId[alpha.userId] && byId[alpha.userId].team === "a", "Alpha is on team a");

  const alphaSession = byId[alpha.userId]?.sessionId;
  const bravoSession = byId[bravo.userId]?.sessionId;
  check(alphaSession && bravoSession && alphaSession !== bravoSession, "players have distinct sessions");

  // Exercise real input to make the client publish chef state.
  await sleep(4000);
  for (const [x, y] of [[512, 430], [420, 470], [610, 470], [512, 520], [300, 560], [700, 560]]) {
    await A.page.mouse.click(x, y);
    await sleep(350);
  }
  await sleep(2000);
  const count = (msgs) => {
    const out = {};
    for (const m of msgs) out[m.op] = (out[m.op] || 0) + 1;
    return out;
  };
  const wsA = count(A.ws.sent);
  const wsB = count(B.ws.recv);
  console.log("  Alpha sent ops:", wsA, "Bravo recv ops:", wsB);
  const sentChefA = wsA[100] || 0;
  check(sentChefA > 0, `Alpha sent ChefState (${sentChefA})`);

  const relayed = await waitFor(
    () => B.ws.recv.some((m) => m.op === 100 && m.data && m.data.uId === alphaSession),
    8000,
    "Bravo to receive Alpha's chef state",
  );
  check(relayed, "Bravo received Alpha's chef state");

  // The observer should also have received relayed chef messages. Replay one
  // through the observer socket so both browsers receive another chef.
  const sample = (A.ws.sent.find((x) => x.op === 100) || {}).data || null;
  if (sample) {
    await obs.socket.sendMatchState(obs.gameId, 100, JSON.stringify(sample));
    const both = await Promise.all(
      pages.map((p) =>
        waitFor(
          () => p.ws.recv.some((m) => m.op === 100 && m.data && m.data.uId === obs.sessionId),
          8000,
          "browser to receive observer chef state",
        ).catch(() => false),
      ),
    );
    if (!both.every(Boolean)) {
      const seen = B.ws.recv.filter((m) => m.op === 100).map((m) => m.data && m.data.uId);
      console.error("  relay diagnostic: observer session", obs.sessionId, "Bravo saw uIds", seen);
    }
    check(both.every(Boolean), "both browsers received relayed chef state");
  }

  // Station contents (stove, counters, fryer) are not part of the original
  // protocol; they must be replayed from the acting chef's action. Exercise
  // both directions with real station code, not just message receipt.
  async function stationState(page, type) {
    return page.evaluate((type) => {
      const app = pc.Application.getApplication();
      const all = [];
      const walk = (e) => { all.push(e); for (const c of e.children) walk(c); };
      walk(app.root);
      const scripts = (e) => {
        try { return e.script && e.script.scripts ? Object.values(e.script.scripts).filter(Boolean) : []; }
        catch { return []; }
      };
      const stations = all
        .map((e) => scripts(e).find((s) => s.constructor.name === type))
        .filter((s) => s && s.entity.enabled);
      const station = stations[0];
      if (!station) return null;
      if (type === "TimedTransformStation") {
        return {
          slots: station.timedSlots.map((s) => ({
            occupied: !!s.isOccupied,
            done: !!s.timeComplete,
            item: s.newHoldable && s.newHoldable.type,
            children: s.entity.children.length,
          })),
        };
      }
      if (type === "ReserveStation") {
        return {
          slots: station.reserveSlots.map((s) => ({
            occupied: !!s.reserveEntity,
            holdable: s.holdable && s.holdable.type,
            children: s.entity.children.length,
          })),
        };
      }
      if (type === "ActivatedGeneratorStation") {
        return {
          slots: station.reserveSlots.map((s) => ({
            stock: s.ingredientsInStock,
            running: !!s.isRunning,
            item: s.newHoldable && s.newHoldable.type,
          })),
        };
      }
      return null;
    }, type);
  }

  async function useStation(page, type, mode) {
    return page.evaluate(async ({ type, mode }) => {
      const app = pc.Application.getApplication();
      const all = [];
      const walk = (e) => { all.push(e); for (const c of e.children) walk(c); };
      walk(app.root);
      const scripts = (e) => {
        try { return e.script && e.script.scripts ? Object.values(e.script.scripts).filter(Boolean) : []; }
        catch { return []; }
      };
      const kitchen = all.map((e) => scripts(e).find((s) => s.constructor.name === "KitchenController")).find(Boolean);
      if (!kitchen) return { error: "no kitchen" };
      const chef = kitchen.getLocalChef();
      const station = all
        .map((e) => scripts(e).find((s) => s.constructor.name === type))
        .find((s) => s && s.entity.enabled);
      if (!station) return { error: "no station " + type };
      chef.destroyCurrentHoldable && chef.destroyCurrentHoldable();
      let target = null;
      if (type === "TimedTransformStation") {
        target = station.timedSlots[0].entity;
        if (mode === "place") chef.instantiateHoldable({ type: "patty" });
      } else if (type === "ReserveStation") {
        const slot = station.reserveSlots[0];
        target = slot.hitbox || slot.entity;
        if (mode === "place") chef.instantiateHoldable({ type: "cooked_patty" });
      } else if (type === "ActivatedGeneratorStation") {
        target = station.reserveSlots[0].entity;
      }
      await station.runStation(chef, { x: 0, y: 0 }, target);
      return { ok: true };
    }, { type, mode });
  }

  await useStation(A.page, "TimedTransformStation", "place");
  const stoveRemote = await waitFor(
    async () => {
      const s = await stationState(B.page, "TimedTransformStation");
      return s && s.slots[0] && s.slots[0].occupied ? s : null;
    },
    15000,
    "Bravo to see Alpha's patty on the stove",
  );
  check(stoveRemote.slots[0].occupied, "remote stove shows the placed patty");
  check(stoveRemote.slots[0].item === "cooked_patty", `remote stove has the cooked patty (${stoveRemote.slots[0].item})`);
  await waitFor(
    async () => {
      const s = await stationState(A.page, "TimedTransformStation");
      return s && s.slots[0] && s.slots[0].occupied ? true : null;
    },
    10000,
    "Alpha stove action to finish locally",
  );

  await useStation(A.page, "ReserveStation", "place");
  const plateRemote = await waitFor(
    async () => {
      const s = await stationState(B.page, "ReserveStation");
      return s && s.slots[0] && s.slots[0].occupied ? s : null;
    },
    10000,
    "Bravo to see item on the counter",
  );
  check(plateRemote.slots[0].occupied, "remote counter shows the placed item");
  check(plateRemote.slots[0].holdable === "cooked_patty", `remote counter holds the correct item (${plateRemote.slots[0].holdable})`);
  check(plateRemote.slots[0].children > 0, "remote counter has a visible item entity");

  await useStation(B.page, "ReserveStation", "pickup");
  const plateCleared = await waitFor(
    async () => {
      const [a, b] = await Promise.all([
        stationState(A.page, "ReserveStation"),
        stationState(B.page, "ReserveStation"),
      ]);
      return a && b && !a.slots[0].occupied && !b.slots[0].occupied ? true : null;
    },
    10000,
    "both counters to clear after remote pickup",
  );
  check(plateCleared, "remote pickup clears the counter on both clients");

  await useStation(A.page, "ActivatedGeneratorStation", "activate");
  const fryerRemote = await waitFor(
    async () => {
      const s = await stationState(B.page, "ActivatedGeneratorStation");
      return s && s.slots[0] && s.slots[0].running ? s : null;
    },
    10000,
    "Bravo to see the fryer activate",
  );
  check(fryerRemote.slots[0].running, "remote fryer shows the activation");

  const fresh = await snapshot("fresh order snapshot");
  const order = (fresh.teams.a.orders || []).find(
    (o) => o.expiryTime > fresh.serverTime + 8 && Object.keys(o.pendingItems || {}).length,
  );
  if (!order) throw new Error("No order with enough patience to serve");
  const scoresBefore = obs.scores.length;
  await obs.socket.sendMatchState(
    obs.gameId,
    107,
    JSON.stringify({
      uId: obs.sessionId,
      orderKey: order.orderKey,
      items: order.pendingItems,
      cashBonus: 0,
    }),
  );
  await waitFor(() => obs.scores.length > scoresBefore, 8000, "authoritative score update");

  snap = await snapshot("post-completion snapshot");
  check(snap.scores.a.cash > 0, `team score increased after serving (${snap.scores.a.cash})`);
  check(snap.teams.a.completed >= 1, "order counted as completed");

  const scoresSeen = await Promise.all(
    pages.map((p) =>
      waitFor(
        () => {
          const msgs = p.ws.recv.filter((m) => m.op === 103);
          const last = msgs.length > 0 ? msgs[msgs.length - 1].data : null;
          return last && last.scores && last.scores.a.cash === snap.scores.a.cash
            ? last
            : null;
        },
        8000,
        "browser score update",
      ),
    ),
  );
  const browserScores = scoresSeen.map((s) => (s && s.scores ? s.scores.a.cash : -1));
  check(
    browserScores.every((cash) => cash === snap.scores.a.cash),
    `both browsers show the authoritative score (${browserScores.join(",")} vs ${snap.scores.a.cash})`,
  );

  const hud = await Promise.all(
    pages.map((p) =>
      p.page.evaluate(() => {
        const c = document.querySelector("canvas");
        return c ? { width: c.width, height: c.height } : null;
      }),
    ),
  );
  check(hud.every((c) => c && c.width >= 100 && c.height >= 100), "both canvases are initialised");

  await A.page.screenshot({ path: "tests/multiplayer-alpha.png" });
  await B.page.screenshot({ path: "tests/multiplayer-bravo.png" });

  check(A.errors.length === 0, `Alpha had no browser errors${A.errors.length ? ": " + A.errors[0] : ""}`);
  check(B.errors.length === 0, `Bravo had no browser errors${B.errors.length ? ": " + B.errors[0] : ""}`);

  await client.rpc(
    alpha.session,
    "debug_signal_match",
    JSON.stringify({ matchId: obs.gameId, signal: { type: "end" } }),
  );
  const over = await waitFor(
    () => {
      const res = pages.map((p) => p.ws.recv.some((m) => m.op === 104));
      return res.every(Boolean) ? res : null;
    },
    20000,
    "game over on both browsers",
  ).catch(() => {
    for (const [i, p] of pages.entries()) {
      const counts = {};
      for (const m of p.ws.recv) counts[m.op] = (counts[m.op] || 0) + 1;
      console.error(`  page ${i} recv ops:`, counts);
    }
    return [false, false];
  });
  check(over.every(Boolean), "both browsers received GameOver");
  await waitFor(() => obs.gameOver, 5000, "observer GameOver").catch(() => null);
  check(!!obs.gameOver, "observer received GameOver");

  const postmatch = await waitFor(
    () => obs.phases.includes("PostMatch"),
    10000,
    "lobby PostMatch state",
  ).catch(() => false);
  check(!!postmatch, `lobby entered PostMatch after GameOver (${obs.phases.join(" -> ")})`);
  await sleep(3000);
  check(A.errors.length === 0, `Alpha had no errors after post-match${A.errors.length ? ": " + A.errors[0] : ""}`);
  check(B.errors.length === 0, `Bravo had no errors after post-match${B.errors.length ? ": " + B.errors[0] : ""}`);

  await browser.close();
  try {
    await obs.socket.leaveMatch(obs.gameId);
    await obs.socket.leaveMatch(started.lobbyMatchId);
    obs.socket.disconnect(true);
  } catch {}

  if (failures.length) {
    console.error(`\n${failures.length} multiplayer check(s) failed:`);
    for (const f of failures) console.error(" -", f);
    process.exit(1);
  }
  console.log("\nMULTIPLAYER E2E OK", room.code);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
