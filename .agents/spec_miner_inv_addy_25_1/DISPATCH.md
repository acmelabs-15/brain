# Task Assignment: Spec Miner (inv-addy-25)

## Identity
- Role: teamwork_preview_spec_miner
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1
- Parent Orchestrator Conversation ID: a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

## Mission & Inputs
Read the authoritative request and scope documents:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md (MANDATORY: read first)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md (specifically §1.1, §3, §4, §8, §10, R1-R6)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Assigned source file:
- `sources/addy-external/ci-cd-and-automation.md` (26,179 bytes)

## Objectives
1. Perform deep specification mining and inventory extraction on `sources/addy-external/ci-cd-and-automation.md`.
2. Extract all topics, concepts, workflow steps, automation tools, GitHub Actions / CI/CD scripts, commands, environment variables, configuration files, and edge cases.
3. Identify all exact verbatim quotes needed for R3 compliance.
4. Enumerate every code block and command in the file, determining whether each is executable (e.g. CLI commands, GitHub Actions workflow YAML, shell scripts), and outline realistic execution examples per R2.
5. Provide a full structural outline and draft content mapping for the inventory entry per the standard template in `METHOD.md`.
6. Write your comprehensive report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1/handoff.md`.
7. Send a message to parent orchestrator when complete.

## 2026-09-03T17:25:31Z
You are Spec Miner 1 for work unit inv-addy-25.
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1
Your parent orchestrator conversation ID is a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1/DISPATCH.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Perform deep specification mining on `sources/addy-external/ci-cd-and-automation.md`.
Extract all topics, concepts, workflow steps, automation tools, GitHub Actions / CI/CD scripts, commands, environment variables, configuration files, and edge cases.
Identify all exact verbatim quotes needed for R3 compliance.
Enumerate every code block and command in the file, determining whether each is executable, and outline realistic execution examples per R2.
Provide a full structural outline and draft content mapping for the inventory entry per the standard template in METHOD.md.
Write your findings to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1/handoff.md and report back via send_message.
