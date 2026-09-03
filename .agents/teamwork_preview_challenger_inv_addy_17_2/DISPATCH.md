# Dispatch — Challenger 2 (inv-addy-17)

## Identity
- Role: teamwork_preview_challenger
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_2
- Parent Orchestrator: orchestrator_inv_addy_17_1 (ID: 9d06e1e6-15c9-4e83-9868-3d9dd89d69a0)

## Mandatory Rules & Guidelines
- Read `ORIGINAL_REQUEST.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read `SCOPE.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`
- Follow `docs/plan/METHOD.md` rules R1-R6, checklist §4.

## Target Deliverables
1. `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md`
2. `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md`
3. `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md`
4. `docs/analysis/inventory/addy/_units/inv-addy-17.md`

## Task
1. Run repository validation scripts:
   - `cd sources/addy && bun scripts/validate-skills.js`
   - `cd sources/addy && bun scripts/validate-reference-links.js`
   - `cd sources/addy && bun test ./scripts/*-test.js`
2. Challenge the concept extractions: verify that concepts claimed as `defined here` are genuinely defined at the cited line and not merely mentioned.
3. Verify that zero scripts were missed or left unexecuted.
4. Provide an explicit verdict in your handoff report: `APPROVE` or `REQUEST_CHANGES`.
5. Write full report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_2/handoff.md`.
6. Send a message to parent orchestrator with your verdict.

## 2026-09-03T15:36:46Z
You are Challenger 2 for work unit inv-addy-17.
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_2/`.
Your parent orchestrator conversation ID is `9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`.

MANDATORY FIRST STEPS:
1. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md` completely.
2. Read your dispatch instructions in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_2/DISPATCH.md`.
3. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`.
4. Read `docs/plan/METHOD.md` §3 (Rules R1-R6) and §4.

TARGET DELIVERABLES TO TEST:
1. `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md`
2. `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md`
3. `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md`
4. `docs/analysis/inventory/addy/_units/inv-addy-17.md`

TASK:
1. Run repository validation suites:
   - `cd sources/addy && bun scripts/validate-skills.js`
   - `cd sources/addy && bun scripts/validate-reference-links.js`
   - `cd sources/addy && bun test ./scripts/*-test.js`
2. Challenge concept extractions: pick at least 5 concepts from each file marked `defined here` and verify that a definition is actually present at the cited line, not just a casual mention.
3. Challenge defect classifications: verify that the reported `doc-drift` defects are accurate and substantiated.
4. Record your findings and provide an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.
5. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_2/handoff.md`.
6. Send a message to parent orchestrator with your verdict.
