#!/usr/bin/env bun
// units.ts — the unit STATUS table, docs/plan/units.md (METHOD §7, §8; D-010).
//
// The table used to live inside STATE.md (333 rows, 26 KB): every session read it whole and every status change
// echoed ~4k tokens back into the conversation. It now lives in its own file and is changed only through this
// script, so the primary agent never opens it. STATE.md carries the counts this script writes.
//
//   bun scripts/synthesis/units.ts init                       create docs/plan/units.md from manifest/units.md (+ units-p2.md, D-023) (all pending);
//                                                             with an existing table, add new units / drop retired ones and keep status
//   bun scripts/synthesis/units.ts status                     one line of counts (pending / in-progress / done / blocked / rolled-back)
//   bun scripts/synthesis/units.ts pending [N]                the next N pending unit ids, in table order (default: all)
//   bun scripts/synthesis/units.ts show <unit>…               the rows for these units
//   bun scripts/synthesis/units.ts mark <status> --session NNN <unit>…
//                                                             set status (pending|in-progress|done|blocked|rolled-back); done fills Output
//   bun scripts/synthesis/units.ts owner <path>…              the unit that owns each path — a source path (as in manifest/units.md) or a card
//                                                             path (docs/analysis/inventory/<pkg>/<slug>.md); for Phase 1V remediation (D-022)
//   bun scripts/synthesis/units.ts rerun --session NNN <unit>…
//                                                             prepare a re-run (Phase 1V, §5): delete the unit's deliverables (its cards and
//                                                             report — the memo would otherwise HIT and skip it), set it pending, regenerate the
//                                                             manifests; prints what it deleted. The primary agent never edits a card; this removes them for a Worker to rewrite.
//   bun scripts/synthesis/units.ts sync                       rewrite the STATE.md "Work units" counts + current_unit from the table
//   bun scripts/synthesis/units.ts check                      exit 1 if the table and manifest/units.md disagree on the unit set,
//                                                             if STATE.md counts differ from the table, or if a `done` unit's report is missing
import { readFileSync, writeFileSync, existsSync } from "fs";
import { readUnits, readUnitStatus, slugOf, UNIT_STATUSES, isConceptUnit, reportPathFor, cardsFor, type UnitStatusRow } from "./_lib";
import { rmSync } from "fs";

const TABLE = "docs/plan/units.md";
const STATE = "docs/plan/STATE.md";
const argv = process.argv.slice(2);
const cmd = argv[0];
const die = (s: string): never => { console.error(`units: ${s}`); process.exit(2); };

function fromManifest(): Map<string, { pkg: string; files: number; bytes: number }> {
  const m = new Map<string, { pkg: string; files: number; bytes: number }>();
  for (const r of readUnits()) {
    const e = m.get(r.unit) ?? { pkg: r.pkg, files: 0, bytes: 0 };
    if (r.bytes > 0) { e.files++; e.bytes += r.bytes; }   // symlink/asset rows weigh 0 and are not files to read
    m.set(r.unit, e);
  }
  return m;
}
function render(rows: UnitStatusRow[]): string {
  return ["# Work units — Phase 1 inventory (inv-*) and Phase 2 concept cards (cc-*)", "",
    "Written and changed only by `scripts/synthesis/units.ts` (METHOD §7). Do not edit by hand. The assignment behind each unit is `docs/analysis/manifest/units.md` (partition.ts: files per inventory unit) and `docs/analysis/manifest/units-p2.md` (partition-concepts.ts: concept slugs per concept unit; Files = concepts, Bytes = occurrences). Status values: `pending` · `in-progress` · `done` · `blocked` · `rolled-back`.", "",
    "| Unit | Package | Files | Bytes | Status | Session | Output |", "|---|---|---|---|---|---|---|",
    ...rows.map(r => `| ${r.unit} | ${r.pkg} | ${r.files} | ${r.bytes} | ${r.status} | ${r.session} | ${r.output} |`), ""].join("\n");
}
function counts(rows: UnitStatusRow[]) {
  const c: Record<string, number> = {}; for (const s of UNIT_STATUSES) c[s] = 0;
  for (const r of rows) c[r.status] = (c[r.status] ?? 0) + 1;
  return c;
}
const statusLine = (rows: UnitStatusRow[]) => { const c = counts(rows); return `units: ${rows.length} total — pending ${c.pending} · in-progress ${c["in-progress"]} · done ${c.done} · blocked ${c.blocked} · rolled-back ${c["rolled-back"]}`; };
const orderOf = (u: string) => { const m = u.match(/^(inv|cc)-(\w+)-(\d+)$/); return m ? `${m[1] === "inv" ? 0 : 1}-${["addy", "matt", "rjm"].indexOf(m[2] ?? "")}-${String(m[3]).padStart(4, "0")}` : u; };

