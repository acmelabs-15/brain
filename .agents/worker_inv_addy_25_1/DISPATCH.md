# Task Assignment: Worker 1 (inv-addy-25)

## Identity
- Role: teamwork_preview_worker
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_25_1
- Parent Orchestrator Conversation ID: a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Mission & Inputs
Read the authoritative request and scope documents:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md (MANDATORY: read first)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md (specifically §1.1, §3, §4, §8, §10, R1-R6)
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Explorer and Spec Miner handoff reports:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_25_1/handoff.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_25_2/handoff.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1/handoff.md

Assigned source file:
- `sources/addy-external/ci-cd-and-automation.md` (26,179 bytes)

## Deliverables & Write Ownership
You exclusively own and must create or modify the following files:
1. `docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md` (new inventory entry)
2. `docs/analysis/inventory/addy/_units/inv-addy-25.md` (new work-unit report)
3. `docs/analysis/manifest/addy.md` (modify line 200: change `[ ]` to `[x]`)
4. `docs/plan/STATE.md` (modify line 89: mark `inv-addy-25` as `complete`, session `007` [note prompt session 006], output path `docs/analysis/inventory/addy/_units/inv-addy-25.md`; update table count in summary)

## Implementation Instructions
1. Follow `METHOD.md` §3, §4, §8, §10, R1-R6, and template in `docs/plan/templates/inventory-entry.md`.
2. Extract Purpose verbatim with `sources/addy-external/ci-cd-and-automation.md:5`.
3. Set Phase: `addy:Ship`.
4. Populate Design Intent, Inputs, Outputs, Invokes, Invoked By, Concepts Named (verbatim with citations), Structure, Scripts (`none` or documented CLI test results), Defects (`doc-drift`, `orphan`), Observations, Context cost.
5. In `inv-addy-25.md`, record all files assigned, outputs produced, scripts executed (`none`), coverage self-check, cross-unit notes (linking to `inv-addy-14` for in-repo `ci-cd-and-automation/SKILL.md`), and time/size metrics.
6. In `docs/analysis/manifest/addy.md`, mark line 200 as `[x]`.
7. In `docs/plan/STATE.md`, mark unit `inv-addy-25` as `complete` with output path `docs/analysis/inventory/addy/_units/inv-addy-25.md`.
8. Run validation scripts using Bun:
   - `bun scripts/synthesis/glossary-lint.ts` (must be clean)
   - `bun scripts/synthesis/coverage.ts`
9. Write your detailed handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_25_1/handoff.md` and report back via send_message.

## 2026-09-03T17:28:40Z
<USER_REQUEST>
You are Worker 1 for work unit inv-addy-25.
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_25_1
Your parent orchestrator conversation ID is a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_25_1/DISPATCH.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_25_1/handoff.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_25_2/handoff.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1/handoff.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md

Deliverables you exclusively own:
1. `docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md`
2. `docs/analysis/inventory/addy/_units/inv-addy-25.md`
3. `docs/analysis/manifest/addy.md` (line 200: mark [x])
4. `docs/plan/STATE.md` (line 89: mark complete, session 007, output path docs/analysis/inventory/addy/_units/inv-addy-25.md, update counts)

Execute validation with Bun (`bun scripts/synthesis/glossary-lint.ts`, `bun scripts/synthesis/coverage.ts`).
Write your detailed handoff report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_25_1/handoff.md and report back via send_message.
</USER_REQUEST>
