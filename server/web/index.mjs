import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const WEB = path.join(ROOT, "web");
const SITE = path.join(ROOT, "site");
const UPLOADS = path.join(ROOT, "uploads");
const PORT = Number(process.env.PORT || 8080);
const NAKAMA_URL = process.env.NAKAMA_URL || "http://127.0.0.1:7350";
const NAKAMA_CLIENT_KEY = process.env.NAKAMA_CLIENT_KEY || "defaultkey";
const NAKAMA_HTTP_KEY = process.env.NAKAMA_HTTP_KEY || "chef_http_key";

await mkdir(UPLOADS, { recursive: true });

const app = express();
app.disable("x-powered-by");

// ---------------------------------------------------------------------------
// Room service (in-memory for the private server; restart = rooms reset)
// ---------------------------------------------------------------------------
const rooms = new Map();
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function newCode() {
  for (let attempt = 0; attempt < 20; attempt++) {
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
    }
    if (!rooms.has(code)) return code;
  }
  return String(Date.now()).slice(-6);
}

function publicRoom(room, viewerId) {
  return {
    code: room.code,
    hostId: room.hostId,
    mode: room.mode,
    stage: room.stage,
    maxPlayers: room.maxPlayers,
    status: room.status,
    lobbyMatchId: room.lobbyMatchId || "",
    matchId: room.matchId || "",
    createdAt: room.createdAt,
    players: room.players.map((p) => ({
      userId: p.userId,
      displayName: p.displayName,
      avatarUrl: p.avatarUrl || "",
      color: p.color || "#f2b134",
      ready: !!p.ready,
      isHost: p.userId === room.hostId,
    })),
    you: viewerId || "",
  };
}

function getRoomOr404(code) {
  const room = rooms.get(String(code || "").toUpperCase());
  return room || null;
}

function pruneRooms() {
  const cutoff = Date.now() - 3 * 60 * 60 * 1000;
  for (const [code, room] of rooms) {
    if (room.updatedAt < cutoff) rooms.delete(code);
  }
}
setInterval(pruneRooms, 10 * 60 * 1000).unref();

async function callNakamaRpc(id, payload) {
  const url = `${NAKAMA_URL}/v2/rpc/${encodeURIComponent(id)}?http_key=${encodeURIComponent(
    NAKAMA_HTTP_KEY,
  )}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Nakama's HTTP-key RPC endpoint expects the payload as a JSON string.
    body: JSON.stringify(JSON.stringify(payload || {})),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Nakama RPC ${id} failed: ${res.status} ${text}`);
  }
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  if (data && typeof data === "object" && "payload" in data) {
    data = typeof data.payload === "string" ? JSON.parse(data.payload) : data.payload;
  }
  return data;
}

const jsonBody = express.json({ limit: "128kb" });

app.post("/api/rooms", jsonBody, (req, res) => {
  const b = req.body || {};
  if (!b.userId) return res.status(400).json({ error: "userId required" });
  const mode = ["classic", "coop", "duel", "pve"].includes(b.mode) ? b.mode : "classic";
  const code = newCode();
  const now = Date.now();
  const room = {
    code,
    hostId: b.userId,
    mode,
    stage: String(b.stage || ""),
    maxPlayers: Math.max(1, Math.min(8, Number(b.maxPlayers) || 4)),
    status: "lobby",
    lobbyMatchId: "",
    matchId: "",
    createdAt: now,
    updatedAt: now,
    players: [
      {
        userId: b.userId,
        displayName: String(b.displayName || "Chef").slice(0, 18),
        avatarUrl: b.avatarUrl || "",
        color: b.color || "#f2b134",
        ready: false,
        joinedAt: now,
      },
    ],
  };
  rooms.set(code, room);
  res.json(publicRoom(room, b.userId));
});

