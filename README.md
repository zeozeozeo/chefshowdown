# Chef Showdown — Private Kitchen

A preservation archive and private, self-hosted server for **Chef Showdown**, the Mojiworks Discord Activity that was shut down in 2025.

This repository contains:

- a complete archive of the original PlayCanvas client and assets (`game/`, `data/`)
- the patched, playable build (`site/`) generated from that archive
- a patcher that removes the Discord dependency and points the game at your server
- a Nakama server implementation for rooms, the original in-game lobby, and authoritative gameplay
- a web front-end for chef profiles, room codes, invite links, avatars and launching the game
- Docker packaging for one-command hosting

> **Preservation archive.** The original game assets and the patched build are included in this repository because the hosted game may be deleted. They remain the property of their respective rights holders; the repository grants no license to those assets. Please do not sell them. See [`NOTICE`](NOTICE) for details.

### Archive model

`game/`, `data/`, `site/` and the built Nakama module are committed so a fresh clone can still run if the original CDN disappears.

- `game/` — untouched original download
- `data/` — configuration extracted from the original build
- `site/` — patched playable client served by the web app
- `server/nakama/modules/index.js` — built Nakama runtime module

`npm run bootstrap` refreshes all of these from the original CDN and rebuilds the module. The committed copies are the archive fallback.

The committed archive is roughly **265 MB**. Cloning or pushing it will take longer than a code-only repository.

### Local defaults

The Docker stack ships development defaults (`defaultkey`, `chef_http_key`, `localdb`, console `admin` / `password`). They are suitable for local/LAN use only. Before exposing the server to the internet, change the Nakama socket/runtime keys, the console password and the Postgres password, and put the web server behind TLS.

---

## What works

- Original **Showdown Lobby** scene (mode/map picker, player panels, ready flow, lootbox UI, gold-pass-style unlocks, post-match flow)
- **Co-op** (one team, the Overcooked-like mode)
- **Classic** (two competing teams)
- **Duel** (1v1 with shared orders and order stealing)
- **Score Attack / PvE** (endless waves, three lives, score rewards)
- The exact original lobby stage set:
  - Versus: Burger Diner, Happy Hour, Sushi Street, Waffle Lodge (Hut Chocolate)
  - Score Attack: Burger Diner, Happy Hour, Sushi Street, Waffle Lodge, plus the two Extreme variants
- Bonus/archived kitchens that exist in the build data (Breakfast Club, Potion Party, Winter Wiener, Lunar New Year, Ice Cream Parlour, Dosa Dash, Double Diner, King of the Grill, Taco Stage) can still be selected from the web room. They launch directly because the shipped lobby never had picker art or gold-pass tiles for them.
- Multiple players, room codes, invite links
- Per-tab identities (open several tabs to test several players at once)
- Username + optional uploaded avatar
- Server-authoritative orders, waves, scoring, tips, stars, lives, stealing and game-over
- Persistent user docs, cash, inventory, lootbox tokens, skins and simple XP

Deliberately disabled: Discord auth/guilds/invites, IAP, gold-pass purchases, news promos, Sentry, and the hard-coded shutdown notice.

### Sync and timing notes

