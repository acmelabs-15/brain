## 2026-09-03T05:20:50Z

You are Worker 1 (worker_inv_addy_8_1) for work unit `inv-addy-8`.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_8_1
Your parent orchestrator is: cfa5f317-38e0-4d2b-a249-3fb962dfa066

MANDATORY FIRST STEP:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before doing any other work.

Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md (specifically rules R1-R6, §4 checklist, Phase 1, §8, §9)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/GLOSSARY.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/work-unit-report.md
- Prior unit reports:
  - /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-4.md
  - /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-5.md
- Explorer & Spec Miner Reports:
  - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_8_1/report.md
  - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_8_2/report.md
  - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_8_3/report.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Write Ownership:
You own exclusively:
- docs/analysis/inventory/addy/readme-md.md
- docs/analysis/inventory/addy/contributing-md.md
- docs/analysis/inventory/addy/hooks-simplify-ignore-md.md
- docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md
- docs/analysis/inventory/addy/hooks-session-start-test-sh.md
- docs/analysis/inventory/addy/_units/inv-addy-8.md
- Lines 125-129 in docs/analysis/manifest/addy.md (check off [x])
- Row inv-addy-8 and metric row count in docs/plan/STATE.md
- All files in /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_8_1/
You MUST NOT edit any other file.

Scope and Requirements:
Work unit `inv-addy-8` covers 5 files in `sources/addy/`:
1. `README.md` (25,223 bytes)
2. `CONTRIBUTING.md` (7,179 bytes)
3. `hooks/SIMPLIFY-IGNORE.md` (3,863 bytes)
4. `hooks/simplify-ignore.sh` (12,173 bytes)
5. `hooks/session-start-test.sh` (1,224 bytes)

Instructions:
1. Read all 5 source files in full from line 1 to end using view_file.
2. Execute all relevant scripts directly:
   - In `sources/addy`: `echo '{}' | bash hooks/simplify-ignore.sh`
   - In `sources/addy`: `bash hooks/simplify-ignore-test.sh`
   - In `sources/addy`: `bash hooks/session-start-test.sh` (verify actual exit code 1, capture error)
   - In `sources/addy`: `bun scripts/validate-skills.js`
   - In `sources/addy`: `bun scripts/validate-commands.js`
   - In `sources/addy`: `bun scripts/validate-reference-links.js`
   - In `sources/addy`: `bun scripts/validate-artifact-paths.js`
   - In `sources/addy`: `bun scripts/validate-versions.js`
   - In `sources/addy`: `bun test ./scripts/validate-artifact-paths-test.js ./scripts/validate-commands-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-versions-test.js ./scripts/lib/skill-lint-test.js ./scripts/run-evals-test.js`
3. Generate the 5 inventory entries following docs/plan/templates/inventory-entry.md strictly:
   - Purpose verbatim with path:line
   - Design intent
   - Phase (`addy:Define`, `addy:Build`, `cross-phase`, etc.)
   - Inputs and Outputs (verbatim file names, write `none` where empty)
   - Invokes and Invoked by
   - Concepts named verbatim with path:line (exhaustive catalog)
   - Structure (all verbatim headings in order)
   - Scripts (if applicable) with actual execution results and exit codes
   - Defects classified (§4 checklist, include `session-start-test.sh` `always-failing-gate` / `script-bug` / `doc-drift`, and `README.md` command count & severity drifts)
   - Observations
   - Context cost
   Write them to:
   - `docs/analysis/inventory/addy/readme-md.md`
   - `docs/analysis/inventory/addy/contributing-md.md`
   - `docs/analysis/inventory/addy/hooks-simplify-ignore-md.md`
   - `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md`
   - `docs/analysis/inventory/addy/hooks-session-start-test-sh.md`
4. Write `docs/analysis/inventory/addy/_units/inv-addy-8.md` using `docs/plan/templates/work-unit-report.md`.
5. Update `docs/analysis/manifest/addy.md`: mark `[x]` on the 5 rows for README.md, CONTRIBUTING.md, hooks/SIMPLIFY-IGNORE.md, hooks/simplify-ignore.sh, hooks/session-start-test.sh.
6. Update `docs/plan/STATE.md`:
   - Change row `inv-addy-8` status to `complete`, and output to `docs/analysis/inventory/addy/_units/inv-addy-8.md`
   - Update `Rows inventoried (addy / matt / rjm)`: read current number for addy and add 5 (e.g. 111 -> 116)
7. Run verification:
   - `bun run scripts/synthesis/coverage.ts`
   - `bun run scripts/synthesis/glossary-lint.ts`
   - `bun test`
8. Write your completion report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_8_1/report.md` and handoff to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_8_1/handoff.md`.
9. Send a message to your parent orchestrator (cfa5f317-38e0-4d2b-a249-3fb962dfa066) with summary and status.
