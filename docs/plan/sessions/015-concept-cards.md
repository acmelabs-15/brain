---
session: 015
date: 2026-09-06
phase_at_start: 2
phase_at_end: 2
units_completed: [cc-addy-1, cc-addy-2, cc-addy-3, cc-addy-4, cc-addy-5, cc-addy-6, cc-addy-7, cc-addy-8, cc-addy-9, cc-addy-10, cc-addy-11, cc-addy-12, cc-addy-13, cc-addy-14, cc-addy-15, cc-addy-16, cc-addy-17, cc-addy-18, cc-addy-19, cc-addy-20, cc-addy-21, cc-addy-22, cc-addy-23, cc-addy-24, cc-addy-25, cc-addy-26, cc-addy-27, cc-addy-28, cc-addy-29, cc-addy-30, cc-addy-31, cc-addy-32, cc-addy-33, cc-addy-34, cc-addy-35, cc-addy-36, cc-addy-37, cc-addy-38, cc-addy-39, cc-addy-40, cc-addy-41, cc-addy-42, cc-addy-43, cc-addy-44, cc-matt-1, cc-matt-2, cc-matt-3, cc-matt-4, cc-matt-5, cc-matt-6, cc-matt-7, cc-matt-8, cc-matt-9, cc-matt-10, cc-matt-11, cc-matt-12, cc-matt-13, cc-matt-14, cc-matt-15, cc-matt-16, cc-matt-17, cc-matt-18, cc-matt-19, cc-matt-20, cc-matt-21, cc-matt-22, cc-matt-23, cc-matt-24, cc-matt-25, cc-matt-26, cc-matt-27, cc-matt-28, cc-matt-29, cc-matt-30, cc-matt-31, cc-matt-32, cc-matt-33, cc-matt-34, cc-matt-35, cc-matt-36, cc-matt-37, cc-matt-38, cc-matt-39, cc-matt-40, cc-rjm-1, cc-rjm-2, cc-rjm-3, cc-rjm-4, cc-rjm-5, cc-rjm-6, cc-rjm-7, cc-rjm-8, cc-rjm-9, cc-rjm-10, cc-rjm-11, cc-rjm-12, cc-rjm-13, cc-rjm-14, cc-rjm-15, cc-rjm-16, cc-rjm-17, cc-rjm-18, cc-rjm-19, cc-rjm-20]
units_rolled_back: []
units_blocked: []
decisions_added: []
needs_peter: no
prefix_hash_start: aee575509086c8f2
prefix_hash_end: aee575509086c8f2
context_used_start: 9.10%
context_used_peak: 23.58%
runs: [p2-run-01 (1 × 24), p2-run-02 (1 × 32), p2-run-03 (1 × 48)]
compactions: 0
---

# Session 015 — Concept cards

## Start state
- phase: 2
- phase_name: Concept cards
- current_unit: cc-addy-1
- last_session: 014
- next_action: Phase 2 — dispatch concept units per §8.2 (the partition is done: units-p2.md, cc-* rows pending; D-023)
- human_approval: PENDING
- human_approval_date: —
- landscape_scan: no
- Last-unit check (§8.1 step 6): `units.ts show inv-rjm-310` → done; `memo.ts check inv-rjm-310` → HIT across 8 cards; `quote-check.ts --summary` → 127 PASS, 0 FAIL across 8 cards.
- prefix-check.ts (§8.1 step 8): 31 files, combined aee575509086c8f2
- partition.ts --check: partition: units.md matches the manifests (1585 rows, 416 units)
- units.ts check: table, manifest and STATE.md agree — units: 876 total — pending 460 · in-progress 0 · done 416 · blocked 0 · rolled-back 0
- coverage.ts: clean (rows 1595, covered 1567, uncovered 0, orphan cards 0, empty required 0, R11 alias 0, R11 variant 0, concepts without card 0, index problems 0)
- glossary-lint.ts: clean
- memo.ts audit: 1566 OK, 0 STALE, 0 UNSTAMPED across 1566 card(s)
- partition-concepts.ts --check: units-p2.md matches the inventory (13765 concepts, 460 units)
- concept-index.ts --check: clean
- budget.ts --record start: used=9.10% peak=9.10% governing=25.00% close=1.11% headroom=14.79% pending=460 → DISPATCH 1 run × 24 units (24 units, cost 2.76%) — PROBE: one step above the proven maximum (1 × 16)

