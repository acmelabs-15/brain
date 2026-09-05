#!/usr/bin/env bun
// budget.ts — the D-010 calculation: how much this conversation can still dispatch, and how much of it at once,
// before context rot (METHOD §8.2). Nothing here is estimated by the agent: every input is a file.
//
//   bun scripts/synthesis/budget.ts                      the budget now: used, ceiling, headroom, recommended (k runs × n units)
//   bun scripts/synthesis/budget.ts --line               the same as one line (what goes into the handoff and the results doc)
//   bun scripts/synthesis/budget.ts --json               machine-readable
//   bun scripts/synthesis/budget.ts --record <label>     append the current reading to .teamwork/readings.jsonl and print the line
//                                                        labels, in order: start (§8.1 step 9) · run-start <run> n=<count> (§7 step 2, before the
//                                                        brief) · dispatched <run> (after the invoke call) · verified <run> (once per run, §7 step 8) ·
//                                                        close (§8.3 step 3, before the commit — the --set it leads to must be in the commit)
//   bun scripts/synthesis/budget.ts --set k=v …          record a measured parameter in docs/plan/budget-params.json
//   bun scripts/synthesis/budget.ts --measure            derive S, R, u, C from this conversation's --record readings and print
//                                                        the --set command that would store them (nothing is written)
//
// Inputs
//   .teamwork/ctx-log.jsonl          context time series: the statusline appends a record per render (interactive), the
//                                    headless driver appends one per step (drive.ts); newest conversation's last record wins
//   docs/plan/context-ceilings.json  per-model strict ceiling / plateau / governing (evidence-based)
//   docs/plan/budget-params.json     S, R, u, C, run_sizes, max_clean_run, concurrency_sizes, max_clean_concurrency …
//   docs/plan/units.md               pending units (units.ts)
//
// The calculation (D-010)
//   headroom      = governing_ceiling − used − C                           (C = the §8.3 close, always reserved)
//   a plan (k runs of n units, dispatched at the same time) fits iff  k × (R + n × u) ≤ headroom
//   recommended   = the plan with the most units that fits, with n ≤ max_clean_run, k ≤ max_clean_concurrency,
//                   n ∈ run_sizes, k ∈ concurrency_sizes, k × n ≤ pending; n is preferred over k (one bigger run
//                   before two runs) because a run's fixed cost R is paid per run
//   step-up       = when the recommended plan is already the maximum proven clean and the next size in the series
//                   also fits, the verdict names it as the probe for this conversation (one step at a time)
//   STOP          = no plan fits (or nothing pending): close per §8.3
import { readFileSync, writeFileSync, existsSync, appendFileSync, mkdirSync } from "fs";
import { readUnitStatus } from "./_lib";

const args = process.argv.slice(2);
const PARAMS = "docs/plan/budget-params.json";
const CEIL = "docs/plan/context-ceilings.json";
const LOG = ".teamwork/ctx-log.jsonl";
const READINGS = ".teamwork/readings.jsonl";

type Params = {
  start_pct: number | null; run_fixed_pct: number | null; per_unit_pct: number | null; close_pct: number | null;
  ceiling_pct_override: number | null; run_sizes: number[]; max_clean_run: number | null;
  concurrency_sizes: number[]; max_clean_concurrency: number | null; wall_time_bound_pct: number; last_clean_wall_minutes: number | null;
  [k: string]: unknown;
};
const params: Params = JSON.parse(readFileSync(PARAMS, "utf8"));
const NUMERIC = ["start_pct", "run_fixed_pct", "per_unit_pct", "close_pct", "ceiling_pct_override", "max_clean_run", "max_clean_concurrency", "wall_time_bound_pct", "last_clean_wall_minutes"];
const LISTS = ["run_sizes", "concurrency_sizes"];

