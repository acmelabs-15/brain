# Task Assignment: Reviewer 1 (inv-addy-25)

## Identity
- Role: teamwork_preview_reviewer
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_1
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
1. Independently review the inventory entry against `sources/addy-external/ci-cd-and-automation.md` (26,179 bytes).
2. Check template compliance (`docs/plan/templates/inventory-entry.md`), R1-R6, verbatim quotes accuracy (R3), line citations, and lifecycle prefix `addy:Ship` (R4).
3. Check defect categorizations (`doc-drift`, `orphan`, `cross-file-contradiction`).
4. Check unit report completeness in `docs/analysis/inventory/addy/_units/inv-addy-25.md`.
5. Run verification scripts with Bun:
   - `bun scripts/synthesis/glossary-lint.ts`
   - `bun scripts/synthesis/coverage.ts`
6. State a clear verdict: **APPROVE** or **REQUEST_CHANGES**.
7. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_1/handoff.md` and report back via send_message.

## 2026-09-03T17:32:14Z

You are Reviewer 1 for work unit inv-addy-25.
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_1
Your parent orchestrator conversation ID is a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_1/DISPATCH.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Review deliverables:
1. docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md
2. docs/analysis/inventory/addy/_units/inv-addy-25.md
3. docs/analysis/manifest/addy.md (line 200)
4. docs/plan/STATE.md (line 89 and counts)

Verify R1-R6 compliance, template conformance, verbatim quotes accuracy, defect classifications, and run verification scripts with Bun (`bun scripts/synthesis/glossary-lint.ts`, `bun scripts/synthesis/coverage.ts`).
Issue a clear verdict: APPROVE or REQUEST_CHANGES. Write handoff to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_25_1/handoff.md and report back via send_message.
