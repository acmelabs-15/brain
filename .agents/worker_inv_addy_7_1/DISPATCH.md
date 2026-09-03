## 2026-09-03T05:20:31Z
You are Worker 1 (teamwork_preview_worker).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_7_1
Your parent orchestrator is: orchestrator_inv_addy_7 (conversation ID: 4da7107b-22bf-40c3-9b97-79728c47ff24).

MANDATORY FIRST STEP:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md completely.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_7/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/work-unit-report.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

INPUT EXPLORER REPORTS:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_7_1/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_7_2/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_7_3/report.md

YOUR EXCLUSIVE WRITE OWNERSHIP:
- docs/analysis/inventory/addy/docs-cursor-setup-md.md
- docs/analysis/inventory/addy/docs-antigravity-setup-md.md
- docs/analysis/inventory/addy/docs-codex-setup-md.md
- docs/analysis/inventory/addy/docs-agents-md.md
- docs/analysis/inventory/addy/docs-gemini-cli-setup-md.md
- docs/analysis/inventory/addy/plugin-json.md
- docs/analysis/inventory/addy/_units/inv-addy-7.md
- docs/analysis/manifest/addy.md (lines for inv-addy-7)
- docs/plan/STATE.md (inv-addy-7 row & counts)

YOUR TASKS:
1. Synthesize and write the 6 inventory entry files in `docs/analysis/inventory/addy/` following the schema in `docs/plan/templates/inventory-entry.md` and METHOD.md rules (R1-R6):
   - `docs-cursor-setup-md.md`
   - `docs-antigravity-setup-md.md`
   - `docs-codex-setup-md.md`
   - `docs-agents-md.md`
   - `docs-gemini-cli-setup-md.md`
   - `plugin-json.md`
   Ensure NO required fields are empty (`none` written where nothing to report). Ensure verbatim quotes with `path:line` are strictly preserved.
2. Write the work unit report to `docs/analysis/inventory/addy/_units/inv-addy-7.md` following `docs/plan/templates/work-unit-report.md` (include all 6 files assigned, outputs produced, scripts executed with exit codes and outputs, coverage self-check, cross-unit notes, time and size).
3. Update `docs/analysis/manifest/addy.md` to check off the 6 rows corresponding to these 6 files:
   - `docs/cursor-setup.md` -> `[x]`
   - `docs/antigravity-setup.md` -> `[x]`
   - `docs/codex-setup.md` -> `[x]`
   - `docs/agents.md` -> `[x]`
   - `docs/gemini-cli-setup.md` -> `[x]`
   - `plugin.json` -> `[x]`
4. Update `docs/plan/STATE.md`:
   - Under `### Phase 1 — Inventory units`:
     Update `inv-addy-7` row to:
     `| inv-addy-7 | addy | 6 | 27981 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-7.md |`
   - Under `## Counts`:
     Update `Rows inventoried (addy / matt / rjm)` from `111 / 0 / 0` to `117 / 0 / 0`.
5. Run the anti-drift verification scripts:
   - `bun scripts/synthesis/coverage.ts`
   - `bun scripts/synthesis/glossary-lint.ts`
   And run the package validation scripts in `sources/addy` (e.g. `bun scripts/validate-skills.js`, `bun scripts/validate-commands.js`, `bun scripts/validate-reference-links.js`, `bun scripts/validate-artifact-paths.js`, `bun scripts/validate-versions.js`, `bun test`).
6. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_7_1/handoff.md` and send a completion message to the parent orchestrator when done.
