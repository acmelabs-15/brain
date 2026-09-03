## 2026-09-03T14:42:13Z

You are the Inventory Synthesis Worker (worker_inv_addy_11_1) for work unit inv-addy-11.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_11_1

MANDATORY FIRST STEP: Read the original user request at:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
Also read METHOD.md (especially §3 R1-R6, §4 checklist, §7, §10):
/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
Also read SCOPE.md:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_11_1/SCOPE.md
Also inspect a prior completed unit report for formatting conventions:
/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-10.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Input Explorer Reports:
Read and synthesize the 3 comprehensive explorer reports:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_11_1_gen4/handoff.md (covers 5 scripts/tests)
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_11_2_gen2/handoff.md (covers 2 configs + 4 commands)
3. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_11_3_gen2/handoff.md (covers 5 commands + cross-cutting analysis)

Your Exclusive Write Ownership:
You have exclusive write ownership over the following target deliverables:
1. The 16 inventory entries in `docs/analysis/inventory/addy/`:
   - `docs/analysis/inventory/addy/scripts-lib-skill-lint-js.md`
   - `docs/analysis/inventory/addy/scripts-lib-skill-lint-test-js.md`
   - `docs/analysis/inventory/addy/scripts-validate-versions-js.md`
   - `docs/analysis/inventory/addy/scripts-validate-commands-js.md`
   - `docs/analysis/inventory/addy/scripts-validate-artifact-paths-test-js.md`
   - `docs/analysis/inventory/addy/claude-plugin-marketplace-json.md`
   - `docs/analysis/inventory/addy/claude-plugin-plugin-json.md`
   - `docs/analysis/inventory/addy/commands-ship-toml.md`
   - `docs/analysis/inventory/addy/commands-webperf-toml.md`
   - `docs/analysis/inventory/addy/commands-planning-toml.md`
   - `docs/analysis/inventory/addy/commands-review-toml.md`
   - `docs/analysis/inventory/addy/commands-constraints-toml.md`
   - `docs/analysis/inventory/addy/commands-build-toml.md`
   - `docs/analysis/inventory/addy/commands-spec-toml.md`
   - `docs/analysis/inventory/addy/commands-code-simplify-toml.md`
   - `docs/analysis/inventory/addy/commands-test-toml.md`
2. Work unit report:
   - `docs/analysis/inventory/addy/_units/inv-addy-11.md`
3. Manifest check-off:
   - Check off the 16 rows corresponding to inv-addy-11 in `docs/analysis/manifest/addy.md` (`[ ]` -> `[x]`)
4. Living state update:
   - Update `docs/plan/STATE.md` to mark `inv-addy-11` status as `complete`, session `006`, and output `docs/analysis/inventory/addy/_units/inv-addy-11.md`.
5. Anti-drift verification:
   - Execute `bun run scripts/synthesis/coverage.ts` and verify it reports clean coverage with zero unchecked rows for inv-addy-11 and zero missing required fields.
