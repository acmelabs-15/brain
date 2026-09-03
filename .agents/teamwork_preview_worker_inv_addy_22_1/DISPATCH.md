# DISPATCH — Worker (inv-addy-22)

## 2026-09-03T17:30:00Z

You are the Worker (`teamwork_preview_worker`) for work unit `inv-addy-22`.
Your working directory is: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_22_1`
Orchestrator Conversation ID: `b5a107ba-96e6-44dc-b23e-f495191e347d`
Scope Document: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_22_2/SCOPE.md`
Original Request: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`

### MANDATORY INTEGRITY WARNING
> DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

### File Ownership
You have exclusive write ownership of the following target files:
1. `docs/analysis/inventory/addy/external-using-agent-skills-md.md`
2. `docs/analysis/inventory/addy/external-test-driven-development-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-22.md`
4. `docs/analysis/manifest/addy.md` (rows 195 and 196)
5. `docs/plan/STATE.md` (unit `inv-addy-22` line 86)

### Input Artifacts
- Explorer 1 Report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_1/analysis.md` and `handoff.md`
- Explorer 2 Report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_2/analysis.md` and `handoff.md`
- Explorer 3 Report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_3/analysis.md` and `handoff.md`
- Source Files:
  - `sources/addy-external/using-agent-skills.md` (21,955 bytes)
  - `sources/addy-external/test-driven-development.md` (26,483 bytes)
- In-repo comparisons:
  - `sources/addy/skills/using-agent-skills/SKILL.md`
  - `sources/addy/skills/test-driven-development/SKILL.md`
- Templates:
  - `docs/plan/templates/inventory-entry.md`
  - `docs/plan/templates/work-unit-report.md`
- Exemplar unit reports:
  - `docs/analysis/inventory/addy/_units/inv-addy-20.md`
  - `docs/analysis/inventory/addy/_units/inv-addy-17.md`

### Instructions
1. Implement the 2 inventory entries with exact adherence to `docs/plan/templates/inventory-entry.md` and METHOD.md rules (R1-R6, verbatim quotes with exact path:line, comprehensive concept lists, detailed defects, observations, context cost).
2. Implement the work-unit report `docs/analysis/inventory/addy/_units/inv-addy-22.md` conforming to `docs/plan/templates/work-unit-report.md`.
3. Update `docs/analysis/manifest/addy.md`: mark rows 195 and 196 as `[x]`.
4. Update `docs/plan/STATE.md`: mark `inv-addy-22` as `complete` in session `007` with output path `docs/analysis/inventory/addy/_units/inv-addy-22.md`.
5. Run test and validation suites via Bun:
   `cd sources/addy && bun scripts/validate-skills.js`
   `cd sources/addy && bun scripts/validate-reference-links.js`
   `cd sources/addy && bun scripts/validate-commands.js`
   `cd sources/addy && bun scripts/validate-artifact-paths.js`
   `cd sources/addy && bun test ./scripts/*-test.js`
   `bun scripts/synthesis/coverage.ts`
   `bun scripts/synthesis/glossary-lint.ts`
6. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_22_1/handoff.md`.
7. Notify orchestrator via `send_message(Recipient="b5a107ba-96e6-44dc-b23e-f495191e347d", Message="Worker task complete...")`.
