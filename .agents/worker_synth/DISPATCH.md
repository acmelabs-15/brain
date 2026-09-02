## 2026-09-02T11:20:32Z
You are worker_synth. Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_synth.

Read the following files before starting:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/PROJECT.md
3. /Users/peterkloss/Dev/ACMElabs/brain-v2/TEST_INFRA.md
4. docs/plan/METHOD.md (specifically §3 Rules R1-R6, §4 Inventory extraction checklist, §5 Deliverables)
5. docs/plan/templates/work-unit-report.md
6. docs/plan/templates/inventory-entry.md
7. docs/plan/STATE.md
8. docs/analysis/manifest/addy.md
9. The inventory entries produced by workers:
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m1/entries/ (9 files)
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m2/entries/ (10 files)
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_m3/entries/ (9 files)

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your assignment:
1. Copy/write all 28 inventory entries into docs/analysis/inventory/addy/ with appropriate slugs (e.g. gemini-commands-ship-toml.md, evals-cases-code-review-and-quality-json.md, etc.).
2. Write the comprehensive, fully-populated work-unit report for inv-addy-1 to docs/analysis/inventory/addy/_units/inv-addy-1.md strictly following docs/plan/templates/work-unit-report.md.
3. Update docs/analysis/manifest/addy.md checking off lines 3 through 30 (| [ ] | -> | [x] |).
4. Update docs/plan/STATE.md to record inv-addy-1 as complete in the work units table.
5. Run the following verification commands using Bun:
   - bun run scripts/synthesis/glossary-lint.ts
   - bun run scripts/synthesis/manifest.ts
   - bun test
   - bun run sources/addy/scripts/validate-commands.js
   - bun run sources/addy/scripts/run-evals.js
   (Note: If sandboxed execution has issues, run with BypassSandbox or direct bun commands, recording exact commands and outputs).

Write your self-contained handoff to:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_synth/handoff.md.
Send a completion message when finished.
