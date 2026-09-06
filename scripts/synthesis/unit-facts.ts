#!/usr/bin/env bun
// unit-facts.ts — every mechanical fact a dispatch needs for one unit, computed, not generated (METHOD M5).
// The primary agent pastes this output into the dispatch; the writing agent reads the sources in full and
// never recounts what is printed here.
//
//   bun scripts/synthesis/unit-facts.ts <unit-id>
//
// Inventory unit (inv-*): the unit's files (absolute path, bytes, lines, sha256), the duplication-ledger rows that touch
// them (aliases and variant pairs), the memo status of each deliverable, and the expected card paths.
// Concept unit (cc-*, D-023): every concept slug of the unit with its verbatim name and EVERY occurrence the inventory
// recorded (inventory card, source path:line, role) — the rows a Worker turns into a concept card's `Where used` table —
// the source files to read at those lines, the expected card paths, and the memo status.
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { execSync } from "child_process";
import { readUnits, fileSha, slugOf, isFile, sourcePath, isSymlink, needsNoCard, isConceptUnit, conceptIndex } from "./_lib";

const unit = process.argv[2];
if (!unit) { console.error("usage: unit-facts.ts <unit-id>"); process.exit(2); }
const all = readUnits().filter(r => r.unit === unit);
if (!all.length) { console.error(`unit-facts: ${unit} not in docs/analysis/manifest/units.md or units-p2.md`); process.exit(2); }
const pkg = all[0]!.pkg;
const memoCheck = () => {
  try {
    const out = execSync(`bun scripts/synthesis/memo.ts check ${unit}`, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    console.log(`\n## memo.ts check\n${out.trim()}`);
  } catch (e: any) {
    console.log(`\n## memo.ts check\n${String(e.stdout ?? "").trim() || String(e.stderr ?? "").trim()}`);
  }
};

if (isConceptUnit(unit)) {
  const idx = conceptIndex(pkg);
  console.log(`# unit-facts ${unit} (${pkg}, Phase 2 concept unit) — generated ${new Date().toISOString()}`);
  console.log(`\nWrite one concept card per slug below from docs/plan/templates/concept-card.md (METHOD §5 Phase 2, R3, R4, R6). The occurrences are every place the inventory recorded the name; each becomes a row of the card's \`Where used\` table, and the definition quote comes from the source at one of them (read the cited lines in the source file, with enough of the surrounding text to quote it byte-exactly). Inventory cards are inputs too: their \`Defects\` fields feed \`Implementation status\`. A name that is an identifier, a file name or a heading rather than a lifecycle concept still gets its card, with \`kind: name-only\` (D-023).`);
  const srcFiles = new Set<string>(); let occTotal = 0;
  console.log(`\n## Concepts (${all.length})`);
  for (const r of all) {
    const c = idx.get(r.path);
    if (!c) { console.log(`\n### \`${r.path}\` — MISSING from the inventory index (units-p2.md is stale: run partition-concepts.ts --check)`); continue; }
    occTotal += c.occurrences.length;
    console.log(`\n### \`${c.name}\` → docs/analysis/concepts/${pkg}/${c.slug}.md  (${c.occurrences.length} occurrence${c.occurrences.length === 1 ? "" : "s"})`);
    console.log("| inventory card | source path:line | role |"); console.log("|---|---|---|");
    for (const o of c.occurrences) {
      const path = o.path || String((readFileSync(o.card, "utf8").match(/^path:\s*(.+)$/m) || [])[1] ?? "").trim();
      if (path) srcFiles.add(path);
      console.log(`| ${o.card} | ${path}${o.line ? `:${o.line}` : ""} | ${o.role || "—"} |`);
    }
  }
  console.log(`\nTotal occurrences: ${occTotal}`);
  console.log(`\n## Source files cited (${srcFiles.size}) — read the cited lines in each (absolute path, bytes, sha256)`);
  console.log("| # | path (absolute) | bytes | sha256 |"); console.log("|---|---|---|---|");
  [...srcFiles].sort().forEach((f, i) => { const p = sourcePath(pkg, f); console.log(isFile(p) ? `| ${i + 1} | ${resolve(p)} | ${readFileSync(p).length} | ${fileSha(p).slice(0, 16)} |` : `| ${i + 1} | ${resolve(p)} | MISSING | — |`); });
  console.log(`\n## Deliverables`);
  for (const r of all) console.log(`- docs/analysis/concepts/${pkg}/${r.path}.md`);
  console.log(`- docs/analysis/concepts/${pkg}/_units/${unit}.md`);
  memoCheck();
  process.exit(0);
}

// ---- inventory unit ----
const typeOf = new Map<string, string>(), partOf = new Map<string, string>();
for (const r of all) { typeOf.set(r.path, r.type); if (r.part) partOf.set(r.path, r.part); }
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
memoCheck();
