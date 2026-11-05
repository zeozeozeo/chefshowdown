import {
  GS,
  SS,
  CLASSIC_STAGES,
  DUEL_STAGES,
  PVE_STAGES,
} from "./settings.js";
import { clone, nowMs, parsePayload, randomCode } from "./util.js";
import { makeUserInfo, readUserDoc, writeUserDoc } from "./users.js";

function reply(obj) {
  return JSON.stringify(obj);
}

function success(doc) {
  return reply({
    status: "success",
    updatedUserInfo: makeUserInfo(doc, ""),
  });
}

function updateUser(nk, ctx, payload) {
  var data = payload.updateData || {};
  var doc = readUserDoc(nk, ctx.userId, {
    displayName: data.displayName,
    name: data.name,
    avatarId: data.avatarId,
    accentColour: data.accentColour || data.color,
  });
  if (data.displayName) doc.displayName = String(data.displayName).slice(0, 18);
  if (data.avatarId) doc.avatarId = data.avatarId;
  if (data.accentColour) doc.accentColour = data.accentColour;
  return doc;
}

function rpcStartsession(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = updateUser(nk, ctx, data);
  doc.sessionCount = (doc.sessionCount || 0) + 1;
  writeUserDoc(nk, ctx.userId, doc);
  var lobbyMatchId = "";
  var candidate = data.lobbyMatchId || data.instanceId || data.contextId || "";
  if (
    typeof candidate === "string" &&
    candidate.indexOf("-") > 0 &&
    candidate.length >= 32
  ) {
    lobbyMatchId = candidate;
  }
  return reply(makeUserInfo(doc, lobbyMatchId));
}

function rpcCreateLobbyMatch(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var params = {
    roomCode: data.roomCode || randomCode(4),
    mode: data.mode || "classic",
    stage: data.stage || "",
    hostId: data.hostId || "",
    maxPlayers: data.maxPlayers || 8,
    players: data.players || [],
  };
  var matchId = nk.matchCreate("chef_lobby", params);
  logger.info("Created lobby match %s for room %s", matchId, params.roomCode);
  return reply({ matchId: matchId, roomCode: params.roomCode });
}

function rpcGetStages() {
  return reply({
    classic: CLASSIC_STAGES,
    duel: DUEL_STAGES,
    pve: PVE_STAGES,
  });
}

function rpcSetEquippedItem(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = readUserDoc(nk, ctx.userId, {});
  var item = data.item || data.itemType || "none";
  if (item && item !== "none") {
    doc.equippedItem = item;
    if (SS.avatarSkinDefinitions && SS.avatarSkinDefinitions[item]) {
      doc.currentSkin = { skinId: item };
      doc.skinId = item;
    }
  } else {
    doc.equippedItem = "none";
  }
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}

function rpcUpgradeInventoryItem(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.itemInventory = doc.itemInventory || {};
  var updated = data.updatedItem;
  if (updated && updated.item) {
    doc.itemInventory[updated.item] = {
      level: updated.level || 1,
      cards: updated.cards || 0,
    };
  }
  if (data.cashCost) {
    doc.cashAmount = Math.max(0, (doc.cashAmount || 0) - data.cashCost);
  }
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}

function rpcAwardLootbox(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.itemInventory = doc.itemInventory || {};
  doc.cosmeticInventory = doc.cosmeticInventory || {};
  doc.unopenedBoxes = doc.unopenedBoxes || [];

  if (data.items && data.items.length) {
    data.items.forEach(function (entry) {
      if (!entry || !entry.item) return;
      var cur = doc.itemInventory[entry.item] || { level: 0, cards: 0 };
      cur.level = Math.max(cur.level || 0, entry.level || 0);
      cur.cards = (cur.cards || 0) + (entry.cards || 0);
      doc.itemInventory[entry.item] = cur;
    });
  } else {
    var boxName =
      data.lootBoxName ||
      (doc.unopenedBoxes.length ? doc.unopenedBoxes.shift() : "cardboard");
    var box = GS.lootBoxes[boxName] || GS.lootBoxes.cardboard;
    var pool = Object.keys(GS.inventoryItems || {});
    (box && box.data ? box.data : []).forEach(function (roll) {
      var count =
        (roll.min || 1) +
        Math.floor(Math.random() * ((roll.max || 1) - (roll.min || 1) + 1));
      for (var i = 0; i < count; i++) {
        var item = pool.length
          ? pool[Math.floor(Math.random() * pool.length)]
          : "burgerTime_grill";
        var cur = doc.itemInventory[item] || { level: 0, cards: 0 };
        cur.cards = (cur.cards || 0) + 1;
        doc.itemInventory[item] = cur;
      }
    });
  }
  if (data.cash) doc.cashAmount = (doc.cashAmount || 0) + data.cash;
  doc.unopenedBoxCount = (doc.unopenedBoxes || []).length;
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}

