import {
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
} from "./rpc.js";
import { lobbyMatchHandler } from "./lobby.js";
import { gameMatchHandler } from "./game.js";

function InitModule(ctx, logger, nk, initializer) {
  logger.info("Chef Showdown private server module initialising");

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
  initializer.registerRpc("debug_signal_match", rpcDebugSignalMatch);
  initializer.registerRpc("debug_end_room", rpcDebugEndRoom);

  initializer.registerMatch("chef_lobby", lobbyMatchHandler);
  initializer.registerMatch("chef_game", gameMatchHandler);

  logger.info("Chef Showdown private server module ready");
}

// Make InitModule available to the goja global scope. The file itself is
// evaluated as a plain script (not a module), so top-level declarations are
// already global; this assignment is a belt-and-braces fallback.
if (typeof globalThis !== "undefined") {
  globalThis.InitModule = InitModule;
}
