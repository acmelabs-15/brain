# Dispatch for Reviewer 1 (inv-addy-23)

## Mission
You are Reviewer 1 (`teamwork_preview_reviewer_inv_addy_23_1`) for work unit `inv-addy-23` in Phase 1 (Inventory Extraction).
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_1`.

## Authoritative Files to Read
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_23_1/SCOPE.md`
3. `docs/plan/METHOD.md` (R1-R6, §4, §6.4 adversarial reviewer contract, §8 templates, §10 anti-drift checks)
4. `docs/plan/templates/inventory-entry.md`
5. `docs/plan/templates/work-unit-report.md`
6. `docs/plan/DO-NOT-READ.md` (v2 branch only, no git history before project's first commit)

## Artifacts Under Review
1. `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md`
2. `docs/analysis/inventory/addy/external-incremental-implementation-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-23.md`
4. `docs/analysis/manifest/addy.md` (rows 197 and 198)
5. `docs/plan/STATE.md` (row 87 and Counts table)

## Source Files to Verify Against
1. `sources/addy-external/planning-and-task-breakdown.md` (22,310 bytes)
2. `sources/addy-external/incremental-implementation.md` (26,461 bytes)

## Verification Tasks
1. Per METHOD.md §6.4: Hunt for what was missed, inaccurate, or incomplete. Do not provide a generic "looks good".
2. Verify all required template fields in both inventory entries are non-empty (`none` where applicable).
3. Verify that all verbatim quotes have exact line number citations (`path:line`) that match the source files.
4. Verify that the purpose quotes and trigger conditions are exact quotes.
5. Verify package phase (`addy:Plan` and `addy:Build`) and command bindings (`/plan` and `/build`).
6. Verify exhaustive concept naming (R6) with valid classifications (`defined here` | `used here`).
7. Verify defect reporting per the §4 checklist.
8. Run tests and verification scripts:
   - `bun run scripts/synthesis/coverage.ts`
   - `bun run scripts/synthesis/glossary-lint.ts`
   - `bun test`
9. Issue an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.

## 2026-09-03T17:33:00Z

You are Reviewer 1 (teamwork_preview_reviewer_inv_addy_23_1) for work unit inv-addy-23 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_1
Your dispatch instructions are in: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_1/DISPATCH.md

Authoritative files to read:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_23_1/SCOPE.md
3. docs/plan/METHOD.md (R1-R6, §4 checklist, §6.4 adversarial reviewer contract, §8 templates, §10 anti-drift checks)
4. docs/plan/templates/inventory-entry.md
5. docs/plan/templates/work-unit-report.md
6. docs/plan/DO-NOT-READ.md (v2 branch only, no git history before project first commit)

Artifacts to review:
1. docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md
2. docs/analysis/inventory/addy/external-incremental-implementation-md.md
3. docs/analysis/inventory/addy/_units/inv-addy-23.md
4. docs/analysis/manifest/addy.md (rows 197 and 198)
5. docs/plan/STATE.md (row 87 and counts table)

Source files to check against:
1. sources/addy-external/planning-and-task-breakdown.md
2. sources/addy-external/incremental-implementation.md

Per METHOD.md §6.4, hunt for what was missed, inaccurate, or incomplete. Run:
- bun run scripts/synthesis/coverage.ts
- bun run scripts/synthesis/glossary-lint.ts
- bun test

Provide your full review and an explicit verdict: APPROVE or REQUEST_CHANGES.
Write to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_1/handoff.md.
When finished, notify your parent orchestrator (conversation ID: cd5c2d56-0767-4da0-80a3-fc5e30970090) via send_message.
