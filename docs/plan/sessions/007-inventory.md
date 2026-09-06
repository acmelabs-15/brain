---
session: 007
date: 2026-09-05
phase_at_start: 1
phase_at_end: 1
units_completed: [inv-rjm-179, inv-rjm-180, inv-rjm-181, inv-rjm-182, inv-rjm-183, inv-rjm-184, inv-rjm-185, inv-rjm-186, inv-rjm-187, inv-rjm-188, inv-rjm-189, inv-rjm-190, inv-rjm-191, inv-rjm-192, inv-rjm-193, inv-rjm-194, inv-rjm-195, inv-rjm-196, inv-rjm-197, inv-rjm-198, inv-rjm-199, inv-rjm-200, inv-rjm-201, inv-rjm-202, inv-rjm-203, inv-rjm-204, inv-rjm-205, inv-rjm-206, inv-rjm-207, inv-rjm-208, inv-rjm-209, inv-rjm-210, inv-rjm-211, inv-rjm-212, inv-rjm-213, inv-rjm-214, inv-rjm-215, inv-rjm-216, inv-rjm-217, inv-rjm-218, inv-rjm-219, inv-rjm-220, inv-rjm-221, inv-rjm-222, inv-rjm-223, inv-rjm-224, inv-rjm-225, inv-rjm-226, inv-rjm-227, inv-rjm-228, inv-rjm-229, inv-rjm-230, inv-rjm-231, inv-rjm-232, inv-rjm-233, inv-rjm-234, inv-rjm-235, inv-rjm-236, inv-rjm-237, inv-rjm-238, inv-rjm-239, inv-rjm-240, inv-rjm-241, inv-rjm-242, inv-rjm-243, inv-rjm-244, inv-rjm-245, inv-rjm-246, inv-rjm-247, inv-rjm-248, inv-rjm-249, inv-rjm-250, inv-rjm-251, inv-rjm-252, inv-rjm-253, inv-rjm-254, inv-rjm-255, inv-rjm-256, inv-rjm-257, inv-rjm-258, inv-rjm-259, inv-rjm-260, inv-rjm-261, inv-rjm-262, inv-rjm-263, inv-rjm-264, inv-rjm-265, inv-rjm-266, inv-rjm-267, inv-rjm-268, inv-rjm-269, inv-rjm-270, inv-rjm-271, inv-rjm-272, inv-rjm-273, inv-rjm-274]
units_rolled_back: [inv-rjm-275, inv-rjm-276, inv-rjm-277, inv-rjm-278, inv-rjm-279, inv-rjm-280, inv-rjm-281, inv-rjm-282, inv-rjm-283, inv-rjm-284, inv-rjm-285, inv-rjm-286, inv-rjm-287, inv-rjm-288, inv-rjm-289, inv-rjm-290, inv-rjm-291, inv-rjm-292, inv-rjm-293, inv-rjm-294, inv-rjm-295, inv-rjm-296, inv-rjm-297, inv-rjm-298, inv-rjm-299, inv-rjm-300, inv-rjm-301, inv-rjm-302, inv-rjm-303, inv-rjm-304, inv-rjm-305, inv-rjm-306, inv-rjm-307, inv-rjm-308, inv-rjm-309, inv-rjm-310, inv-rjm-311, inv-rjm-312, inv-rjm-313, inv-rjm-314, inv-rjm-315, inv-rjm-316, inv-rjm-317, inv-rjm-318, inv-rjm-319, inv-rjm-320, inv-rjm-321, inv-rjm-322]
units_blocked: []
decisions_added: []
needs_peter: no
prefix_hash_start: 013f30bc9095fecd
prefix_hash_end: 013f30bc9095fecd
context_used_start: 8.46%
context_used_peak: 24.36%
runs: [p1-run-13 (1 × 48), p1-run-14 (1 × 48), p1-run-15 (1 × 48)]
compactions: 1
---

# Session 007 — Inventory