## What was done
- Completed §8.1 session-start protocol with zero errors.
- Dispatched and verified three Phase 2 Teamwork runs (104 units, 3,106 concept cards, 104 unit reports):
  - `p2-run-01` (1 × 24 units: `cc-addy-1` through `cc-addy-24`): 720 concept cards in `docs/analysis/concepts/addy/`, 24 unit reports under `_units/`, 882 PASS / 0 FAIL citations. Wall time 17.7 min (clean probe, established `last_clean_wall_minutes=17.7`, raised `max_clean_run` to 24).
  - `p2-run-02` (1 × 32 units: `cc-addy-25` through `cc-addy-44` [completing addy] and `cc-matt-1` through `cc-matt-12`): 953 concept cards across `addy` (593) and `matt` (360), 32 unit reports under `_units/`, 1,173 PASS / 0 FAIL citations. Wall time 19.0 min (clean probe within 25% of 17.7 min, raised `max_clean_run` to 32, updated `last_clean_wall_minutes=19.0`).
  - `p2-run-03` (1 × 48 units: `cc-matt-13` through `cc-matt-40` [completing matt] and `cc-rjm-1` through `cc-rjm-20`): 1,433 concept cards across `matt` (833) and `rjm` (600), 48 unit reports under `_units/`, 1,704 PASS / 0 FAIL citations. 429 quota exhaustion handled cleanly by Teamwork Sentinel pause/resume. Wall time 310.3 min. Quality clean (1,704 PASS / 0 FAIL).
- Package completions:
  - `addy`: 44/44 concept units complete (1,313 concept cards, 44 unit reports, `_index.md` with 1,313 cards across 9 groups).
  - `matt`: 40/40 concept units complete (1,193 concept cards, 40 unit reports, `_index.md` with 1,193 cards across 40 groups).
  - `rjm`: 20/376 concept units complete (600 concept cards, 20 unit reports, `_index.md` with 600 cards across 14 groups).
- All 104 completed units stamped with `memo.ts stamp-unit` (model "Gemini 3.8 Flash", effort high) and verified with `memo.ts verify`.
- Regenerated manifests (`manifest.ts --no-fetch`) and concept indexes (`concept-index.ts`).
- Recorded all run entries in `docs/analysis/dynamic-batching-experiment.md` §7 (runs 19, 20, 21).
- Updated `STATE.md` to reflect 520 total units done (416 inventory + 104 concept units), cleared obsolete blocked row.
- Executed §8.3 session close: prefix unchanged (`aee575509086c8f2`), measured parameters via `budget.ts --measure`, updated `docs/plan/budget-params.json`.

## What the next session must know
- `addy` and `matt` concept card extraction is 100% complete.
- `rjm` concept card extraction is in-progress: units `cc-rjm-1` through `cc-rjm-20` are done; 356 units remain (`cc-rjm-21` through `cc-rjm-376`).
- `max_clean_run` is currently set to 32. A 48-unit run is proven clean on quality (1,704 PASS / 0 FAIL across 49 workers) and can be probed again for wall-time measurement without quota interference.

## Blocked
none

## Next action
Resume Phase 2 at `cc-rjm-21` (356 units pending).

## For Peter
none

