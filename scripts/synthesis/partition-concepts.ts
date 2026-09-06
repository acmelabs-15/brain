#!/usr/bin/env bun
// partition-concepts.ts — derive the Phase 2 concept-card work units from the inventory and PERSIST them
// (METHOD §5 Phase 2, §6.5; D-023). Deterministic: the same inventory cards → the same units.
//
//   bun scripts/synthesis/partition-concepts.ts            writes docs/analysis/manifest/units-p2.md; prints the unit summary
//   bun scripts/synthesis/partition-concepts.ts --check    exits 1 if units-p2.md is not what the inventory would produce now
//
// What a unit is: a set of concept slugs of one package (`cc-<pkg>-N`), each slug named in the package's inventory cards'
// `## Concepts named` sections (the same lines coverage.ts demands a card for). A Worker gets one unit and writes one
// concept card per slug from templates/concept-card.md.
//
// Rules (§6.5, D-023):
//   • at most 30 concepts per unit AND at most 300 occurrence rows (a concept named in 195 places is 195 rows the
//     Worker must turn into `Where used` rows) — the caps bound what one Worker reads and writes;
//   • concepts are taken in the order they are first named, card by card in manifest order, so the concepts of one
//     inventory card land in the same unit whenever the caps allow (locality: the Worker reads fewer cards);
//   • a single concept over the occurrence cap is its own unit — it must be written whole;
//   • unit ids are positional and stable while the inventory is unchanged (`--check` says whether it is).
// Row shape shared with units.md: | Unit | Package | Path | Bytes | Type | Part | — Path = slug, Bytes = occurrence
// count, Type = concept, Part = the concept's verbatim name (as first seen).
import { writeFileSync, readFileSync, existsSync } from "fs";
import { PKGS, conceptIndex, UNITS_P2 } from "./_lib";

export const CONCEPT_CAP = 30;
export const OCCURRENCE_CAP = 300;
const check = process.argv.includes("--check");

type Row = { unit: string; pkg: string; slug: string; occ: number; name: string };
const rows: Row[] = [];
const summary: { unit: string; pkg: string; concepts: number; occ: number }[] = [];
for (const pkg of PKGS) {
  const idx = conceptIndex(pkg);
  if (!idx.size) continue;
  let n = 1, cur: { slug: string; occ: number; name: string }[] = [], curOcc = 0;
  const flush = () => {
    if (!cur.length) return;
    const unit = `cc-${pkg}-${n++}`;
    for (const c of cur) rows.push({ unit, pkg, slug: c.slug, occ: c.occ, name: c.name });
    summary.push({ unit, pkg, concepts: cur.length, occ: curOcc });
    cur = []; curOcc = 0;
  };
  for (const c of idx.values()) { // insertion order = first-named order, manifest order of cards
    const occ = c.occurrences.length;
    if (occ > OCCURRENCE_CAP) { flush(); cur.push({ slug: c.slug, occ, name: c.name }); curOcc = occ; flush(); continue; }
    if (cur.length && (cur.length + 1 > CONCEPT_CAP || curOcc + occ > OCCURRENCE_CAP)) flush();
    cur.push({ slug: c.slug, occ, name: c.name }); curOcc += occ;
  }
  flush();
}

const esc = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const out = ["| Unit | Package | Path | Bytes | Type | Part |", "|---|---|---|---|---|---|",
  ...rows.map(r => `| ${r.unit} | ${r.pkg} | ${r.slug} | ${r.occ} | concept | ${esc(r.name) || "—"} |`), ""].join("\n");
if (check) {
  const cur = existsSync(UNITS_P2) ? readFileSync(UNITS_P2, "utf8") : "";
  if (cur === out) { console.log(`partition-concepts: units-p2.md matches the inventory (${rows.length} concepts, ${summary.length} units)`); process.exit(0); }
  console.log(`partition-concepts: units-p2.md ${cur ? "DIFFERS from what the inventory produces now" : "does not exist"} — run partition-concepts.ts (then units.ts init) as a §11 change`); process.exit(1);
}
writeFileSync(UNITS_P2, out);
console.log(`partition-concepts: wrote ${UNITS_P2} — ${rows.length} concept rows in ${summary.length} units (caps: ${CONCEPT_CAP} concepts, ${OCCURRENCE_CAP} occurrence rows)`);
for (const pkg of PKGS) { const u = summary.filter(s => s.pkg === pkg); if (u.length) console.log(`  ${pkg}: ${u.length} units, ${u.reduce((n, s) => n + s.concepts, 0)} concepts, ${u.reduce((n, s) => n + s.occ, 0)} occurrences; largest unit ${Math.max(...u.map(s => s.concepts))} concepts / ${Math.max(...u.map(s => s.occ))} occurrences`); }
console.log("next: bun scripts/synthesis/units.ts init   (adds the cc- units to docs/plan/units.md as pending; Phase 1 rows keep their status)");
