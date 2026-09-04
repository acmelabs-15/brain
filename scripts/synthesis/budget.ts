#!/usr/bin/env bun
// budget.ts — the D-010 calculation: how much this conversation can still do before context rot (METHOD M4, §8.2).
//
//   bun scripts/synthesis/budget.ts                 print the budget for the current conversation
//   bun scripts/synthesis/budget.ts --json          machine-readable
//   bun scripts/synthesis/budget.ts --set per_unit_delta_pct=0.9 reserve_pct=5 max_clean_run=12
//                                                   record a measured parameter in docs/plan/budget-params.json
//
// Inputs (all files; nothing is estimated):
//   .teamwork/ctx-log.jsonl          the statusline's context time series; the last record for the newest
//                                    conversation gives used_percentage, context_window_size, model
//   docs/plan/context-ceilings.json  evidence-based ceilings per model (strict knee + plateau), with a default
//   docs/plan/budget-params.json     the measured parameters: per_unit_delta_pct, reserve_pct, run_sizes,
//                                    max_clean_run, experiment_ceiling_pct (provisional until D-010)
//   docs/plan/STATE.md               pending units
//
//   budget_pct   = experiment_ceiling_pct (if set) else strict ceiling × 100
//   headroom_pct = budget_pct − used_pct − reserve_pct
//   units_left   = floor(headroom_pct / per_unit_delta_pct)        (only when per_unit_delta_pct is measured)
//   next_run     = largest size in run_sizes ≤ min(units_left, max_clean_run, pending)  — or the first size if unmeasured
import { readFileSync, writeFileSync, existsSync } from "fs";

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const PARAMS = "docs/plan/budget-params.json";
const CEIL = "docs/plan/context-ceilings.json";
const LOG = ".teamwork/ctx-log.jsonl";

type Params = { per_unit_delta_pct: number | null; reserve_pct: number; run_sizes: number[]; max_clean_run: number | null; experiment_ceiling_pct: number | null; notes?: string };
const params: Params = existsSync(PARAMS) ? JSON.parse(readFileSync(PARAMS, "utf8")) : { per_unit_delta_pct: null, reserve_pct: 5, run_sizes: [6, 8, 12, 16], max_clean_run: null, experiment_ceiling_pct: null };

if (args[0] === "--set") {
  for (const kv of args.slice(1)) {
    const [k, v] = kv.split("=");
    if (!k || v === undefined || !(k in params)) { console.error(`budget: unknown parameter ${k}`); process.exit(2); }
    (params as any)[k] = v === "null" ? null : k === "run_sizes" ? v.split(",").map(Number) : Number(v);
  }
  writeFileSync(PARAMS, JSON.stringify(params, null, 2) + "\n");
  console.log(`budget: wrote ${PARAMS}: ${JSON.stringify(params)}`);
  process.exit(0);
}

// ---- context reading
if (!existsSync(LOG)) { console.error(`budget: ${LOG} missing — the statusline is not logging into the workspace (coralline-agy.json ctxLog)`); process.exit(2); }
const records = readFileSync(LOG, "utf8").trim().split("\n").filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean) as any[];
if (!records.length) { console.error("budget: ctx-log has no records yet"); process.exit(2); }
const last = records[records.length - 1]!;
const conv = last.conversation_id ?? null;
const mine = conv ? records.filter(r => r.conversation_id === conv) : records;
const used = Number(last.used_percentage ?? NaN);
const window = Number(last.context_window_size ?? NaN);
const model = String(last.model ?? "unknown");
const peak = Math.max(...mine.map(r => Number(r.used_percentage ?? 0)));
const drops = mine.filter((r, i) => i > 0 && Number(r.used_percentage) < Number(mine[i - 1]!.used_percentage) - 10); // a compaction leaves a >10-point drop

