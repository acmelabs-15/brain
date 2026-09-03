# Task Dispatch: Challenger 1 (inv-addy-24)

## Identity
- Role: Challenger (Adversarial Empirical Verifier)
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_24_1
- Parent: Orchestrator (/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2)

## Authoritative Inputs
- MANDATORY: Read ORIGINAL_REQUEST.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read Target Source File: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/api-and-interface-design.md` (26,413 bytes)
- Read Worker Deliverables:
  - Inventory Entry: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md`
  - Work Unit Report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md`
  - Manifest: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md` (row 199)
  - State: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`
- Honor DO-NOT-READ.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md` (v2 branch only, no pre-project git history)

## Objective
Adversarially challenge and stress-test the work product:
1. Verify every verbatim quote in `external-api-and-interface-design-md.md` against `sources/addy-external/api-and-interface-design.md` character-for-character.
2. Verify every `path:line` citation. Confirm that line numbers actually contain the quoted text.
3. Verify byte sizes, line counts, SHA-256 hashes, and link targets.
4. Execute empirical tests in Bun: parse HTML, verify code blocks, test regex extractions, run master test runner and linters.
5. Identify any omissions, fabricated citations, false claims, or subtle errors.

## Verdict
Deliver a definitive verdict: `APPROVE` or `REQUEST_CHANGES` (or `FAIL`).

Write your full report and handoff to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_24_1/handoff.md`

Send a message back to the orchestrator upon completion.

## 2026-09-03T17:33:51Z
You are Challenger 1 for work unit inv-addy-24.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_24_1
Your task dispatch instructions are at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_24_1/DISPATCH.md

MANDATORY FIRST STEPS:
1. Read ORIGINAL_REQUEST.md: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. Read AGENTS.md, docs/plan/METHOD.md, docs/plan/DO-NOT-READ.md (v2 branch only, no pre-project git history).
3. Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2/SCOPE.md.
4. Read your dispatch file: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_24_1/DISPATCH.md.

TASK:
Adversarially challenge and stress-test the work products:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md
- Verify every verbatim quote, character-for-character, against sources/addy-external/api-and-interface-design.md.
- Verify every line number citation and path.
- Check byte counts and test runner executions in Bun.

Deliver a definitive verdict: APPROVE or REQUEST_CHANGES (or FAIL).
Write your full report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_24_1/handoff.md and notify the orchestrator (conversation ID: 7adbd448-405c-4e0f-b394-dd1cb78b1b75).
