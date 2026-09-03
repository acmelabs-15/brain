# Dispatch for Worker 1 (inv-addy-23 implementation)

## Mission
You are Worker 1 (`teamwork_preview_worker_inv_addy_23_1`) for work unit `inv-addy-23` in Phase 1 (Inventory Extraction).
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_23_1`.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Authoritative Files to Read
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_23_1/SCOPE.md`
3. `docs/plan/METHOD.md` (R1-R6, §4, §8 templates, §10 anti-drift checks)
4. `docs/plan/templates/inventory-entry.md`
5. `docs/plan/templates/work-unit-report.md`
6. `docs/plan/DO-NOT-READ.md` (v2 branch only, no git history before project's first commit)
7. Explorer handoff reports:
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_23_1/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_23_2/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_23_3/handoff.md`

## Files You Own Exclusively
You have exclusive write ownership to:
1. `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md`
2. `docs/analysis/inventory/addy/external-incremental-implementation-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-23.md`
4. `docs/analysis/manifest/addy.md` (specifically lines 197 and 198)
5. `docs/plan/STATE.md` (specifically unit row for `inv-addy-23` and Counts table if appropriate)

## Instructions
1. Synthesize the findings and drafts from Explorers 1, 2, and 3.
2. Write `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md` following the exact template in `docs/plan/templates/inventory-entry.md` and METHOD.md R1-R6. Ensure all required fields are non-empty (`none` where applicable).
3. Write `docs/analysis/inventory/addy/external-incremental-implementation-md.md` following the exact template in `docs/plan/templates/inventory-entry.md` and METHOD.md R1-R6. Ensure all required fields are non-empty (`none` where applicable).
4. Write `docs/analysis/inventory/addy/_units/inv-addy-23.md` following `docs/plan/templates/work-unit-report.md`.
5. Update `docs/analysis/manifest/addy.md` to check `[x]` on:
   - row 197 (`../addy-external/planning-and-task-breakdown.md`)
   - row 198 (`../addy-external/incremental-implementation.md`)
6. Update `docs/plan/STATE.md`:
   - Mark `inv-addy-23` as `complete`, session `007`, output `docs/analysis/inventory/addy/_units/inv-addy-23.md`.
   - Update `Rows inventoried (addy / matt / rjm)` count in the Counts table.
7. Run verification scripts:
   - `bun run scripts/synthesis/coverage.ts`
   - `bun run scripts/synthesis/glossary-lint.ts`
   - `bun test`
8. Write your completion report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_23_1/handoff.md`.
9. Notify parent orchestrator via `send_message`.

## 2026-09-03T17:28:55Z
You are Worker 1 (teamwork_preview_worker_inv_addy_23_1) for work unit inv-addy-23 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_23_1
Your dispatch instructions are in: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_23_1/DISPATCH.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Authoritative files to read:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_23_1/SCOPE.md
3. docs/plan/METHOD.md (R1-R6, §4 checklist, §8 templates, §10 anti-drift checks)
4. docs/plan/templates/inventory-entry.md
5. docs/plan/templates/work-unit-report.md
6. docs/plan/DO-NOT-READ.md (v2 branch only, no git history before project first commit)
7. Explorer handoff reports:
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_23_1/handoff.md
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_23_2/handoff.md
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_23_3/handoff.md

Your exclusive write targets:
1. `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md`
2. `docs/analysis/inventory/addy/external-incremental-implementation-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-23.md`
4. `docs/analysis/manifest/addy.md` (check rows 197 and 198 as [x])
5. `docs/plan/STATE.md` (mark inv-addy-23 as complete, session 007, output docs/analysis/inventory/addy/_units/inv-addy-23.md; update counts)

Perform the full synthesis and write all deliverables. Execute verification:
- `bun run scripts/synthesis/coverage.ts`
- `bun run scripts/synthesis/glossary-lint.ts`
- `bun test`

Write your completion report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_23_1/handoff.md.
When complete, notify your parent orchestrator (conversation ID: cd5c2d56-0767-4da0-80a3-fc5e30970090) via send_message with your status and verification results.
