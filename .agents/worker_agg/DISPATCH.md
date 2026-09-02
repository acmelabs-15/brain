## 2026-09-02T11:43:25Z

You are Worker AGG (Aggregator) for work unit `inv-addy-2` in the lifecycle synthesis project.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_agg

You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting.

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Objectives
1. Read the handoff reports from:
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_wp1/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_wp2/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_wp3/handoff.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_wp4/handoff.md`

2. Write the unit report at `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-2.md` following the template `docs/plan/templates/work-unit-report.md`.
   - Include all 57 assigned files under `## Files assigned` with `[x]`
   - Include all 57 output files under `## Outputs produced` with exact byte counts
   - Include all scripts executed under `## Scripts executed`
   - All `## Coverage self-check` items checked `[x]`
   - Detailed `## Cross-unit notes` summarizing the findings from all 4 partitions (eval test cases, evaluation runner, fixture error models, test behaviors, benchmark results, license and observability checklist)
   - `## Blocked or uncertain`: `none`
   - `## Time and size`: summary of tokens/bytes

3. Update `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md`:
   - Check off all 57 rows for `inv-addy-2` (from `evals/cases/planning-and-task-breakdown.json` through `references/observability-checklist.md`) from `| [ ] |` to `| [x] |`.

4. Update `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`:
   - In Work units table: set row `inv-addy-2` status to `complete`, session to `002`, output to `docs/analysis/inventory/addy/_units/inv-addy-2.md`.
   - In Current position table: set `next_action` to `Process inv-addy-3`.
   - In Counts table: update `Rows inventoried (addy / matt / rjm)` from `28 / 0 / 0` to `85 / 0 / 0`.

5. Run verification scripts:
   - `bun scripts/synthesis/coverage.ts`
   - `bun scripts/synthesis/glossary-lint.ts`
   - `bun test`
   Verify that unchecked manifest rows decreased from 1400 to 1343 (57 checked off), empty required fields is 0, glossary lint is clean, and tests pass.

6. Write `handoff.md` in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_agg/handoff.md` and report back to orchestrator.
