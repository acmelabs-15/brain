# Task Dispatch: Reviewer 4 (inv-addy-24 Iteration 2 Gate)

## Identity
- Role: Reviewer (Independent Standards & Completeness Verifier - Iteration 2)
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_4
- Parent: Orchestrator (/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2)

## Authoritative Inputs
- MANDATORY: Read ORIGINAL_REQUEST.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read Operating Manual: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md` (rules R1-R6, §3 template, §4 checklist)
- Read Worker 2 Handoff: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_2/handoff.md`
- Read Deliverables on disk:
  - Inventory Entry: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md`
  - Work Unit Report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md`
  - Manifest: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md`
  - State: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`
- Honor DO-NOT-READ.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md` (v2 branch only, no pre-project git history)

## Objective
Independently audit all deliverables following Worker 2's remediation:
1. Verify manifest row 199 in `docs/analysis/manifest/addy.md` is strictly marked `[x]`.
2. Verify line 31 of `docs/analysis/inventory/addy/_units/inv-addy-24.md` matches live `coverage.ts` output.
3. Verify `docs/plan/STATE.md:88` is `complete` and line 434 matches `grep -c '\[x\]' docs/analysis/manifest/addy.md`.
4. Verify inventory entry `external-api-and-interface-design-md.md` against METHOD.md R1-R6 and §4 checklist.
5. Run verification commands in Bun (`verify-inv-24.ts`, `verify-inv-addy-24.ts`, `glossary-lint.ts`, `coverage.ts`, `bun test`).

## Verdict
Deliver a definitive verdict: `APPROVE` or `REQUEST_CHANGES`.

Write your full report to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_4/handoff.md`

Send a message back to the orchestrator upon completion.

## 2026-09-03T17:41:38Z
<USER_REQUEST>
You are Reviewer 4 for work unit inv-addy-24 (Iteration 2 Gate).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_4
Your task dispatch instructions are at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_4/DISPATCH.md

MANDATORY FIRST STEPS:
1. Read ORIGINAL_REQUEST.md: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. Read AGENTS.md, docs/plan/METHOD.md (rules R1-R6, §3 template, §4 checklist), docs/plan/DO-NOT-READ.md (v2 branch only, no pre-project git history).
3. Read Worker 2 handoff (.agents/worker_inv_addy_24_2/handoff.md).
4. Read your dispatch file: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_4/DISPATCH.md.

TASK:
Audit all deliverables of inv-addy-24:
- Confirm manifest row 199 in docs/analysis/manifest/addy.md is marked [x].
- Confirm line 31 of docs/analysis/inventory/addy/_units/inv-addy-24.md matches live coverage.ts output.
- Confirm docs/plan/STATE.md:88 is complete and line 434 matches manifest checked count.
- Verify inventory entry docs/analysis/inventory/addy/external-api-and-interface-design-md.md against METHOD.md R1-R6.
- Run tests in Bun (scripts/synthesis/verify-inv-24.ts, .agents/explorer_inv_addy_24_3/verify-inv-addy-24.ts, glossary-lint.ts, bun test).

Deliver a definitive verdict: APPROVE or REQUEST_CHANGES.
Write your full report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_4/handoff.md and notify the orchestrator (conversation ID: 7adbd448-405c-4e0f-b394-dd1cb78b1b75).
</USER_REQUEST>
