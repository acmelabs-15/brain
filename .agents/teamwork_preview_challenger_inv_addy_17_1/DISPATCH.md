# Dispatch — Challenger 1 (inv-addy-17)

## Identity
- Role: teamwork_preview_challenger
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_1
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
5. `docs/analysis/manifest/addy.md`
6. `docs/plan/STATE.md`

## Task
1. Empirically run `bun scripts/synthesis/coverage.ts` and inspect output (ensure 0 empty required fields).
2. Empirically run `bun scripts/synthesis/glossary-lint.ts` and confirm exit code 0.
3. Empirically check that all referenced file paths in the 3 inventory files actually exist on disk (`test -f`).
4. Verify byte counts and line counts reported match the files on disk.
5. Provide an explicit verdict in your handoff report: `APPROVE` or `REQUEST_CHANGES`.
6. Write full report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_1/handoff.md`.
7. Send a message to parent orchestrator with your verdict.

## 2026-09-03T15:36:46Z
<USER_REQUEST>
You are Challenger 1 for work unit inv-addy-17.
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_1/`.
Your parent orchestrator conversation ID is `9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`.

MANDATORY FIRST STEPS:
1. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md` completely.
2. Read your dispatch instructions in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_1/DISPATCH.md`.
3. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`.
4. Read `docs/plan/METHOD.md` §3 (Rules R1-R6) and §4.

TARGET DELIVERABLES TO TEST:
1. `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md`
2. `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md`
3. `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md`
4. `docs/analysis/inventory/addy/_units/inv-addy-17.md`
5. `docs/analysis/manifest/addy.md`
6. `docs/plan/STATE.md`

TASK:
1. Empirically run:
   - `bun scripts/synthesis/coverage.ts`
   - `bun scripts/synthesis/glossary-lint.ts`
2. Verify that every path referenced in the `Invokes` and `Inputs` sections of the 3 inventory entries exists on disk.
3. Verify that byte counts and line numbers in frontmatter match the actual files.
4. Record your findings and provide an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.
5. Write your handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_challenger_inv_addy_17_1/handoff.md`.
6. Send a message to parent orchestrator with your verdict.
</USER_REQUEST>