function syncState(rows: UnitStatusRow[]) {
  if (!existsSync(STATE)) die(`${STATE} missing`);
  let st = readFileSync(STATE, "utf8");
  const inv = rows.filter(r => !isConceptUnit(r.unit)), cc = rows.filter(r => isConceptUnit(r.unit));
  const next = rows.find(r => r.status === "in-progress") ?? rows.find(r => r.status === "pending");
  const table = (rs: UnitStatusRow[]) => { const c = counts(rs); return `| Status | Units |\n|---|---|\n| pending | ${c.pending} |\n| in-progress | ${c["in-progress"]} |\n| done | ${c.done} |\n| blocked | ${c.blocked} |\n| rolled-back | ${c["rolled-back"]} |\n| **total** | **${rs.length}** |\n\n`; };
  const block1 = `### Phase 1 — Inventory units\n\nThe unit table is \`docs/plan/units.md\`, written only by \`bun scripts/synthesis/units.ts\` (\`status\`, \`pending N\`, \`mark\`, \`sync\`). Never read or edit it by hand; ask the script.\n\n${table(inv)}`;
  const block2 = `### Phase 2 — Concept card units\n\nConcept units (\`cc-<pkg>-N\`, up to 30 concept slugs each) come from \`partition-concepts.ts\` (\`docs/analysis/manifest/units-p2.md\`) and share the table and the loop with Phase 1 (D-023).\n\n${cc.length ? table(cc) : "*(not yet partitioned — Phase 2 begins with `partition-concepts.ts` then `units.ts init`)*\n\n"}`;
  const a = st.indexOf("### Phase 1 — Inventory units"); const b = st.indexOf("### Phase 2 — Concept card units"); const c3 = st.indexOf("### Phase 3 — Concordance families");
  if (a < 0 || b < 0 || c3 < 0) die("STATE.md: Phase 1 / Phase 2 / Phase 3 unit headings not found");
  st = st.slice(0, a) + block1 + block2 + st.slice(c3);
  st = st.replace(/\| \*\*current_unit\*\* \| [^|]* \|/, `| **current_unit** | ${next ? next.unit : "—"} |`);
  const perPkgOf = (rs: UnitStatusRow[], s: string) => ["addy", "matt", "rjm"].map(p => rs.filter(r => r.pkg === p && r.status === s).length).join(" / ");
  st = st.replace(/\| Inventory units done \(addy \/ matt \/ rjm\) \| [^|]* \|/, `| Inventory units done (addy / matt / rjm) | ${perPkgOf(inv, "done")} |`);
  if (cc.length) st = st.replace(/\| Concept cards \(addy \/ matt \/ rjm\) \| [^|]* \|/, `| Concept cards (addy / matt / rjm) | units done ${perPkgOf(cc, "done")} of ${["addy", "matt", "rjm"].map(p => cc.filter(r => r.pkg === p).length).join(" / ")} |`);
  writeFileSync(STATE, st);
  console.log(`units: STATE.md synced — ${statusLine(rows)}; current_unit ${next ? next.unit : "—"}`);
}

