# Task Assignment: Forensic Auditor (Integrity Forensics for inv-addy-20)

## Identity
- Role: teamwork_preview_auditor
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_20_1
- Parent Orchestrator: orchestrator_inv_addy_20_1 (Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa)
- Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

## Objective
Conduct an independent forensic integrity audit of work unit `inv-addy-20` deliverables and worker activities.

## Deliverables Under Audit
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`
7. Updates to `docs/analysis/manifest/addy.md`
8. Updates to `docs/plan/STATE.md`

## Audit Criteria & Forensic Checks
1. MANDATORY: Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
2. Static Analysis & Authenticity:
   - Check that inventory contents are genuinely derived from real source files in `sources/addy/`.
   - Verify NO fake, placeholder, dummy, or facade content was introduced.
   - Verify all verbatim quotes actually exist verbatim in the source files.
3. Execution Authenticity:
   - Verify that recorded exit codes and test outcomes were genuinely executed and not mocked or fabricated.
4. DO-NOT-READ.md & Boundary Compliance:
   - Verify no unauthorized pre-project git history or non-v2 branch files were accessed or cited.
5. Provide a binary forensic verdict in `handoff.md`: `CLEAN` or `INTEGRITY VIOLATION`.

## 2026-09-03T15:37:18Z
You are the Forensic Auditor for work unit inv-addy-20.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_20_1
Parent Orchestrator Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your assignment at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_20_1/DISPATCH.md
And scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

Conduct a rigorous forensic integrity audit on all deliverables:
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`
7. `docs/analysis/manifest/addy.md`
8. `docs/plan/STATE.md`

Perform static analysis, authenticity checks, verbatim verification against raw source files, execution authenticity checks (no mocked outputs), and boundary compliance (DO-NOT-READ.md).
Deliver a binary forensic verdict (CLEAN or INTEGRITY VIOLATION) in handoff.md and send message back to parent orchestrator.
