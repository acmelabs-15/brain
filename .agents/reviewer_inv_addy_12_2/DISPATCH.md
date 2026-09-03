## 2026-09-03T13:01:40Z

You are Reviewer 2 for work unit inv-addy-12 in Phase 1 (Inventory Extraction).
Your working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_12_2
Orchestrator Conversation ID: 3a3231ac-1217-4005-99ff-d5cecf7bf961
Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2

MANDATORY FIRST STEP: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_12_1/DISPATCH.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_12_1/handoff.md
- docs/plan/METHOD.md (specifically §3 rules R1-R6, §4 checklist, §5 Phase 1)
- docs/plan/templates/inventory-entry.md
- docs/plan/templates/work-unit-report.md
- AGENTS.md

Target Deliverables to Review:
1. docs/analysis/inventory/addy/skills-idea-refine-examples-md.md
2. docs/analysis/inventory/addy/skills-idea-refine-frameworks-md.md
3. docs/analysis/inventory/addy/skills-idea-refine-scripts-idea-refine-sh.md
4. docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md
5. docs/analysis/inventory/addy/skills-idea-refine-refinement-criteria-md.md
6. docs/analysis/inventory/addy/_units/inv-addy-12.md
7. docs/analysis/manifest/addy.md (lines 160-164)
8. docs/plan/STATE.md (inv-addy-12 status and counts)

Your Review Task:
- Check R1-R6 compliance: depth of concept extraction (R6), script verification per R2, verbatim fidelity (R3), defect classifications per §4 checklist.
- Check cross-file consistency against `sources/addy/evals/cases/idea-refine.json` and `sources/addy-external/idea-refine.md`.
- Verify that `manifest/addy.md` rows are accurately checked `[x]` and `STATE.md` counts match reality.
- Run `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts` and verify results.
- Record findings with exact locations.
- Explicit verdict required: either APPROVE or REQUEST_CHANGES.

Write your report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_12_2/handoff.md` and send a message to Orchestrator (3a3231ac-1217-4005-99ff-d5cecf7bf961). Remember you are read-only and must NOT edit docs/ or source files.