if (cmd === "init") {
  const man = fromManifest(); if (!man.size) die("docs/analysis/manifest/units.md missing or empty — run partition.ts first (and partition-concepts.ts for Phase 2)");
  const old = new Map(readUnitStatus().map(r => [r.unit, r]));
  const rows: UnitStatusRow[] = [...man].map(([unit, m]) => {
    const o = old.get(unit);
    return { unit, pkg: m.pkg, files: m.files, bytes: m.bytes, status: o?.status ?? "pending", session: o?.session ?? "—", output: o?.output ?? "—" };
  }).sort((a, b) => orderOf(a.unit).localeCompare(orderOf(b.unit)));
  const retired = [...old.keys()].filter(u => !man.has(u));
  writeFileSync(TABLE, render(rows));
  console.log(`units: wrote ${TABLE} — ${rows.length} units (${old.size ? `kept status for ${rows.filter(r => old.has(r.unit)).length}, retired ${retired.length}` : "all pending"})`);
  syncState(rows);
} else if (cmd === "status") {
  const rows = readUnitStatus(); if (!rows.length) die(`${TABLE} missing — run units.ts init`);
  console.log(statusLine(rows));
} else if (cmd === "pending") {
  const n = argv[1] ? parseInt(argv[1], 10) : Infinity;
  const rows = readUnitStatus().filter(r => r.status === "pending").slice(0, n);
  console.log(rows.map(r => r.unit).join(" ") || "(none pending)");
} else if (cmd === "show") {
  const want = new Set(argv.slice(1)); const rows = readUnitStatus().filter(r => want.has(r.unit));
  for (const r of rows) console.log(`| ${r.unit} | ${r.pkg} | ${r.files} | ${r.bytes} | ${r.status} | ${r.session} | ${r.output} |`);
  for (const u of want) if (!rows.some(r => r.unit === u)) console.log(`${u}: not in ${TABLE}`);
} else if (cmd === "mark") {
  const status = argv[1] ?? ""; if (!(UNIT_STATUSES as readonly string[]).includes(status)) die(`status must be one of ${UNIT_STATUSES.join("|")}`);
  const si = argv.indexOf("--session"); const session = si >= 0 ? argv[si + 1] ?? "" : "";
  if (!session) die("--session NNN is required");
  const units = argv.slice(2).filter((a, i, arr) => a !== "--session" && arr[i - 1] !== "--session");
  if (!units.length) die("no units given");
  const rows = readUnitStatus(); if (!rows.length) die(`${TABLE} missing — run units.ts init`);
  const byId = new Map(rows.map(r => [r.unit, r]));
  for (const u of units) {
    const r = byId.get(u); if (!r) { die(`${u} not in ${TABLE}`); continue; }
    r.status = status; r.session = status === "pending" ? "—" : session;
    r.output = status === "done" ? reportPathFor(u, r.pkg) : status === "pending" ? "—" : r.output;
    if (status === "done" && !existsSync(r.output)) die(`${u}: cannot mark done — ${r.output} does not exist (R7)`);
  }
  writeFileSync(TABLE, render(rows));
  console.log(`units: ${units.length} unit(s) → ${status} (session ${session}): ${units.join(" ")}`);
  syncState(rows);
} else if (cmd === "owner") {
  const paths = argv.slice(1); if (!paths.length) die("no paths given");
  const units = readUnits(); let missing = 0;
  for (const q of paths) {
    const m = q.match(/^docs\/analysis\/inventory\/([^/]+)\/([^/]+\.md)$/);
    const mc = q.match(/^docs\/analysis\/concepts\/([^/]+)\/([^/]+)\.md$/);
    const hits = m ? units.filter(u => !isConceptUnit(u.unit) && u.pkg === m[1] && slugOf(u.path) === m[2])
      : mc ? units.filter(u => isConceptUnit(u.unit) && u.pkg === mc[1] && u.path === mc[2])
      : units.filter(u => !isConceptUnit(u.unit) && (u.path === q || `sources/${u.pkg}/${u.path}` === q));
    if (!hits.length) { console.log(`NONE  ${q} — no unit owns this path (a report, divergence card or verification file has no owning unit; a card slug must match a manifest row)`); missing++; continue; }
    for (const h of hits) console.log(`${h.unit}  ${h.pkg}  ${h.path}  ${q}`);
  }
  process.exit(missing ? 1 : 0);
} else if (cmd === "rerun") {
  const si = argv.indexOf("--session"); const session = si >= 0 ? argv[si + 1] ?? "" : "";
  if (!session) die("--session NNN is required");
  const ids = argv.slice(1).filter((a, i, arr) => a !== "--session" && arr[i - 1] !== "--session");
  if (!ids.length) die("no units given");
  const rows = readUnitStatus(); if (!rows.length) die(`${TABLE} missing — run units.ts init`);
  const byId = new Map(rows.map(r => [r.unit, r])); const units = readUnits();
  for (const u of ids) if (!byId.has(u)) die(`${u} not in ${TABLE}`);
  let removed = 0;
  for (const u of ids) {
    const r = byId.get(u)!;
    const files = [...cardsFor(u, units.filter(x => x.unit === u)), reportPathFor(u, r.pkg)];
    for (const f of files) if (existsSync(f)) { rmSync(f); removed++; console.log(`removed ${f}`); }
    r.status = "pending"; r.session = "—"; r.output = "—";
  }
  writeFileSync(TABLE, render(rows));
  console.log(`units: ${ids.length} unit(s) → pending for re-run (session ${session}), ${removed} deliverable(s) removed: ${ids.join(" ")}`);
  syncState(rows);
  // the manifests' Checked column is derived from card presence (§7 step 7) — regenerate it so coverage.ts stays clean
  const m = Bun.spawnSync(["bun", "scripts/synthesis/manifest.ts", "--no-fetch"], { stdout: "pipe", stderr: "pipe" });
  console.log(m.exitCode === 0 ? "units: manifests regenerated (Checked derived from the remaining cards)" : `units: manifest.ts --no-fetch exited ${m.exitCode}: ${m.stderr.toString().trim()}`);
} else if (cmd === "sync") {
  const rows = readUnitStatus(); if (!rows.length) die(`${TABLE} missing — run units.ts init`);
  syncState(rows);
} else if (cmd === "check") {
  const rows = readUnitStatus(); if (!rows.length) die(`${TABLE} missing — run units.ts init`);
  const man = fromManifest(); let bad = 0;
  for (const r of rows) if (!man.has(r.unit)) { console.log(`FAIL ${r.unit} is in ${TABLE} but not in manifest/units.md`); bad++; }
  for (const u of man.keys()) if (!rows.some(r => r.unit === u)) { console.log(`FAIL ${u} is in manifest/units.md but not in ${TABLE}`); bad++; }
  for (const r of rows) if (r.status === "done" && !existsSync(r.output)) { console.log(`FAIL ${r.unit} is done but ${r.output} is missing`); bad++; }
  for (const r of rows) if (!(UNIT_STATUSES as readonly string[]).includes(r.status)) { console.log(`FAIL ${r.unit} has unknown status '${r.status}'`); bad++; }
  const st = existsSync(STATE) ? readFileSync(STATE, "utf8") : "";
  // one count block per phase (D-023): Phase 1 for inv- rows, Phase 2 for cc- rows
  const blockOf = (start: string, end: string) => { const a = st.indexOf(start), b = st.indexOf(end); return a >= 0 && b > a ? st.slice(a, b) : ""; };
  const blocks: [string, UnitStatusRow[], string][] = [["Phase 1", rows.filter(r => !isConceptUnit(r.unit)), blockOf("### Phase 1 — Inventory units", "### Phase 2 — Concept card units")]];
  const ccRows = rows.filter(r => isConceptUnit(r.unit));
  if (ccRows.length) blocks.push(["Phase 2", ccRows, blockOf("### Phase 2 — Concept card units", "### Phase 3 — Concordance families")]);
  for (const [label, rs, text] of blocks) {
    const c = counts(rs);
    for (const s of UNIT_STATUSES) { const m = text.match(new RegExp(`^\\| ${s} \\| (\\d+) \\|$`, "m")); if (!m || parseInt(m[1] ?? "", 10) !== c[s]) { console.log(`FAIL STATE.md ${label} count for ${s} is ${m ? m[1] : "missing"}, table says ${c[s]} — run units.ts sync`); bad++; } }
  }
  console.log(bad ? `units: ${bad} failure(s)` : `units: table, manifest and STATE.md agree — ${statusLine(rows)}`);
  process.exit(bad ? 1 : 0);
} else {
  console.log(readFileSync(new URL(import.meta.url).pathname, "utf8").split("\n").filter(l => l.startsWith("//")).map(l => l.slice(3)).join("\n"));
  process.exit(cmd ? 2 : 0);
}
