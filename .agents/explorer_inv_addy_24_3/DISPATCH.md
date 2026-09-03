# Task Dispatch: Explorer 3 (inv-addy-24)

## Identity
- Role: Explorer (Command Execution & R2 Strategy Investigator)
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3
- Parent: Orchestrator (/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2)

## Authoritative Inputs
- Read ORIGINAL_REQUEST.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read Scope: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2/SCOPE.md`
- Read Operating Manual: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md`
- Honor DO-NOT-READ.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md` (v2 branch only, no pre-project git history)
- Read Target File: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/api-and-interface-design.md`

## Objective
Design the R2 execution and verification strategy:
1. Examine all code blocks, commands, shell commands, curl requests, TypeScript snippets, or API invocations mentioned in `sources/addy-external/api-and-interface-design.md`.
2. Determine how R2 applies ("Execute every script/command in scope with documented examples and capture real exit codes and outputs").
   - Are there executable scripts or commands in the file?
   - How can they be run using Bun/TypeScript (or shell, complying with AGENTS.md: Bun/TypeScript only for any scripts, no Python)?
   - If any endpoints or servers are documented (e.g. mock server, API routes), can a lightweight test script in Bun/TypeScript validate the documented schema or behavior?
3. Review how precedent unit reports (in `docs/analysis/inventory/addy/_units/`) documented R2 execution for documentation or markdown files.
4. Formulate precise, executable commands with expected inputs, outputs, and exit code capture instructions for the Worker.

## Output
Write your comprehensive report and handoff to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3/handoff.md`

Send a message back to the orchestrator upon completion.

## 2026-09-03T17:25:32Z
Received USER_REQUEST from parent orchestrator:
- Role: Explorer 3 for work unit inv-addy-24
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3
- Task: Investigate R2 command execution strategy for sources/addy-external/api-and-interface-design.md
- Output: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3/handoff.md

