# Task Dispatch: Reviewer 1 (inv-addy-24)

## Identity
- Role: Reviewer (Independent Quality & Method Auditor)
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1
- Parent: Orchestrator (/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2)

## Authoritative Inputs
- MANDATORY: Read ORIGINAL_REQUEST.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read Scope: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2/SCOPE.md`
- Read Operating Manual: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md` (rules R1-R6, §3 template, §4 checklist)
- Read Target Source File: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/api-and-interface-design.md` (26,413 bytes)
- Read Worker Deliverables:
  - Inventory Entry: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md`
  - Work Unit Report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md`
  - Manifest: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md` (row 199)
  - State: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md` (inv-addy-24 row & counts)
- Worker Handoff: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1/handoff.md`
- Honor DO-NOT-READ.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md` (v2 branch only, no pre-project git history)

## Objective
Independently review the work product against:
1. METHOD.md Rules R1-R6:
   - R1 (Full reads without omission or sampling)
   - R2 (Evidence citations with path:line; command executions with real exit codes and outputs)
   - R3 (Verbatim in extraction for required verbatim fields)
   - R4 (Glossary terms strictly adhering to prefix conventions: `addy:<term>`)
   - R5 (Defect cataloging vs design intent separation)
   - R6 (Depth rule: all named concepts cataloged)
2. METHOD.md §4 Quality Checklist (Existence, Execution, Documentation drift, Internal consistency, Cross-file consistency, Composition, Context cost, Design intent).
3. Manifest row 199 marked `[x]`.
4. STATE.md accurately marked complete with correct output path and counts.
5. Independent test execution: Run master test runner (`bun run .agents/explorer_inv_addy_24_3/verify-inv-addy-24.ts`) and synthesis linters (`bun run scripts/synthesis/glossary-lint.ts`, `bun run scripts/synthesis/coverage.ts`).

## Verdict
Deliver a definitive verdict: `APPROVE` or `REQUEST_CHANGES`.

Write your full report and handoff to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1/handoff.md`


## 2026-09-03T17:33:50Z
<USER_REQUEST>
You are Reviewer 1 for work unit inv-addy-24.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1
Your task dispatch instructions are at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1/DISPATCH.md

MANDATORY FIRST STEPS:
1. Read ORIGINAL_REQUEST.md: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. Read AGENTS.md, docs/plan/METHOD.md (rules R1-R6, §3 template, §4 checklist), docs/plan/DO-NOT-READ.md (v2 branch only, no pre-project git history).
3. Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2/SCOPE.md.
4. Read your dispatch file: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1/DISPATCH.md.

TASK:
Review all deliverables of inv-addy-24:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md (row 199 marked [x])
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md (status complete, session 007, counts)
Against METHOD.md R1-R6, §4 quality checklist, and run test verification (Bun only).

Deliver a definitive verdict: APPROVE or REQUEST_CHANGES.
Write your full report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1/handoff.md and notify the orchestrator (conversation ID: 7adbd448-405c-4e0f-b394-dd1cb78b1b75).
</USER_REQUEST>
