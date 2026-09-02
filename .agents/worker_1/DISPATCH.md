## 2026-09-02T14:05:50Z

You are the Worker responsible for finalizing and verifying work unit `inv-addy-4` in the lifecycle synthesis project.
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_1/`.
The authoritative user request is in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.

## Context & Operating Manual
- Read:
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/work-unit-report.md`
  - Explorer reports at:
    - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_1/handoff.md`
    - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_2/handoff.md`
    - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_3/handoff.md`

## MANDATORY INTEGRITY WARNING
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Assigned Files for inv-addy-4 (17 files):
1. `sources/addy/references/security-checklist.md` -> `docs/analysis/inventory/addy/references-security-checklist-md.md`
2. `sources/addy/references/accessibility-checklist.md` -> `docs/analysis/inventory/addy/references-accessibility-checklist-md.md`
3. `sources/addy/references/definition-of-done.md` -> `docs/analysis/inventory/addy/references-definition-of-done-md.md`
4. `sources/addy/.opencode/skills` -> `docs/analysis/inventory/addy/opencode-skills.md`
5. `sources/addy/.agents/plugins/marketplace.json` -> `docs/analysis/inventory/addy/agents-plugins-marketplace-json.md`
6. `sources/addy/.claude/rules/skills-contributing.md` -> `docs/analysis/inventory/addy/claude-rules-skills-contributing-md.md`
7. `sources/addy/.claude/commands/ship.md` -> `docs/analysis/inventory/addy/claude-commands-ship-md.md`
8. `sources/addy/.claude/commands/constraints.md` -> `docs/analysis/inventory/addy/claude-commands-constraints-md.md`
9. `sources/addy/.claude/commands/code-simplify.md` -> `docs/analysis/inventory/addy/claude-commands-code-simplify-md.md`
10. `sources/addy/.claude/commands/build.md` -> `docs/analysis/inventory/addy/claude-commands-build-md.md`
11. `sources/addy/.claude/commands/plan.md` -> `docs/analysis/inventory/addy/claude-commands-plan-md.md`
12. `sources/addy/.claude/commands/spec.md` -> `docs/analysis/inventory/addy/claude-commands-spec-md.md`
13. `sources/addy/.claude/commands/review.md` -> `docs/analysis/inventory/addy/claude-commands-review-md.md`
14. `sources/addy/.claude/commands/test.md` -> `docs/analysis/inventory/addy/claude-commands-test-md.md`
15. `sources/addy/.claude/commands/webperf.md` -> `docs/analysis/inventory/addy/claude-commands-webperf-md.md`
16. `sources/addy/agents/code-reviewer.md` -> `docs/analysis/inventory/addy/agents-code-reviewer-md.md`
17. `sources/addy/agents/test-engineer.md` -> `docs/analysis/inventory/addy/agents-test-engineer-md.md`

## Worker Tasks:
1. Synthesize the explorer analyses and ensure that all 17 inventory entry files in `docs/analysis/inventory/addy/` are perfectly formatted, 100% complete, have no empty required fields (`none` where nothing to report), use verbatim quotes with exact `path:line` citations, and follow `docs/plan/templates/inventory-entry.md`.
2. Ensure `docs/analysis/inventory/addy/_units/inv-addy-4.md` is complete and follows `docs/plan/templates/work-unit-report.md`.
3. Update `docs/analysis/manifest/addy.md` rows 91 to 107 from `[ ]` to `[x]`.
4. Update `docs/plan/STATE.md`:
   - Mark `inv-addy-4` as `complete`, session `004`, output `docs/analysis/inventory/addy/_units/inv-addy-4.md`.
   - Update `current_unit` to `inv-addy-5` and `next_action` to `Process inv-addy-5`.
   - Update `Counts` in `STATE.md`: `Rows inventoried (addy / matt / rjm)` to `105 / 0 / 0` (88 + 17 = 105).
5. Run the required validation and test commands:
   - `bun run scripts/synthesis/coverage.ts`
   - `bun run scripts/synthesis/glossary-lint.ts`
   - `bun test`
   - `cd sources/addy && bun scripts/validate-commands.js`
   - `cd sources/addy && bun test`
6. Write your complete handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_1/handoff.md` and send a message when done.