// ---- --set
if (args[0] === "--set") {
  for (const kv of args.slice(1)) {
    const [k, v] = kv.split("=");
    if (!k || v === undefined || !(NUMERIC.includes(k) || LISTS.includes(k))) { console.error(`budget: unknown or read-only parameter '${k}' (settable: ${[...NUMERIC, ...LISTS].join(", ")})`); process.exit(2); }
    (params as any)[k] = v === "null" ? null : LISTS.includes(k) ? v.split(",").map(Number) : Number(v);
  }
  writeFileSync(PARAMS, JSON.stringify(params, null, 2) + "\n");
  console.log(`budget: wrote ${PARAMS}: ${args.slice(1).join(" ")}`);
  process.exit(0);
}

// ---- context reading
if (!existsSync(LOG)) { console.error(`budget: ${LOG} missing — the statusline is not logging into the workspace (coralline-agy.json ctxLog), or drive.ts is not running`); process.exit(2); }
const records = readFileSync(LOG, "utf8").trim().split("\n").filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(r => r && r.conversation_id) as any[];
if (!records.length) { console.error("budget: ctx-log has no records with a conversation yet"); process.exit(2); }
const last = records[records.length - 1]!;
const conv = String(last.conversation_id);
const mine = records.filter(r => r.conversation_id === conv);
const used = Number(last.used_percentage ?? NaN);
const window = Number(last.context_window_size ?? NaN);
const model = String(last.model ?? "unknown");
const peak = Math.max(...mine.map(r => Number(r.used_percentage ?? 0)));
const drops = mine.filter((r, i) => i > 0 && Number(r.used_percentage) < Number(mine[i - 1]!.used_percentage) - 10).length;

// ---- ceiling
const ceilings = JSON.parse(readFileSync(CEIL, "utf8"));
const entry = ceilings[model] ?? Object.entries(ceilings).find(([k]) => !k.startsWith("_") && k !== "default" && model.toLowerCase().startsWith(k.toLowerCase()))?.[1];
let strictPct: number, plateauPct: number | null, governingPct: number, source: string, governingSource: string;
if (entry) {
  strictPct = entry.ceiling * 100; plateauPct = entry.plateau ? entry.plateau * 100 : null; source = `context-ceilings.json["${model}"]`;
  governingPct = entry.governing ? entry.governing * 100 : strictPct; governingSource = entry.governing ? "governing (project evidence)" : "strict ceiling (no project evidence for this model yet)";
} else {
  const d = ceilings.default; const w = Number.isFinite(window) ? window : 0;
  const tokens = Math.min(d.ceiling * w, d.maxTokens ?? Infinity);
  strictPct = w ? (tokens / w) * 100 : d.ceiling * 100; plateauPct = null; source = `context-ceilings.json.default (min(${d.ceiling}×window, ${d.maxTokens}))`;
  governingPct = strictPct; governingSource = "default strict ceiling (unknown model)";
}
if (params.ceiling_pct_override != null) { governingPct = params.ceiling_pct_override; governingSource = "budget-params.ceiling_pct_override"; }

// ---- parameters and pending
const S = params.start_pct, R = params.run_fixed_pct, u = params.per_unit_pct, C = params.close_pct ?? 3;
const pending = readUnitStatus().filter(r => r.status === "pending").length;
const inProgress = readUnitStatus().filter(r => r.status === "in-progress").length;
const headroom = governingPct - used - C;

