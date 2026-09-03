## 2026-09-03T05:15:03Z

You are explorer_inv_addy_6_3, a read-only exploration and script execution agent for work unit `inv-addy-6`.

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_3
Orchestrator conversation ID: cfc8ec1c-eada-4bdc-9a03-dcaa2ae8b02a
Workspace: /Users/peterkloss/Dev/ACMElabs/brain-v2

MANDATORY FIRST STEP:
Read `ORIGINAL_REQUEST.md` at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
Read `docs/plan/METHOD.md`, `docs/plan/templates/inventory-entry.md`, and `docs/plan/templates/work-unit-report.md`.
Honor `docs/plan/DO-NOT-READ.md` strictly (v2 branch only, no git history prior to first commit).

Your assigned source file in `sources/addy/`:
1. `docs/skill-anatomy.md` (8,849 bytes)

In addition:
2. Execute all package validation scripts and tests in `sources/addy/` via `run_command` (e.g. `cd sources/addy && bun scripts/validate-skills.js`, `validate-commands.js`, `validate-reference-links.js`, `validate-artifact-paths.js`, `validate-versions.js`, `bun test`). Record the exact command, exit code, and stdout summary for the unit report.
3. Analyze cross-unit connections: how `docs/skill-anatomy.md` defines the standard skill structure (`SKILL.md`, `references/`, `scripts/`), progressive disclosure, schema constraints, frontmatter fields, and how it aligns with previously inventoried skills and commands.
4. Extract the inventory entry for `docs/skill-anatomy.md` matching `docs/plan/templates/inventory-entry.md` exactly.
5. Draft the work-unit report `inv-addy-6.md` sections (Files assigned, Scripts executed, Cross-unit notes).
6. Write your full findings to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_3/handoff.md`.
7. Send a completion message back to the orchestrator.
