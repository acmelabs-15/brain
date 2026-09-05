---
session: 004
date: 2026-09-04
phase_at_start: 1
phase_at_end: 1
units_completed: [inv-addy-9, inv-addy-10, inv-addy-11, inv-addy-12, inv-addy-13, inv-addy-14, inv-addy-15, inv-addy-16, inv-addy-17, inv-addy-18, inv-addy-19, inv-addy-20, inv-addy-21, inv-addy-22, inv-addy-23, inv-addy-24, inv-addy-25, inv-addy-26, inv-addy-27, inv-addy-28, inv-addy-29, inv-addy-30, inv-addy-31, inv-addy-32]
units_rolled_back: []
units_blocked: []
decisions_added: []
needs_peter: no
prefix_hash_start: b062f9568f9d36ef
prefix_hash_end: b062f9568f9d36ef
context_used_start: 8.51%
context_used_peak: 19.92%
runs: [p1-run-02 (1 × 12), p1-run-03 (1 × 12)]
compactions: 0
---

# Session 004 — Inventory

## Start state
- `phase`: 1 (Inventory)
- `current_unit`: inv-addy-9
- `last_session`: 003
- `human_approval`: PENDING
- `landscape_scan`: no (D-007)
- §8.1 step 6 last-unit check: `units.ts show inv-addy-8` -> `| inv-addy-8 | addy | 12 | 12374 | done | 001 | docs/analysis/inventory/addy/_units/inv-addy-8.md |`. `memo.ts check inv-addy-8` returned 12 HITs (clean). `quote-check.ts --summary` on inv-addy-8 cards: 107 PASS, 0 FAIL.
- `coverage.ts`: rows 1595 (28 symlink/asset/unavailable rows need no card), covered 90, uncovered 1477, orphan cards 0, empty required 0, R11 alias problems 0, R11 variant problems 0, concepts without card 0 (clean).
- `glossary-lint.ts`: clean.
- Source pins verified:
  - `addy`: `d2c37ef6225dd8726cdd369a8030307f48592d26` (clean)
  - `matt`: `6654f6b60cd9d5be8b54c6fafe44346dabeb3b76` (clean)
  - `rjm`: `2abef31dc6812b62696297bd1065b58727a35786` (clean)
  - External snapshots: `sources/addy-external/` and `sources/matt-external/` present.
- Working tree clean on branch `v2`.
- `prefix-check.ts`: 29 files, combined `b062f9568f9d36ef`.
- `partition.ts --check`: units.md matches the manifests (1585 rows, 416 units).
- `units.ts check`: table, manifest and STATE.md agree (416 total, 408 pending, 8 done).
- `memo.ts audit`: 90 OK, 0 STALE, 0 UNSTAMPED across 90 card(s) (clean; D-020 resolved).

## What was done
- Dispatched `p1-run-02` (12 units, `inv-addy-9`..`20`) as a probe above the proven maximum (`n=8` -> `n=12`). Completed clean (627 PASS / 0 FAIL across 51 cards, wall time 15.6 min within 25% bound, zero 429s).
- Stamped, verified with `verified: 2026-09-04 quote-check+coverage`, and marked done for units `inv-addy-9` through `inv-addy-20`. Updated `max_clean_run=12` and `last_clean_wall_minutes=15.6` in `docs/plan/budget-params.json`.
- Dispatched `p1-run-03` (12 units, `inv-addy-21`..`32`). Completed clean (663 PASS / 0 FAIL across 15 cards, wall time 12.97 min, zero 429s).
- Stamped, verified with `verified: 2026-09-04 quote-check+coverage`, and marked done for units `inv-addy-21` through `inv-addy-32`.
- Total 24 units completed in this session: `inv-addy-9` through `inv-addy-32` (total 32 units done across project; 156 manifest rows checked).
- `budget.ts` reached `STOP — no plan fits the headroom: close per §8.3` (used: 19.92%, close reserve: 1.29%, headroom: 3.79%).

## What the next session must know
- `max_clean_run` is now 12 (proven clean in run 02 and run 03).
- Units `inv-addy-1` through `inv-addy-32` are complete, verified, and clean across all anti-drift checks.
- Next units to dispatch begin at `inv-addy-33`.
- `budget.ts` measured `start_pct=9.53`, `close_pct=1.87`, and stored them in `docs/plan/budget-params.json`.

