import { chromium } from "playwright";
import { randomUUID } from "node:crypto";

const BASE = process.env.BASE_URL || "http://localhost:8080";
const user = randomUUID();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const room = await fetch(BASE + "/api/rooms", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: user,
    displayName: "E2E Chef",
    avatarUrl: "",
    color: "#f2b134",
    mode: "coop",
    stage: "burgerTime",
    maxPlayers: 4,
  }),
}).then((r) => r.json());
if (!room.code) throw new Error("Could not create room: " + JSON.stringify(room));

await fetch(BASE + "/api/rooms/" + room.code + "/start", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ userId: user }),
});
const started = await fetch(BASE + "/api/rooms/" + room.code).then((r) => r.json());
if (!started.lobbyMatchId) throw new Error("No lobby match id");

const browser = await chromium.launch({
  headless: true,
  args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist", "--no-sandbox"],
});
const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
await context.addInitScript(
  ({ id, code, match }) => {
    sessionStorage.setItem(
      "chef.profile",
      JSON.stringify({ id, name: "E2E Chef", avatarUrl: "", color: "#f2b134" }),
    );
    sessionStorage.setItem("chef.room", code);
    sessionStorage.setItem("chef.match", match);
  },
  { id: user, code: room.code, match: started.lobbyMatchId },
);
const page = await context.newPage();
const errors = [];
let roundStarted = false;
let gameStarted = false;
page.on("pageerror", (e) => errors.push(e.stack || e.message));
page.on("console", (m) => {
  const text = m.text();
  if (text.includes("Round Started")) roundStarted = true;
  if (text === "Game started!") gameStarted = true;
  if (m.type() !== "error") return;
  if (/No background|Failed to download avatar|AudioContext/.test(text)) return;
  errors.push(text);
});

await page.goto(
  BASE + "/game/?room=" + room.code + "&match=" + encodeURIComponent(started.lobbyMatchId),
  { waitUntil: "load", timeout: 60000 },
);

const deadline = Date.now() + 90000;
while (!roundStarted && Date.now() < deadline) await sleep(250);
if (!roundStarted) {
  console.error("ERRORS", errors);
  throw new Error("Gameplay did not start (no Round Started log)");
}
await sleep(4000);

const scene = await page.evaluate(() => {
  const canvas = document.querySelector("canvas");
  let app = null;
  let versus = null;
  let gameScene = null;
  try {
    app = window.pc && pc.Application.getApplication();
    versus = app && app.root.findByName("Versus");
    gameScene = app && app.root.findByName("GameScene");
  } catch (err) {
    return { canvas: null, error: String(err) };
  }
  return {
    canvas: canvas ? { width: canvas.width, height: canvas.height } : null,
    versusEnabled: versus ? versus.enabled : null,
    hasGameScene: !!gameScene,
  };
});
await page.screenshot({ path: "tests/e2e-screenshot.png" });
await browser.close();

if (!scene.canvas || scene.canvas.width < 100 || scene.canvas.height < 100) {
  throw new Error("Canvas did not initialise");
}
if (!gameStarted) throw new Error("Kitchen scene never finished loading");
if (!scene.hasGameScene) throw new Error("Kitchen scene is not in the PlayCanvas hierarchy");
if (scene.versusEnabled !== false) {
  throw new Error("VS loading overlay is still covering the kitchen");
}
if (errors.length) {
  console.error(errors);
  throw new Error("Browser errors during e2e");
}
console.log("E2E OK", room.code, scene);
