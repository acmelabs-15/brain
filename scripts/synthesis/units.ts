#!/usr/bin/env bun
// units.ts — the unit STATUS table, docs/plan/units.md (METHOD §7, §8; D-010).
//
// The table used to live inside STATE.md (333 rows, 26 KB): every session read it whole and every status change
// echoed ~4k tokens back into the conversation. It now lives in its own file and is changed only through this
// script, so the primary agent never opens it. STATE.md carries the counts this script writes.
//
//   bun scripts/synthesis/units.ts init                       create docs/plan/units.md from manifest/units.md (all pending);
//                                                             with an existing table, add new units / drop retired ones and keep status
//   bun scripts/synthesis/units.ts status                     one line of counts (pending / in-progress / done / blocked / rolled-back)
//   bun scripts/synthesis/units.ts pending [N]                the next N pending unit ids, in table order (default: all)
//   bun scripts/synthesis/units.ts show <unit>…               the rows for these units
//   bun scripts/synthesis/units.ts mark <status> --session NNN <unit>…
//                                                             set status (pending|in-progress|done|blocked|rolled-back); done fills Output
//   bun scripts/synthesis/units.ts sync                       rewrite the STATE.md "Work units" counts + current_unit from the table
//   bun scripts/synthesis/units.ts check                      exit 1 if the table and manifest/units.md disagree on the unit set,
//                                                             if STATE.md counts differ from the table, or if a `done` unit's report is missing
import { readFileSync, writeFileSync, existsSync } from "fs";
import { readUnits, readUnitStatus, UNIT_STATUSES, type UnitStatusRow } from "./_lib";

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
  return ["# Work units — Phase 1 inventory", "",
    "Written and changed only by `scripts/synthesis/units.ts` (METHOD §7). Do not edit by hand. The file assignment behind each unit is `docs/analysis/manifest/units.md` (partition.ts). Status values: `pending` · `in-progress` · `done` · `blocked` · `rolled-back`.", "",
    "| Unit | Package | Files | Bytes | Status | Session | Output |", "|---|---|---|---|---|---|---|",
    ...rows.map(r => `| ${r.unit} | ${r.pkg} | ${r.files} | ${r.bytes} | ${r.status} | ${r.session} | ${r.output} |`), ""].join("\n");
}
function counts(rows: UnitStatusRow[]) {
  const c: Record<string, number> = {}; for (const s of UNIT_STATUSES) c[s] = 0;
  for (const r of rows) c[r.status] = (c[r.status] ?? 0) + 1;
  return c;
}
const statusLine = (rows: UnitStatusRow[]) => { const c = counts(rows); return `units: ${rows.length} total — pending ${c.pending} · in-progress ${c["in-progress"]} · done ${c.done} · blocked ${c.blocked} · rolled-back ${c["rolled-back"]}`; };
const orderOf = (u: string) => { const m = u.match(/^inv-(\w+)-(\d+)$/); return m ? `${["addy", "matt", "rjm"].indexOf(m[1] ?? "")}-${String(m[2]).padStart(4, "0")}` : u; };

function syncState(rows: UnitStatusRow[]) {
  if (!existsSync(STATE)) die(`${STATE} missing`);
  let st = readFileSync(STATE, "utf8");
  const c = counts(rows);
  const next = rows.find(r => r.status === "in-progress") ?? rows.find(r => r.status === "pending");
  const block = `### Phase 1 — Inventory units\n\nThe unit table is \`docs/plan/units.md\`, written only by \`bun scripts/synthesis/units.ts\` (\`status\`, \`pending N\`, \`mark\`, \`sync\`). Never read or edit it by hand; ask the script.\n\n| Status | Units |\n|---|---|\n| pending | ${c.pending} |\n| in-progress | ${c["in-progress"]} |\n| done | ${c.done} |\n| blocked | ${c.blocked} |\n| rolled-back | ${c["rolled-back"]} |\n| **total** | **${rows.length}** |\n\n`;
  const a = st.indexOf("### Phase 1 — Inventory units"); const b = st.indexOf("### Phase 2 — Concept card units");
  if (a < 0 || b < 0) die("STATE.md: Phase 1 / Phase 2 unit headings not found");
  st = st.slice(0, a) + block + st.slice(b);
  st = st.replace(/\| \*\*current_unit\*\* \| [^|]* \|/, `| **current_unit** | ${next ? next.unit : "—"} |`);
  const perPkg = (s: string) => ["addy", "matt", "rjm"].map(p => rows.filter(r => r.pkg === p && r.status === s).length).join(" / ");
  st = st.replace(/\| Inventory units done \(addy \/ matt \/ rjm\) \| [^|]* \|/, `| Inventory units done (addy / matt / rjm) | ${perPkg("done")} |`);
  writeFileSync(STATE, st);
  console.log(`units: STATE.md synced — ${statusLine(rows)}; current_unit ${next ? next.unit : "—"}`);
}

if (cmd === "init") {
  const man = fromManifest(); if (!man.size) die("docs/analysis/manifest/units.md missing or empty — run partition.ts first");
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
    r.output = status === "done" ? `docs/analysis/inventory/${r.pkg}/_units/${u}.md` : status === "pending" ? "—" : r.output;
    if (status === "done" && !existsSync(r.output)) die(`${u}: cannot mark done — ${r.output} does not exist (R7)`);
  }
  writeFileSync(TABLE, render(rows));
  console.log(`units: ${units.length} unit(s) → ${status} (session ${session}): ${units.join(" ")}`);
  syncState(rows);
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
  const c = counts(rows);
  for (const s of UNIT_STATUSES) { const m = st.match(new RegExp(`^\\| ${s} \\| (\\d+) \\|$`, "m")); if (!m || parseInt(m[1] ?? "", 10) !== c[s]) { console.log(`FAIL STATE.md count for ${s} is ${m ? m[1] : "missing"}, table says ${c[s]} — run units.ts sync`); bad++; } }
  console.log(bad ? `units: ${bad} failure(s)` : `units: table, manifest and STATE.md agree — ${statusLine(rows)}`);
  process.exit(bad ? 1 : 0);
} else {
  console.log(readFileSync(new URL(import.meta.url).pathname, "utf8").split("\n").filter(l => l.startsWith("//")).map(l => l.slice(3)).join("\n"));
  process.exit(cmd ? 2 : 0);
}
