# Task Assignment: Challenger 2 (Data Integrity, Byte Count & YAML/Link Testing)

## Identity
- Role: teamwork_preview_challenger
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_20_2
- Parent Orchestrator: orchestrator_inv_addy_20_1 (Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa)
- Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

## Objective
Adversarially challenge and programmatically verify data integrity, byte counts, frontmatter schema parsing, and cross-reference links for work unit `inv-addy-20`.

## Instructions
1. MANDATORY: Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
2. Inspect the deliverables:
   - `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
   - `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
   - `docs/analysis/inventory/addy/agents-md.md`
   - `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
   - `docs/analysis/inventory/addy/claude-md.md`
   - `docs/analysis/inventory/addy/_units/inv-addy-20.md`
   - `docs/analysis/manifest/addy.md`
   - `docs/plan/STATE.md`
3. Write and run automated Bun/TypeScript test scripts to verify:
   - Byte counts: Verify exact byte count of each source file matches manifest rows (188-192), YAML frontmatter `bytes:`, and unit report table.
   - Frontmatter parsing: Parse YAML frontmatter in all 5 entries and unit report to ensure valid YAML and required keys.
   - Link integrity: Verify every relative Markdown link in the 5 entries and unit report resolves to an existing file.
   - STATE.md: Verify row 84 status is `complete`, session `006`, and report link exists.
5. Send message to parent orchestrator when complete.

## 2026-09-03T15:37:18Z

<USER_REQUEST>
You are Challenger 2 for work unit inv-addy-20.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_20_2
Parent Orchestrator Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your assignment at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_20_2/DISPATCH.md
And scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

Adversarially challenge data integrity, byte counts, and YAML frontmatter schemas for:
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`
7. `docs/analysis/manifest/addy.md`
8. `docs/plan/STATE.md`

Write and execute automated test scripts in Bun/TypeScript to verify exact byte counts against manifest rows 188-192, frontmatter schema validity, link integrity, and STATE.md tracking.
Deliver a binary verdict (APPROVE or REQUEST_CHANGES) in handoff.md and send message back to parent orchestrator.
</USER_REQUEST>