// ---- the plan
const sizes = [...params.run_sizes].sort((a, b) => a - b);
const ks = [...(params.concurrency_sizes ?? [1])].sort((a, b) => a - b);
const maxN = params.max_clean_run ?? sizes[0]!;
const maxK = params.max_clean_concurrency ?? 1;
const cost = (k: number, n: number) => (R == null || u == null) ? NaN : k * (R + n * u);
type Plan = { k: number; n: number; units: number; cost: number };
const fits = (k: number, n: number) => Number.isFinite(cost(k, n)) && cost(k, n) <= headroom && k * n <= Math.max(pending, 0);
let best: Plan | null = null;
if (R != null && u != null) {
  for (const k of ks) for (const n of sizes) {
    if (n > maxN || k > maxK || !fits(k, n)) continue;
    const p = { k, n, units: k * n, cost: cost(k, n) };
    if (!best || p.units > best.units || (p.units === best.units && p.k < best.k)) best = p;
  }
  // smaller-than-series remainder: if nothing in the series fits but at least one unit does, run what fits
  if (!best && headroom > 0) { const n = Math.min(Math.floor((headroom - R) / u), maxN, pending); if (n >= 1) best = { k: 1, n, units: n, cost: cost(1, n) }; }
}
// the probe: one step up from the proven maximum, if it also fits
let probe: Plan | null = null;
if (best && R != null && u != null) {
  const nextN = sizes.find(s => s > maxN); const nextK = ks.find(k => k > maxK);
  if (best.n === maxN && nextN && fits(best.k, nextN)) probe = { k: best.k, n: nextN, units: best.k * nextN, cost: cost(best.k, nextN) };
  else if (best.k === maxK && nextK && fits(nextK, best.n)) probe = { k: nextK, n: best.n, units: nextK * best.n, cost: cost(nextK, best.n) };
}

const chosen = probe ?? best;
const verdict = pending === 0 && inProgress === 0 ? "STOP — nothing pending: Phase 1 dispatch is complete"
  : R == null || u == null ? `DISPATCH 1 × ${Math.min(sizes[0]!, pending)} (per-run and per-unit costs not yet measured: run the smallest size, then budget.ts --measure)`
  : !chosen ? "STOP — no plan fits the headroom: close per §8.3"
  : `DISPATCH ${chosen.k} run${chosen.k > 1 ? "s" : ""} × ${chosen.n} units (${chosen.units} units, cost ${chosen.cost.toFixed(2)}%)` + (probe ? ` — PROBE: one step above the proven maximum (${maxK} × ${maxN}); a clean result (zero FAIL, zero 429, one Worker per unit at once, wall time within ${params.wall_time_bound_pct}% of ${params.last_clean_wall_minutes ?? "?"} min) raises max_clean_${probe.n > maxN ? "run" : "concurrency"}` : "");

const out = {
  conversation_id: conv, model, window_tokens: window, used_pct: +used.toFixed(2), used_tokens: Number.isFinite(window) ? Math.round(window * used / 100) : null,
  peak_pct_this_conversation: +peak.toFixed(2), compactions_seen: drops,
  ceiling: { strict_pct: +strictPct.toFixed(2), plateau_pct: plateauPct === null ? null : +plateauPct.toFixed(2), governing_pct: +governingPct.toFixed(2), governing_source: governingSource, source },
  close_reserve_pct: C, headroom_pct: +headroom.toFixed(2),
  params: { start_pct: S, run_fixed_pct: R, per_unit_pct: u, max_clean_run: maxN, max_clean_concurrency: maxK, run_sizes: sizes, concurrency_sizes: ks },
  pending_units: pending, in_progress_units: inProgress, plan: chosen, safe_plan: best, probe, verdict,
};
const line = `budget ${new Date().toISOString()} conv=${conv.slice(0, 8)} model="${model}" used=${used.toFixed(2)}% peak=${peak.toFixed(2)}% governing=${governingPct.toFixed(2)}% close=${C}% headroom=${headroom.toFixed(2)}% pending=${pending} → ${verdict}`;

