/* Private web platform for Chef Showdown. */
(function () {
  "use strict";
  var SS = window.sessionStorage;
  var PREFIX = "chef.";
  function readJson(key, fallback) {
    try {
      var raw = SS.getItem(PREFIX + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    var b = new Uint8Array(16);
    (window.crypto || {}).getRandomValues ? crypto.getRandomValues(b) : null;
    for (var i = 0; i < 16; i++) if (!b[i]) b[i] = Math.floor(Math.random() * 256);
    b[6] = (b[6] & 15) | 64; b[8] = (b[8] & 63) | 128;
    var h = Array.prototype.map.call(b, function (x) { return ("0" + x.toString(16)).slice(-2); }).join("");
    return h.slice(0,8)+"-"+h.slice(8,12)+"-"+h.slice(12,16)+"-"+h.slice(16,20)+"-"+h.slice(20);
  }
  var profile = readJson("profile", null);
  if (!profile || !profile.id) {
    profile = { id: uuid(), name: "Chef " + Math.floor(100 + Math.random() * 900), avatarUrl: "", color: "#f2b134" };
    try { SS.setItem(PREFIX + "profile", JSON.stringify(profile)); } catch (e) {}
  }
  var room = new URLSearchParams(location.search).get("room") || SS.getItem(PREFIX + "room") || "";
  var match = new URLSearchParams(location.search).get("match") || SS.getItem(PREFIX + "match") || "";
  if (room) { try { SS.setItem(PREFIX + "room", room); } catch (e) {} }
  if (match) { try { SS.setItem(PREFIX + "match", match); } catch (e) {} }
  var user = { id: profile.id, name: profile.name || "Chef", avatarId: profile.avatarUrl || "", color: profile.color || "#f2b134" };
  var sessionId = match || room;

  var bootEl = document.getElementById("chef-boot");
  var barEl = document.getElementById("chef-boot-progress");
  var statusEl = document.getElementById("chef-boot-status");
  function progress(p) {
    if (barEl) barEl.style.width = Math.round(Math.max(0, Math.min(1, p)) * 100) + "%";
  }
  function status(s) { if (statusEl) statusEl.textContent = s; }

  var initResolve, initReject;
  var awaitInit = new Promise(function (resolve, reject) { initResolve = resolve; initReject = reject; });

  var platform = {
    isMock: true,
    sessionId: sessionId,
    instanceId: match,
    lobbyMatchId: match,
    awaitInit: awaitInit,
    setLoadingProgress: function (p) { progress(p); },
    setLoadingComplete: function () {
      progress(1);
      status("Starting kitchen…");
      setTimeout(function () { if (bootEl) bootEl.classList.add("hidden"); }, 350);
    },
    initialise: function () {
      status("Joining room " + (room || "—"));
      var response = { applicationId: "chef-private", sessionId: sessionId, locale: navigator.language || "en-US", user: user };
      initResolve(response);
      return awaitInit;
    },
    getAuthToken: function () { return Promise.resolve(user.id); },
    getUser: function () { return user; },
    fetchAvatar2D: function (avatarId, opts) {
      if (!avatarId) return Promise.resolve(location.origin + "/game/files/assets/23507125/1/missingprofilepicture.png");
      var url = avatarId;
      var absolute = url.indexOf("http://") === 0 || url.indexOf("https://") === 0 || url.indexOf("data:") === 0 || url.charAt(0) === "/";
      if (!absolute) url = "/avatars/" + url;
      if (url.charAt(0) === "/") url = location.origin + url;
      return Promise.resolve(url);
    },
    getLocaleLanguage: function () { return (navigator.language || "en-US").split(/[-_]/)[0] || "en"; },
    getLocaleCountry: function () { return (navigator.language || "en-US").split(/[-_]/)[1] || "US"; },
    getLocale: function () { return navigator.language || "en-US"; },
    getPlatform: function () { return "desktop"; },
    localStorageSetData: function (data) {
      Object.keys(data || {}).forEach(function (k) { try { SS.setItem(PREFIX + k, data[k]); } catch (e) {} });
      return Promise.resolve();
    },
    localStorageGetData: function (keys) {
      var out = {};
      var list = Array.isArray(keys) ? keys : [keys];
      list.forEach(function (k) { var v = SS.getItem(PREFIX + k); if (v !== null) out[k] = v; });
      return Promise.resolve({ data: out });
    },
    localStorageDeleteData: function (keys) {
      var list = Array.isArray(keys) ? keys : [keys];
      list.forEach(function (k) { try { SS.removeItem(PREFIX + k); } catch (e) {} });
      return Promise.resolve();
    }
  };

  // Resolve the match controller's awaitMatch promise without assuming a
  // particular script owns this._gameManager. Scene scripts can initialise
  // before GameManager/matchController exist, so poll instead of throwing.
  window.__chefAwaitMatch = function (candidate) {
    return new Promise(function (resolve, reject) {
      var tries = 0;
      function poll() {
        try {
          if (candidate && candidate.awaitMatch) return resolve(candidate.awaitMatch);
          if (candidate && typeof candidate.then === "function") return resolve(candidate);
          var mc = GameManager.instance.matchController;
          if (mc && mc.awaitMatch) return resolve(mc.awaitMatch);
        } catch (e) {}
        if (++tries > 1200) return reject(new Error("Match controller unavailable"));
        setTimeout(poll, 50);
      }
      poll();
    });
  };

  // Station contents are not part of the original network protocol: only
  // chefs are replicated, which leaves grills, fryers, counters and drinks
  // empty on every other screen. Replay the same station interaction on the
  // receiving client from the action payload. The station's own code then
  // updates slots, timers, decorators and pickup state exactly as it does for
  // the acting player.
  window.__chefReplayDepth = 0;
  window.__chefReplayStationAction = function (chef, state) {
    if (!chef || !state || !state.action || window.__chefReplayDepth > 0) return;
    var actionTypes = {
      UseTransformStationAction: {
        TimedTransformStation: 1,
        ReserveStation: 1,
        AddWhileCookingStation: 1,
        CreateAndTransformStation: 1,
        TransformGeneratorStation: 1,
        ActivatedTransformGenerationStation: 1,
      },
      GrabIngredientAction: {
        ReserveStation: 1,
        IngredientGeneratorStation: 1,
        ActivatedGeneratorStation: 1,
        DecayGenerationStation: 1,
        CreateAndTransformStation: 1,
        TransformGeneratorStation: 1,
        ActivatedTransformGenerationStation: 1,
      },
      ActivateStationAction: {
        IngredientGeneratorStation: 1,
        ActivatedGeneratorStation: 1,
        DecayGenerationStation: 1,
        AddWhileCookingStation: 1,
        CreateAndTransformStation: 1,
        TransformGeneratorStation: 1,
        ActivatedTransformGenerationStation: 1,
      },
      BinItemAction: {
        AddWhileCookingStation: 1,
      },
    };
    var allowed = actionTypes[state.action];
    var kitchen = chef.kitchen;
    if (!allowed || !kitchen || !kitchen.entity) return;

    function scriptList(entity) {
      var out = [];
      try {
        var comp = entity.script;
        if (!comp || !comp.scripts) return out;
        for (var key in comp.scripts) {
          var value = comp.scripts[key];
          if (value) out.push(value);
        }
      } catch (e) {}
      return out;
    }
    function isActive(entity) {
      var node = entity;
      while (node) {
        if (node.enabled === false) return false;
        node = node.parent;
      }
      return true;
    }
    var ref = state.lookAt || state.position || { x: 0, z: 0 };
    var best = null;
    var bestDistance = Infinity;
    (function walk(entity) {
      var components = scriptList(entity);
      for (var i = 0; i < components.length; i++) {
        var component = components[i];
        var type = component.constructor && component.constructor.name;
        if (!type || !allowed[type] || !isActive(entity)) continue;
        var position = entity.getLocalPosition();
        var dx = position.x - ref.x;
        var dz = position.z - ref.z;
        var distance = dx * dx + dz * dz;
        if (distance < bestDistance) {
          bestDistance = distance;
          best = component;
        }
      }
      for (var c = 0; c < entity.children.length; c++) walk(entity.children[c]);
    })(kitchen.entity);
    // Only replay when the action's own look-at target is this exact station.
    // Otherwise a grab from an infinite ingredient crate could be mistaken for
    // a nearby counter or fryer.
    if (!best || bestDistance > 0.04) return;

    var target = null;
    var slots = best.timedSlots || best.reserveSlots;
    if (slots && slots.length) {
      var origin = state.position || ref;
      var nearest = null;
      var nearestDistance = Infinity;
      for (var s = 0; s < slots.length; s++) {
        var slot = slots[s];
        var slotEntity = slot.entity || slot.hitbox;
        if (!slotEntity) continue;
        var slotPosition = slotEntity.getLocalPosition();
        var sx = slotPosition.x - origin.x;
        var sz = slotPosition.z - origin.z;
        var slotDistance = sx * sx + sz * sz;
        if (slotDistance < nearestDistance) {
          nearestDistance = slotDistance;
          nearest = slot;
        }
      }
      if (nearest) {
        var stationType = best.constructor.name;
        if (stationType === "ReserveStation" || stationType === "IngredientGeneratorStation") {
          target = nearest.hitbox || nearest.entity;
        } else {
          target = nearest.entity;
        }
      }
    }

    var held = state.heldBefore || null;
    var temporary = null;
    if (held && chef.instantiateHoldable) {
      try {
        chef.instantiateHoldable(held);
        var heldEntity = chef.currentHoldable;
        if (heldEntity && heldEntity.entity) temporary = heldEntity.entity.clone();
        if (chef.destroyCurrentHoldable) chef.destroyCurrentHoldable();
      } catch (e) {
        temporary = null;
      }
    }
    if (held && !temporary && best.constructor.name === "ReserveStation") return;

    var proxy = {
      entity: chef.entity,
      kitchen: kitchen,
      chefId: chef.chefId,
      homeTeam: chef.homeTeam,
      model: chef.model,
      isLocalPlayer: false,
      currentHoldable: held ? { holdable: held, entity: temporary } : null,
      destroyCurrentHoldable: function () {},
      instantiateHoldable: function () {},
      getStandingPosition: function () {
        return chef.entity ? chef.entity.getPosition() : null;
      },
    };

    window.__chefReplayDepth++;
    try {
      var result = best.runStation(proxy, { x: 0, y: 0 }, target);
      if (result && typeof result.catch === "function") result.catch(function () {});
    } finally {
      setTimeout(function () {
        window.__chefReplayDepth = Math.max(0, window.__chefReplayDepth - 1);
        if (temporary && !temporary.parent) {
          try { temporary.destroy(); } catch (e) {}
        }
      }, 0);
    }
  };

  window.MOJIWORKS = window.MOJIWORKS || {};
  window.MOJIWORKS.mojiplatform = platform;
  window.ChefPlatform = { platform: platform, user: user, profile: profile, room: room, match: match };

  // The final production client shipped with a hard-coded shutdown notice in
  // its lobby scene. Hide it on our private server.
  var shutdownTimer = setInterval(function () {
    try {
      if (!window.pc) return;
      var app = pc.Application.getApplication();
      if (!app || !app.root) return;
      var screen = app.root.findByName("Shutdown Message Screen");
      if (screen) screen.enabled = false;
      var info = app.root.findByName("Info Popups Screens");
      if (info) info.enabled = false;
    } catch (e) {}
  }, 500);
})();