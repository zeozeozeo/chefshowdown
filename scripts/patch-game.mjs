#!/usr/bin/env node
/**
 * Patch the archived Chef Showdown PlayCanvas build into a standalone web game.
 *
 * - copies game/ -> site/ (originals are never modified)
 * - removes Discord auth/proxy requirements
 * - installs the private web platform
 * - points the Nakama client at our server
 */

import { cp, mkdir, readFile, writeFile, access } from "node:fs/promises";
import { join, resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const SRC = join(ROOT, "game");
const DST = join(ROOT, "site");

function parseJsonStringLiteral(body) {
  return JSON.parse(Function(`"use strict"; return '${body}';`)());
}

function escapeForSingleQuotedJs(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function replaceEmbeddedConfig(source, variable, transform) {
  const re = new RegExp(
    `((?:const|let|var)?\\s*${variable}\\s*=\\s*JSON\\.parse\\(\\s*)'((?:\\\\[\\s\\S]|[^'\\\\])*)'(\\s*\\))`,
  );
  const m = source.match(re);
  if (!m) throw new Error(`Could not find embedded config: ${variable}`);
  const obj = parseJsonStringLiteral(m[2]);
  transform(obj);
  const literal = `'${escapeForSingleQuotedJs(JSON.stringify(obj))}'`;
  return (
    source.slice(0, m.index) +
    m[1] +
    literal +
    m[3] +
    source.slice(m.index + m[0].length)
  );
}

function patchRuntimeConfig(config) {
  const pub = config.environment?.public;
  if (pub) {
    pub.discord = null;
    pub.snap = pub.snap || {};
    pub.nakama = { host: "private", clientKey: "private" };
    pub.analytics = pub.analytics || {};
    pub.analytics.sendEnabled = false;
    pub.sentry = {};
    if (pub.gameSettings) {
      // The shipped client gives up loading a kitchen after 30s. Slow hosted
      // machines and cold asset caches can exceed that, which produces the
      // "Failed start match" popup. Give the private server more headroom.
      pub.gameSettings.sceneLoadingTimeout = 120000;
    }
    if (pub.gameSettings?.serverSettings?.featureFlags) {
      const ff = pub.gameSettings.serverSettings.featureFlags;
      // Make every mode/map available in the original lobby UI.
      ff.matchType_classic = true;
      ff.matchType_duel = true;
      ff.versusMode = true;
      ff.scoreAttackMode = true;
      ff.characterCosmetics = true;
      ff.displayStolenBubbles = true;
      ff.inGameExitButtonPvE = true;
      ff.showHighScorePopup = true;
      ff.enableTutorialMatch = false;
      ff.autoShowSummer2021Started = false;
      ff.autoShowSummer2021Calendar = false;
      // Hide Discord monetization / promo surfaces.
      ff.showStarterPack = false;
      ff.sessionStartPromo = false;
      ff.showInviteFriendsButton = false;
      ff.guildXPEnabled = false;
      ff.showLeagueLeaderboard = false;
      ff.showLootboxVictoryRoad = false;
      ff.autoPopupLootboxVictoryRoad = false;
      ff.enableMobileLogo = false;
      ff.hidePVPButton = false;
      ff.tipsSystem = false;
    }
  }
  if (config.environment?.public?.gameSettings?.serverSettings) {
    config.environment.public.gameSettings.serverSettings.configName = "private";
  }
  return config;
}

function patchBootstrapConfig(config) {
  if (config.gameSettings) config.gameSettings.sceneLoadingTimeout = 120000;
  config.discordClientId = null;
  config.nakamaHost = null;
  config.sentryDsn = null;
  if (config.analytics) config.analytics.sendEnabled = false;
  return config;
}

function patchMainBundle(source) {
  let out = source;

  // Point Session.serverParams at the runtime-injected private server config.
  const serverParamsNeedle =
    '{key:"serverParams",get:function(){var nakamaConfig=getClientConfig().environment.public.nakama;return{password:"RELEASE",host:nakamaConfig.host,useSSL:!0,playcanvasDebug:!1,nakamaKey:nakamaConfig.clientKey,port:"443"}}}';
  const serverParamsReplacement =
    '{key:"serverParams",get:function(){var c=window.CHEF_NAKAMA||{};var p=c.port||location.port||(location.protocol==="https:"?"443":"80");return{password:"RELEASE",host:c.host||location.hostname,useSSL:!!c.ssl,playcanvasDebug:!1,nakamaKey:c.clientKey||"defaultkey",port:String(p)}}}';
  if (!out.includes(serverParamsNeedle)) {
    throw new Error("Could not find minified serverParams getter");
  }
  out = out.replace(serverParamsNeedle, serverParamsReplacement);

  // Replace the Discord-only platform installer with our web platform.
  const startNeedle = "function InstallMojiPlatform(analytics){";
  const errorNeedle = 'throw Error("No valid MojiPlatform to install")';
  const start = out.indexOf(startNeedle);
  if (start < 0) throw new Error("Could not find InstallMojiPlatform");
  const err = out.indexOf(errorNeedle, start);
  if (err < 0) throw new Error("Could not find InstallMojiPlatform terminator");
  const endBrace = out.indexOf("}", err);
  if (endBrace < 0) throw new Error("Could not find end of InstallMojiPlatform");
  const replacement =
    'function InstallMojiPlatform(analytics){if(window.MOJIWORKS&&window.MOJIWORKS.mojiplatform){return window.MOJIWORKS.mojiplatform}if(window.ChefPlatform&&window.ChefPlatform.platform){return installSingleton_installSingleton(window.ChefPlatform.platform,"mojiplatform")}throw Error("No valid MojiPlatform to install")}';
  out = out.slice(0, start) + replacement + out.slice(endBrace + 1);

  return out;
}

async function main() {
  console.log("Copying game/ -> site/ ...");
  await mkdir(DST, { recursive: true });
  await cp(SRC, DST, { recursive: true, force: true, errorOnExist: false });

  console.log("Patching __loading__.js ...");
  const loadingPath = join(DST, "__loading__.js");
  let loading = await readFile(loadingPath, "utf8");
  loading = replaceEmbeddedConfig(
    loading,
    "client_config_namespaceObject",
    patchRuntimeConfig,
  );
  loading = replaceEmbeddedConfig(
    loading,
    "client_bootstrap_config_namespaceObject",
    patchBootstrapConfig,
  );
  await writeFile(loadingPath, loading);

  console.log("Patching bootstrap.build.js ...");
  const bootstrapPath = join(
    DST,
    "files/assets/26779643/1/bootstrap.build.js",
  );
  let bootstrap = await readFile(bootstrapPath, "utf8");
  if (bootstrap.includes("client_bootstrap_config_namespaceObject")) {
    bootstrap = replaceEmbeddedConfig(
      bootstrap,
      "client_bootstrap_config_namespaceObject",
      patchBootstrapConfig,
    );
  }
  await writeFile(bootstrapPath, bootstrap);

  console.log("Patching main.build.js ...");
  const mainPath = join(DST, "files/assets/20445504/1/main.build.js");
  let main = await readFile(mainPath, "utf8");
  // The small bootstrap config in main.build.js also enables analytics.
  if (main.includes("client_bootstrap_config_namespaceObject")) {
    main = replaceEmbeddedConfig(
      main,
      "client_bootstrap_config_namespaceObject",
      patchBootstrapConfig,
    );
  }
  main = patchMainBundle(main);
  // Some stages were not given lobby mode-picker art in the final build.
  // Fall back to the Burger Time art rather than throwing inside the picker.
  main = main.replace(
    'var asset=lookupLogo(root,modeType);if(asset)return asset;throw new Error("No icon for game mode ".concat(modeType))',
    'var asset=lookupLogo(root,modeType);if(asset)return asset;var _fallbackLogo=lookupLogo(root,"burgerTime");if(_fallbackLogo)return _fallbackLogo;throw new Error("No icon for game mode ".concat(modeType))',
  );
  main = main.replace(
    'var asset=lookupStageImage(root,modeType);if(asset)return asset;throw new Error("No background for game mode ".concat(modeType))',
    'var asset=lookupStageImage(root,modeType);if(asset)return asset;var _fallbackBg=lookupStageImage(root,"burgerTime");if(_fallbackBg)return _fallbackBg;throw new Error("No background for game mode ".concat(modeType))',
  );
  main = main.replace(
    'var asset=lookupStageGreyImage(root,modeType);if(asset)return asset;throw new Error("No background for game mode ".concat(modeType))',
    'var asset=lookupStageGreyImage(root,modeType);if(asset)return asset;var _fallbackGrey=lookupStageGreyImage(root,"burgerTime");if(_fallbackGrey)return _fallbackGrey;throw new Error("No background for game mode ".concat(modeType))',
  );
  main = main.replace(
    'colour.fromString(playerInfo.accentColour)',
    'colour.fromString(playerInfo.accentColour||"#f2b134")',
  );
  main = main.replace(
    'colour.fromString(info.accentColour)',
    'colour.fromString(info.accentColour||"#f2b134")',
  );
  // The versus loading screen waits for animation events that can fail to
  // fire when a team has no opponent (co-op/solo). Bound both waits so the
  // match can always proceed into the kitchen.
  main = main.replace(
    'shown=new Promise((function(resolve){return vsScreen.once("vs:shown",resolve)}))',
    'shown=Promise.race([new Promise((function(resolve){return vsScreen.once("vs:shown",resolve)})),new Promise((function(resolve){return setTimeout(resolve,1200)}))])',
  );
  main = main.replace(
    'hidden=new Promise((function(resolve){return vsScreen.once("vs:hidden",resolve)}))',
    'hidden=Promise.race([new Promise((function(resolve){return vsScreen.once("vs:hidden",resolve)})),new Promise((function(resolve){return setTimeout(resolve,1200)}))])',
  );
  // The server retries StartMatch until the client reports ready. Ignore
  // duplicate StartMatch messages once a match state exists.
  main = main.replace(
    '{key:"onMatchStarted",value:function(payload){var _payload$roundNumber',
    '{key:"onMatchStarted",value:function(payload){if(this._matchState&&this._matchState.matchId===this.matchId)return;var _payload$roundNumber',
  );
  // MatchSetup can still be lost in the join race. StartMatch is the message
  // that actually creates the kitchen, so use it to resolve match-init too.
  main = main.replace(
    'case OpCode_StartMatch:var message=matchData.data;_this2.onMatchStarted(message),utils_TimeTracker.startTimer("MATCH_TIME");break;',
    'case OpCode_StartMatch:var message=matchData.data;_this2.onMatchStarted(message),_this2.fire("match:init"),utils_TimeTracker.startTimer("MATCH_TIME");break;',
  );
  // If the intro/finalised event was missed during the join race, don't let
  // clientReady hang forever. Send it after a short fallback instead.
  main = main.replace(
    'key:"sceneLoaded",value:function(){var _this2=this;this.awaitInstructions.then((function(){return _this2.handler.clientReady()})).then((function(){return _this2.fire("teams:updated",_this2.teams)}))}',
    'key:"sceneLoaded",value:function(){var _this2=this;Promise.race([this.awaitInstructions,new Promise(function(resolve){setTimeout(resolve,1500)})]).then(function(){return _this2.handler.clientReady()}).then(function(){return _this2.fire("teams:updated",_this2.teams)})}',
  );
  // Fall back to the handler's authoritative start time if the MatchState's
  // one-shot listener lost the race with the join response.
  main = main.replace(
    'if(isFinite(this.timeLimit)&&this._localStartTime){var elapsed=(Date.now()-this._localStartTime)/1e3;',
    'if(isFinite(this.timeLimit)&&(this._localStartTime||this.handler.estimatedLocalStartTime)){var _start=this._localStartTime||this.handler.estimatedLocalStartTime;var elapsed=(Date.now()-_start)/1e3;',
  );
  // Not every caller has a `_gameManager` field (BitmojiAvatarPool and
  // TutorialMatch only have the local `matchController`), and that local can
  // be undefined. Resolve the controller defensively from whichever handle the
  // caller has, and fall back to polling the singleton.
  main = main.split(
    '(0,utilities.guardAgainstDestroy)(this.entity,matchController.awaitMatch)',
  ).join(
    '(0,utilities.guardAgainstDestroy)(this.entity,window.__chefAwaitMatch(matchController))',
  );
  // Two lobby controller instances can process the same state update and both
  // call handleStartGame, which joins the same match twice. The second join
  // replaces the socket's match listener and orphans the first MatchState.
  // Joining a match once per page is always correct.
  main = main.replace(
    'key:"handleStartGame",value:function(data){var _this$_match8,_this7=this;',
    'key:"handleStartGame",value:function(data){var _this$_match8,_this7=this;window.__chefJoinedMatches=window.__chefJoinedMatches||{};if(data&&data.matchId){var _chefLastJoin=window.__chefJoinedMatches[data.matchId]||0;if(Date.now()-_chefLastJoin<20000)return;window.__chefJoinedMatches[data.matchId]=Date.now();}',
  );
  // StartMatch preloads in-progress orders into an interim state with
  // roundStart:false. The client treats that as a round end and shows the
  // Score Attack round-end UI on every late join. Resume instead.
  main = main.replace(',roundStart:!1}', ',roundResume:!0}');
  // Station contents (grills, fryers, counters, generators) are local-only in
  // the original client. When a remote chef action arrives, replay the same
  // station interaction locally so food and stock stay in sync.
  main = main.replace(
    '{key:"onStateChanged",value:function(stateIn){var _this4=this,action=',
    '{key:"onStateChanged",value:function(stateIn){if(!this.isLocalPlayer&&stateIn.action&&window.__chefReplayStationAction){try{window.__chefReplayStationAction(this,stateIn)}catch(e){console.warn("station sync failed",e)}}var _this4=this,action=',
  );
  // While replaying a remote station action, do not echo a new ChefState or
  // animate the local chef. The remote chef animation is handled separately.
  main = main.replace(
    '{key:"performActionInternal",value:function(action,type){if(!this.localPlayerEntity||!this.match)',
    '{key:"performActionInternal",value:function(action,type){if(window.__chefReplayDepth>0)return Promise.resolve(!0);if(!this.localPlayerEntity||!this.match)',
  );
  // Our private server can broadcast a 990 debug snapshot. The original
  // client switch logs unknown opcodes as errors; ignore it explicitly.
  main = main.replace(
    'case OpCode_ExplodeBombUpdateCustomers:case OpCode_TimeOut:case OpCode_MigrateState:break;',
    'case OpCode_ExplodeBombUpdateCustomers:case OpCode_TimeOut:case OpCode_MigrateState:case 990:break;',
  );
  // The lobby can join the game match twice while its scene is swapping (the
  // second join replaces the socket's match listener). The first MatchState
  // then never receives ClientReady and its awaitClients promise hangs, which
  // keeps the VS loading overlay up forever even though the kitchen is ready.
  // The authoritative start time is known, so fall back to it.
  main = main.replace(
    'resolve()}))}));var delay=',
    'resolve()}))}));var _chefFallbackMs=Math.max(1000,((_this.estimatedLocalStartTime||Date.now())+2000)-Date.now());_this.awaitClients=Promise.race([_this.awaitClients,new Promise(function(r){setTimeout(r,_chefFallbackMs)})]);var delay=',
  );
  // A second match join can replace the socket listener while the scene
  // loads; keep awaitMatch resolvable even if match:connected was missed.
  main = main.replace(
    'awaitMatch=new Promise((function(resolve){return _this.once("match:connected",resolve)})),',
    'awaitMatch=new Promise((function(resolve){var _done=!1,_r=function(){if(_done)return;_done=!0;resolve.apply(null,arguments)};_this.once("match:connected",_r);var _poll=function(){try{if(GameManager.instance)GameManager.instance.once("match:connected",_r);else setTimeout(_poll,50)}catch(_e){setTimeout(_poll,50)}};_poll()})),',
  );
  // OrderManager scripts can initialise before the GameManager singleton
  // exists. Defer and retry instead of throwing, otherwise no customers are
  // ever created.
  main = main.replace(
    'key:"initialize",value:function(){var _this2=this;this.mustHaveProps(["orderBubbleTemplate"]),this._gameManager=GameManager.instance;',
    'key:"initialize",value:function(){var _this2=this;try{GameManager.instance}catch(_e){setTimeout(function(){_this2.initialize()},50);return;}this.mustHaveProps(["orderBubbleTemplate"]),this._gameManager=GameManager.instance;',
  );
  main = main.replace(
    'key:"initialize",value:function(){var _this2=this;this._gameManager=GameManager.instance;var _step,_iterator=AwayOrderManager_createForOfIteratorHelper',
    'key:"initialize",value:function(){var _this2=this;try{GameManager.instance}catch(_e){setTimeout(function(){_this2.initialize()},50);return;}this._gameManager=GameManager.instance;var _step,_iterator=AwayOrderManager_createForOfIteratorHelper',
  );
  // Several scene scripts read GameManager.instance.matchController during
  // initialisation, before the singleton exists. Hand them a proxy that
  // waits for the real controller instead of throwing.
  var safeController =
    '(function(){try{return GameManager.instance.matchController}catch(_e){return{awaitMatch:new Promise(function(resolve){var poll=function(){try{var mc=GameManager.instance.matchController;if(mc)resolve(mc.awaitMatch);else setTimeout(poll,50)}catch(_e2){setTimeout(poll,50)}};poll()}),once:function(){},on:function(){}}}})()';
  main = main.split('GameManager.instance.matchController').join(safeController);
  await writeFile(mainPath, main);

  console.log("Writing index.html and platform shim ...");
  await writeFile(join(DST, "index.html"), INDEX_HTML);
  await writeFile(join(DST, "chef-platform.js"), PLATFORM_JS);
  await writeFile(join(DST, "chef-config.js"), CONFIG_JS);

  console.log("Done. Patched build is in site/");
}

const INDEX_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
  <title>Chef Showdown</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    #chef-boot { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 14px; background: #16130f; color: #fff; font: 600 16px/1.4 Helvetica, Arial, sans-serif; z-index: 99999; }
    #chef-boot.hidden { display: none; }
    #chef-boot .bar { width: min(340px, 70vw); height: 8px; background: #332a20; border-radius: 99px; overflow: hidden; }
    #chef-boot .bar > i { display: block; height: 100%; width: 0; background: #f2b134; transition: width .2s ease; }
    #chef-boot small { opacity: .65; font-weight: 400; }
  </style>
</head>
<body>
  <div id="chef-boot">
    <div>Warming up the kitchen…</div>
    <div class="bar"><i id="chef-boot-progress"></i></div>
    <small id="chef-boot-status">Loading game assets</small>
  </div>
  <script src="/chef-config.js"></script>
  <script src="chef-platform.js"></script>
  <script nonce="chef">
    RTCPeerConnection = null;
    WebTransport = null;
  </script>
  <script src="files/assets/26779643/1/bootstrap.build.js"></script>
  <script src="playcanvas-stable.min.js"></script>
  <script src="files/assets/124639000/1/engine-patches.js"></script>
  <script src="__settings__.js"></script>
  <script src="__start__.js"></script>
  <script src="__loading__.js"></script>
</body>
</html>`;

const PLATFORM_JS = `/* Private web platform for Chef Showdown. */
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
})();`;

const CONFIG_JS = `/* Fallback runtime config. The Node web server serves this file dynamically in Docker. */
window.CHEF_NAKAMA = window.CHEF_NAKAMA || {
  host: location.hostname,
  port: location.port || (location.protocol === "https:" ? "443" : "80"),
  ssl: location.protocol === "https:",
  clientKey: "defaultkey"
};
`;

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