if (args[0] === "--record") {
  const label = args.slice(1).join(" ") || "reading";
  // a run-start label must carry the plan's n (§7 step 2, D-021): the count comes from this verdict, never from memory
  const rs = label.match(/^run-start\s+(\S+)\s+n=(\d+)$/);
  if (/^run-start/.test(label) && !rs) { console.error(`budget: run-start label must be "run-start <run-id> n=<count>", got "${label}"`); process.exit(2); }
  if (rs) {
    const n = Number(rs[2]);
    if (!chosen) { console.error(`budget: refusing "${label}" — the verdict is ${verdict}`); process.exit(2); }
    if (n !== chosen.n) { console.error(`budget: refusing "${label}" — the plan is ${chosen.k} × ${chosen.n}; record n=${chosen.n} (${line})`); process.exit(2); }
  }
  mkdirSync(".teamwork", { recursive: true });
  appendFileSync(READINGS, JSON.stringify({ ts: new Date().toISOString(), conversation_id: conv, label, used_pct: +used.toFixed(3), tokens: out.used_tokens, model }) + "\n");
  console.log(`[${label}] ${line}`); process.exit(0);
}
if (args.includes("--measure")) {
  const rs = existsSync(READINGS) ? readFileSync(READINGS, "utf8").trim().split("\n").filter(Boolean).map(l => JSON.parse(l)).filter(r => r.conversation_id === conv) : [];
  const at = (re: RegExp) => rs.filter(r => re.test(r.label));
  const pres = at(/^run-start/), vers = at(/^verified/), close = at(/^close$/)[0];
  console.log(`measure: ${rs.length} reading(s) for conversation ${conv.slice(0, 8)}`);
  for (const r of rs) console.log(`  ${r.ts} ${r.used_pct.toFixed(2).padStart(6)}%  ${r.label}`);
  const sets: string[] = [];
  if (pres[0]) sets.push(`start_pct=${pres[0].used_pct.toFixed(2)}`);
  if (pres.length && vers.length) {
    // R = (verified − run-start) − n·u; with two runs of different sizes u and R are both solved, otherwise u is held from budget-params
    const nOf = (label: string) => Number((label.match(/n=(\d+)/) || [])[1] ?? NaN);
    const pairs = pres.map((p, i) => ({ p, v: vers[i], n: nOf(p.label) })).filter(x => x.v && Number.isFinite(x.n));
    if (pairs.length >= 2 && pairs[0]!.n !== pairs[1]!.n) {
      const [a, b] = pairs as [any, any]; const uu = ((b.v.used_pct - b.p.used_pct) - (a.v.used_pct - a.p.used_pct)) / (b.n - a.n);
      const rr = (a.v.used_pct - a.p.used_pct) - a.n * uu; sets.push(`per_unit_pct=${uu.toFixed(3)}`, `run_fixed_pct=${rr.toFixed(2)}`);
    } else if (pairs.length && u != null) { const a = pairs[0]!; sets.push(`run_fixed_pct=${((a.v.used_pct - a.p.used_pct) - a.n * u).toFixed(2)} (with per_unit_pct ${u} held)`); }
  }
  if (close && vers.length) sets.push(`close_pct=${(close.used_pct - vers[vers.length - 1]!.used_pct).toFixed(2)}`);
  console.log(sets.length ? `\nto store: bun scripts/synthesis/budget.ts --set ${sets.filter(s => !s.includes("(")).join(" ")}\n${sets.filter(s => s.includes("(")).map(s => "  note: " + s).join("\n")}` : "\nnot enough labelled readings to derive parameters (need run-start <run> n=<count>, verified <run>, close)");
  process.exit(0);
}
if (args.includes("--json")) { console.log(JSON.stringify(out, null, 2)); process.exit(0); }
if (args.includes("--line")) { console.log(line); process.exit(0); }
console.log(`budget — ${model}, window ${Number.isFinite(window) ? window.toLocaleString() : "?"} tokens, conversation ${conv}`);
console.log(`  used now        ${used.toFixed(2)}%  (${out.used_tokens?.toLocaleString() ?? "?"} tokens; peak this conversation ${peak.toFixed(2)}%; compactions seen ${drops})`);
console.log(`  ceiling         strict ${out.ceiling.strict_pct}%  plateau ${out.ceiling.plateau_pct ?? "—"}%  governing ${out.ceiling.governing_pct}%  ← ${governingSource}; ${source}`);
console.log(`  close reserve   ${C}%   headroom ${out.headroom_pct}%`);
console.log(`  costs           start ${S ?? "—"}%  per run ${R ?? "not measured"}%  per unit ${u ?? "not measured"}%   proven clean: ${maxN} units/run, ${maxK} run(s) at once   pending ${pending}${inProgress ? `  in-progress ${inProgress}` : ""}`);
console.log(`  ${verdict}`);
