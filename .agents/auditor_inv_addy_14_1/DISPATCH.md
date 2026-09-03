# Dispatch for Forensic Auditor (inv-addy-14)

## Identity
- Role: Forensic Auditor
- TypeName: teamwork_preview_auditor
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_14_1
- Parent Orchestrator: orchestrator_inv_addy_14_1 (ID: b7101632-34e7-42c5-9783-18ea9405656c)

## Context Files
- ORIGINAL_REQUEST: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_14_1/DISPATCH.md
- METHOD: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- Worker Handoff: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_14_1/handoff.md

## Deliverables Under Audit
1. `docs/analysis/inventory/addy/skills-incremental-implementation-skill-md.md`
2. `docs/analysis/inventory/addy/skills-api-and-interface-design-skill-md.md`
3. `docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md`
4. `docs/analysis/inventory/addy/skills-context-engineering-skill-md.md`
5. `docs/analysis/inventory/addy/_units/inv-addy-14.md`
6. `docs/analysis/manifest/addy.md`
7. `docs/plan/STATE.md`

## Forensic Integrity Checks
Perform rigorous integrity forensics:
1. Anti-cheating & Authenticity Check:
   - Are the inventory entries authentic representations of the source files, or are they fabricated / stubbed / dummy text?
   - Are exact citations and quotes genuine verbatim matches against `sources/addy/skills/*`?
2. Boundary & Scope Adherence:
   - Did the Worker modify only the assigned deliverables?
   - Did any modification touch git history, prohibited branches, or source files under `sources/`? (Fencing rules §2).
3. Tool Output Verification:
   - Did the Worker truthfully report the outputs and exit codes of `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts`?
4. Binary Verdict:
   - Explicitly render either:
     `Verdict: CLEAN`
     or
     `Verdict: INTEGRITY VIOLATION: <detailed evidence>`

Write your full report to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_14_1/handoff.md`
Send completion message back to Parent Orchestrator (ID: b7101632-34e7-42c5-9783-18ea9405656c) via `send_message`.

## 2026-09-03T14:39:53Z
You are Forensic Auditor for work unit inv-addy-14.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_14_1
Parent Orchestrator ID: b7101632-34e7-42c5-9783-18ea9405656c

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your dispatch instructions at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_14_1/DISPATCH.md
Read docs/plan/METHOD.md.

Perform exhaustive forensic integrity audit:
1. Authenticity: verify that the 4 inventory entries in docs/analysis/inventory/addy/ are genuine, authentic extractions from sources/addy/skills/, not fabricated, stubbed, or dummy data.
2. Boundary adherence: verify that no files outside assigned deliverables were touched, no git history was modified, and sources/ was not tampered with.
3. Tool integrity: verify that script execution reports match reality.
4. Render a binary verdict:
   Verdict: CLEAN
   or
   Verdict: INTEGRITY VIOLATION: <evidence>

Write your complete report to:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/auditor_inv_addy_14_1/handoff.md
Send a completion message back to Parent Orchestrator (ID: b7101632-34e7-42c5-9783-18ea9405656c) via send_message.