## Blocked
none

## Next action
Resume Phase 1 inventory at `inv-addy-33` per `budget.ts` recommendation.

## For Peter
none

## Scripts run
- `bun scripts/synthesis/units.ts status` — exit 0 — `units: 416 total — pending 408 · in-progress 0 · done 8 · blocked 0 · rolled-back 0`
- `bun scripts/synthesis/units.ts show inv-addy-8` — exit 0 — `| inv-addy-8 | addy | 12 | 12374 | done | 001 | docs/analysis/inventory/addy/_units/inv-addy-8.md |`
- `bun scripts/synthesis/memo.ts check inv-addy-8` — exit 0 — 12 HITs
- `bun scripts/synthesis/unit-facts.ts inv-addy-8` — exit 0 — 12 files, 12 deliverables, 0 MISSING
- `bun scripts/synthesis/quote-check.ts --summary <inv-addy-8 cards>` — exit 0 — `quote-check: 107 PASS, 0 FAIL`
- `git branch --show-current` — exit 0 — `v2`
- `git -C sources/addy rev-parse HEAD` — exit 0 — `d2c37ef6225dd8726cdd369a8030307f48592d26`
- `git -C sources/matt rev-parse HEAD` — exit 0 — `6654f6b60cd9d5be8b54c6fafe44346dabeb3b76`
- `git -C sources/rjm rev-parse HEAD` — exit 0 — `2abef31dc6812b62696297bd1065b58727a35786`
- `test -d sources/addy-external && test -d sources/matt-external && git status --porcelain` — exit 0 — clean
- `bun scripts/synthesis/prefix-check.ts` — exit 0 — `prefix: 29 files, combined b062f9568f9d36ef`
- `bun scripts/synthesis/partition.ts --check` — exit 0 — `partition: units.md matches the manifests (1585 rows, 416 units)`
- `bun scripts/synthesis/units.ts check` — exit 0 — `units: table, manifest and STATE.md agree`
- `bun scripts/synthesis/coverage.ts --quiet` — exit 0 — `coverage: clean`
- `bun scripts/synthesis/glossary-lint.ts` — exit 0 — `Glossary lint: clean`
- `bun scripts/synthesis/memo.ts audit | tail -1` — exit 0 — `memo audit: 90 OK, 0 STALE, 0 UNSTAMPED across 90 card(s)`
- `bun scripts/synthesis/budget.ts --record start` — exit 0 — `[start] budget ... used=8.51% ... DISPATCH 1 run × 12 units`
- `bun scripts/synthesis/units.ts pending 12` — exit 0 — `inv-addy-9 .. inv-addy-20`
- `bun scripts/synthesis/budget.ts --record "run-start p1-run-02 n=12"` — exit 0 — `used=9.53%`
- `bun scripts/synthesis/unit-facts.ts <inv-addy-9..20>` — exit 0 — 0 MISSING
- `bun scripts/synthesis/units.ts mark in-progress --session 004 <inv-addy-9..20>` — exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p1-run-02"` — exit 0 — `used=10.35%`
- `bun scripts/synthesis/await-run.ts p1-run-02 --wait 240` — exit 0 — `COMPLETE (15.3 min)`
- `bun scripts/synthesis/memo.ts stamp <cards>` — exit 0 — 51 cards stamped
- `bun scripts/synthesis/quote-check.ts --summary <cards>` — exit 0 — 627 PASS, 0 FAIL across 51 cards
- `bun scripts/synthesis/coverage.ts --quiet` — exit 0 — `clean (1595 rows, covered 141)`
- `bun scripts/synthesis/units.ts mark done --session 004 <inv-addy-9..20>` — exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch` — exit 0 — `addy.md 141 checked`
- `bun scripts/synthesis/budget.ts --record "verified p1-run-02"` — exit 0 — `used=14.15%`
- `bun scripts/synthesis/budget.ts --set max_clean_run=12 last_clean_wall_minutes=15.6` — exit 0
- `bun scripts/synthesis/units.ts pending 12` — exit 0 — `inv-addy-21 .. inv-addy-32`
- `bun scripts/synthesis/budget.ts --record "run-start p1-run-03 n=12"` — exit 0 — `used=16.24%`
- `bun scripts/synthesis/unit-facts.ts <inv-addy-21..32>` — exit 0 — 0 MISSING
- `bun scripts/synthesis/units.ts mark in-progress --session 004 <inv-addy-21..32>` — exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p1-run-03"` — exit 0 — `used=16.71%`
- `bun scripts/synthesis/await-run.ts p1-run-03 --wait 240` — exit 0 — `COMPLETE (12.3 min)`
- `bun scripts/synthesis/memo.ts stamp <cards>` — exit 0 — 15 cards stamped
- `bun scripts/synthesis/quote-check.ts --summary <cards>` — exit 0 — 663 PASS, 0 FAIL across 15 cards
- `bun scripts/synthesis/coverage.ts --quiet` — exit 0 — `clean (1595 rows, covered 156)`
- `bun scripts/synthesis/units.ts mark done --session 004 <inv-addy-21..32>` — exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch` — exit 0 — `addy.md 156 checked`
- `bun scripts/synthesis/budget.ts --record "verified p1-run-03"` — exit 0 — `used=18.05%`
- `bun scripts/synthesis/units.ts sync` — exit 0 — `units: STATE.md synced`
- `bun scripts/synthesis/prefix-check.ts --compare b062f9568f9d36ef` — exit 0 — `prefix: unchanged`
- `bun scripts/synthesis/budget.ts --record close` — exit 0 — `used=19.92% -> STOP`
- `bun scripts/synthesis/budget.ts --measure` — exit 0 — derived `start_pct=9.53 close_pct=1.87`
- `bun scripts/synthesis/budget.ts --set start_pct=9.53 close_pct=1.87` — exit 0

## Context note
- `start`: `[start] budget 2026-09-05T02:56:06.089Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=8.51% peak=8.51% governing=25.00% close=1.29% headroom=15.20% pending=408 → DISPATCH 1 run × 12 units (12 units, cost 6.88%) — PROBE: one step above the proven maximum (1 × 8); a clean result (zero FAIL, zero 429, wall time within 25% of 17 min) raises max_clean_run`
- `run-start p1-run-02`: `[run-start p1-run-02 n=12] budget 2026-09-05T02:56:34.589Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=9.53% peak=9.53% governing=25.00% close=1.29% headroom=14.18% pending=408 → DISPATCH 1 run × 12 units`
- `dispatched p1-run-02`: `[dispatched p1-run-02] budget 2026-09-05T02:57:08.547Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=10.35% peak=10.35% governing=25.00% close=1.29% headroom=13.36% pending=396 → DISPATCH 1 run × 12 units`
- `verified p1-run-02`: `[verified p1-run-02] budget 2026-09-05T03:14:06.094Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=14.15% peak=14.15% governing=25.00% close=1.29% headroom=9.56% pending=396 → DISPATCH 1 run × 12 units`
- `run-start p1-run-03`: `[run-start p1-run-03 n=12] budget 2026-09-05T03:15:03.661Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=16.24% peak=16.24% governing=25.00% close=1.29% headroom=7.47% pending=396 → DISPATCH 1 run × 12 units`
- `dispatched p1-run-03`: `[dispatched p1-run-03] budget 2026-09-05T03:15:28.647Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=16.71% peak=16.71% governing=25.00% close=1.29% headroom=7.00% pending=384 → DISPATCH 1 run × 12 units`
- `verified p1-run-03`: `[verified p1-run-03] budget 2026-09-05T03:28:56.382Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=18.05% peak=18.05% governing=25.00% close=1.29% headroom=5.66% pending=384 → DISPATCH 1 run × 5 units`
- `close`: `[close] budget 2026-09-05T03:30:09.821Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=19.92% peak=19.92% governing=25.00% close=1.29% headroom=3.79% pending=384 → STOP — no plan fits the headroom: close per §8.3`
- `measure`: `start_pct=9.53`, `close_pct=1.87` (with `run_fixed_pct=2.35` noted, `per_unit_pct=0.19` held); stored with `budget.ts --set`.
- Verdict ending dispatch: `STOP — no plan fits the headroom: close per §8.3` at used 19.92%. Session ended cleanly by plan.
