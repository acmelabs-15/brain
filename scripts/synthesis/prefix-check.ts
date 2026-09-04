#!/usr/bin/env bun
// prefix-check.ts — hash the fixed set (METHOD M3): the files that must not change during a conversation.
//
//   bun scripts/synthesis/prefix-check.ts             one line per file + a combined hash
//   bun scripts/synthesis/prefix-check.ts --compare <combined-hash>   exit 1 if the set has changed
//
// The fixed set is declared in docs/plan/prefix.json ({"files": [...], "globs": [...]}). Globs are
// simple: a trailing "/*.md" means every .md directly under that directory.
import { readFileSync, existsSync, readdirSync } from "fs";
import { fileSha, sha256 } from "./_lib";

const cfg = JSON.parse(readFileSync("docs/plan/prefix.json", "utf8")) as { files?: string[]; globs?: string[] };
const files = new Set<string>(cfg.files ?? []);
for (const g of cfg.globs ?? []) {
  const m = g.match(/^(.*)\/\*\.(\w+)$/);
  if (!m) continue;
  if (existsSync(m[1] ?? "")) for (const f of readdirSync(m[1] ?? "")) if (f.endsWith("." + m[2])) files.add(`${m[1]}/${f}`);
}
const sorted = [...files].sort();
const lines: string[] = [];
for (const f of sorted) lines.push(`${existsSync(f) ? fileSha(f).slice(0, 16) : "MISSING         "}  ${f}`);
const combined = sha256(lines.join("\n")).slice(0, 16);
const cmpIdx = process.argv.indexOf("--compare");
if (cmpIdx < 0) { console.log(lines.join("\n")); console.log(`prefix: ${sorted.length} files, combined ${combined}`); process.exit(0); }
const expected = process.argv[cmpIdx + 1];
if (expected === combined) { console.log(`prefix: unchanged (${combined})`); process.exit(0); }
console.log(lines.join("\n"));
console.log(`prefix: CHANGED — was ${expected}, now ${combined}. A fixed-set file changed mid-conversation; record it in the handoff.`);
process.exit(1);
