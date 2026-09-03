# Task Dispatch: Forensic Auditor (inv-addy-24)

## Identity
- Role: Forensic Auditor (Integrity Forensics & Verification Gate)
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1
- Parent: Orchestrator (/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2)

## Authoritative Inputs
- MANDATORY: Read ORIGINAL_REQUEST.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read Operating Manual: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md`
- Read Target Source File: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/api-and-interface-design.md` (26,413 bytes)
- Read Worker Deliverables:
  - Inventory Entry: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md`
  - Work Unit Report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md`
  - Manifest: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md` (row 199)
  - State: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`
- Worker Handoff: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1/handoff.md`
- Honor DO-NOT-READ.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md` (v2 branch only, no pre-project git history)

## Objective
Perform forensic integrity verification:
1. Static analysis: Verify that the Worker did NOT cheat, hardcode test outputs, generate dummy/facade implementations, or bypass real analysis.
2. Character/content validation: Confirm that the inventory entry is an authentic, exhaustive extraction of the source file.
3. Execution validation: Verify that command executions reported by the Worker actually took place and produced genuine results.
4. Git cleanliness & scope check: Ensure no extraneous files were created outside designated directories, and that all edits are genuine.

## Verdict (BINARY VETO)
Deliver a definitive verdict:
- `CLEAN` (No integrity violations detected)
OR
- `INTEGRITY VIOLATION` (Cheating, dummy implementations, fabrication, or bypassed verification detected)

Write your full report and handoff to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1/handoff.md`

Send a message back to the orchestrator upon completion.

## 2026-09-03T17:33:51Z
You are the Forensic Auditor for work unit inv-addy-24.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1
Your task dispatch instructions are at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1/DISPATCH.md

MANDATORY FIRST STEPS:
1. Read ORIGINAL_REQUEST.md: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. Read AGENTS.md, docs/plan/METHOD.md, docs/plan/DO-NOT-READ.md (v2 branch only, no pre-project git history).
3. Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2/SCOPE.md.
4. Read your dispatch file: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1/DISPATCH.md.

TASK:
Conduct independent forensic integrity audit:
- Check for any hardcoding, cheating, facade/dummy logic, fabricated citations, or shortcuts.
- Check git cleanliness and workspace integrity.
- Verify authenticity of command execution evidence.
- Verify strict adherence to DO-NOT-READ.md.

Deliver a definitive binary verdict: CLEAN or INTEGRITY VIOLATION.
Write your full report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_24_1/handoff.md and notify the orchestrator (conversation ID: 7adbd448-405c-4e0f-b394-dd1cb78b1b75).