- Chef movement, held ingredients, cooking actions, served items, orders and scores are all relayed by the authoritative match. The client generates a per-action `uId`; the server replaces it with the sender's socket session id and wraps the action as `{ uId, state }`, which is what the original client's chef listeners expect.
- Station contents are **not** in the original wire protocol; only chefs are replicated. The patcher replays the station half of each remote action (`UseTransformStationAction`, `GrabIngredientAction`, `ActivateStationAction`, `BinItemAction`) against the matching station. That keeps stateful stations (stove slots, fryers, counters, ingredient generators) and their timers in sync instead of showing empty equipment and ghost pickups.
- Station identity is resolved from the action's `lookAt` target, so an action can only mutate the station the chef actually used. Replay runs with networking suppressed, preventing feedback loops.
- `StartMatch` also resolves the client's match-init promise, so the HUD timer starts even if `MatchSetup` is lost. `MatchSetup` and `ClientReady` are re-sent for the first 90 seconds of a match, so a tab that finishes loading late still gets the authoritative start time instead of sitting at 99 seconds.
- The original VS loading screen waits on animation events that can fail to fire in co-op/solo. The patcher bounds those waits so the kitchen can always take over, and also falls back to the authoritative start time if the one-shot `ClientReady` listener was missed while the socket listener was replaced. Without that fallback the VS overlay can cover a fully loaded kitchen forever.
- The lobby can process the same start update from two controller instances. The patcher joins each match id at most once per 20 seconds; a duplicate join used to replace the Nakama match listener and orphan the first `MatchState`.
- Game-match signalling now supports late joiners: the lobby announces a player who joins an in-progress match, and the game assigns them a team and score row before they connect.
- The client's original `OrderManager` can initialise before `GameManager` exists and then throw, leaving an empty kitchen. The patcher defers that initialisation until the game manager and match controller are available.
- Score Attack stage selection from the original picker sends `{ gameMode }`, not `{ stage }`; the lobby accepts both (and validates the stage against the released Score Attack set).
- Round-state broadcasts now end a round with its `roundOrders` summary and start the next round on the following tick, matching the client's single-branch `roundState` handling.

---

## Requirements

- Docker + Docker Compose
- Node.js 20+ (for the downloader/patcher and tests)
- ~1 GB free disk for the game + Docker images

If Docker gives you permission errors, add your user to the Docker group:

```bash
sudo usermod -aG docker $USER
newgrp docker
docker ps
```

---

## Quick start

```bash
# 1. Start Postgres + Nakama + the web server
#    (the archived game/site files are already in the repository)
docker compose up -d --build

# 2. Open the web app
xdg-open http://localhost:8080
```

The archive already contains the downloaded client, patched build and built Nakama module, so a fresh clone can run without contacting the original CDN.

To re-download the original build, reapply patches and rebuild the server module:

```bash
npm install
npm run bootstrap
```

`npm run bootstrap` downloads about **132 MB** into `game/` and writes the patched playable build to `site/`. It also extracts the original game rules to `data/game-settings.json`.

If you change the client patch or the game assets:

```bash
npm run patch
docker compose restart web
```

---

## Playing

1. Open `http://localhost:8080`.
2. Set a username, colour and optional avatar.
3. Create a room or join with a code/link.
4. The host launches the **original game lobby**.
5. In the lobby, the map/mode picker is the original one, with every released kitchen unlocked. The room mode selected on the web page sets the default rules:
   - **Co-op** — everyone on one team (recommended for the Overcooked experience)
   - **Classic** — two teams, separate order streams
   - **Duel** — 1v1 with shared orders and stealing
   - **Score Attack** — endless PvE with three lives
6. If nobody taps a stage, the original picker timer starts the default stage automatically.
7. Play. The server owns orders, scoring, tips, stars, lives and game-over.

Player positions, held ingredients, cooking actions, orders and scores are broadcast over the match socket. Open a second tab, join the same room, and you will see the other chef move and serve in real time.

### Testing with multiple tabs

Each tab gets its own `sessionStorage` identity. Open the site in several tabs, give each one a different name, and join the same room code. No special flags needed.

To reset a tab's identity, use the **new** button next to the player ID.

---

## Architecture

```
Browser ── / ──────────────► Node/Express web app (profiles, rooms, avatars)
   │                         │
   │                         ├─ /v2,/v1,/ws ─► Nakama (HTTP + WebSocket)
   │                         └─ /game       ─► patched PlayCanvas build
   │
   └─ Nakama WebSocket ─────► chef_lobby match ─► chef_game match
```

- **Nakama 3.29 + PostgreSQL** is the realtime and authoritative game server.
- **Chef lobby match** implements the original lobby protocol (`StateBroadcast`, ready, mode selection, ping, skin changes, post-match).
- **Chef game match** implements the original gameplay protocol (`StartMatch`, `ClientReady`, `ChefState`, `OrdersUpdated`, `UpdateScores`, `GameOver`, etc.).
- **Node web server** owns ephemeral room codes, the profile/room UI, avatar uploads, and proxies Nakama on the same origin so there is no CORS and no separate Nakama URL for players.
- **Rooms are in memory** on the web server. Restarting the web container clears room codes; user docs and inventory live in Nakama/Postgres and survive.