app.post("/api/rooms/:code/join", jsonBody, (req, res) => {
  const room = getRoomOr404(req.params.code);
  if (!room) return res.status(404).json({ error: "Room not found" });
  const b = req.body || {};
  if (!b.userId) return res.status(400).json({ error: "userId required" });
  if (room.status !== "lobby") {
    const existing = room.players.find((p) => p.userId === b.userId);
    if (!existing) return res.status(409).json({ error: "Game already started" });
    return res.json(publicRoom(room, b.userId));
  }
  let p = room.players.find((x) => x.userId === b.userId);
  if (!p) {
    if (room.players.length >= room.maxPlayers) {
      return res.status(409).json({ error: "Room is full" });
    }
    p = {
      userId: b.userId,
      displayName: String(b.displayName || "Chef").slice(0, 18),
      avatarUrl: b.avatarUrl || "",
      color: b.color || "#f2b134",
      ready: false,
      joinedAt: Date.now(),
    };
    room.players.push(p);
  } else {
    p.displayName = String(b.displayName || p.displayName).slice(0, 18);
    p.avatarUrl = b.avatarUrl || p.avatarUrl;
    p.color = b.color || p.color;
  }
  room.updatedAt = Date.now();
  res.json(publicRoom(room, b.userId));
});

app.get("/api/rooms/:code", (req, res) => {
  const room = getRoomOr404(req.params.code);
  if (!room) return res.status(404).json({ error: "Room not found" });
  res.json(publicRoom(room, req.query.userId));
});

app.post("/api/rooms/:code/ready", jsonBody, (req, res) => {
  const room = getRoomOr404(req.params.code);
  if (!room) return res.status(404).json({ error: "Room not found" });
  const b = req.body || {};
  const p = room.players.find((x) => x.userId === b.userId);
  if (!p) return res.status(404).json({ error: "Not in room" });
  p.ready = !!b.ready;
  room.updatedAt = Date.now();
  res.json(publicRoom(room, b.userId));
});

app.post("/api/rooms/:code/options", jsonBody, (req, res) => {
  const room = getRoomOr404(req.params.code);
  if (!room) return res.status(404).json({ error: "Room not found" });
  const b = req.body || {};
  if (b.userId !== room.hostId) return res.status(403).json({ error: "Host only" });
  if (room.status !== "lobby") return res.status(409).json({ error: "Already started" });
  if (["classic", "coop", "duel", "pve"].includes(b.mode)) room.mode = b.mode;
  if (b.stage) room.stage = String(b.stage);
  if (b.maxPlayers) room.maxPlayers = Math.max(1, Math.min(8, Number(b.maxPlayers)));
  room.updatedAt = Date.now();
  res.json(publicRoom(room, b.userId));
});

app.post("/api/rooms/:code/start", jsonBody, async (req, res) => {
  const room = getRoomOr404(req.params.code);
  if (!room) return res.status(404).json({ error: "Room not found" });
  const b = req.body || {};
  if (b.userId !== room.hostId) return res.status(403).json({ error: "Host only" });
  if (room.status === "playing") return res.json(publicRoom(room, b.userId));
  if (room.players.length === 0) return res.status(409).json({ error: "No players" });
  try {
    const data = await callNakamaRpc("create_lobby_match", {
      roomCode: room.code,
      mode: room.mode,
      stage: room.stage,
      hostId: room.hostId,
      maxPlayers: room.maxPlayers,
      players: room.players.map((p) => ({
        userId: p.userId,
        displayName: p.displayName,
        avatarId: p.avatarUrl,
        color: p.color,
        currentSkin: { skinId: "chonk_chef" },
        ready: true,
      })),
    });
    if (!data || !data.matchId) throw new Error("Nakama did not return a match id");
    room.lobbyMatchId = data.matchId;
    room.matchId = data.matchId;
    room.status = "playing";
    room.updatedAt = Date.now();
    res.json(publicRoom(room, b.userId));
  } catch (err) {
    console.error("start room failed", err);
    res.status(502).json({ error: "Could not create lobby match" });
  }
});

