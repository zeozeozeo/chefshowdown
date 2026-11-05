import { build } from "esbuild";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const outfile = resolve(ROOT, "server/nakama/modules/index.js");
await mkdir(resolve(ROOT, "server/nakama/modules"), { recursive: true });

await build({
  entryPoints: [resolve(ROOT, "server/nakama/src/index.js")],
  outfile,
  bundle: true,
  platform: "neutral",
  format: "cjs",
  target: "es2015",
  loader: { ".json": "json" },
  legalComments: "none",
  logLevel: "info",
});

console.log("Built", outfile);