// ---- ceiling
const ceilings = JSON.parse(readFileSync(CEIL, "utf8"));
const entry = ceilings[model] ?? Object.entries(ceilings).find(([k]) => k !== "_readme" && k !== "default" && model.toLowerCase().startsWith(k.toLowerCase()))?.[1];
let strictPct: number, plateauPct: number | null, source: string;
if (entry) {
  strictPct = entry.ceiling * 100; plateauPct = entry.plateau ? entry.plateau * 100 : null; source = `context-ceilings.json["${model}"]`;
} else {
  const d = ceilings.default; const w = Number.isFinite(window) ? window : 0;
  const tokens = Math.min(d.ceiling * w, d.maxTokens ?? Infinity);
  strictPct = w ? (tokens / w) * 100 : d.ceiling * 100; plateauPct = null; source = `context-ceilings.json.default (min(${d.ceiling}×window, ${d.maxTokens}))`;
}
const budgetPct = params.experiment_ceiling_pct ?? strictPct;
const headroom = budgetPct - used - params.reserve_pct;

// ---- pending units
const state = existsSync("docs/plan/STATE.md") ? readFileSync("docs/plan/STATE.md", "utf8") : "";
const pending = (state.match(/^\| inv-[^|]+\|[^|]+\|[^|]+\|[^|]+\| pending \|/gm) || []).length;

// ---- recommendation
const delta = params.per_unit_delta_pct;
const unitsLeft = delta && delta > 0 ? Math.max(0, Math.floor(headroom / delta)) : null;
const cap = Math.min(unitsLeft ?? Infinity, params.max_clean_run ?? Infinity, pending);
const sizes = [...params.run_sizes].sort((a, b) => a - b);
let nextRun: number | null;
if (headroom <= 0) nextRun = null;
else if (unitsLeft === null) nextRun = Math.min(sizes[0]!, pending) || null;                 // unmeasured: smallest run, measure it
else nextRun = sizes.filter(s => s <= cap).pop() ?? (cap >= 1 ? Math.floor(cap) : null);

const out = {
  conversation_id: conv, model, window_tokens: window, used_pct: used, used_tokens: Number.isFinite(window) ? Math.round(window * used / 100) : null,
  peak_pct_this_conversation: peak, compactions_seen: drops.length,
  ceiling: { strict_pct: +strictPct.toFixed(2), plateau_pct: plateauPct === null ? null : +plateauPct.toFixed(2), source, governing_pct: +budgetPct.toFixed(2), governing_source: params.experiment_ceiling_pct != null ? "budget-params.experiment_ceiling_pct (provisional)" : "strict ceiling" },
  reserve_pct: params.reserve_pct, headroom_pct: +headroom.toFixed(2),
  per_unit_delta_pct: delta, units_left: unitsLeft, max_clean_run: params.max_clean_run, pending_units: pending,
  next_run_size: nextRun,
  verdict: headroom <= 0 ? "STOP — no headroom: close per §8.3" : nextRun === null ? "STOP — nothing pending" : unitsLeft === null ? `DISPATCH ${nextRun} (per-unit delta not yet measured: run the smallest size and measure)` : `DISPATCH ${nextRun} (units_left ${unitsLeft})`,
};
if (asJson) { console.log(JSON.stringify(out, null, 2)); process.exit(0); }
console.log(`budget — ${model}, window ${Number.isFinite(window) ? window.toLocaleString() : "?"} tokens, conversation ${conv ?? "?"}`);
console.log(`  used now        ${used}%  (${out.used_tokens?.toLocaleString() ?? "?"} tokens; peak this conversation ${peak}%; compactions seen ${drops.length})`);
console.log(`  ceiling         strict ${out.ceiling.strict_pct}%  plateau ${out.ceiling.plateau_pct ?? "—"}%  ← ${source}`);
console.log(`  governing       ${out.ceiling.governing_pct}%  (${out.ceiling.governing_source})   reserve ${params.reserve_pct}%`);
console.log(`  headroom        ${out.headroom_pct}%`);
console.log(`  per-unit delta  ${delta ?? "not measured"}%   units_left ${unitsLeft ?? "—"}   max clean run ${params.max_clean_run ?? "—"}   pending ${pending}`);
console.log(`  ${out.verdict}`);
