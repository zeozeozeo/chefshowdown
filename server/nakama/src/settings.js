import gameSettings from "../../../data/game-settings.json";

export const GS = gameSettings;
export const SS = gameSettings.serverSettings;
export const MATCH_TYPES = SS.matchTypeDefinitions;

export const USER_COLLECTION = "chef_users";
export const ROOM_COLLECTION = "chef_rooms";

export const FEATURE_FLAGS = Object.assign({}, SS.featureFlags, {
  matchType_classic: true,
  matchType_duel: true,
  versusMode: true,
  scoreAttackMode: true,
  characterCosmetics: true,
  displayStolenBubbles: true,
  inGameExitButtonPvE: true,
  showHighScorePopup: false,
  enableTutorialMatch: false,
  enableFTUE: false,
  autoShowSummer2021Started: false,
  autoShowSummer2021Calendar: false,
  showStarterPack: false,
  sessionStartPromo: false,
  showInviteFriendsButton: false,
  guildXPEnabled: false,
  showLeagueLeaderboard: false,
  showLootboxVictoryRoad: false,
  autoPopupLootboxVictoryRoad: false,
  enableMobileLogo: false,
  hidePVPButton: false,
  tipsSystem: false,
  filterOnAvailabiltyFlagForSKU: false,
  playerXPEnabled: true,
  leagueLeaderboardWarningNotification: false,
  leagueLeaderboardResetNotification: false,
});

export const CLASSIC_STAGES = [
  "burgerTime",
  "happyHour",
  "sushiMode",
  "winterMode",
  "breakfastClub",
  "potionParty",
  "wurstNightmare",
  "lunarNewYear",
  "iceCreamParlour",
  "dosaDash",
  "doubleDiner",
  "kingOfTheGrill",
  "tacoTime",
];

export const DUEL_STAGES = [
  "burgerTime",
  "happyHour",
  "sushiMode",
  "winterMode",
  "breakfastClub",
  "potionParty",
  "wurstNightmare",
  "lunarNewYear",
  "iceCreamParlour",
];

export const PVE_STAGES = [
  "burgerTimeScoreAttack",
  "happyHourScoreAttack",
  "sushiModeScoreAttack",
  "winterModeScoreAttack",
  "burgerTimeScoreAttackExtreme",
  "winterModeScoreAttackExtreme",
];

export function stageConfig(stage, matchType) {
  const def = SS.gameModeDefinitions[stage];
  if (!def || !def.matchTypes) return null;
  if (def.matchTypes[matchType]) return def.matchTypes[matchType];
  if (matchType === "duel" && def.matchTypes.classic) return def.matchTypes.classic;
  if (matchType === "coop" && def.matchTypes.classic) return def.matchTypes.classic;
  if (matchType === "classic" && def.matchTypes.duel) return def.matchTypes.duel;
  const keys = Object.keys(def.matchTypes);
  return keys.length ? def.matchTypes[keys[0]] : null;
}

export function matchTypeDefinition(matchType) {
  if (matchType === "duel" || matchType === "coop") {
    return MATCH_TYPES.classic;
  }
  return MATCH_TYPES[matchType] || MATCH_TYPES.classic;
}

export function allStagesForMode(mode) {
  if (mode === "duel") return DUEL_STAGES;
  if (mode === "pve") return PVE_STAGES;
  return CLASSIC_STAGES;
}

export function modeToMatchType(mode) {
  if (mode === "pve") return "pve";
  if (mode === "duel") return "duel";
  return "classic";
}

export function stageDisplayName(stage) {
  const def = SS.gameModeDefinitions[stage];
  return def ? def.displayName : stage;
}

export function makeGuildPassConfig() {
  // The final production build only shipped picker art and pass entries for
  // the four released versus kitchens and six Score Attack kitchens. Adding
  // extra entries here would render duplicate tiles with fallback art, which
  // does not match the original lobby. Keep exactly the original set, but
  // unlock every entry for our private server.
  const cfg = JSON.parse(JSON.stringify(SS.guildPass || {}));
  cfg.items = cfg.items || {};
  cfg.levels = cfg.levels || [];
  cfg.defaultFreeItems = cfg.defaultFreeItems || [];
  cfg.defaultBoostItems = cfg.defaultBoostItems || [];

  Object.keys(cfg.items).forEach((key) => {
    const item = cfg.items[key];
    if (!item || item.itemType !== "stage" || !item.gameMode) return;
    if (cfg.defaultFreeItems.indexOf(key) < 0) cfg.defaultFreeItems.push(key);
  });

  return cfg;
}

export function makeAvailableUnlocks() {
  const cfg = makeGuildPassConfig();
  const out = {};
  Object.keys(cfg.items).forEach((key) => {
    const item = cfg.items[key];
    if (!item || item.itemType !== "stage" || !item.gameMode) return;
    out[key] = {
      gameMode: item.gameMode,
      unlockedFree: true,
      unlockedBoosted: false,
    };
  });
  return out;
}

export function makeAvailableMode(mode) {
  const out = {};
  allStagesForMode(mode).forEach((stage) => {
    out[stage] = {
      unlockedFree: true,
      unlockedBoosted: false,
      freeUnlockName: "stage_" + stage + "_" + modeToMatchType(mode),
    };
  });
  return out;
}

export function defaultStageForMode(mode) {
  if (mode === "pve") return PVE_STAGES[0];
  if (mode === "duel") return DUEL_STAGES[0];
  return CLASSIC_STAGES[0];
}
