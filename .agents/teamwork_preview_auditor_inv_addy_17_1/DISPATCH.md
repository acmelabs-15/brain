# Dispatch — Forensic Auditor (inv-addy-17)

## Identity
- Role: teamwork_preview_auditor
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_17_1
- Parent Orchestrator: orchestrator_inv_addy_17_1 (ID: 9d06e1e6-15c9-4e83-9868-3d9dd89d69a0)

## Mandatory Rules & Guidelines
- Read `ORIGINAL_REQUEST.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read `SCOPE.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`
- Follow `docs/plan/METHOD.md` rules R1-R6.

## Target Deliverables to Audit
1. `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md`
2. `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md`
3. `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md`
4. `docs/analysis/inventory/addy/_units/inv-addy-17.md`
5. Updates to `docs/analysis/manifest/addy.md`
6. Updates to `docs/plan/STATE.md`

## Audit Focus & Hard Constraints
- Verify forensic integrity:
  - ZERO tolerance for cheating, dummy/facade implementations, or fabricated evidence.
  - Check that quotes are genuinely verbatim from `sources/addy/skills/*/SKILL.md`.
  - Check that cited line numbers match the actual source files.
  - Check that no test outputs or verification claims were faked.
  - Check that git pins and worktree boundaries were respected.
- Binary veto: If any cheating or integrity violation is detected, your verdict MUST BE `INTEGRITY VIOLATION`.
- If clean and authentic, your verdict MUST BE `CLEAN`.
- Write your full forensic report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_17_1/handoff.md`.
- Send a message to parent orchestrator with your verdict.

## 2026-09-03T15:36:46Z
You are the Forensic Auditor for work unit inv-addy-17.
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_17_1/`.
Your parent orchestrator conversation ID is `9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`.

MANDATORY FIRST STEPS:
1. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md` completely.
2. Read your dispatch instructions in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_17_1/DISPATCH.md`.
3. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`.
4. Read `docs/plan/METHOD.md` §3 (Rules R1-R6).

DELIVERABLES UNDER AUDIT:
1. `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md`
2. `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md`
3. `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md`
4. `docs/analysis/inventory/addy/_units/inv-addy-17.md`
5. `docs/analysis/manifest/addy.md` (lines 179-181)
6. `docs/plan/STATE.md` (inv-addy-17 row)

AUDIT MANDATE & CRITERIA:
- Binary Veto: Zero tolerance for cheating, facade implementations, hallucinated citations, or fabricated outputs.
- Verify that every Purpose statement is a genuine verbatim quote from the assigned file at the exact cited path:line.
- Verify that line counts, byte sizes, and content reflect authentic extraction rather than placeholder or LLM-generated fiction.
- Verify that git boundary and fence rules (METHOD.md §2) were respected.
- Verify that the manifest row updates and STATE.md updates are genuine and match the deliverables.
- Render an unambiguous binary verdict in your handoff report: `CLEAN` or `INTEGRITY VIOLATION`.
- Write your forensic audit report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_auditor_inv_addy_17_1/handoff.md`.
- Send a message to parent orchestrator with your verdict.

