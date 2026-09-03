# Task Assignment: Explorer 3 (R2 Verification & Command Analysis)

## Identity
- Role: teamwork_preview_explorer
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3
- Parent: orchestrator_inv_addy_20_1 (Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa)
- Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

## Objective
Analyze command and script execution requirements under METHOD.md R2 for the 5 assigned files in `inv-addy-20`:
1. `sources/addy/skills/git-workflow-and-versioning/SKILL.md`
2. `sources/addy/skills/documentation-and-adrs/SKILL.md`
3. `sources/addy/AGENTS.md`
4. `sources/addy/.codex-plugin/plugin.json`
5. `sources/addy/CLAUDE.md`

## Instructions
1. First read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
2. Review METHOD.md rule R2 ("Execute every script/command in scope with documented examples and capture real exit codes and outputs (R2)").
3. Identify every command, script, code snippet, JSON structure, or invocation pattern mentioned in the 5 assigned files.
4. Determine which commands/scripts are executable in the local environment (or if any are illustrative git workflows, ADR commands, etc.), how to safely validate or execute them using Bun/TypeScript or shell commands without side effects, and how real outputs/exit codes should be captured.
5. Provide concrete verification recommendations and Bun/TypeScript verification scripts for the Worker to run.
6. Produce your comprehensive report at: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/report.md`
7. Maintain `progress.md` with liveness heartbeat.

## 2026-09-03T15:25:21Z
You are Explorer 3 for work unit inv-addy-20.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3
Parent Orchestrator Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your assignment in: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/DISPATCH.md
And scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

Your role is to analyze command and script execution requirements under METHOD.md R2 for the 5 assigned files in inv-addy-20:
1. `sources/addy/skills/git-workflow-and-versioning/SKILL.md`
2. `sources/addy/skills/documentation-and-adrs/SKILL.md`
3. `sources/addy/AGENTS.md`
4. `sources/addy/.codex-plugin/plugin.json`
5. `sources/addy/CLAUDE.md`

Identify every command, script, code snippet, JSON structure, or invocation pattern mentioned in the 5 assigned files.
Determine how to safely validate or execute them per R2 using Bun/TypeScript or shell commands without side effects, and how real outputs/exit codes should be captured.
Provide concrete verification recommendations and Bun/TypeScript verification scripts for the Worker to run.
Write your comprehensive report to: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/report.md
Maintain progress.md with liveness heartbeat.
When finished, send a message to parent (Recipient: ee39c068-caf0-493f-92bc-429693b797aa).
