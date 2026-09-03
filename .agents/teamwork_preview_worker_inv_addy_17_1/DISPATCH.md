# Dispatch — Worker 1 (inv-addy-17)

## Identity
- Role: teamwork_preview_worker
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_17_1
- Parent Orchestrator: orchestrator_inv_addy_17_1 (ID: 9d06e1e6-15c9-4e83-9868-3d9dd89d69a0)

## Mandatory Rules & Guidelines
- Read `ORIGINAL_REQUEST.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read `SCOPE.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`
- Follow `docs/plan/METHOD.md` rules R1-R6, R9, and §4 checklist strictly.
- Read the handoff reports from Explorers 1, 2, and 3:
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_1/handoff.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_2/handoff.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_3/handoff.md`
- Reference exemplar: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md` and `docs/analysis/inventory/addy/_units/inv-addy-15.md`

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Write Ownership
You have exclusive write ownership over:
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-17.md`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md` (lines 179-181)
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md` (updating inv-addy-17 status to complete, session 006)

## Assigned Tasks
1. Write the 3 inventory entries matching `docs/plan/templates/inventory-entry.md` using the synthesized, verified Explorer drafts:
   - `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md`
   - `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md`
   - `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md`
2. Write the unit report matching `docs/plan/templates/work-unit-report.md`:
   - `docs/analysis/inventory/addy/_units/inv-addy-17.md`
3. Update `docs/analysis/manifest/addy.md`:
   - Mark the 3 rows for lines 179, 180, 181 as `[x]`:
     - `skills/security-and-hardening/SKILL.md`
     - `skills/deprecation-and-migration/SKILL.md`
     - `skills/observability-and-instrumentation/SKILL.md`
4. Update `docs/plan/STATE.md`:
   - Update `inv-addy-17` row: status `complete`, session `006`, output `docs/analysis/inventory/addy/_units/inv-addy-17.md`.
5. Run verification scripts:
   - `bun scripts/synthesis/coverage.ts`
   - `bun scripts/synthesis/glossary-lint.ts`
   - `cd sources/addy && bun scripts/validate-skills.js`
   - `cd sources/addy && bun scripts/validate-reference-links.js`
6. Write your completion report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_17_1/handoff.md`.
7. Send a message back to parent orchestrator with all results and command outputs.

## 2026-09-03T15:31:32Z
You are Worker 1 for work unit inv-addy-17 in Phase 1 (Inventory Extraction).
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_17_1/`.
Your parent orchestrator conversation ID is `9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`.