app.post("/api/debug/end-room", jsonBody, async (req, res) => {
  const code = String(req.body?.roomCode || "").toUpperCase();
  if (!code) return res.status(400).json({ error: "roomCode required" });
  try {
    const data = await callNakamaRpc("debug_end_room", { roomCode: code });
    res.json(data);
  } catch (err) {
    res.status(502).json({ error: String(err.message || err) });
  }
});

app.post("/api/rooms/:code/leave", jsonBody, (req, res) => {
  const room = getRoomOr404(req.params.code);
  if (!room) return res.json({ ok: true });
  const b = req.body || {};
  room.players = room.players.filter((p) => p.userId !== b.userId);
  if (room.players.length === 0) {
    rooms.delete(room.code);
  } else if (room.hostId === b.userId) {
    room.hostId = room.players[0].userId;
  }
  room.updatedAt = Date.now();
  res.json({ ok: true });
});

// Proxy Nakama's HTTP + WebSocket endpoints so the game and the API share an origin.
const proxyOpts = {
  target: NAKAMA_URL,
  changeOrigin: false,
  ws: true,
  xfwd: true,
  pathFilter: (pathname) => /^\/(v2|v1|ws|healthcheck)(\/|$)/.test(pathname),
  logger: undefined,
};
app.use(createProxyMiddleware(proxyOpts));

app.get("/chef-config.js", (req, res) => {
  const hostHeader = req.headers.host || `localhost:${PORT}`;
  const [hostname, port] = hostHeader.split(":");
  const ssl = req.protocol === "https" || req.headers["x-forwarded-proto"] === "https";
  const cfg = {
    host: hostname,
    port: port || (ssl ? "443" : "80"),
    ssl,
    clientKey: NAKAMA_CLIENT_KEY,
  };
  res.type("application/javascript").send(
    `window.CHEF_NAKAMA = ${JSON.stringify(cfg)};\n`,
  );
});

app.post(
  "/api/avatar",
  express.json({ limit: "3mb" }),
  async (req, res) => {
    try {
      const { userId, dataUrl } = req.body || {};
      if (!userId || typeof userId !== "string") {
        return res.status(400).json({ error: "userId required" });
      }
      const m = String(dataUrl || "").match(
        /^data:image\/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=]+)$/,
      );
      if (!m) return res.status(400).json({ error: "invalid image data" });
      const ext = m[1] === "jpg" ? "jpeg" : m[1];
      const buf = Buffer.from(m[2], "base64");
      if (buf.length > 1_500_000) {
        return res.status(413).json({ error: "avatar too large" });
      }
      const safeUser = userId.replace(/[^A-Za-z0-9_-]/g, "").slice(0, 80);
      const hash = createHash("sha256")
        .update(safeUser)
        .update(buf)
        .digest("hex")
        .slice(0, 24);
      const file = `${hash}.${ext}`;
      await writeFile(path.join(UPLOADS, file), buf);
      res.json({ url: `/avatars/${file}` });
    } catch (err) {
      console.error("avatar upload failed", err);
      res.status(500).json({ error: "upload failed" });
    }
  },
);

app.use("/avatars", express.static(UPLOADS, { maxAge: "1h" }));
app.use("/cdnfonts", express.static(path.join(SITE, "cdnfonts")));
app.use("/game", express.static(SITE, { extensions: ["html"] }));
app.use(express.static(WEB, { extensions: ["html"] }));

// SPA fallback for /room/:code and /.
app.get(/^\/(room\/[A-Za-z0-9]+\/?)?$/, async (req, res) => {
  res.sendFile(path.join(WEB, "index.html"));
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Chef Showdown web server on http://0.0.0.0:${PORT}`);
  console.log(`  Nakama proxy: ${NAKAMA_URL}`);
  console.log(`  game:         /game/`);
  console.log(`  rooms:        /`);
});
