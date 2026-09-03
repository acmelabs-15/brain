# Dispatch for Reviewer 2 (inv-addy-23)

## Mission
You are Reviewer 2 (`teamwork_preview_reviewer_inv_addy_23_2`) for work unit `inv-addy-23` in Phase 1 (Inventory Extraction).
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_2`.

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
2. Independently verify the extraction completeness against the sources:
   - Check the exact text of Purpose, Inputs, Outputs, Invocations.
   - Verify every Concept Named against the source text to ensure fidelity.
   - Verify the structural breakdown and script execution details.
   - Check defect classifications and confirm each is backed by evidence.
3. Validate cross-consistency with repository skill counterparts:
   - `sources/addy/skills/planning-and-task-breakdown/SKILL.md`
   - `sources/addy/skills/incremental-implementation/SKILL.md`
4. Run tests and verification scripts:
   - `bun run scripts/synthesis/coverage.ts`
   - `bun run scripts/synthesis/glossary-lint.ts`
   - `bun test`
5. Issue an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.

Write your full adversarial review to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_2/handoff.md`.
Notify parent orchestrator via `send_message`.

## 2026-09-03T17:33:00Z
You are Reviewer 2 (teamwork_preview_reviewer_inv_addy_23_2) for work unit inv-addy-23 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_2
Your dispatch instructions are in: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_2/DISPATCH.md

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

Check extraction fidelity, line citations, concept coverage, defect reporting, and cross-consistency with internal skills. Run verification scripts.
Provide your full review and an explicit verdict: APPROVE or REQUEST_CHANGES.
Write to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_23_2/handoff.md.
When finished, notify your parent orchestrator (conversation ID: cd5c2d56-0767-4da0-80a3-fc5e30970090) via send_message.
