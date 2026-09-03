# Task Assignment: Reviewer 2 (inv-addy-25)

## Identity
- Role: teamwork_preview_reviewer
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_2
- Parent Orchestrator Conversation ID: a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

## Mission & Inputs
Read the authoritative request and scope documents:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md (MANDATORY: read first)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md (specifically §1.1, §3, §4, §8, §10, R1-R6)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Deliverables to review:
1. `docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md`
2. `docs/analysis/inventory/addy/_units/inv-addy-25.md`
3. `docs/analysis/manifest/addy.md` (line 200)
4. `docs/plan/STATE.md` (line 89 and summary table)

## Review Objectives
1. Independently and critically evaluate the inventory entry and work-unit deliverables.
2. Verify verbatim requirements under R3: ensure the exact purpose string from `sources/addy-external/ci-cd-and-automation.md` is quoted verbatim with exact line citation.
3. Verify R4 and GLOSSARY compliance: lifecycle phase `addy:Ship`, concepts named accurately categorized.
4. Verify R2 command execution documentation.
5. Verify manifest update at line 200 (`[x]`) and STATE.md table status, session `007`, and output paths.
6. Run verification scripts with Bun:
   - `bun scripts/synthesis/glossary-lint.ts`
   - `bun scripts/synthesis/coverage.ts`
7. State a clear verdict: **APPROVE** or **REQUEST_CHANGES**.
8. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_2/handoff.md` and report back via send_message.

## 2026-09-03T17:32:14Z
You are Reviewer 2 for work unit inv-addy-25.
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_2
Your parent orchestrator conversation ID is a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_2/DISPATCH.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Critically evaluate deliverables:
1. docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md
2. docs/analysis/inventory/addy/_units/inv-addy-25.md
3. docs/analysis/manifest/addy.md (line 200)
4. docs/plan/STATE.md (line 89 and counts)

Verify R1-R6, verbatim quotes, lifecycle prefix addy:Ship, R2 execution verification, manifest checkbox, and STATE updates. Run Bun verification scripts.
Issue a clear verdict: APPROVE or REQUEST_CHANGES. Write handoff to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_2/handoff.md and report back via send_message.
