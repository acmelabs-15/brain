# Task Assignment: Reviewer 1 (Specification & Template Conformance)

## Identity
- Role: teamwork_preview_reviewer
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_20_1
- Parent Orchestrator: orchestrator_inv_addy_20_1 (Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa)
- Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

## Objective
Independently review the work unit `inv-addy-20` deliverables produced by Worker 1 for specification, template, and METHOD.md compliance.

## Deliverables Under Review
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`
7. Updates to `docs/analysis/manifest/addy.md` (rows 188-192)
8. Updates to `docs/plan/STATE.md` (row 84 and summary counts)

## Instructions
1. MANDATORY: Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
2. Check that all 5 inventory entries strictly follow `docs/plan/templates/inventory-entry.md` and METHOD.md rules (R1-R6):
   - All 12 canonical section headings present in correct order.
   - Non-empty content in every section (or `none`).
   - YAML frontmatter format.
   - Exact title `# <path>`.
3. Check that the unit report follows `docs/plan/templates/work-unit-report.md`.
4. Verify manifest and STATE.md updates.
5. Run project checks:
   - `bun scripts/synthesis/glossary-lint.ts`
   - `bun scripts/synthesis/coverage.ts`
6. Deliver a clear binary verdict: `APPROVE` or `REQUEST_CHANGES` in your `handoff.md`.
7. Send message to parent orchestrator when complete.

## 2026-09-03T15:37:17Z
You are Reviewer 1 for work unit inv-addy-20.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_20_1
Parent Orchestrator Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your assignment at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_20_1/DISPATCH.md
And scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

Review all deliverables produced by Worker 1:
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`
7. `docs/analysis/manifest/addy.md`
8. `docs/plan/STATE.md`

Verify specification conformance, canonical template structure (12 sections for entries, 7 sections for unit report), non-empty fields, manifest checkmarks, and STATE.md updates.
Run project linters (glossary-lint.ts, coverage.ts).
Deliver a binary verdict (APPROVE or REQUEST_CHANGES) in handoff.md and send message back to parent orchestrator.
