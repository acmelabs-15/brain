#!/usr/bin/env bun
// unit-facts.ts — every mechanical fact a dispatch needs for one unit, computed, not generated (METHOD M5).
// The primary agent pastes this output into the dispatch; the writing agent reads the sources in full and
// never recounts what is printed here.
//
//   bun scripts/synthesis/unit-facts.ts <unit-id>
//
// Prints: the unit's files (absolute path, bytes, lines, sha256), the duplication-ledger rows that touch
// them (aliases and variant pairs), the memo status of each deliverable, and the expected card paths.
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { execSync } from "child_process";
import { readUnits, fileSha, slugOf, isFile, sourcePath, isSymlink, needsNoCard } from "./_lib";

const unit = process.argv[2];
if (!unit) { console.error("usage: unit-facts.ts <unit-id>"); process.exit(2); }
const all = readUnits().filter(r => r.unit === unit);
if (!all.length) { console.error(`unit-facts: ${unit} not in docs/analysis/manifest/units.md`); process.exit(2); }
const pkg = all[0]!.pkg;
// units.md columns: | Unit | Package | Path | Bytes | Type | Part |
const typeOf = new Map<string, string>(), partOf = new Map<string, string>();
for (const line of readFileSync("docs/analysis/manifest/units.md", "utf8").split("\n")) {
  const c = line.split("|").map(s => s.trim()); if (c[1] !== unit) continue;
  typeOf.set(c[3] ?? "", c[5] ?? ""); if (c[6] && c[6] !== "—") partOf.set(c[3] ?? "", c[6]);
}
const rows = all.filter(r => !needsNoCard(typeOf.get(r.path) ?? ""));
const noCard = all.filter(r => needsNoCard(typeOf.get(r.path) ?? ""));

console.log(`# unit-facts ${unit} (${pkg}) — generated ${new Date().toISOString()}`);
const part = [...partOf.values()][0];
if (part) console.log(`\nThis unit is ${part}. Read that SKILL.md first for context even when it is not in this part; write cards only for the files listed below.`);
console.log(`\n## Files (${rows.length}) — read each in full`);
console.log("| # | path (absolute) | bytes | lines | sha256 |");
console.log("|---|---|---|---|---|");
let total = 0;
rows.forEach((r, i) => {
  const p = sourcePath(pkg, r.path);
  if (!isFile(p)) { console.log(`| ${i + 1} | ${resolve(p)} | MISSING | — | — |`); return; }
  const buf = readFileSync(p); total += buf.length;
  console.log(`| ${i + 1} | ${resolve(p)} | ${buf.length} | ${buf.toString("utf8").split("\n").length} | ${fileSha(p).slice(0, 16)} |`);
});
console.log(`\nTotal bytes: ${total}`);
if (noCard.length) {
  console.log(`\n## No card needed (${noCard.length}) — symlinks, binary assets, unavailable external pages (§1.1); record the reference on the card of the file that uses them`);
  for (const r of noCard) { const p = sourcePath(pkg, r.path); console.log(`- ${r.path} — ${typeOf.get(r.path)}${isSymlink(p) ? ` → ${require("fs").readlinkSync(p)}` : isFile(p) ? ` (${require("fs").statSync(p).size} bytes)` : " (absent in this checkout)"}`); }
}

// ledger rows touching this unit
const ledger = `docs/analysis/manifest/${pkg}-duplicates.md`;
console.log(`\n## Duplication ledger (${ledger})`);
if (!existsSync(ledger)) console.log("ledger not generated — run dedupe.ts (METHOD §2.4)");
else {
  const text = readFileSync(ledger, "utf8");
  const paths = new Set(rows.map(r => r.path));
  const hits: string[] = [];
  for (const line of text.split("\n")) {
    if (line.startsWith("| ") && /^\| \d+ \|/.test(line) && [...paths].some(p => line.includes("`" + p + "`"))) hits.push(`EXACT ${line}`);
    if (line.startsWith("### V") && [...paths].some(p => line.includes("`" + p + "`"))) hits.push(`VARIANT ${line.replace(/^### /, "")}`);
  }
  console.log(hits.length ? hits.join("\n") : "none of this unit's files appears in the ledger");
}

// memo status + expected card paths
console.log(`\n## Deliverables`);
for (const r of rows) console.log(`- docs/analysis/inventory/${pkg}/${slugOf(r.path)}`);
console.log(`- docs/analysis/inventory/${pkg}/_units/${unit}.md`);
try {
  const out = execSync(`bun scripts/synthesis/memo.ts check ${unit}`, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  console.log(`\n## memo.ts check\n${out.trim()}`);
} catch (e: any) {
  console.log(`\n## memo.ts check\n${String(e.stdout ?? "").trim() || String(e.stderr ?? "").trim()}`);
}
