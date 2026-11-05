import { GS, SS, USER_COLLECTION, FEATURE_FLAGS, makeGuildPassConfig, makeAvailableUnlocks } from "./settings.js";
import { clone, nowMs } from "./util.js";

function defaultInventory() {
  var out = {};
  Object.keys(GS.inventoryItems || {}).forEach(function (key) {
    out[key] = { level: 1, cards: 5 };
  });
  return out;
}

function defaultSkins() {
  var out = {};
  Object.keys(SS.avatarSkinDefinitions || {}).forEach(function (key) {
    out[key] = true;
  });
  out.chonk_chef = true;
  return out;
}

export function defaultUserDoc(userId, dataUser) {
  var displayName =
    (dataUser && dataUser.displayName) ||
    (dataUser && dataUser.name) ||
    "Chef";
  return {
    userId: userId,
    displayName: String(displayName).slice(0, 18),
    avatarId: (dataUser && dataUser.avatarId) || "",
    accentColour: (dataUser && dataUser.accentColour) || "#f2b134",
    cashAmount: 0,
    trophies: 0,
    sessionCount: 0,
    level: { level: 1, levelXP: 0 },
    games: {},
    itemInventory: defaultInventory(),
    cosmeticInventory: { "vip-v0": true },
    unlockedSkins: defaultSkins(),
    currentSkin: { skinId: "chonk_chef" },
    equippedItem: "none",
    iAPUser: false,
    newsOpenedTimestamp: 0,
    nextLootboxUnlockUTC: 0,
    notificationsScheduledUTC: 0,
    notShowThievesRecruitment: true,
    summerEvent2021: false,
    viewedInfoPopups: [],
    skinId: "chonk_chef",
    lootboxTokens: 0,
    unopenedBoxes: ["cardboard"],
    unopenedBoxCount: 1,
    createdAt: nowMs(),
    updatedAt: nowMs(),
  };
}

export function readUserDoc(nk, userId, dataUser) {
  var recs = [];
  try {
    recs = nk.storageRead([
      {
        collection: USER_COLLECTION,
        key: userId,
        userId: userId,
      },
    ]);
  } catch (e) {
    recs = [];
  }
  if (recs && recs.length > 0 && recs[0].value) {
    var doc = clone(recs[0].value);
    if (!doc.level) doc.level = { level: 1, levelXP: 0 };
    if (!doc.currentSkin) doc.currentSkin = { skinId: "chonk_chef" };
    if (!doc.itemInventory) doc.itemInventory = defaultInventory();
    if (!doc.unlockedSkins) doc.unlockedSkins = defaultSkins();
    if (!doc.cosmeticInventory) doc.cosmeticInventory = { "vip-v0": true };
    return doc;
  }
  return defaultUserDoc(userId, dataUser);
}

export function writeUserDoc(nk, userId, doc) {
  doc.updatedAt = nowMs();
  nk.storageWrite([
    {
      collection: USER_COLLECTION,
      key: userId,
      userId: userId,
      value: doc,
      permissionRead: 1,
      permissionWrite: 1,
    },
  ]);
  return doc;
}

export function makeGameData() {
  return {
    featureFlags: clone(FEATURE_FLAGS),
    sessionConfig: clone(SS.sessionConfig || {}),
    activeGameModes: clone(SS.schedule || {}),
    guildPassConfig: makeGuildPassConfig(),
    playerLevelConfig: clone(SS.playerLevelConfig || {}),
    iapList: {},
    beacon: {},
    guildAllowList: null,
    channelAllowList: null,
    userMessage: null,
    globalLeaderboardName: SS.globalLeaderboardName || "",
    liveEvent: null,
    ftueScriptName: SS.scriptForFTUE || "pioneerFTUE",
    news: clone(SS.news || {}),
    shop: { items: [] },
    store: { items: [] },
  };
}

export function makeUserInfo(doc, lobbyMatchId) {
  return {
    userDoc: doc,
    gameData: makeGameData(),
    configName: "private",
    serverVersion: "chef-private-1.0.0",
    serverName: "Private Kitchen",
    gameModeSchedule: clone(SS.schedule || {}),
    gameModeScheduleTime: nowMs(),
    availableUnlocks: makeAvailableUnlocks(),
    experiments: [],
    lobbyMatchId: lobbyMatchId || "",
    contextSessionCount: doc.sessionCount || 1,
  };
}

export function makePlayerSummary(doc) {
  return {
    userId: doc.userId,
    displayName: doc.displayName,
    avatarId: doc.avatarId,
    accentColour: doc.accentColour,
    currentSkin: doc.currentSkin,
    level: doc.level,
    trophies: doc.trophies,
    cashAmount: doc.cashAmount,
  };
}
