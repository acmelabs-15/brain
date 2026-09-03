## 2026-09-03T05:18:41Z

You are worker_inv_addy_6_1, the worker agent implementing Phase 1 inventory extraction for work unit `inv-addy-6`.

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_6_1
Orchestrator conversation ID: cfc8ec1c-eada-4bdc-9a03-dcaa2ae8b02a
Workspace: /Users/peterkloss/Dev/ACMElabs/brain-v2

MANDATORY FIRST STEP:
Read `ORIGINAL_REQUEST.md` at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
Read `docs/plan/METHOD.md` and `docs/plan/STATE.md`.
Read `docs/plan/templates/inventory-entry.md` and `docs/plan/templates/work-unit-report.md`.
Honor `docs/plan/DO-NOT-READ.md` strictly (v2 branch only, no git history prior to first commit).

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

EXCLUSIVE WRITE OWNERSHIP:
You own exclusively:
- `docs/analysis/inventory/addy/docs-comparison-md.md`
- `docs/analysis/inventory/addy/docs-developer-onboarding-md.md`
- `docs/analysis/inventory/addy/docs-getting-started-md.md`
- `docs/analysis/inventory/addy/docs-copilot-setup-md.md`
- `docs/analysis/inventory/addy/docs-skill-anatomy-md.md`
- `docs/analysis/inventory/addy/_units/inv-addy-6.md`
- `docs/analysis/manifest/addy.md`
- `docs/plan/STATE.md`

INPUT FINDINGS FROM EXPLORERS:
1. Explorer 1:
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_1/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_1/report.md`
   (Covers `docs/comparison.md` and `docs/copilot-setup.md`)
2. Explorer 2:
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_2/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_2/docs-developer-onboarding-md.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_2/docs-getting-started-md.md`
   (Covers `docs/developer-onboarding.md` and `docs/getting-started.md`)
3. Explorer 3:
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_3/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_3/report.md`
   (Covers `docs/skill-anatomy.md`, validation scripts execution, and unit report sections)

YOUR ASSIGNED TASKS:
1. Review the explorers' drafted inventory entries and verify them against the actual source files in `sources/addy/docs/`. Ensure:
   - Strict adherence to `docs/plan/templates/inventory-entry.md`.
   - All required fields are present and non-empty (write `none` where nothing to report).
   - Verbatim quotes in Purpose and Concepts named include accurate `path:line` citations.
   - Classification of defects is accurate.
2. Write the 5 inventory entry files:
   - `docs/analysis/inventory/addy/docs-comparison-md.md`
   - `docs/analysis/inventory/addy/docs-developer-onboarding-md.md`
   - `docs/analysis/inventory/addy/docs-getting-started-md.md`
   - `docs/analysis/inventory/addy/docs-copilot-setup-md.md`
   - `docs/analysis/inventory/addy/docs-skill-anatomy-md.md`
3. Write the unit report:
   - `docs/analysis/inventory/addy/_units/inv-addy-6.md` following `docs/plan/templates/work-unit-report.md`.
4. Update `docs/analysis/manifest/addy.md`:
   - Check off (`[x]`) the 5 lines for `docs/comparison.md`, `docs/developer-onboarding.md`, `docs/getting-started.md`, `docs/copilot-setup.md`, and `docs/skill-anatomy.md`.
5. Update `docs/plan/STATE.md`:
   - Under `## Work units` -> `### Phase 1 — Inventory units`, update the row for `inv-addy-6`:
     Change status to `complete` and set Output to `docs/analysis/inventory/addy/_units/inv-addy-6.md`.
6. Run verification commands:
   - `bun scripts/synthesis/coverage.ts`
   - `bun scripts/synthesis/glossary-lint.ts`
   - Document the exact command line and outputs in your handoff report.
7. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_6_1/handoff.md`.
8. Send a completion message to the orchestrator with your results and verification evidence.
