#!/usr/bin/env bun
// partition.ts — derive Phase 1 inventory work units from the manifests and PERSIST the
// unit → file assignment (METHOD §6.5, Phase 0 step 4). Deterministic: same manifests → same units.
//
//   bun scripts/synthesis/partition.ts            writes docs/analysis/manifest/units.md and prints the STATE.md rows
//   bun scripts/synthesis/partition.ts --check    exits 1 if units.md is not what the manifests would produce now
//
// Rules (§6.5): at most ~50 KB of source per unit; a skill's SKILL.md, references/ and scripts/ stay
// in one unit (grouped by the skill directory); a single file larger than the cap is its own unit.
// Manifest order is preserved, so unit ids are stable while the manifests are unchanged.
import { writeFileSync, readFileSync, existsSync } from "fs";
import { PKGS, readManifest } from "./_lib";

const CAP = 50_000;
const check = process.argv.includes("--check");

function groupKey(path: string): string {
  // skills/<name>/… and .claude/skills/<name>/… stay together; everything else is its own group
  const m = path.match(/^((?:\.[\w-]+\/)?skills\/[^/]+)\//);
  return m ? (m[1] ?? "") : path;
}

type Row = { unit: string; pkg: string; path: string; bytes: number };
const rows: Row[] = [];
const stateRows: string[] = [];
for (const pkg of PKGS) {
  const manifest = readManifest(pkg);
  if (!manifest.length) continue;
  // build groups in first-appearance order
  const groups = new Map<string, { path: string; bytes: number }[]>();
  for (const r of manifest) (groups.get(groupKey(r.path)) ?? groups.set(groupKey(r.path), []).get(groupKey(r.path))!).push({ path: r.path, bytes: r.bytes });
  let idx = 1, size = 0, files: { path: string; bytes: number }[] = [];
  const flush = () => {
    if (!files.length) return;
    const unit = `inv-${pkg}-${idx++}`;
    for (const f of files) rows.push({ unit, pkg, path: f.path, bytes: f.bytes });
    stateRows.push(`| ${unit} | ${pkg} | ${files.length} | ${size} | pending | — | — |`);
    size = 0; files = [];
  };
  for (const g of groups.values()) {
    const gBytes = g.reduce((n, f) => n + f.bytes, 0);
    if (files.length && size + gBytes > CAP) flush();
    files.push(...g); size += gBytes;
    if (size >= CAP) flush();
  }
  flush();
}

const out = ["| Unit | Package | Path | Bytes |", "|---|---|---|---|", ...rows.map(r => `| ${r.unit} | ${r.pkg} | ${r.path} | ${r.bytes} |`), ""].join("\n");
const target = "docs/analysis/manifest/units.md";
if (check) {
  const cur = existsSync(target) ? readFileSync(target, "utf8") : "";
  if (cur === out) { console.log(`partition: units.md matches the manifests (${rows.length} rows, ${stateRows.length} units)`); process.exit(0); }
  console.log(`partition: units.md DIFFERS from what the manifests produce now — re-run partition.ts and run §11`); process.exit(1);
}
writeFileSync(target, out);
console.log(`partition: wrote ${target} — ${rows.length} file rows in ${stateRows.length} units`);
console.log("STATE.md § Phase 1 — Inventory units rows:");
console.log(stateRows.join("\n"));
