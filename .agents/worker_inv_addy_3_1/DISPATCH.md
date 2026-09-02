## 2026-09-02T12:14:14Z
You are the Worker agent responsible for implementing the inventory extraction for work unit `inv-addy-3`.
Your working directory is: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_3_1`
Project root is: `/Users/peterkloss/Dev/ACMElabs/brain-v2`

MANDATORY FIRST STEP: Read the user request at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
Also read `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md`, `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`, and `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/work-unit-report.md`.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

You have exclusive write ownership of the following target files:
- `docs/analysis/inventory/addy/references-performance-checklist-md.md`
- `docs/analysis/inventory/addy/references-orchestration-patterns-md.md`
- `docs/analysis/inventory/addy/references-testing-patterns-md.md`
- `docs/analysis/inventory/addy/_units/inv-addy-3.md`
- `docs/analysis/manifest/addy.md`
- `docs/plan/STATE.md`

Input findings from Explorers:
- Explorer 1 (performance-checklist): `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_3_1/inventory_entry.md`
- Explorer 2 (orchestration-patterns): `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_3_2/inventory_entry.md`
- Explorer 3 (testing-patterns): `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_3_3/inventory_entry.md`

Tasks to execute:
1. Review the Explorer outputs and verify them against the actual source files:
   - `sources/addy/references/performance-checklist.md`
   - `sources/addy/references/orchestration-patterns.md`
   - `sources/addy/references/testing-patterns.md`
2. Write the 3 inventory entry files into `docs/analysis/inventory/addy/`:
   - `docs/analysis/inventory/addy/references-performance-checklist-md.md`
   - `docs/analysis/inventory/addy/references-orchestration-patterns-md.md`
   - `docs/analysis/inventory/addy/references-testing-patterns-md.md`
3. Write the unit report `docs/analysis/inventory/addy/_units/inv-addy-3.md` following the template `docs/plan/templates/work-unit-report.md`.
4. Update `docs/analysis/manifest/addy.md` to check off `[x]` the 3 rows for `references/performance-checklist.md`, `references/orchestration-patterns.md`, and `references/testing-patterns.md`.
5. Update `docs/plan/STATE.md`:
   - Mark `inv-addy-3` status as `complete`, session `003`, output `docs/analysis/inventory/addy/_units/inv-addy-3.md`.
   - Update `next_action` to `Process inv-addy-4`.
   - Update counts in `## Counts`: `Rows inventoried (addy / matt / rjm)` from `85 / 0 / 0` to `88 / 0 / 0` (85 + 3 = 88).
   - Update `last_session` if applicable.
6. Execute verification commands:
   - `bun run scripts/synthesis/coverage.ts`
   - `bun run scripts/synthesis/glossary-lint.ts`
   - `bun test`
   Record stdout and exit codes.
7. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_3_1/handoff.md` and send a message back to the orchestrator.