## Start state
- phase: 1 (Inventory)
- current_unit: inv-rjm-179
- last_session: 006
- next_action: Dispatch Phase 1 run from inv-rjm-179 per budget.ts recommendation
- human_approval: PENDING
- landscape_scan: no (D-007)
- Last-unit check (§8.1 step 6): `units.ts show inv-rjm-178` → done; `memo.ts check inv-rjm-178` → HIT across 3 cards; `quote-check.ts --summary` → 109 PASS, 0 FAIL across 3 cards.
- prefix-check.ts (§8.1 step 8): 29 files, combined 013f30bc9095fecd
- partition.ts --check: units.md matches the manifests (1585 rows, 416 units)
- units.ts check: table, manifest and STATE.md agree — units: 416 total — pending 146 · in-progress 0 · done 270 · blocked 0 · rolled-back 0
- coverage.ts: clean (rows 1595, covered 989, uncovered 578, 0 failures)
- glossary-lint.ts: clean
- memo.ts audit: 989 OK, 0 STALE, 0 UNSTAMPED across 989 card(s)
- budget.ts --record start: used=8.46% peak=8.46% governing=25.00% close=0.78% headroom=15.76% pending=146 → DISPATCH 1 run × 48 units (48 units, cost 3.33%) — PROBE

## What was done
- Dispatched and completed 2 Teamwork runs (`p1-run-13`, `p1-run-14`) covering 96 units (`inv-rjm-179` through `inv-rjm-274`):
  - `p1-run-13` (1 run × 48 units: `inv-rjm-179` through `inv-rjm-226`): 243 inventory cards, 48 unit reports, 6,047 citations byte-exact with zero FAIL. Wall time 13.2 min, 48 workers concurrent. Successfully proved 48-unit probe: `budget.ts --set max_clean_run=48 last_clean_wall_minutes=13.2`.
  - `p1-run-14` (1 run × 48 units: `inv-rjm-227` through `inv-rjm-274`): 175 inventory cards, 48 unit reports, 4,565 citations byte-exact with zero FAIL. Wall time 270.6 min (active ~15 min, paused ~3.5h on upstream model 429 quota window; resumed and completed cleanly).
- Dispatched `p1-run-15` (1 run × 48 units: `inv-rjm-275` through `inv-rjm-322`) as part of concurrency probe; subagent ran units sequentially rather than in parallel, completing 8 units before conversation reached budget STOP (headroom 0.55%). The run was terminated and all 48 units (`inv-rjm-275`..`inv-rjm-322`) marked `rolled-back` per METHOD.md §8.3 step 1 with unstamped cards cleaned up.
- Total session output: 96 units verified and marked `done`, 418 new inventory cards stamped and verified, 96 unit reports produced, 10,612 citations verified byte-exact with zero FAIL across completed runs.
- Total project progress: 366 units done (46 addy / 46 matt / 274 rjm), 1,407 cards verified, 0 FAIL across all checks.
- Appended blocks for `p1-run-13` and `p1-run-14` in `docs/analysis/dynamic-batching-experiment.md` §7.
- Re-measured budget parameters via `budget.ts --measure` and updated `docs/plan/budget-params.json` via `budget.ts --set start_pct=9.08`.

## What the next session must know
- All 46 units of `addy` and all 46 units of `matt` remain 100% verified and clean.
- `rjm` inventory is completed through `inv-rjm-274`.
- Units `inv-rjm-275` through `inv-rjm-322` (48 units) were rolled back at session 007 close; `inv-rjm-323` and `inv-rjm-324` are pending (50 units remaining in Phase 1).
- Next action: Session 008 must re-mark rolled-back units `inv-rjm-275`..`inv-rjm-322` to `pending` via `bun scripts/synthesis/units.ts mark pending --session 008 inv-rjm-275 ...` and dispatch them.
- Quality remains clean across all units: 0 FAIL, 0 rot metrics.

