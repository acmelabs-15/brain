# Dispatch for Spec Miner / Explorer 3 (Replacement gen2, inv-addy-14)

## Identity
- Role: Spec Miner & Verification Investigator
- TypeName: teamwork_preview_spec_miner
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_14_3_gen2
- Parent Orchestrator: orchestrator_inv_addy_14_1 (ID: b7101632-34e7-42c5-9783-18ea9405656c)

## Context Files
- ORIGINAL_REQUEST: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document / Dispatch: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_14_1/DISPATCH.md
- METHOD: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- Inventory Template: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md
- Predecessor progress: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_14_3/progress.md

## Assigned Scope Focus
All 4 skills of inv-addy-14 across the repo:
1. `sources/addy/skills/incremental-implementation/SKILL.md`
2. `sources/addy/skills/api-and-interface-design/SKILL.md`
3. `sources/addy/skills/ci-cd-and-automation/SKILL.md`
4. `sources/addy/skills/context-engineering/SKILL.md`

## Objectives
Resume from predecessor's interruption point:
1. Cross-repo reference checks:
   - Check where these 4 skills are referenced across `sources/addy/` (e.g. `evals/cases/`, `evals/fixtures/`, commands, docs, README, agents).
   - Check what other skills, scripts, commands, or references each of the 4 skills invokes or mentions.
   - For every referenced path in the 4 skills, check whether it actually exists in `sources/addy/` using existence/file checks. Note any `missing-path` defects.
2. Script execution & runnable examples verification (R2):
   - Check if any of the 4 skills contains scripts or runnable commands/examples.
   - If runnable commands/scripts exist (or in their evals/fixtures), verify execution details and exit codes.
3. Check external documentation consistency (e.g. `sources/addy-external/` if present or manifest).
4. Identify cross-unit notes, common architectural patterns, and potential pitfalls for the Worker.

Write your findings to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_14_3_gen2/handoff.md`
and report completion back via `send_message`.

## 2026-09-03T10:42:51Z
You are Spec Miner & Verification Investigator (Replacement gen2) for work unit inv-addy-14.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_14_3_gen2
Parent Orchestrator ID: b7101632-34e7-42c5-9783-18ea9405656c

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your dispatch instructions at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_14_3_gen2/DISPATCH.md
Read docs/plan/METHOD.md (especially rules R1-R6 and §4 checklist).

Your focus: Cross-repo references, script execution verification (R2), and existence checks for all 4 skills:
1. sources/addy/skills/incremental-implementation/SKILL.md
2. sources/addy/skills/api-and-interface-design/SKILL.md
3. sources/addy/skills/ci-cd-and-automation/SKILL.md
4. sources/addy/skills/context-engineering/SKILL.md

Tasks:
1. Verify cross-references: where are these skills referenced across sources/addy/ (evals/cases, evals/fixtures, commands, docs, README)?
2. Check existence of all referenced files/paths cited within the 4 skills using ls / existence checks.
3. Check for any scripts or runnable command examples in these skills and evaluate R2 execution requirements.
4. Synthesize cross-unit notes and implementation considerations for the Worker.

Write your complete report to:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_14_3_gen2/handoff.md
Send a completion message back to Parent Orchestrator (ID: b7101632-34e7-42c5-9783-18ea9405656c) via send_message.

## 2026-09-03T11:59:51Z
**Context**: inv-addy-14 Spec Miner Status Check
**Content**: Please report your current progress on tasks 1-7 for inv-addy-14 (cross-repo references, R2 script verification, and handoff.md generation).
**Action**: Provide status update or finalize handoff.md if analysis is complete.
