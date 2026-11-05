import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { makeWaveRunner, tickWaveRunner, makeOrderFromEntry, computeReward } from "../server/nakama/src/rules.js";

const gs = JSON.parse(readFileSync(new URL("../data/game-settings.json", import.meta.url)));
const defs = gs.serverSettings.gameModeDefinitions;

for (const [stage, def] of Object.entries(defs)) {
  for (const [type, cfg] of Object.entries(def.matchTypes || {})) {
    if (!cfg.enabled) continue;
    test(`${stage}/${type} wave runner produces orders`, () => {
      const runner = makeWaveRunner(cfg, 0);
      assert.ok(runner.waves.length > 0, "wave list");
      let spawned = [];
      let now = 0;
      for (let i = 0; i < 400 && spawned.length < 4; i++) {
        now += 1;
        const out = tickWaveRunner(runner, now, cfg, (entry) => {
          const order = makeOrderFromEntry(entry, runner, cfg, now, "o" + spawned.length);
          spawned.push(order);
          return true;
        });
        if (out.spawned) continue;
      }
      assert.ok(spawned.length > 0, "at least one order spawned");
      for (const o of spawned) {
        assert.ok(o.expiryTime > o.requestTime, "patience");
        assert.ok(o.bonusOrder && typeof o.bonusOrder.bonusMultiplier === "number", "bonus order");
        const reward = computeReward({ ...o, pendingItems: {} }, o.requestTime + 1, cfg);
        assert.ok(reward.cash >= 0 && reward.stars >= 1 && reward.stars <= 3, "reward");
      }
    });
  }
}

test("reward bands: stars and tips follow remaining patience", () => {
  const cfg = {
    gameplayBalance: {
      salePrices: { burger: 10 },
      tips: { high: 4, mid: 2, low: 0 },
    },
  };
  const order = {
    requestTime: 0,
    expiryTime: 100,
    desiredItems: { burger: 1 },
    bonusOrder: { bonusMultiplier: 0, wildcardValue: 0 },
  };
  const early = computeReward(order, 10, cfg);
  const mid = computeReward(order, 50, cfg);
  const late = computeReward(order, 80, cfg);
  assert.equal(early.stars, 3);
  assert.equal(mid.stars, 2);
  assert.equal(late.stars, 1);
  assert.equal(early.cash, 10);
  assert.ok(early.tips > mid.tips && mid.tips > late.tips);
});

test("moneybag and wildcard orders use their bonuses", () => {
  const cfg = {
    gameplayBalance: {
      salePrices: { burger: 10 },
      tips: { high: 4, mid: 2, low: 0 },
    },
  };
  const moneybag = {
    requestTime: 0,
    expiryTime: 100,
    desiredItems: { burger: 1 },
    bonusOrder: { bonusMultiplier: 5, wildcardValue: 0 },
  };
  assert.equal(computeReward(moneybag, 10, cfg).cash, 50);
  const wildcard = {
    requestTime: 0,
    expiryTime: 100,
    desiredItems: {},
    bonusOrder: { bonusMultiplier: 0, wildcardValue: 10 },
  };
  assert.equal(computeReward(wildcard, 10, cfg).cash, 10);
});

test("wave runner reports a finished round, then starts the next one", () => {
  const cfg = {
    customerSlots: 4,
    gameplayBalance: {
      salePrices: { burger: 10 },
      blueprints: { singleOrder: [{ value: ["burger"] }] },
      waves: {
        default: [
          { type: "round_start", time: 1 },
          { type: "singleOrder", time: 10 },
          { type: "repeat_point" },
          { type: "singleOrder", time: 10 },
          { type: "singleOrder", time: 10 },
        ],
      },
    },
  };
  const runner = makeWaveRunner(cfg, 0);
  let allowSpawn = true;
  const spawn = () => allowSpawn;

  const first = tickWaveRunner(runner, 0.5, cfg, spawn);
  assert.equal(first.roundStart, true, "first tick announces round 1");
  assert.equal(first.roundEnded, false, "round 1 has not finished yet");

  const second = tickWaveRunner(runner, 2, cfg, spawn);
  assert.equal(second.roundEnded, true, "consuming the wave list ends the round");
  assert.equal(second.endedRound, 1);
  assert.equal(second.roundStart, false, "end and start are split across ticks");

  allowSpawn = false;
  const third = tickWaveRunner(runner, 3, cfg, spawn);
  assert.equal(third.roundStart, true, "next tick announces round 2");
  assert.equal(third.roundEnded, false, "a blocked spawn does not end the round");
  assert.equal(runner.round, 2);
});

test("pve run pool flattens and cycles rounds", () => {
  const cfg = {
    customerSlots: 2,
    gameplayBalance: {
      salePrices: { burger: 10 },
      blueprints: { easyOrder: [{ value: ["burger"] }] },
      waves: {
        wave_a: [{ type: "round_start", time: 1 }, { type: "easyOrder", time: 10 }],
        wave_b: [{ type: "round_start", time: 1 }, { type: "easyOrder", time: 10 }],
      },
      run: [{ options: ["wave_a"] }, { options: ["wave_b"] }],
    },
  };
  const runner = makeWaveRunner(cfg, 0);
  assert.ok(runner.pve, "run-based stage is detected as PvE");
  assert.equal(runner.runSteps, 2);
  assert.equal(runner.waves.length, 4, "both step waves are flattened");
  let now = 0;
  let ends = 0;
  for (let i = 0; i < 40; i++) {
    now += 1;
    const out = tickWaveRunner(runner, now, cfg, () => true);
    if (out.roundEnded) ends++;
  }
  assert.ok(ends >= 1, "pve cycles emit round ends");
  assert.ok(runner.round >= 2, "pve rounds advance across cycles");
});

test("station data has prices and blueprints for every order type", () => {
  for (const [stage, def] of Object.entries(defs)) {
    for (const [type, cfg] of Object.entries(def.matchTypes || {})) {
      if (!cfg.enabled) continue;
      const balance = cfg.gameplayBalance || {};
      const prices = balance.salePrices || {};
      const blueprints = balance.blueprints || {};
      const control = new Set([
        "delay",
        "new_slot",
        "set_slots_to",
        "repeat_point",
        "round_start",
        "round_end",
        "lock_to_position",
        "unlock_positions",
        "wildcard_order",
      ]);
      const entries = [];
      if (balance.waves && balance.waves.default) entries.push(...balance.waves.default);
      if (balance.waves && balance.run) {
        for (const step of balance.run) {
          for (const name of step.options || []) entries.push(...(balance.waves[name] || []));
        }
      }
      for (const entry of entries) {
        if (control.has(entry.type)) continue;
        const key = entry.blueprint || entry.type;
        assert.ok(
          blueprints[key],
          `${stage}/${type}: order type ${entry.type} has blueprint ${key}`,
        );
        for (const blueprint of blueprints[key]) {
          for (const item of blueprint.value || []) {
            assert.ok(
              prices[item] !== undefined,
              `${stage}/${type}: item ${item} has a sale price`,
            );
          }
        }
      }
    }
  }
});
