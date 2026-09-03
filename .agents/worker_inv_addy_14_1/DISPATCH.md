# Dispatch for Worker 1 (inv-addy-14)

## Identity
- Role: Worker
- TypeName: teamwork_preview_worker
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_14_1
- Parent Orchestrator: orchestrator_inv_addy_14_1 (ID: b7101632-34e7-42c5-9783-18ea9405656c)

## Context Files
- ORIGINAL_REQUEST: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_14_1/DISPATCH.md
- METHOD: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- Inventory Template: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md
- Unit Report Template: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/work-unit-report.md
- Explorer 1 Handoff (Extractions for incremental-implementation and api-and-interface-design): /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_14_1/handoff.md
- Explorer 2 gen2 Handoff (Extractions for ci-cd-and-automation and context-engineering): /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_14_2_gen2/handoff.md

## Exclusive Write Ownership
You own and must write/update these files:
1. `docs/analysis/inventory/addy/skills-incremental-implementation-skill-md.md`
2. `docs/analysis/inventory/addy/skills-api-and-interface-design-skill-md.md`
3. `docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md`
4. `docs/analysis/inventory/addy/skills-context-engineering-skill-md.md`
5. `docs/analysis/inventory/addy/_units/inv-addy-14.md`
6. `docs/analysis/manifest/addy.md` (mark the 4 rows `[x]`)
7. `docs/plan/STATE.md` (update inv-addy-14 status from in-progress to complete, update session to 006, set output to `docs/analysis/inventory/addy/_units/inv-addy-14.md`, update counts: rows inventoried incremented by 4)

## Mandatory Rules & Instructions
- Follow METHOD.md rules R1-R6 rigorously.
- Use the exact inventory entries and unit report data verified by the Explorers.
- Check off the 4 rows in `docs/analysis/manifest/addy.md`:
  - `skills/incremental-implementation/SKILL.md`
  - `skills/api-and-interface-design/SKILL.md`
  - `skills/ci-cd-and-automation/SKILL.md`
  - `skills/context-engineering/SKILL.md`
- In `docs/plan/STATE.md`:
  - Update `inv-addy-14` row: status `complete`, session `006`, output `docs/analysis/inventory/addy/_units/inv-addy-14.md`.
  - Update counts: check current counts in `docs/plan/STATE.md` and increment rows inventoried by 4 (e.g. from 141 to 145, or whatever the current base is in STATE.md).
- Validation:
  - Run `bun scripts/synthesis/coverage.ts`
  - Run `bun scripts/synthesis/glossary-lint.ts`
- Write your complete handoff report to:
  `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_14_1/handoff.md`
- Report back to Parent Orchestrator (ID: b7101632-34e7-42c5-9783-18ea9405656c) via `send_message`.

## Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## 2026-09-03T12:27:01Z

You are Worker 1 for work unit inv-addy-14.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_14_1
Parent Orchestrator ID: b7101632-34e7-42c5-9783-18ea9405656c

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your dispatch instructions at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_14_1/DISPATCH.md
Read docs/plan/METHOD.md (especially rules R1-R6 and §4 checklist).

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your task:
Implement and write the 4 inventory entries, the unit report, update the manifest, update STATE.md, and run verification scripts:
1. Write `docs/analysis/inventory/addy/skills-incremental-implementation-skill-md.md`
2. Write `docs/analysis/inventory/addy/skills-api-and-interface-design-skill-md.md`
3. Write `docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md`
4. Write `docs/analysis/inventory/addy/skills-context-engineering-skill-md.md`
(Use the verified extractions from /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_14_1/handoff.md and /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_14_2_gen2/handoff.md)
5. Write unit report `docs/analysis/inventory/addy/_units/inv-addy-14.md`
6. Update `docs/analysis/manifest/addy.md`: mark rows for the 4 files as `[x]`:
   - `skills/incremental-implementation/SKILL.md`
   - `skills/api-and-interface-design/SKILL.md`
   - `skills/ci-cd-and-automation/SKILL.md`
   - `skills/context-engineering/SKILL.md`
7. Update `docs/plan/STATE.md`:
   - Mark `inv-addy-14` row complete, session 006, output `docs/analysis/inventory/addy/_units/inv-addy-14.md`
   - Update Counts: increment Rows inventoried (addy) by 4
8. Run verification scripts:
   - `bun scripts/synthesis/coverage.ts`
   - `bun scripts/synthesis/glossary-lint.ts`
   Record exact commands, exit codes, and output.

Write your complete handoff report to:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_14_1/handoff.md
Send a completion message back to Parent Orchestrator (ID: b7101632-34e7-42c5-9783-18ea9405656c) via send_message.