## Scripts run
- `bun scripts/synthesis/units.ts status` → exit 0 (876 total, 460 pending, 416 done)
- `bun scripts/synthesis/units.ts show inv-rjm-310` → exit 0 (done, 8 files)
- `bun scripts/synthesis/memo.ts check inv-rjm-310` → exit 0 (8 cards HIT)
- `bun scripts/synthesis/quote-check.ts --summary ...` → exit 0 (127 PASS, 0 FAIL)
- `git branch --show-current && git -C sources/addy rev-parse HEAD && git -C sources/matt rev-parse HEAD && git -C sources/rjm rev-parse HEAD && ls -d sources/addy-external sources/matt-external && git status --porcelain` → exit 0 (v2, pins match, clean tree)
- `bun scripts/synthesis/prefix-check.ts && bun scripts/synthesis/partition.ts --check && bun scripts/synthesis/units.ts check && bun scripts/synthesis/coverage.ts --quiet && bun scripts/synthesis/glossary-lint.ts && bun scripts/synthesis/memo.ts audit | tail -1` → exit 0 (all clean, combined aee575509086c8f2)
- `bun scripts/synthesis/partition-concepts.ts --check && bun scripts/synthesis/concept-index.ts --check` → exit 0 (clean)
- `bun scripts/synthesis/budget.ts --record start` → exit 0 (`used=9.10%`)
- `bun scripts/synthesis/budget.ts --record "run-start p2-run-01 n=24"` → exit 0 (`used=10.24%`)
- `bun scripts/synthesis/unit-facts.ts <u...> | grep -E 'MISSING|^# unit-facts'` (24 units) → exit 0 (0 MISSING)
- `bun scripts/synthesis/units.ts mark in-progress --session 015 cc-addy-1..24` → exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p2-run-01"` → exit 0 (`used=10.92%`)
- `bun scripts/synthesis/await-run.ts p2-run-01 --wait 240` → exit 0 (COMPLETE, elapsed 17.7 min)
- `bun scripts/synthesis/memo.ts stamp-unit cc-addy-1..24` → exit 0 (720 cards stamped)
- `bun scripts/synthesis/memo.ts verify cc-addy-1..24` → exit 0 (882 PASS, 0 FAIL)
- `bun scripts/synthesis/coverage.ts --quiet` → exit 0 (clean)
- `bun scripts/synthesis/units.ts mark done --session 015 cc-addy-1..24` → exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch && bun scripts/synthesis/concept-index.ts` → exit 0
- `bun scripts/synthesis/budget.ts --record "verified p2-run-01"` → exit 0 (`used=12.35%`)
- `bun scripts/synthesis/budget.ts --set max_clean_run=24 last_clean_wall_minutes=17.7` → exit 0
- `bun scripts/synthesis/budget.ts --record "run-start p2-run-02 n=32"` → exit 0 (`used=14.16%`)
- `bun scripts/synthesis/unit-facts.ts <u...> | grep -E 'MISSING|^# unit-facts'` (32 units) → exit 0 (0 MISSING)
- `bun scripts/synthesis/units.ts mark in-progress --session 015 cc-addy-25..44 cc-matt-1..12` → exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p2-run-02"` → exit 0 (`used=14.62%`)
- `bun scripts/synthesis/await-run.ts p2-run-02 --wait 240` → exit 0 (COMPLETE, elapsed 19.0 min)
- `bun scripts/synthesis/memo.ts stamp-unit cc-addy-25..44 cc-matt-1..12` → exit 0 (953 cards stamped)
- `bun scripts/synthesis/memo.ts verify cc-addy-25..44 cc-matt-1..12` → exit 0 (1,173 PASS, 0 FAIL)
- `bun scripts/synthesis/coverage.ts --quiet` → exit 0 (clean)
- `bun scripts/synthesis/units.ts mark done --session 015 cc-addy-25..44 cc-matt-1..12` → exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch && bun scripts/synthesis/concept-index.ts` → exit 0
- `bun scripts/synthesis/budget.ts --record "verified p2-run-02"` → exit 0 (`used=15.98%`)
- `bun scripts/synthesis/budget.ts --set max_clean_run=32 last_clean_wall_minutes=19.0` → exit 0
- `bun scripts/synthesis/budget.ts --record "run-start p2-run-03 n=48"` → exit 0 (`used=17.15%`)
- `bun scripts/synthesis/unit-facts.ts <u...> | grep -E 'MISSING|^# unit-facts'` (48 units) → exit 0 (0 MISSING)
- `bun scripts/synthesis/units.ts mark in-progress --session 015 cc-matt-13..40 cc-rjm-1..20` → exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p2-run-03"` → exit 0 (`used=17.66%`)
- `bun scripts/synthesis/await-run.ts p2-run-03 --wait 240` → exit 0 (COMPLETE, elapsed 310.3 min)
- `bun scripts/synthesis/memo.ts stamp-unit cc-matt-13..40 cc-rjm-1..20` → exit 0 (1,433 cards stamped)
- `bun scripts/synthesis/memo.ts verify cc-matt-13..40 cc-rjm-1..20` → exit 0 (1,704 PASS, 0 FAIL)
- `bun scripts/synthesis/coverage.ts --quiet` → exit 0 (clean)
- `bun scripts/synthesis/units.ts mark done --session 015 cc-matt-13..40 cc-rjm-1..20` → exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch && bun scripts/synthesis/concept-index.ts` → exit 0
- `bun scripts/synthesis/budget.ts --record "verified p2-run-03"` → exit 0 (`used=21.00%`)
- `bun scripts/synthesis/prefix-check.ts --compare aee575509086c8f2` → exit 0 (prefix: unchanged)
- `bun scripts/synthesis/budget.ts --record close` → exit 0 (`used=23.58%`)
- `bun scripts/synthesis/budget.ts --measure` → exit 0
- `bun scripts/synthesis/budget.ts --set start_pct=10.24 close_pct=2.57` → exit 0

## Context note
- `start`: `budget 2026-09-06T23:09:42.345Z conv=67768d27 model="Gemini 3.8 Flash (High)" used=9.10% peak=9.10% governing=25.00% close=1.11% headroom=14.79% pending=460 → DISPATCH 1 run × 24 units`
- `run-start p2-run-01 n=24`: `used=10.24%`
- `dispatched p2-run-01`: `used=10.92%`
- `verified p2-run-01`: `used=12.35%`
- `run-start p2-run-02 n=32`: `used=14.16%`
- `dispatched p2-run-02`: `used=14.62%`
- `verified p2-run-02`: `used=15.98%`
- `run-start p2-run-03 n=48`: `used=17.15%`
- `dispatched p2-run-03`: `used=17.66%`
- `verified p2-run-03`: `used=21.00%`
- `close`: `budget 2026-09-07T05:03:30.891Z conv=67768d27 model="Gemini 3.8 Flash (High)" used=23.58% peak=23.58% governing=25.00% close=1.11% headroom=0.31% pending=356 → STOP — no plan fits the headroom: close per §8.3`
- `verdict at stop`: `STOP — no plan fits the headroom: close per §8.3`
- `rot metrics`: 0 observed across conversation
- `compactions`: 0
