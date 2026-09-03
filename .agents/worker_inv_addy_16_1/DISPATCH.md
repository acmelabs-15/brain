## 2026-09-03T15:30:25Z

You are the Worker for work unit inv-addy-16.
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_16_1.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- docs/plan/METHOD.md (strictly adhere to rules R1-R6 and §4 checklist)
- docs/plan/templates/inventory-entry.md
- docs/analysis/inventory/addy/_units/inv-addy-15.md (for style and structure reference)
- The 3 Explorer reports:
  * /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_cdd/report.md
  * /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_crq/report.md
  * /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_scripts/report.md

Exclusive Write Ownership:
You exclusively own and must write/update the following files:
1. docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md
2. docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md
3. docs/analysis/inventory/addy/_units/inv-addy-16.md
4. docs/analysis/manifest/addy.md (mark rows 177 and 178 as [x])
5. docs/plan/STATE.md (update inv-addy-16 status to complete, session 006, output to docs/analysis/inventory/addy/_units/inv-addy-16.md; update current_unit to inv-addy-17; increment Counts table Rows inventoried (addy) by 2 from 158 to 160)

Script Execution and Verification Requirements (Rule R2):
Run the following actual commands, record actual stdout, exit codes, and verification:
1. Inlined floor-guard.mjs executions (can use temporary extraction or test file if needed):
   - floor-guard.mjs --base HEAD (exit code 0)
   - floor-guard.mjs --base non-existent-ref (exit code 2)
2. All validator scripts in sources/addy/scripts/ with bun:
   - cd sources/addy && bun scripts/validate-skills.js
   - cd sources/addy && bun scripts/validate-reference-links.js
   - cd sources/addy && bun scripts/validate-artifact-paths.js
   - cd sources/addy && bun scripts/validate-commands.js
   - cd sources/addy && bun scripts/validate-versions.js
   - cd sources/addy && bun scripts/run-evals.js
3. Test suites in sources/addy/scripts/:
   - cd sources/addy && bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js ./scripts/validate-skills-test.js
4. Run project synthesis scripts:
   - bun run scripts/synthesis/coverage.ts (ensure zero errors/empty required fields)

Make sure all 10 required fields in the inventory entries are complete and adhere to R1-R6 (verbatim quotes with path:line citations, exhaustive concepts named, accurate defect classifications).
When complete, write progress.md and handoff.md in your working directory, and notify parent orchestrator (conversation ID aed25c9d-0210-4705-b93e-eab462569ae1) via send_message.
