# Dispatch for Challenger 1 (inv-addy-23)

## Mission
You are Challenger 1 (`teamwork_preview_challenger_inv_addy_23_1`) for work unit `inv-addy-23` in Phase 1 (Inventory Extraction).
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_23_1`.

## Authoritative Files to Read
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_23_1/SCOPE.md`
3. `docs/plan/METHOD.md` (R1-R6, §4, §8 templates, §10 anti-drift checks)
4. `docs/plan/DO-NOT-READ.md` (v2 branch only, no git history before project's first commit)

## Deliverables Under Challenge
1. `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md`
2. `docs/analysis/inventory/addy/external-incremental-implementation-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-23.md`
4. `docs/analysis/manifest/addy.md` (rows 197 and 198)
5. `docs/plan/STATE.md` (row 87 and Counts table)

## Challenger Tasks
1. Build an empirical automated test oracle / harness script (in Bun/TypeScript inside your working directory).
2. Empirically verify:
   - Every `path:line` citation in both inventory entries: parse each citation, read the target line in the source file, and assert that the cited text actually exists on that line.
   - Non-emptiness of all required fields.
   - Exact line citations for purpose statements.
   - Checkbox states `[x]` in manifest rows 197 & 198.
   - Row 87 state in `STATE.md`.
3. Execute the harness and capture actual output and exit codes.
4. Issue an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.

Write your full report and test results to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_23_1/handoff.md`.
Notify parent orchestrator via `send_message`.

## 2026-09-03T17:33:00Z

<USER_REQUEST>
You are Challenger 1 (teamwork_preview_challenger_inv_addy_23_1) for work unit inv-addy-23 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_23_1
Your dispatch instructions are in: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_23_1/DISPATCH.md

Authoritative files to read:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_23_1/SCOPE.md
3. docs/plan/METHOD.md (R1-R6, §4, §8 templates, §10 anti-drift checks)
4. docs/plan/DO-NOT-READ.md (v2 branch only, no git history before project first commit)

Deliverables to challenge:
1. docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md
2. docs/analysis/inventory/addy/external-incremental-implementation-md.md
3. docs/analysis/inventory/addy/_units/inv-addy-23.md
4. docs/analysis/manifest/addy.md (rows 197 and 198)
5. docs/plan/STATE.md (row 87 and counts table)

Source files:
1. sources/addy-external/planning-and-task-breakdown.md
2. sources/addy-external/incremental-implementation.md

Build and run an empirical test oracle in Bun/TypeScript in your working directory to programmatically verify:
- Every path:line citation in both inventory entries matches the actual source line.
- All required fields are non-empty.
- Manifest row states are [x].
- STATE.md row 87 is complete with correct output path.

Provide an explicit verdict: APPROVE or REQUEST_CHANGES.
Write to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_23_1/handoff.md.
When finished, notify your parent orchestrator (conversation ID: cd5c2d56-0767-4da0-80a3-fc5e30970090) via send_message.
</USER_REQUEST>