### Directory layout

```
game/                 original downloaded build (do not edit)
site/                 patched playable build
data/                 extracted client config + game rules + download manifest
web/                  profile/room UI
server/web/           Node static + room API + Nakama proxy
server/nakama/src/    TypeScript/JS runtime source
server/nakama/modules bundled Nakama module (generated)
scripts/              download, patch, build-server
tests/                rules, integration, e2e
uploads/              uploaded avatars
```

---

## Configuration

The web server reads:

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `8080` | Public web port |
| `NAKAMA_URL` | `http://127.0.0.1:7350` | Internal Nakama URL |
| `NAKAMA_CLIENT_KEY` | `defaultkey` | Public Nakama client key |
| `NAKAMA_HTTP_KEY` | `chef_http_key` | Server-to-server RPC key |

In Docker Compose these are set in `docker-compose.yml`. Change the keys in both `server/nakama/nakama.yml` and `docker-compose.yml` before exposing the server publicly.

The game client gets its Nakama config from `/chef-config.js`, which the Node server generates from the request host. That means the same build works on `localhost`, a LAN IP, or a reverse-proxied domain with no rebuild.

---

## Tests

```bash
npm test                    # pure wave/rule/reward/data-integrity tests for every stage
npm run test:integration    # Nakama bot clients: co-op, classic, duel, PvE, late join, stealing, rejection, scores, game over
npm run test:e2e            # Playwright single-browser smoke: canvas, kitchen scene, VS overlay removed, no errors
npm run test:multiplayer    # Playwright two-browser co-op: relay, orders, scores, GameOver
```

The integration test creates its own users and lobby matches and checks the authoritative match state through the `debug_signal_match` snapshot signal. It verifies wrong ingredients are rejected, duplicate completion does not double-count, duel stealing crosses teams correctly, PvE has three lives and no timer, and a player can join a match that is already running.

The single-browser e2e waits for the original lobby/VS sequence to hand off to the kitchen, then asserts the kitchen scene is in the PlayCanvas hierarchy and the `Versus` loading overlay is disabled. Merely seeing a `Round Started` log is not enough: the overlay can stay on top of a loaded kitchen.

`test:multiplayer` launches two real PlayCanvas clients plus a socket observer. It checks both browsers are in the same authoritative match, verifies chef state relayed in both directions, exercises stove/counter/fryer station replication in both directions, serves an order and confirms both browsers receive the same score, and checks both receive GameOver. Screenshots are written to `tests/multiplayer-alpha.png` and `tests/multiplayer-bravo.png`.

---

## Troubleshooting

**Blank/black game screen**
- Check the browser console. A missing asset is almost always fixed by re-running `npm run download` (it resumes) and `npm run patch`, then restarting the web container.
- The game needs WebGL. In headless tests we use SwiftShader.

**`docker: permission denied`**
- Add your user to the `docker` group as shown above, then log out/in.

**Nakama restarts with "JavaScript entrypoint must be a valid path"**
- The module was not built. Run `npm run build:server`, or rebuild the stack.

**Nakama "failed to find InitModule"**
- The runtime module must be a top-level script. It is built with esbuild using `format: "cjs"` and `server/nakama/modules/index.js`. Do not switch it to an IIFE bundle.

**Room code disappears**
- Room codes are in memory. A web-container restart clears rooms. User accounts/inventory remain.

**Shutdown message**
- The final client build contains a hard-coded shutdown notice in the lobby. The patcher injects a small hider into `chef-platform.js` so it is disabled on our server.

---

## Credits

- Original game: **Mojiworks** / Discord
- Original client: PlayCanvas build still served from `1037680572660727838.discordsays.com`
- Server reimplementation and web layer: this project
