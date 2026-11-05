/* Chef Showdown private room UI. */
(() => {
  "use strict";

  const CFG = window.CHEF_NAKAMA || {};
  const CLIENT_KEY = CFG.clientKey || "defaultkey";
  const views = {
    home: document.getElementById("view-home"),
    room: document.getElementById("view-room"),
  };

  const CLASSIC_STAGES = [
    ["burgerTime", "Burger Time"],
    ["happyHour", "Happy Hour"],
    ["sushiMode", "Sushi"],
    ["winterMode", "Hut Chocolate"],
    ["breakfastClub", "Breakfast Club (bonus)"],
    ["potionParty", "Potion Party (bonus)"],
    ["wurstNightmare", "Winter Wiener (bonus)"],
    ["lunarNewYear", "Lunar New Year (bonus)"],
    ["iceCreamParlour", "Ice Cream Parlour (bonus)"],
    ["dosaDash", "Dosa Dash (bonus)"],
    ["doubleDiner", "Double Diner (bonus)"],
    ["kingOfTheGrill", "King of the Grill (bonus)"],
    ["tacoTime", "Taco Stage (bonus)"],
  ];
  const DUEL_STAGES = [
    ["burgerTime", "Burger Time"],
    ["happyHour", "Happy Hour"],
    ["sushiMode", "Sushi"],
    ["winterMode", "Hut Chocolate"],
    ["breakfastClub", "Breakfast Club (bonus)"],
    ["potionParty", "Potion Party (bonus)"],
    ["wurstNightmare", "Winter Wiener (bonus)"],
    ["lunarNewYear", "Lunar New Year (bonus)"],
    ["iceCreamParlour", "Ice Cream Parlour (bonus)"],
  ];
  const PVE_STAGES = [
    ["burgerTimeScoreAttack", "Burger Time — Score Attack"],
    ["happyHourScoreAttack", "Happy Hour — Score Attack"],
    ["sushiModeScoreAttack", "Sushi — Score Attack"],
    ["winterModeScoreAttack", "Hut Chocolate — Score Attack"],
    ["burgerTimeScoreAttackExtreme", "Burger Time — Extreme"],
    ["winterModeScoreAttackExtreme", "Hut Chocolate — Extreme"],
  ];
  const MODE_INFO = {
    classic: { label: "Classic", stages: CLASSIC_STAGES, defaultStage: "burgerTime", max: 8 },
    coop: { label: "Co-op", stages: CLASSIC_STAGES, defaultStage: "burgerTime", max: 4 },
    duel: { label: "Duel", stages: DUEL_STAGES, defaultStage: "burgerTime", max: 2 },
    pve: { label: "Score Attack", stages: PVE_STAGES, defaultStage: "burgerTimeScoreAttack", max: 4 },
  };

  const state = {
    profile: loadProfile(),
    token: sessionStorage.getItem("chef.token") || "",
    nakamaId: "",
    roomCode: "",
    room: null,
    poll: null,
    busy: false,
    navigating: false,
  };

  function loadProfile() {
    try {
      const raw = sessionStorage.getItem("chef.profile");
      if (raw) return JSON.parse(raw);
    } catch {}
    const id = crypto.randomUUID ? crypto.randomUUID() : fallbackUuid();
    const p = {
      id,
      name: "Chef " + Math.floor(100 + Math.random() * 900),
      avatarUrl: "",
      color: "#f2b134",
    };
    try { sessionStorage.setItem("chef.profile", JSON.stringify(p)); } catch {}
    return p;
  }
  function saveProfile(p) {
    state.profile = p;
    sessionStorage.setItem("chef.profile", JSON.stringify(p));
  }
  function jwtUid(token) {
    try {
      const body = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(atob(body)).uid || "";
    } catch {
      return "";
    }
  }
  // Nakama's user_id is not the same as the custom auth id. Rooms and lobby
  // match state are keyed by the Nakama user_id, so use that everywhere once
  // the session is authenticated.
  function playerId() {
    return state.nakamaId || state.profile.nakamaId || state.profile.id;
  }
  function rememberNakamaId(token) {
    state.nakamaId = jwtUid(token) || state.nakamaId;
    if (state.nakamaId && state.profile.nakamaId !== state.nakamaId) {
      saveProfile({ ...state.profile, nakamaId: state.nakamaId });
    }
  }
  function fallbackUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 3) | 8).toString(16);
    });
  }

  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };

  function toast(message, kind = "") {
    const t = $("toast");
    t.textContent = message;
    t.className = "toast show " + kind;
    t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      t.classList.remove("show");
      setTimeout(() => (t.hidden = true), 260);
    }, 3400);
  }

  function setView(name) {
    for (const [key, node] of Object.entries(views)) node.hidden = key !== name;
    window.scrollTo(0, 0);
  }

  function pathRoom() {
    const m = location.pathname.match(/^\/room\/([A-Za-z0-9]+)\/?$/);
    return m ? m[1].toUpperCase() : "";
  }

  function authHeader() {
    return "Basic " + btoa(CLIENT_KEY + ":");
  }

  async function authenticate() {
    if (state.token) {
      rememberNakamaId(state.token);
      return state.token;
    }
    const p = state.profile;
    const res = await fetch("/v2/account/authenticate/custom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify({
        id: p.id,
        create: true,
        username: (p.name || "Chef").slice(0, 20),
      }),
    });
    const text = await res.text();
    if (!res.ok) throw new Error(text || "Authentication failed");
    const data = JSON.parse(text);
    state.token = data.token;
    sessionStorage.setItem("chef.token", state.token);
    rememberNakamaId(state.token);
    return state.token;
  }

  async function rpc(id, payload = {}) {
    const token = await authenticate();
    const res = await fetch("/v2/rpc/" + encodeURIComponent(id), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    if (!res.ok) {
      let msg = text;
      try {
        const j = JSON.parse(text);
        msg = j.message || j.error || text;
      } catch {}
      if (/token/i.test(msg) || res.status === 401) {
        state.token = "";
        sessionStorage.removeItem("chef.token");
      }
      throw new Error(msg || "Request failed");
    }
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
    if (data && typeof data === "object" && "payload" in data) {
      const p = data.payload;
      if (typeof p === "string") {
        try {
          return JSON.parse(p);
        } catch {
          return p;
        }
      }
      return p;
    }
    return data;
  }

  async function api(path, method = "GET", body) {
    const res = await fetch(path, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
    if (!res.ok) throw new Error(data?.error || data || "Request failed");
    return data;
  }

  function populateStages(select, mode, selected) {
    const info = MODE_INFO[mode] || MODE_INFO.classic;
    select.innerHTML = "";
    for (const [id, label] of info.stages) {
      const o = document.createElement("option");
      o.value = id;
      o.textContent = label;
      select.appendChild(o);
    }
    select.value = selected && info.stages.some(([id]) => id === selected)
      ? selected
      : info.defaultStage;
  }

  function updateProfileChrome() {
    const p = state.profile;
    $("name-input").value = p.name || "";
    $("color-input").value = p.color || "#f2b134";
    const preview = $("avatar-preview");
    if (p.avatarUrl) {
      preview.src = p.avatarUrl;
      preview.style.visibility = "visible";
    } else {
      preview.removeAttribute("src");
      preview.style.visibility = "hidden";
    }
    const chip = $("profile-chip");
    chip.hidden = false;
    $("profile-chip-name").textContent = p.name || "Chef";
    const chipAvatar = $("profile-chip-avatar");
    if (p.avatarUrl) {
      chipAvatar.src = p.avatarUrl;
      chipAvatar.style.display = "";
    } else {
      chipAvatar.removeAttribute("src");
      chipAvatar.style.display = "none";
    }
  }

  async function fileToAvatar(file) {
    if (!file) return "";
    const dataUrl = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = reject;
      r.readAsDataURL(file);
    });
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const size = 128;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        const scale = Math.max(size / img.width, size / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
        resolve(canvas.toDataURL("image/webp", 0.86));
      };
      img.onerror = () => resolve(dataUrl);
      img.src = dataUrl;
    });
  }

  async function uploadAvatar(dataUrl) {
    if (!dataUrl || !dataUrl.startsWith("data:")) return state.profile.avatarUrl || "";
    const res = await fetch("/api/avatar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: state.profile.id, dataUrl }),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return data.url;
  }

  let pendingAvatar = "";

  async function saveChef() {
    const name = $("name-input").value.trim().slice(0, 18) || "Chef";
    const color = $("color-input").value || "#f2b134";
    let avatarUrl = state.profile.avatarUrl || "";
    if (pendingAvatar) {
      try {
        avatarUrl = await uploadAvatar(pendingAvatar);
        pendingAvatar = "";
      } catch (err) {
        toast("Avatar upload failed: " + err.message, "bad");
        return false;
      }
    }
    saveProfile({ ...state.profile, name, color, avatarUrl });
    updateProfileChrome();
    toast("Chef saved", "good");
    return true;
  }

  async function createRoom() {
    if (!(await saveChef())) return;
    try {
      await authenticate();
    } catch (err) {
      toast("Could not sign in: " + err.message, "bad");
      return;
    }
    const mode = $("create-mode").value;
    const stage = $("create-stage").value;
    const maxPlayers = Number($("create-max").value || 4);
    setBusy(true);
    try {
      const room = await api("/api/rooms", "POST", {
        userId: playerId(),
        mode,
        stage,
        maxPlayers,
        displayName: state.profile.name,
        avatarUrl: state.profile.avatarUrl,
        color: state.profile.color,
      });
      state.roomCode = room.code;
      state.room = room;
      history.pushState({}, "", "/room/" + room.code);
      setView("room");
      startPolling();
    } catch (err) {
      toast("Could not create room: " + err.message, "bad");
    } finally {
      setBusy(false);
    }
  }

  async function joinRoom(code) {
    code = (code || "").trim().toUpperCase();
    if (!code) return toast("Enter a room code", "bad");
    if (!(await saveChef())) return;
    try {
      await authenticate();
    } catch (err) {
      toast("Could not sign in: " + err.message, "bad");
      return;
    }
    setBusy(true);
    try {
      const room = await api("/api/rooms/" + encodeURIComponent(code) + "/join", "POST", {
        userId: playerId(),
        displayName: state.profile.name,
        avatarUrl: state.profile.avatarUrl,
        color: state.profile.color,
      });
      state.roomCode = room.code;
      state.room = room;
      history.pushState({}, "", "/room/" + room.code);
      setView("room");
      startPolling();
    } catch (err) {
      toast(err.message || "Could not join room", "bad");
    } finally {
      setBusy(false);
    }
  }

  function startPolling() {
    stopPolling();
    pollRoom();
    state.poll = setInterval(pollRoom, 1200);
  }
  function stopPolling() {
    if (state.poll) clearInterval(state.poll);
    state.poll = null;
  }

  async function pollRoom() {
    if (!state.roomCode || state.navigating) return;
    try {
      const room = await api(
        "/api/rooms/" +
          encodeURIComponent(state.roomCode) +
          "?userId=" +
          encodeURIComponent(playerId()),
      );
      if (!room || room.error) throw new Error(room?.error || "Room closed");
      state.room = room;
      renderRoom();
      if (room.status === "playing" && room.lobbyMatchId) launchGame();
    } catch (err) {
      stopPolling();
      toast(err.message || "Room closed", "bad");
      goHome();
    }
  }

  function renderRoom() {
    const room = state.room;
    if (!room) return;
    $("room-code").textContent = room.code;
    $("room-status").textContent =
      room.status === "playing" ? "in lobby" : room.status === "in_match" ? "in match" : "waiting";
    const isHost = room.hostId === playerId();
    document.querySelectorAll(".host-only").forEach((n) => {
      n.style.display = isHost ? "" : "none";
    });
    $("room-mode").value = room.mode || "classic";
    populateStages($("room-stage"), room.mode || "classic", room.stage);
    $("room-mode").disabled = !isHost;
    $("room-stage").disabled = !isHost;

    const list = $("player-list");
    list.innerHTML = "";
    const players = room.players || [];
    players.sort((a, b) => (b.isHost ? 1 : 0) - (a.isHost ? 1 : 0));
    for (const p of players) {
      const li = el("li", "player" + (p.userId === playerId() ? " me" : ""));
      const img = el("img", "player-avatar");
      if (p.avatarUrl) img.src = p.avatarUrl;
      else img.style.display = "none";
      const name = el("div", "player-name");
      name.appendChild(el("strong", "", p.displayName || "Chef"));
      const tags = el("div", "player-tags");
      if (p.isHost) tags.appendChild(el("span", "tag host", "host"));
      tags.appendChild(el("span", "tag " + (p.ready ? "ready" : "not-ready"), p.ready ? "ready" : "not ready"));
      if (p.userId === playerId()) tags.appendChild(el("span", "tag me", "you"));
      name.appendChild(tags);
      li.appendChild(img);
      li.appendChild(name);
      list.appendChild(li);
    }

    const me = players.find((p) => p.userId === playerId());
    const readyBtn = $("ready-button");
    readyBtn.textContent = me?.ready ? "Not ready" : "I'm ready";
    readyBtn.classList.toggle("ghost", !!me?.ready);
    readyBtn.disabled = room.status !== "lobby";

    const allReady = players.length > 0 && players.every((p) => p.ready);
    const startBtn = $("start-button");
    startBtn.disabled = !isHost || room.status !== "lobby";
    startBtn.textContent = allReady ? "Launch game lobby" : "Launch game lobby anyway";
    $("room-tip").textContent = isHost
      ? allReady
        ? "Everyone is ready. Launch the original lobby."
        : "You can launch now; the in-game lobby handles the rest."
      : "Waiting for the host to launch the lobby…";
  }

  function launchGame() {
    if (state.navigating) return;
    state.navigating = true;
    stopPolling();
    sessionStorage.setItem("chef.room", state.roomCode);
    sessionStorage.setItem("chef.match", state.room?.lobbyMatchId || "");
    const match = state.room?.lobbyMatchId || "";
    location.href =
      "/game/?room=" +
      encodeURIComponent(state.roomCode) +
      (match ? "&match=" + encodeURIComponent(match) : "");
  }

  async function toggleReady() {
    const me = state.room?.players?.find((p) => p.userId === playerId());
    try {
      await api("/api/rooms/" + encodeURIComponent(state.roomCode) + "/ready", "POST", {
        userId: playerId(),
        ready: !me?.ready,
      });
      await pollRoom();
    } catch (err) {
      toast(err.message, "bad");
    }
  }

  async function startRoom() {
    setBusy(true);
    try {
      const room = await api(
        "/api/rooms/" + encodeURIComponent(state.roomCode) + "/start",
        "POST",
        { userId: playerId() },
      );
      state.room = room;
      await pollRoom();
    } catch (err) {
      toast("Could not start: " + err.message, "bad");
    } finally {
      setBusy(false);
    }
  }

  async function leaveRoom() {
    try {
      if (state.roomCode) {
        await api("/api/rooms/" + encodeURIComponent(state.roomCode) + "/leave", "POST", {
          userId: playerId(),
        });
      }
    } catch {}
    stopPolling();
    goHome();
  }

  async function setRoomOptions() {
    if (!state.room) return;
    const mode = $("room-mode").value;
    const stage = $("room-stage").value;
    try {
      await api("/api/rooms/" + encodeURIComponent(state.roomCode) + "/options", "POST", {
        userId: playerId(),
        mode,
        stage,
      });
      await pollRoom();
    } catch (err) {
      toast(err.message, "bad");
    }
  }

  function goHome() {
    state.roomCode = "";
    state.room = null;
    history.pushState({}, "", "/");
    setView("home");
  }

  function setBusy(v) {
    state.busy = v;
    document.body.classList.toggle("busy", v);
  }

  async function boot() {
    // Dynamic Nakama config for the web UI.
    if (!window.CHEF_NAKAMA) {
      try {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "/chef-config.js";
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      } catch {}
    }
    try {
      await authenticate();
    } catch {}
    updateProfileChrome();
    populateStages($("create-stage"), $("create-mode").value, "burgerTime");
    populateStages($("room-stage"), $("room-mode").value, "burgerTime");

    const code = pathRoom();
    if (code) {
      $("join-code").value = code;
      try {
        const room = await api(
          "/api/rooms/" +
            encodeURIComponent(code) +
            "?userId=" +
            encodeURIComponent(playerId()),
        );
        if (room && !room.error && (room.players || []).some((p) => p.userId === playerId())) {
          state.roomCode = code;
          state.room = room;
          setView("room");
          startPolling();
          return;
        }
      } catch {}
      setView("home");
      toast("Enter the room code to join this kitchen", "");
      $("join-code").value = code;
      $("join-code").focus();
      return;
    }
    setView("home");
  }

  // Events
  $("avatar-input").addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    pendingAvatar = await fileToAvatar(file);
    const preview = $("avatar-preview");
    preview.src = pendingAvatar;
    preview.style.visibility = "visible";
  });
  $("save-profile").addEventListener("click", saveChef);
  $("new-identity").addEventListener("click", () => {
    sessionStorage.removeItem("chef.profile");
    sessionStorage.removeItem("chef.token");
    sessionStorage.removeItem("chef.room");
    location.href = "/";
  });
  $("create-mode").addEventListener("change", () => {
    const mode = $("create-mode").value;
    populateStages($("create-stage"), mode, MODE_INFO[mode]?.defaultStage);
    const max = $("create-max");
    for (const o of max.options) o.disabled = Number(o.value) > (MODE_INFO[mode]?.max || 8);
    if (Number(max.value) > (MODE_INFO[mode]?.max || 8)) max.value = String(MODE_INFO[mode]?.max || 4);
  });
  $("create-button").addEventListener("click", createRoom);
  $("join-button").addEventListener("click", () => joinRoom($("join-code").value));
  $("join-code").addEventListener("keydown", (e) => {
    if (e.key === "Enter") joinRoom($("join-code").value);
  });
  $("copy-link").addEventListener("click", async () => {
    const link = location.origin + "/room/" + state.roomCode;
    try {
      await navigator.clipboard.writeText(link);
      toast("Invite link copied", "good");
    } catch {
      prompt("Copy this link:", link);
    }
  });
  $("leave-room").addEventListener("click", leaveRoom);
  $("ready-button").addEventListener("click", toggleReady);
  $("start-button").addEventListener("click", startRoom);
  $("room-mode").addEventListener("change", () => {
    const mode = $("room-mode").value;
    populateStages($("room-stage"), mode, MODE_INFO[mode]?.defaultStage);
    setRoomOptions();
  });
  $("room-stage").addEventListener("change", setRoomOptions);
  window.addEventListener("popstate", () => {
    const code = pathRoom();
    if (code && code !== state.roomCode) {
      $("join-code").value = code;
      setView("home");
    } else if (!code) {
      stopPolling();
      setView("home");
    }
  });

  boot().catch((err) => {
    console.error(err);
    toast(err.message || "Failed to start", "bad");
  });
})();
