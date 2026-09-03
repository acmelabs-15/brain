# Task Assignment: Reviewer 2 (Technical Accuracy & Defect Verification)

## Identity
- Role: teamwork_preview_reviewer
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_20_2
- Parent Orchestrator: orchestrator_inv_addy_20_1 (Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa)
- Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

## Objective
Independently review the technical accuracy, line citations, verbatim quotes (R3), and defect documentation in work unit `inv-addy-20`.

## Deliverables Under Review
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`

## Instructions
1. MANDATORY: Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
2. Verify all verbatim quotes (Purpose, Concepts, etc.) against the actual source files in `sources/addy/`:
   - Exact character-for-character accuracy.
   - Exact `path:line` citations.
3. Verify defect documentation:
   - Check that all identified discrepancies (skill count drift in `.codex-plugin/plugin.json:16`, omitted skills in `CLAUDE.md:21-26`, AGENTS.md scoping contradictions, docs/decisions missing path) are accurately and completely cataloged.
4. Verify that lifecycle phases (`addy:Ship`, `cross-phase`, `none`) are correctly assigned and justified per GLOSSARY.md.
5. Deliver a clear binary verdict: `APPROVE` or `REQUEST_CHANGES` in your `handoff.md`.
6. Send message to parent orchestrator when complete.

## 2026-09-03T15:37:17Z
<USER_REQUEST>
You are Reviewer 2 for work unit inv-addy-20.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_20_2
Parent Orchestrator Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your assignment at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_20_2/DISPATCH.md
And scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

Review all deliverables produced by Worker 1:
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`

Verify technical accuracy, exact character-for-character verbatim quotes (R3) with exact path:line citations, defect catalog completeness (plugin.json drift, CLAUDE.md omissions, AGENTS.md scoping contradictions, docs/decisions missing path), and lifecycle phase assignments.
Deliver a binary verdict (APPROVE or REQUEST_CHANGES) in handoff.md and send message back to parent orchestrator.
</USER_REQUEST>

