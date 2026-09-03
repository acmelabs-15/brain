# Dispatch — Explorer 3 (inv-addy-17)

## Identity
- Role: teamwork_preview_explorer
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_3
- Parent Orchestrator: orchestrator_inv_addy_17_1 (ID: 9d06e1e6-15c9-4e83-9868-3d9dd89d69a0)

## Mandatory Rules & Guidelines
- Read `ORIGINAL_REQUEST.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read `SCOPE.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`
- Follow `docs/plan/METHOD.md` rules R1-R6 and §4 checklist strictly.

## Scope of Cross-Cutting Analysis
1. Target skills:
   - `skills/security-and-hardening/SKILL.md`
   - `skills/deprecation-and-migration/SKILL.md`
   - `skills/observability-and-instrumentation/SKILL.md`
2. External docs:
   - `sources/addy-external/security-and-hardening.md`
   - `sources/addy-external/deprecation-and-migration.md`
   - `sources/addy-external/observability-and-instrumentation.md`
3. Repository-wide references and entry points:
   - `sources/addy/README.md`, `sources/addy/CLAUDE.md`, `sources/addy/AGENTS.md`
   - Commands: `sources/addy/commands/` and `sources/addy/.claude/commands/`
   - References: `sources/addy/references/` (e.g. `security-checklist.md`, `observability-checklist.md`, etc.)
   - Scripts: `sources/addy/scripts/` and any skill-local scripts.
   - Evals: `sources/addy/evals/`

## Task
1. Map complete `Invoked by` lists for all 3 skills across the entire `sources/addy/` package.
2. Verify all references linked from the 3 skills exist on disk; identify any broken paths or missing files (`missing-path` defects).
3. Check for documentation drift between SKILL.md files, external docs, README.md, and command files.
4. Check if any scripts exist or if any executable commands/code snippets are embedded that require testing.
5. Record exact lifecycle phases (`addy:<Phase>`) and cross-unit notes.
6. Write full report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_3/handoff.md`.
7. Send a completion message back to parent orchestrator via `send_message`.

## 2026-09-03T15:25:46Z
You are Explorer 3 for work unit inv-addy-17.
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_3/`.
Your parent orchestrator conversation ID is `9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`.

MANDATORY FIRST STEPS:
1. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md` completely.
2. Read your dispatch instructions in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_3/DISPATCH.md`.
3. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`.
4. Read `docs/plan/METHOD.md` §3 (Rules R1-R6) and §4 (Comprehensive Checklist).

SCOPE OF CROSS-CUTTING ANALYSIS:
Target skills:
- `sources/addy/skills/security-and-hardening/SKILL.md`
- `sources/addy/skills/deprecation-and-migration/SKILL.md`
- `sources/addy/skills/observability-and-instrumentation/SKILL.md`

External doc snapshots:
- `sources/addy-external/security-and-hardening.md`
- `sources/addy-external/deprecation-and-migration.md`
- `sources/addy-external/observability-and-instrumentation.md`

Repository-wide entry points & tooling:
- `sources/addy/README.md`, `CLAUDE.md`, `AGENTS.md`
- Commands: `sources/addy/commands/` and `sources/addy/.claude/commands/`
- References: `sources/addy/references/` (e.g. `security-checklist.md`, `observability-checklist.md`, etc.)
- Scripts: `sources/addy/scripts/` (validate-skills.js, validate-reference-links.js, etc.)
- Evals: `sources/addy/evals/`

TASK:
1. Check external doc snapshots for doc-drift vs the 3 SKILL.md files.
2. Build the complete `Invoked by` lists for all 3 skills across the repository.
3. Check all referenced paths (`references/`, `commands/`, `evals/`, `scripts/`) to verify if any are missing or broken.
4. Check if any scripts exist or any commands are runnable in these skills or in `sources/addy/scripts/`.
5. Check `scripts/synthesis/coverage.ts` and `glossary-lint.ts` requirements for these 3 inventory entries.
6. Write your findings to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_3/handoff.md`.
7. Send a message back to parent orchestrator (`9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`) when done.

