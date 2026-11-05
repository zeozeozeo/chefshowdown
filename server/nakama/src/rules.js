import { countsFromArray, nowSec, pick } from "./util.js";

export function makeWaveRunner(stageCfg, startTime) {
  var balance = (stageCfg && stageCfg.gameplayBalance) || {};
  var waves = (balance.waves && balance.waves.default) || [];
  var pve = false;
  var runSteps = 0;
  if (!waves.length && balance.run && balance.waves) {
    pve = true;
    runSteps = balance.run.length;
    var flat = [];
    balance.run.forEach(function (step, stepIndex) {
      var options = step.options || [];
      if (!options.length) return;
      var name = options[Math.floor(Math.random() * options.length)];
      var list = balance.waves[name] || [];
      list.forEach(function (entry) {
        flat.push(Object.assign({}, entry, { _round: stepIndex + 1 }));
      });
    });
    waves = flat;
  }
  var repeatIndex = -1;
  if (!pve) {
    for (var i = 0; i < waves.length; i++) {
      if (waves[i].type === "repeat_point") repeatIndex = i;
    }
  }
  return {
    waves: waves,
    repeatIndex: repeatIndex,
    index: 0,
    nextAt: startTime,
    round: 1,
    slots: 1,
    done: false,
    roundStart: true,
    roundEnded: false,
    nextOrder: 1,
    pve: pve,
    runSteps: runSteps,
    cycle: 0,
  };
}

/**
 * Advance a wave runner.  `spawn(entry)` must return true if the order was
 * placed in a free customer slot, false if it needs to wait for a slot.
 */
export function tickWaveRunner(runner, now, stageCfg, spawn) {
  var out = { spawned: 0, roundStart: false, roundEnded: false };
  if (!runner || runner.done) return out;
  if (runner.roundStart) {
    out.roundStart = true;
    runner.roundStart = false;
  }
  var guard = 0;
  while (runner.index < runner.waves.length && now >= runner.nextAt) {
    if (guard++ > 200) break;
    var entry = runner.waves[runner.index];
    if (!entry) break;
    if (entry.type === "round_start" || entry.type === "round_end") {
      if (entry.type === "round_start") {
        runner.round = (runner.cycle || 0) * (runner.runSteps || 0) + (entry._round || runner.round);
        runner.roundStart = true;
        out.roundStart = true;
      }
      runner.nextAt += entry.time || 0;
      runner.index++;
      continue;
    }
    if (entry.type === "set_slots_to") {
      var maxSlots2 = (stageCfg && stageCfg.customerSlots) || 4;
      runner.slots = Math.min(entry.value || 1, maxSlots2);
      runner.index++;
      continue;
    }
    if (entry.type === "delay") {
      runner.nextAt += entry.time || 0;
      runner.index++;
      continue;
    }
    if (entry.type === "new_slot") {
      var maxSlots = (stageCfg && stageCfg.customerSlots) || 4;
      runner.slots = Math.min(runner.slots + 1, maxSlots);
      runner.index++;
      continue;
    }
    if (entry.type === "repeat_point") {
      runner.index++;
      continue;
    }
    if (entry.type === "lock_to_position" || entry.type === "unlock_positions") {
      runner.index++;
      continue;
    }
    var placed = spawn(entry);
    if (!placed) break;
    out.spawned++;
    runner.index++;
  }
  if (runner.index >= runner.waves.length) {
    if (runner.pve) {
      runner.cycle = (runner.cycle || 0) + 1;
      runner.index = 0;
      runner.roundStart = true;
      runner.roundEnded = true;
      out.roundEnded = true;
      out.endedRound = runner.round;
      // Report the finished round before announcing the next one. The next
      // tick consumes runner.roundStart, so the client never receives an
      // end and a start in the same message (it can only handle one branch).
      out.roundStart = false;
    } else if (runner.repeatIndex >= 0) {
      runner.index = runner.repeatIndex + 1;
      out.endedRound = runner.round;
      runner.round++;
      runner.roundStart = true;
      runner.roundEnded = true;
      out.roundEnded = true;
      out.roundStart = false;
    } else {
      runner.done = true;
    }
  }
  return out;
}

export function makeOrderFromEntry(entry, runner, stageCfg, now, orderKey) {
  var balance = (stageCfg && stageCfg.gameplayBalance) || {};
  var blueprints = balance.blueprints || {};
  var bonus = {
    bonusMultiplier: entry.multiplier || 0,
    wildcardValue: entry.type === "wildcard_order" ? entry.value || 10 : 0,
    isPatient: entry.type === "patient_order" || entry.type === "patientOrder",
  };
  var desired = {};
  if (entry.type !== "wildcard_order") {
    var blueprintKey = entry.blueprint || entry.type;
    var pool = blueprints[blueprintKey];
    if (!pool && entry.type === "moneybag_order") {
      pool = blueprints.mediumOrder || blueprints[Object.keys(blueprints)[0]];
    }
    if (!pool) {
      var keys = Object.keys(blueprints);
      pool = keys.length ? blueprints[keys[0]] : [];
    }
    var bp = pool && pool.length ? pick(pool) : null;
    if (bp && bp.value) desired = countsFromArray(bp.value);
  }
  var patience = Number(entry.time) || 40;
  var reduction = Number(balance.timeReductionOnLoop) || 0;
  if (runner && reduction > 0 && runner.cycle > 0) {
    // PvE loops get shorter, as encoded by the original stage balance data.
    patience = Math.max(8, patience * Math.pow(1 - reduction, runner.cycle));
  }
  return {
    orderKey: orderKey,
    slotIndex: -1,
    requestTime: now,
    expiryTime: now + patience,
    desiredItems: desired,
    pendingItems: JSON.parse(JSON.stringify(desired)),
    bonusOrder: bonus,
    lastUpdatedBy: "",
    completedByTeam: "",
    contributingChefs: [],
    finishedWithReward: null,
    reward: null,
    customerSequence: 0,
    round: runner ? runner.round : 1,
  };
}

export function computeReward(order, now, stageCfg) {
  var balance = (stageCfg && stageCfg.gameplayBalance) || {};
  var prices = balance.salePrices || {};
  var tips = balance.tips || { high: 4, mid: 2, low: 0 };
  var wildcard = order.bonusOrder && order.bonusOrder.wildcardValue;
  var base = 0;
  var itemCount = 0;
  if (wildcard) {
    base = Number(wildcard) || 10;
    itemCount = 1;
  } else {
    Object.keys(order.desiredItems || {}).forEach(function (item) {
      var n = order.desiredItems[item] || 0;
      itemCount += n;
      base += (prices[item] || 0) * n;
    });
  }
  var total = Math.max(1, order.expiryTime - order.requestTime);
  var left = Math.max(0, order.expiryTime - now);
  var ratio = left / total;
  var stars = ratio > 0.66 ? 3 : ratio > 0.33 ? 2 : 1;
  var tip = stars === 3 ? tips.high || 0 : stars === 2 ? tips.mid || 0 : tips.low || 0;
  tip *= Math.max(1, Math.min(4, itemCount));
  if (order.bonusOrder && order.bonusOrder.bonusMultiplier) {
    base *= Number(order.bonusOrder.bonusMultiplier) || 1;
  }
  return {
    cash: Math.round(base),
    tips: Math.round(tip),
    stars: stars,
  };
}
