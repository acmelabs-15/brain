# Task Dispatch: Worker 2 (inv-addy-24 Iteration 2)

## Identity
- Role: Worker (Deliverable Reconciliation & Verification Worker)
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_2
- Parent: Orchestrator (/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2)

## Authoritative Inputs
- MANDATORY: Read ORIGINAL_REQUEST.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read Reviewer 1 Handoff: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1/handoff.md`
- Read Forensic Auditor Handoff: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1/handoff.md`
- Read Deliverables:
  - `docs/analysis/inventory/addy/external-api-and-interface-design-md.md`
  - `docs/analysis/inventory/addy/_units/inv-addy-24.md`
  - `docs/analysis/manifest/addy.md`
  - `docs/plan/STATE.md`
- Honor DO-NOT-READ.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md` (v2 branch only, no pre-project git history)

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Remediation Objectives
1. **Manifest Row 199 Verification & Sync:**
   - Inspect line 199 of `docs/analysis/manifest/addy.md`.
   - Ensure it is strictly marked `[x]`:
     `| ../addy-external/api-and-interface-design.md | 26413 | external-doc | [x] |`
   - Run `grep -n "api-and-interface-design.md" docs/analysis/manifest/addy.md` and capture real output.

2. **Reconcile Coverage Output in Unit Report:**
   - Run `bun run scripts/synthesis/coverage.ts`.
   - Update line 31 of `docs/analysis/inventory/addy/_units/inv-addy-24.md` to precisely reflect the live output of `coverage.ts` (e.g. `Output: Unchecked manifest rows: <N>, Empty required inventory fields: 0`).

3. **Reconcile STATE.md Ledger Count:**
   - Count checked manifest rows: `grep -c '\[x\]' docs/analysis/manifest/addy.md`.
   - Ensure `docs/plan/STATE.md:434` matches this number (e.g. `| Rows inventoried (addy / matt / rjm) | <N> / 0 / 0 |`).
   - Ensure `docs/plan/STATE.md:88` has:
     `| inv-addy-24 | addy | 1 | 26413 | complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-24.md |`

4. **Run All Verifications:**
   - Master test runner: `bun run .agents/explorer_inv_addy_24_3/verify-inv-addy-24.ts`
   - Synthesis glossary: `bun run scripts/synthesis/glossary-lint.ts`
   - Project test suite: `bun test`

## Output


## 2026-09-03T17:39:03Z
You are Worker 2 for work unit inv-addy-24 (Iteration 2).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_2
Your task dispatch file is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_2/DISPATCH.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY FIRST STEPS:
1. Read ORIGINAL_REQUEST.md: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. Read Reviewer 1 Handoff: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_24_1/handoff.md
3. Read Forensic Auditor Handoff: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1/handoff.md
4. Read your dispatch file: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_2/DISPATCH.md

REMEDIATION TASKS:
1. Confirm docs/analysis/manifest/addy.md row 199 is marked [x].
2. Run bun run scripts/synthesis/coverage.ts and update line 31 in docs/analysis/inventory/addy/_units/inv-addy-24.md to reflect the exact current command output.
3. Confirm docs/plan/STATE.md:88 is complete and line 434 matches grep -c '\[x\]' docs/analysis/manifest/addy.md.
4. Run all verification scripts (verify-inv-addy-24.ts, glossary-lint.ts, coverage.ts, bun test).

Write your full handoff report to:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_2/handoff.md

Send a message back to the orchestrator (conversation ID: 7adbd448-405c-4e0f-b394-dd1cb78b1b75) upon completion.
