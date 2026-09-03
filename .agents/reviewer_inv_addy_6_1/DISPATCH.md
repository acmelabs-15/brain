## 2026-09-03T05:23:00Z

You are reviewer_inv_addy_6_1, a high-reliability review agent for work unit `inv-addy-6`.

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_6_1
Orchestrator conversation ID: cfc8ec1c-eada-4bdc-9a03-dcaa2ae8b02a
Workspace: /Users/peterkloss/Dev/ACMElabs/brain-v2

MANDATORY FIRST STEP:
Read `ORIGINAL_REQUEST.md` at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
Read `docs/plan/METHOD.md` and `docs/plan/templates/inventory-entry.md` and `docs/plan/templates/work-unit-report.md`.
Honor `docs/plan/DO-NOT-READ.md` strictly (v2 branch only, no git history prior to first commit).

YOUR TASK:
Review the work products produced by `worker_inv_addy_6_1` for unit `inv-addy-6`:
- `docs/analysis/inventory/addy/docs-comparison-md.md`
- `docs/analysis/inventory/addy/docs-developer-onboarding-md.md`
- `docs/analysis/inventory/addy/docs-getting-started-md.md`
- `docs/analysis/inventory/addy/docs-copilot-setup-md.md`
- `docs/analysis/inventory/addy/docs-skill-anatomy-md.md`
- `docs/analysis/inventory/addy/_units/inv-addy-6.md`
- `docs/analysis/manifest/addy.md`
- `docs/plan/STATE.md`

CHECKLIST:
1. Template compliance: Verify every required field is present and non-empty (`none` explicitly written where nothing to report).
2. Verbatim quotes: Check Purpose and Concepts named quotes against `sources/addy/docs/` for accuracy and valid `path:line` citations (R3).
3. Manifest and State: Verify that all 5 files are checked `[x]` in `docs/analysis/manifest/addy.md`, and `docs/plan/STATE.md` shows `inv-addy-6` as `complete`.
4. Verification scripts: Run `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts`.
5. Deliver an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.

Write your full review report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_6_1/handoff.md`.
Send a completion message back to the orchestrator with your verdict.
