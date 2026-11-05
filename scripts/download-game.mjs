#!/usr/bin/env node
/**
 * Chef Showdown asset downloader.
 *
 * Discord application ID: 1037680572660727838
 *
 * The Discord application itself is shut down, but its PlayCanvas CDN still
 * serves the production build. This script downloads the complete build plus
 * every asset referenced by config.json, and extracts the embedded game rules.
 *
 * Usage:
 *   node scripts/download-game.mjs [--force] [--concurrency 8]
 */

import { createWriteStream } from "node:fs";
import { mkdir, readFile, writeFile, stat, rm } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join, normalize, resolve } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const APP_ID = "1037680572660727838";
const BASE = `https://1037680572660727838.discordsays.com/`;
const ROOT = resolve(new URL("..", import.meta.url).pathname);
const GAME_DIR = join(ROOT, "game");
const DATA_DIR = join(ROOT, "data");

const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const CONCURRENCY = Number(
  args.includes("--concurrency")
    ? args[args.indexOf("--concurrency") + 1]
    : 10,
);

const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ChefShowdownPreservation/1.0";

const ROOT_FILES = [
  "__loading__.js",
  "__settings__.js",
  "__start__.js",
  "playcanvas-stable.min.js",
  "config.json",
  "styles.css",
  "manifest.json",
  "glslang.js",
  "twgsl.js",
  "favicon.ico",
  "cdnfonts/s/93931/gg sans Bold.woff",
];

const OPTIONAL = new Set(["glslang.js", "twgsl.js", "favicon.ico"]);