## Blocked
none

## Next action
Session 008: Mark `inv-rjm-275`..`inv-rjm-322` pending, sync state, and dispatch Phase 1 run per budget.ts recommendation.

## For Peter
none

## Scripts run
- `bun scripts/synthesis/units.ts show inv-rjm-178` → exit 0 (`| inv-rjm-178 | rjm | 3 | 36637 | done | 006 | docs/analysis/inventory/rjm/_units/inv-rjm-178.md |`)
- `bun scripts/synthesis/memo.ts check inv-rjm-178` → exit 0 (3 HITs)
- `bun scripts/synthesis/quote-check.ts --summary <3 cards>` → exit 0 (`109 PASS, 0 FAIL`)
- `bun scripts/synthesis/units.ts status` → exit 0 (`units: 416 total — pending 146 · in-progress 0 · done 270 · blocked 0 · rolled-back 0`)
- `git branch --show-current` → exit 0 (`v2`)
- `git -C sources/addy rev-parse HEAD` → exit 0 (`d2c37ef6225dd8726cdd369a8030307f48592d26`)
- `git -C sources/matt rev-parse HEAD` → exit 0 (`6654f6b60cd9d5be8b54c6fafe44346dabeb3b76`)
- `git -C sources/rjm rev-parse HEAD` → exit 0 (`2abef31dc6812b62696297bd1065b58727a35786`)
- `ls -d sources/addy-external sources/matt-external` → exit 0
- `git status --porcelain` → exit 0 (clean)
- `bun scripts/synthesis/prefix-check.ts` → exit 0 (`prefix: 29 files, combined 013f30bc9095fecd`)
- `bun scripts/synthesis/partition.ts --check` → exit 0 (`partition: units.md matches the manifests (1585 rows, 416 units)`)
- `bun scripts/synthesis/units.ts check` → exit 0 (`units: table, manifest and STATE.md agree — units: 416 total — pending 146 · in-progress 0 · done 270 · blocked 0 · rolled-back 0`)
- `bun scripts/synthesis/coverage.ts --quiet` → exit 0 (`coverage: clean`)
- `bun scripts/synthesis/glossary-lint.ts` → exit 0 (`Glossary lint: clean`)
- `bun scripts/synthesis/memo.ts audit | tail -1` → exit 0 (`memo audit: 989 OK, 0 STALE, 0 UNSTAMPED across 989 card(s)`)
- `bun scripts/synthesis/budget.ts --record start` → exit 0 (`used=8.46% peak=8.46% governing=25.00% close=0.78% headroom=15.76% pending=146 → DISPATCH 1 run × 48 units (48 units, cost 3.33%) — PROBE`)
- `bun scripts/synthesis/budget.ts --record "run-start p1-run-13 n=48"` → exit 0 (`used=9.08%`)
- `bun scripts/synthesis/unit-facts.ts <unit> | grep -E 'MISSING|^# unit-facts'` (×48) → exit 0 (0 MISSING)
- `bun scripts/synthesis/units.ts mark in-progress --session 007 inv-rjm-179..226` → exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p1-run-13"` → exit 0 (`used=9.83%`)
- `bun scripts/synthesis/await-run.ts p1-run-13 --wait 240` → exit 0 (`p1-run-13 COMPLETE elapsed 13.2 min`)
- `bun scripts/synthesis/memo.ts stamp "$c" --model "Gemini 3.8 Flash" --effort high` (×243) → exit 0
- `bun scripts/synthesis/quote-check.ts --summary <243 cards>` → exit 0 (`6047 PASS, 0 FAIL`)
- `bun scripts/synthesis/coverage.ts --quiet` → exit 0 (`coverage: clean`)
- `bun scripts/synthesis/units.ts mark done --session 007 inv-rjm-179..226` → exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch` → exit 0
- `bun scripts/synthesis/budget.ts --record "verified p1-run-13"` → exit 0 (`used=12.73%`)
- `bun scripts/synthesis/budget.ts --set max_clean_run=48 last_clean_wall_minutes=13.2` → exit 0
- `bun scripts/synthesis/budget.ts --record "run-start p1-run-14 n=48"` → exit 0 (`used=14.12%`)
- `bun scripts/synthesis/units.ts mark in-progress --session 007 inv-rjm-227..274` → exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p1-run-14"` → exit 0 (`used=14.66%`)
- `bun scripts/synthesis/budget.ts --record "run-start p1-run-15 n=48"` → exit 0 (`used=14.74%`)
- `bun scripts/synthesis/units.ts mark in-progress --session 007 inv-rjm-275..322` → exit 0
- `bun scripts/synthesis/budget.ts --record "dispatched p1-run-15"` → exit 0 (`used=15.19%`)
- `bun scripts/synthesis/await-run.ts p1-run-14 p1-run-15 --wait 240` → handled quota pause and completed p1-run-14
- `bun scripts/synthesis/memo.ts stamp "$c" --model "Gemini 3.8 Flash" --effort high` (×175) → exit 0
- `bun scripts/synthesis/quote-check.ts --summary <175 cards>` → exit 0 (`4565 PASS, 0 FAIL`)
- `bun scripts/synthesis/coverage.ts --quiet` → exit 0 (`coverage: clean`)
- `bun scripts/synthesis/units.ts mark done --session 007 inv-rjm-227..274` → exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch` → exit 0
- `bun scripts/synthesis/budget.ts --record "verified p1-run-14"` → exit 0 (`used=23.67%`)
- `bun scripts/synthesis/units.ts mark rolled-back --session 007 inv-rjm-275..322` → exit 0
- `bun scripts/synthesis/manifest.ts --no-fetch` → exit 0
- `bun scripts/synthesis/prefix-check.ts --compare 013f30bc9095fecd` → exit 0 (`prefix: unchanged (013f30bc9095fecd)`)
- `bun scripts/synthesis/budget.ts --record close` → exit 0 (`used=11.75% peak=24.36%`)
- `bun scripts/synthesis/budget.ts --measure` → exit 0
- `bun scripts/synthesis/budget.ts --set start_pct=9.08` → exit 0
- `bun scripts/synthesis/units.ts check` → exit 0 (`units: table, manifest and STATE.md agree — units: 416 total — pending 2 · in-progress 0 · done 366 · blocked 0 · rolled-back 48`)
- `bun scripts/synthesis/coverage.ts` → exit 0 (`coverage: clean`)
- `bun scripts/synthesis/memo.ts audit` → exit 0 (`memo audit: 1407 OK, 0 STALE, 0 UNSTAMPED across 1407 card(s)`)

## Context note
- `start`: `budget 2026-09-06T01:27:52.075Z conv=881dadc9 model="Gemini 3.8 Flash (High)" used=8.46% peak=8.46% governing=25.00% close=0.78% headroom=15.76% pending=146 → DISPATCH 1 run × 48 units (48 units, cost 3.33%) — PROBE`
- `run-start p1-run-13 n=48`: `used=9.08%`
- `dispatched p1-run-13`: `used=9.83%`
- `verified p1-run-13`: `used=12.73%`
- `run-start p1-run-14 n=48`: `used=14.12%`
- `dispatched p1-run-14`: `used=14.66%`
- `run-start p1-run-15 n=48`: `used=14.74%`
- `dispatched p1-run-15`: `used=15.19%`
- `verified p1-run-14`: `used=23.67%`
- `close`: `budget 2026-09-06T06:18:49.784Z conv=881dadc9 model="Gemini 3.8 Flash (High)" used=11.75% peak=24.36% governing=25.00% close=0.78% headroom=12.47% pending=2`
- `compaction`: 1 compaction occurred near peak (used 23.67% → 11.75%). State preserved on disk per METHOD.md §8.4.
