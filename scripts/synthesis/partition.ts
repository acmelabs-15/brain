#!/usr/bin/env bun
// partition.ts — derive Phase 1 inventory work units from the manifests and PERSIST the
// unit → file assignment (METHOD §6.5, Phase 0 step 4). Deterministic: same manifests → same units.
//
//   bun scripts/synthesis/partition.ts            writes docs/analysis/manifest/units.md; prints the unit summary
//   bun scripts/synthesis/partition.ts --check    exits 1 if units.md is not what the manifests would produce now
//
// Rules (§6.5, D-010):
//   • at most 50 KB of readable source AND at most 12 readable files per unit — both caps, because worker
//     conversations compact on file count as much as on bytes (the two run-01 workers that compacted held
//     29 and 55 files; every 1–6-file unit finished clean);
//   • a skill stays together: the skill is the directory that contains SKILL.md (any depth — `skills/x/`,
//     `skills/<category>/x/`, `.claude/skills/x/`), and its references/, scripts/, assets/ go with it;
//   • a skill larger than a cap is split into consecutive parts in manifest order; every part carries the
//     skill's SKILL.md path as read-only context (unit-facts.ts prints it);
//   • symlink and asset rows (§1.1) are assigned to the unit of their skill or directory at zero weight —
//     they need no card and cost the worker no reading; a directory of only assets makes no unit;
//   • manifest order is preserved, so unit ids are stable while the manifests are unchanged.
import { writeFileSync, readFileSync, existsSync } from "fs";
import { PKGS, readManifest, needsNoCard } from "./_lib";

export const BYTE_CAP = 50_000;
export const FILE_CAP = 12;
const check = process.argv.includes("--check");

type F = { path: string; bytes: number; type: string };
type Row = { unit: string; pkg: string; path: string; bytes: number; type: string; part: string };

function skillDirs(paths: string[]): string[] {
  return paths.filter(p => /(^|\/)SKILL\.md$/i.test(p)).map(p => p.replace(/\/?SKILL\.md$/i, "")).filter(Boolean).sort((a, b) => b.length - a.length);
}
function groupKeyFor(dirs: string[]): (path: string) => string {
  return (path: string) => { for (const d of dirs) if (path.startsWith(d + "/")) return d; return path; };
}

const rows: Row[] = [];
const summary: { unit: string; pkg: string; files: number; bytes: number }[] = [];
for (const pkg of PKGS) {
  const manifest = readManifest(pkg);
  if (!manifest.length) continue;
  const key = groupKeyFor(skillDirs(manifest.map(r => r.path)));
  // groups in first-appearance order (manifest order)
  const groups = new Map<string, F[]>();
  for (const r of manifest) { const k = key(r.path); (groups.get(k) ?? groups.set(k, []).get(k)!).push({ path: r.path, bytes: r.bytes, type: r.type }); }
  let idx = 1;
  let cur: F[] = [], curBytes = 0, curFiles = 0;
  const readable = (f: F) => !needsNoCard(f.type);
  const flush = (part = "") => {
    if (!cur.some(readable)) { cur = []; curBytes = 0; curFiles = 0; return; }
    const unit = `inv-${pkg}-${idx++}`;
    for (const f of cur) rows.push({ unit, pkg, path: f.path, bytes: readable(f) ? f.bytes : 0, type: f.type, part });
    summary.push({ unit, pkg, files: curFiles, bytes: curBytes });
    cur = []; curBytes = 0; curFiles = 0;
  };
  for (const [gkey, g] of groups) {
    const gBytes = g.filter(readable).reduce((n, f) => n + f.bytes, 0);
    const gFiles = g.filter(readable).length;
    if (gFiles <= 1 && gBytes > BYTE_CAP) { flush(); cur.push(...g); curBytes += gBytes; curFiles += gFiles; flush(); continue; } // one file over the cap is its own unit
    if (gBytes > BYTE_CAP || gFiles > FILE_CAP) {
      // oversized skill: flush what is pending, then split this group alone into consecutive parts
      flush();
      const skillMd = g.find(f => /(^|\/)SKILL\.md$/i.test(f.path))?.path ?? "";
      let n = 1;
      for (const f of g) {
        const w = readable(f) ? f.bytes : 0, c = readable(f) ? 1 : 0;
        if (cur.length && (curBytes + w > BYTE_CAP || curFiles + c > FILE_CAP)) { flush(`${gkey} part ${n++} (SKILL.md: ${skillMd})`); }
        cur.push(f); curBytes += w; curFiles += c;
      }
      flush(`${gkey} part ${n} (SKILL.md: ${skillMd})`);
      continue;
    }
    if (cur.length && (curBytes + gBytes > BYTE_CAP || curFiles + gFiles > FILE_CAP)) flush();
    cur.push(...g); curBytes += gBytes; curFiles += gFiles;
    if (curBytes >= BYTE_CAP || curFiles >= FILE_CAP) flush();
  }
  flush();
}

const out = ["| Unit | Package | Path | Bytes | Type | Part |", "|---|---|---|---|---|---|",
  ...rows.map(r => `| ${r.unit} | ${r.pkg} | ${r.path} | ${r.bytes} | ${r.type} | ${r.part || "—"} |`), ""].join("\n");
const target = "docs/analysis/manifest/units.md";
if (check) {
  const cur = existsSync(target) ? readFileSync(target, "utf8") : "";
  if (cur === out) { console.log(`partition: units.md matches the manifests (${rows.length} rows, ${summary.length} units)`); process.exit(0); }
  console.log(`partition: units.md DIFFERS from what the manifests produce now — re-run partition.ts and run §11`); process.exit(1);
}
writeFileSync(target, out);
const over = summary.filter(s => s.bytes > BYTE_CAP || s.files > FILE_CAP);
console.log(`partition: wrote ${target} — ${rows.length} file rows in ${summary.length} units (caps: ${BYTE_CAP} bytes, ${FILE_CAP} files; ${over.length} unit(s) over a cap${over.length ? ": " + over.map(o => `${o.unit} ${o.files}f/${o.bytes}B`).join(", ") : ""})`);
for (const pkg of PKGS) { const u = summary.filter(s => s.pkg === pkg); if (u.length) console.log(`  ${pkg}: ${u.length} units, ${u.reduce((n, s) => n + s.files, 0)} readable files, largest ${Math.max(...u.map(s => s.files))} files / ${Math.max(...u.map(s => s.bytes))} bytes`); }
console.log("next: bun scripts/synthesis/units.ts init   (writes docs/plan/units.md, the status table)");
