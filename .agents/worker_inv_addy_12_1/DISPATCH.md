## 2026-09-03T10:42:42Z

You are the Worker for work unit inv-addy-12 in Phase 1 (Inventory Extraction).
Your working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_12_1
Orchestrator Conversation ID: 3a3231ac-1217-4005-99ff-d5cecf7bf961
Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY FIRST STEP: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_12_1/DISPATCH.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_12_2/handoff.md (comprehensive explorer findings, line citations, concept lists, and draft entries)
- docs/plan/METHOD.md (§3 rules R1-R6, §4 checklist, §5 Phase 1)
- docs/plan/STATE.md
- docs/plan/templates/inventory-entry.md
- docs/plan/templates/work-unit-report.md
- docs/analysis/inventory/addy/_units/inv-addy-10.md (exemplar unit report)
- AGENTS.md

Assigned Files (read ALL 5 in FULL from line 1 to end):
1. sources/addy/skills/idea-refine/examples.md (20,284 bytes)
2. sources/addy/skills/idea-refine/frameworks.md (5,404 bytes)
3. sources/addy/skills/idea-refine/scripts/idea-refine.sh (342 bytes)
4. sources/addy/skills/idea-refine/SKILL.md (8,111 bytes)
5. sources/addy/skills/idea-refine/refinement-criteria.md (5,738 bytes)

Your Exclusive Write Ownership:
- docs/analysis/inventory/addy/skills-idea-refine-examples-md.md
- docs/analysis/inventory/addy/skills-idea-refine-frameworks-md.md
- docs/analysis/inventory/addy/skills-idea-refine-scripts-idea-refine-sh.md
- docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md
- docs/analysis/inventory/addy/skills-idea-refine-refinement-criteria-md.md
- docs/analysis/inventory/addy/_units/inv-addy-12.md
- docs/analysis/manifest/addy.md (update the 5 inv-addy-12 rows from [ ] to [x])
- docs/plan/STATE.md (update inv-addy-12 row to complete, session 006, output path docs/analysis/inventory/addy/_units/inv-addy-12.md; update rows inventoried count from 141 to 146)

Requirements:
1. Read all 5 source files in full.
2. Execute `sources/addy/skills/idea-refine/scripts/idea-refine.sh` directly per R2 under bash (both initial execution and idempotent re-execution), capture exact command, stdout, stderr, and exit code. Clean up temporary directory `sources/addy/docs/ideas` afterwards.
3. Write all 5 inventory entry files strictly following `docs/plan/templates/inventory-entry.md`. Ensure every required field is non-empty (`none` where applicable). Adhere strictly to R1-R6 (exact verbatim quotes with path:line for purpose, exhaustive concepts_named, exact section headings, accurate context costs and defect classifications).
4. Write the work-unit report `docs/analysis/inventory/addy/_units/inv-addy-12.md` strictly following `docs/plan/templates/work-unit-report.md`.
5. Update `docs/analysis/manifest/addy.md` to mark the 5 rows checked `[x]`.
6. Update `docs/plan/STATE.md` marking inv-addy-12 complete with output path and updating the counts.
7. Run verification scripts:
   - `bun scripts/synthesis/coverage.ts`
   - `bun scripts/synthesis/glossary-lint.ts`
   Confirm both run clean with zero errors for inv-addy-12.
8. Write your completion report in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_12_1/handoff.md`.
9. Send a message to the Orchestrator (3a3231ac-1217-4005-99ff-d5cecf7bf961) with your summary and handoff report path.
