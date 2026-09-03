## 2026-09-03T05:16:40Z

You are Spec Miner (spec_miner_inv_addy_8_3).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_8_3
Your parent orchestrator is: cfa5f317-38e0-4d2b-a249-3fb962dfa066

MANDATORY FIRST STEP:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before doing any other work.

Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md (all sections, specifically R1-R6, §4 checklist, Phase 1, §8, §9)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/work-unit-report.md
- Prior completed unit reports:
  - /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-4.md
  - /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-5.md

Your Task:
Extract the exact specification and acceptance criteria for work unit `inv-addy-8`:
1. Enumerate all 5 assigned files in `inv-addy-8`:
   - `sources/addy/README.md`
   - `sources/addy/CONTRIBUTING.md`
   - `sources/addy/hooks/SIMPLIFY-IGNORE.md`
   - `sources/addy/hooks/simplify-ignore.sh`
   - `sources/addy/hooks/session-start-test.sh`
2. Specify the exact target inventory paths and slugs in `docs/analysis/inventory/addy/`:
   - `readme-md.md`
   - `contributing-md.md`
   - `hooks-simplify-ignore-md.md`
   - `hooks-simplify-ignore-sh.md`
   - `hooks-session-start-test-sh.md`
   - `_units/inv-addy-8.md`
3. Detail the required fields in every inventory entry (none permitted empty, write `none` when empty per METHOD.md).
4. Specify the required script executions for addy repository scripts and hooks:
   - What scripts must be run (e.g. `bun scripts/validate-skills.js`, `bun scripts/validate-commands.js`, `bun test`, bash tests, etc.)
5. Specify manifest update requirements:
   - Mark `[x]` in `docs/analysis/manifest/addy.md` for the 5 rows.
6. Specify `STATE.md` update requirements:
   - Mark `inv-addy-8` complete, update row counts, verify coverage check expectations.
7. Deliver a clear, step-by-step implementation guide for the Worker.

Write your report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_8_3/report.md.
Also write /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_8_3/handoff.md.
When finished, send a message to your parent orchestrator (cfa5f317-38e0-4d2b-a249-3fb962dfa066) with a concise summary and path to your handoff.md.
