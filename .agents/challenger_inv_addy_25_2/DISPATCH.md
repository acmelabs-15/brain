# Task Assignment: Challenger 2 (inv-addy-25)

## Identity
- Role: teamwork_preview_challenger
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_25_2
- Parent Orchestrator Conversation ID: a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

## Mission & Inputs
Read the authoritative request and scope documents:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md (MANDATORY: read first)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md (specifically §1.1, §3, §4, §8, §10, R1-R6)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Deliverables to challenge:
1. `docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md`
2. `docs/analysis/inventory/addy/_units/inv-addy-25.md`
3. `docs/analysis/manifest/addy.md` (line 200)
4. `docs/plan/STATE.md` (line 89 and summary table)

## Challenger Objectives
1. Adversarially stress test R2 command execution: independently execute the documented installation command in an isolated sandbox (`/tmp/challenger-2-skills-sandbox`) and capture exact stdout, stderr, exit code, and created filesystem tree.
2. Verify integrity of manifest and state: confirm line 200 of `manifest/addy.md` is checked `[x]` and line 89 of `STATE.md` has `complete` with matching byte size (26,179) and valid path.
3. Check fence compliance (`DO-NOT-READ.md`): confirm no out-of-scope files or pre-project commits were accessed.
4. Run Bun verification scripts:
   - `bun scripts/synthesis/glossary-lint.ts`
   - `bun scripts/synthesis/coverage.ts`
5. Deliver an empirical verdict: **APPROVE** or **REQUEST_CHANGES**.
6. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_25_2/handoff.md` and report back via send_message.

## 2026-09-03T17:32:14Z
You are Challenger 2 for work unit inv-addy-25.
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_25_2
Your parent orchestrator conversation ID is a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_25_2/DISPATCH.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Adversarially stress test R2 command execution in an isolated temp sandbox. Verify manifest line 200 format, STATE.md updates, and DO-NOT-READ fence compliance. Run Bun verification scripts.
Deliver verdict: APPROVE or REQUEST_CHANGES. Write handoff to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_25_2/handoff.md and report back via send_message.