function rpcSetGiftLootboxTimer(ctx, logger, nk) {
  var doc = readUserDoc(nk, ctx.userId, {});
  var seconds = SS.secondsBetweenLootUnlocks || 21600;
  doc.nextLootboxUnlockUTC = nowMs() + seconds * 1000;
  doc.unopenedBoxes = doc.unopenedBoxes || [];
  if (doc.unopenedBoxes.length === 0) doc.unopenedBoxes.push("cardboard");
  doc.unopenedBoxCount = doc.unopenedBoxes.length;
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}

function rpcUpdateNewsReadTimestamp(ctx, logger, nk) {
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.newsOpenedTimestamp = nowMs();
  writeUserDoc(nk, ctx.userId, doc);
  return reply({ status: "success" });
}

function rpcSeenRecruitPopup(ctx, logger, nk) {
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.notShowThievesRecruitment = true;
  writeUserDoc(nk, ctx.userId, doc);
  return reply({ status: "success" });
}

function rpcGetEntitlements() {
  return reply({ entitlements: [], validPackNames: [] });
}

function rpcGetEventStatus(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  return reply({
    eventId: data.eventId || "",
    active: false,
    currentTugOfWar: null,
  });
}

function rpcGetBeaconSignature() {
  return reply({ signature: "", enabled: false });
}

function rpcPlayerBoostedGuild() {
  return reply({ status: "success", guildDoc: null });
}

function rpcPlayerCheckPromote() {
  return reply({ status: "success", promote: false });
}

function rpcPlayerMadePurchase() {
  return reply({ status: "success", entitlements: [] });
}

function rpcRequestLeaderboard() {
  return reply({
    ownerScores: [],
    topScores: [],
    previousOwnerScores: [],
    previousTopScores: [],
    leaderboard: null,
  });
}

function rpcRequestLeaderboardRecords() {
  return reply({ scores: [] });
}

function rpcUpdateTeamStream() {
  return reply({ status: "success" });
}

function rpcSelectModeTeamStream() {
  return reply({ status: "success" });
}

function rpcDebugEndRoom(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var list = nk.matchList(100, true, null, null, null, null);
  var n = 0;
  list.forEach(function (m) {
    if (m.label && data.roomCode && String(m.label).indexOf(String(data.roomCode)) >= 0) {
      try {
        nk.matchSignal(m.matchId, JSON.stringify({ type: "end" }));
        n++;
      } catch (e) {}
    }
  });
  return reply({ ok: true, signalled: n });
}

function rpcDebugSignalMatch(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  if (!data.matchId) return reply({ error: "matchId required" });
  try {
    nk.matchSignal(data.matchId, JSON.stringify(data.signal || { type: "end" }));
    return reply({ ok: true });
  } catch (e) {
    return reply({ error: String(e) });
  }
}

export function registerRpcs(initializer) {
  initializer.registerRpc("startsession", rpcStartsession);
  initializer.registerRpc("create_lobby_match", rpcCreateLobbyMatch);
  initializer.registerRpc("get_stages", rpcGetStages);
  initializer.registerRpc("setequippeditem", rpcSetEquippedItem);
  initializer.registerRpc("upgradeinventoryitem", rpcUpgradeInventoryItem);
  initializer.registerRpc("awardlootbox", rpcAwardLootbox);
  initializer.registerRpc("setgiftlootboxtimer", rpcSetGiftLootboxTimer);
  initializer.registerRpc("updatenewsreadtimestamp", rpcUpdateNewsReadTimestamp);
  initializer.registerRpc("seenrecruitpopup", rpcSeenRecruitPopup);
  initializer.registerRpc("get-entitlements", rpcGetEntitlements);
  initializer.registerRpc("geteventstatus", rpcGetEventStatus);
  initializer.registerRpc("getBeaconSignature", rpcGetBeaconSignature);
  initializer.registerRpc("player-boosted-guild", rpcPlayerBoostedGuild);
  initializer.registerRpc("player-check-promote", rpcPlayerCheckPromote);
  initializer.registerRpc("player-made-purchase", rpcPlayerMadePurchase);
  initializer.registerRpc("request-leaderboard", rpcRequestLeaderboard);
  initializer.registerRpc("request-leaderboard-records", rpcRequestLeaderboardRecords);
  initializer.registerRpc("updateteamstream", rpcUpdateTeamStream);
  initializer.registerRpc("selectmodeteamstream", rpcSelectModeTeamStream);
}

export {
  rpcStartsession,
  rpcCreateLobbyMatch,
  rpcGetStages,
  rpcSetEquippedItem,
  rpcUpgradeInventoryItem,
  rpcAwardLootbox,
  rpcSetGiftLootboxTimer,
  rpcUpdateNewsReadTimestamp,
  rpcSeenRecruitPopup,
  rpcGetEntitlements,
  rpcGetEventStatus,
  rpcGetBeaconSignature,
  rpcPlayerBoostedGuild,
  rpcPlayerCheckPromote,
  rpcPlayerMadePurchase,
  rpcRequestLeaderboard,
  rpcRequestLeaderboardRecords,
  rpcUpdateTeamStream,
  rpcSelectModeTeamStream,
  rpcDebugSignalMatch,
  rpcDebugEndRoom,
};
