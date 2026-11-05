export function nowSec() {
  return Date.now() / 1000;
}

export function nowMs() {
  return Date.now();
}

export function parsePayload(payload) {
  if (!payload) return {};
  if (typeof payload === "object") return payload;
  try {
    var value = JSON.parse(payload);
    // Some client SDKs / proxies double-encode RPC payloads.
    if (typeof value === "string" && value.length > 1 && (value[0] === "{" || value[0] === "[")) {
      try { return JSON.parse(value); } catch (e) { return value; }
    }
    return value;
  } catch (e) {
    return {};
  }
}

export function parseJson(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch (e) {
    return fallback;
  }
}

export function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function uuid() {
  var s = "";
  for (var i = 0; i < 32; i++) {
    s += Math.floor(Math.random() * 16).toString(16);
  }
  return (
    s.slice(0, 8) +
    "-" +
    s.slice(8, 12) +
    "-4" +
    s.slice(13, 16) +
    "-" +
    ((parseInt(s[16], 16) & 3) | 8).toString(16) +
    s.slice(17, 20) +
    "-" +
    s.slice(20)
  );
}

export function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export function randomCode(len) {
  var alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var out = "";
  for (var i = 0; i < (len || 4); i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return out;
}

export function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function countsFromArray(items) {
  var out = {};
  (items || []).forEach(function (it) {
    out[it] = (out[it] || 0) + 1;
  });
  return out;
}

export function sumCounts(map) {
  var n = 0;
  Object.keys(map || {}).forEach(function (k) {
    n += map[k] || 0;
  });
  return n;
}

export function mapToArray(map) {
  var out = [];
  Object.keys(map || {}).forEach(function (k) {
    for (var i = 0; i < (map[k] || 0); i++) out.push(k);
  });
  return out;
}

export function matchesCounts(desired, pending) {
  var keys = Object.keys(desired || {});
  for (var i = 0; i < keys.length; i++) {
    if ((pending[keys[i]] || 0) < (desired[keys[i]] || 0)) return false;
  }
  return true;
}

export function firstName(name) {
  return String(name || "Chef").slice(0, 18);
}
