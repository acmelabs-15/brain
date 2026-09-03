## 2026-09-03T15:37:18Z

# Task Assignment: Challenger 1 (Empirical Code & Script Execution Testing)

## Identity
- Role: teamwork_preview_challenger
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_20_1
- Parent Orchestrator: orchestrator_inv_addy_20_1 (Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa)
- Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

## Objective
Adversarially challenge and empirically verify the code blocks, commands, and scripts documented across the deliverables for work unit `inv-addy-20`.

## Instructions
1. MANDATORY: Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
2. Inspect the 5 inventory entries and unit report:
   - `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
   - `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
   - `docs/analysis/inventory/addy/agents-md.md`
   - `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
   - `docs/analysis/inventory/addy/claude-md.md`
   - `docs/analysis/inventory/addy/_units/inv-addy-20.md`
3. Write and execute empirical test harnesses in Bun/TypeScript to test:
   - All code snippets, regexes, and commands referenced in the entries.
   - Verification that validation scripts in `sources/addy/` (`validate-skills.js`, `validate-versions.js`, `validate-reference-links.js`, `run-evals.js`) run cleanly under Bun with exit code 0.
   - Confirm all cross-referenced files actually exist on disk.
4. Deliver a clear binary verdict: `APPROVE` or `REQUEST_CHANGES` in your `handoff.md`.
5. Send message to parent orchestrator when complete.