function sha256(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

function safeRel(url) {
  const clean = decodeURIComponent(url.replace(/^https?:\/\/[^/]+\//, "").replace(/^\/+/, ""));
  const p = normalize(clean).replace(/^(\.\.(\/|\\|$))+/, "");
  if (!p || p.startsWith("..") || p.includes("\0")) {
    throw new Error(`Unsafe path: ${url}`);
  }
  return p;
}

async function fetchBuffer(url, { retries = 3 } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": UA, Accept: "*/*" },
        redirect: "follow",
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }
      const ab = await res.arrayBuffer();
      return {
        buffer: Buffer.from(ab),
        contentType: res.headers.get("content-type") || "",
        contentLength: Number(res.headers.get("content-length") || ab.byteLength),
        finalUrl: res.url,
      };
    } catch (err) {
      lastErr = err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 350 * 2 ** attempt));
      }
    }
  }
  throw lastErr;
}

async function exists(p) {
  try {
    const s = await stat(p);
    return s.size > 0;
  } catch {
    return false;
  }
}

async function downloadPath(rel, meta, manifest, { required = true } = {}) {
  const target = join(GAME_DIR, rel);
  // `rel` is the decoded on-disk path; the original config URL may contain
  // percent-encoding (sometimes double-encoding) that the CDN requires.
  const url = meta.url ? new URL(meta.url, BASE).href : new URL(rel, BASE).href;
  const already = await exists(target);
  if (already && !FORCE) {
    const s = await stat(target);
    if (meta.size && s.size !== meta.size) {
      // Size mismatch, re-download.
    } else {
      manifest.push({
        path: rel,
        url,
        bytes: s.size,
        status: "cached",
        sha256: null,
      });
      return true;
    }
  }

  try {
    const { buffer, contentType } = await fetchBuffer(url);
    if (meta.size && buffer.length !== meta.size && !rel.endsWith(".woff")) {
      // PlayCanvas's config size is sometimes the uncompressed source size
      // while the CDN serves a genuinely different (usually compressed)
      // artifact. Keep the file and record the discrepancy rather than
      // failing the whole preservation run.
      console.warn(
        `\n  size differs for ${rel}: config ${meta.size}, served ${buffer.length}`,
      );
    }
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, buffer);
    manifest.push({
      path: rel,
      url,
      bytes: buffer.length,
      status: "downloaded",
      contentType,
      sha256: sha256(buffer),
    });
    return true;
  } catch (err) {
    manifest.push({
      path: rel,
      url,
      bytes: 0,
      status: required ? "failed" : "optional-missing",
      error: String(err),
    });
    if (required) throw new Error(`${rel}: ${err}`);
    console.warn(`  optional missing: ${rel} (${err})`);
    return false;
  }
}

async function pool(items, concurrency, worker) {
  let index = 0;
  const results = new Array(items.length);
  async function run() {
    while (index < items.length) {
      const i = index++;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  return results;
}

const JS_STRING_LITERAL =
  /([A-Za-z0-9_$]+)\s*=\s*JSON\.parse\(\s*'((?:\\[\s\S]|[^'\\])*)'\s*\)/g;

function parseEmbeddedConfig(source, variable) {
  const re = new RegExp(
    `(?:const|let|var)?\\s*${variable}\\s*=\\s*JSON\\.parse\\(\\s*'((?:\\\\[\\s\\S]|[^'\\\\])*)'\\s*\\)`,
  );
  const m = source.match(re);
  if (!m) throw new Error(`Could not find ${variable} in __loading__.js`);
  // The captured text is a JavaScript single-quoted string body. Re-create the
  // literal and evaluate only that literal, then JSON.parse it.
  const literal = `'${m[1]}'`;
  const json = Function(`"use strict"; return ${literal};`)();
  return JSON.parse(json);
}

async function main() {
  const started = Date.now();
  console.log(`Chef Showdown downloader`);
  console.log(`App ID: ${APP_ID}`);
  console.log(`Source: ${BASE}`);
  console.log(`Target: ${GAME_DIR}`);
  console.log(`Force:  ${FORCE}\n`);

  await mkdir(GAME_DIR, { recursive: true });
  await mkdir(DATA_DIR, { recursive: true });

  const manifest = [];

  console.log("Downloading runtime files...");
  for (const rel of ROOT_FILES) {
    const required = !OPTIONAL.has(rel);
    process.stdout.write(`  ${rel} ... `);
    try {
      await downloadPath(rel, { size: 0 }, manifest, { required });
      console.log("ok");
    } catch (err) {
      console.log("FAILED");
      throw err;
    }
  }

  console.log("\nReading config.json...");
  const configText = await readFile(join(GAME_DIR, "config.json"), "utf8");
  const config = JSON.parse(configText);
  const assets = config.assets || {};
  const scenes = config.scenes || [];
  const assetFiles = Object.entries(assets)
    .map(([id, a]) => ({ id, ...a }))
    .filter((a) => a.file && a.file.url);

  console.log(
    `  ${Object.keys(assets).length} assets, ${assetFiles.length} files, ${scenes.length} scenes`,
  );

  console.log("\nDownloading asset files...");
  let done = 0;
  const assetResults = await pool(assetFiles, CONCURRENCY, async (a) => {
    const url = a.file.url;
    const rel = safeRel(url);
    try {
      await downloadPath(rel, { size: a.file.size || 0, url: a.file.url }, manifest);
      done++;
      if (done % 100 === 0 || done === assetFiles.length) {
        process.stdout.write(`\r  ${done}/${assetFiles.length} files`);
      }
      return true;
    } catch (err) {
      console.error(`\n  failed ${a.id} ${rel}: ${err.message}`);
      return false;
    }
  });
  const failedAssets = assetResults.filter((r) => !r).length;
  if (failedAssets) {
    console.warn(`\n  ${failedAssets} asset file(s) were unavailable`);
  }
  console.log("\n");

  console.log("Downloading scene JSONs...");
  for (const scene of scenes) {
    const rel = safeRel(scene.url);
    process.stdout.write(`  ${scene.name || rel} ... `);
    try {
      await downloadPath(rel, { size: 0, url: scene.url }, manifest);
      console.log("ok");
    } catch (err) {
      console.log(`FAILED (${err.message})`);
    }
  }

  console.log("\nExtracting embedded client config and game rules...");
  const loading = await readFile(join(GAME_DIR, "__loading__.js"), "utf8");
  const clientConfig = parseEmbeddedConfig(
    loading,
    "client_config_namespaceObject",
  );
  const bootstrapConfig = parseEmbeddedConfig(
    loading,
    "client_bootstrap_config_namespaceObject",
  );
  await writeFile(
    join(DATA_DIR, "client-config.json"),
    JSON.stringify(clientConfig, null, 2),
  );
  await writeFile(
    join(DATA_DIR, "bootstrap-config.json"),
    JSON.stringify(bootstrapConfig, null, 2),
  );
  const gameSettings =
    clientConfig.environment?.public?.gameSettings ||
    bootstrapConfig.gameSettings;
  if (!gameSettings) throw new Error("No gameSettings found in client config");
  await writeFile(
    join(DATA_DIR, "game-settings.json"),
    JSON.stringify(gameSettings, null, 2),
  );

  const report = {
    appId: APP_ID,
    source: BASE,
    downloadedAt: new Date().toISOString(),
    durationMs: Date.now() - started,
    counts: {
      assets: Object.keys(assets).length,
      assetFiles: assetFiles.length,
      scenes: scenes.length,
      manifestEntries: manifest.length,
      failed: manifest.filter((m) => m.status === "failed").length,
    },
    runtime: {
      gameVersion: bootstrapConfig.gameVersion,
      releaseName: bootstrapConfig.releaseName,
      originalDiscordClientId: bootstrapConfig.discordClientId,
      originalNakamaHost: bootstrapConfig.nakamaHost,
    },
    scenes: scenes.map((s) => ({ name: s.name, url: s.url })),
    files: manifest,
  };
  await writeFile(
    join(DATA_DIR, "download-manifest.json"),
    JSON.stringify(report, null, 2),
  );

  const failed = manifest.filter(
    (m) => m.status === "failed" || m.status === "optional-missing",
  );
  if (failed.length) {
    console.warn(`\n${failed.length} file(s) were unavailable:`);
    for (const f of failed) console.warn(`  ${f.path}: ${f.error || f.status}`);
    if (process.argv.includes("--strict")) {
      process.exit(1);
    }
  }

  const totalBytes = manifest.reduce((n, m) => n + (m.bytes || 0), 0);
  console.log(`\nDone in ${((Date.now() - started) / 1000).toFixed(1)}s`);
  console.log(
    `  ${manifest.length} files, ${(totalBytes / 1e6).toFixed(1)} MB`,
  );
  console.log(`  game version: ${report.runtime.gameVersion}`);
  console.log(`  release:      ${report.runtime.releaseName}`);
  console.log(`  rules:        data/game-settings.json`);
  console.log(`  manifest:     data/download-manifest.json`);
}

main().catch(async (err) => {
  console.error("\nDownload failed:", err);
  process.exit(1);
});
