# Task Assignment: Worker 1 (Inventory Extraction for inv-addy-20)

## Identity
- Role: teamwork_preview_worker
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_20_1
- Parent Orchestrator: orchestrator_inv_addy_20_1 (Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa)
- Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Mandatory Reading
Before writing any deliverables, read:
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
2. `docs/plan/METHOD.md` (specifically R1-R6, §4 checklist, templates in `docs/plan/templates/`)
3. `AGENTS.md`, `docs/plan/DO-NOT-READ.md`, `docs/plan/STATE.md`
4. The 3 Explorer reports:
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_1/report.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_2/report.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/report.md`
   - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/verify-inv-addy-20.ts`

## File Ownership
You have exclusive write access to:
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`
7. `docs/analysis/manifest/addy.md` (marking rows 188-192 as `[x]`)
8. `docs/plan/STATE.md` (updating line 84 to `complete`, session `006`, report path, and updating bottom summary counts)
9. Metadata files in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_20_1/`

## Instructions & Deliverable Standards
1. Populate all 5 inventory-entry files using the canonical template (`docs/plan/templates/inventory-entry.md`):
   - Exact YAML frontmatter (`package: addy`, `path: ...`, `type: ...`, `bytes: ...`, `unit: inv-addy-20`).
   - Exact title `# <path>`.
   - All 12 canonical section headings present in standard order.
   - Non-empty content for every section (use `none` when empty).
   - Verbatim citations with exact `path:line` format for Purpose and key concepts.
   - Accurately catalog lifecycle phase (`addy:Ship` for the two skills, `cross-phase` for AGENTS.md and CLAUDE.md, `none` for plugin.json).
   - Accurately catalog documented defects (e.g. skill count drift in plugin.json, omitted skills in CLAUDE.md, AGENTS.md scoping contradictions, docs/decisions missing path).
2. Populate the work-unit report `docs/analysis/inventory/addy/_units/inv-addy-20.md` using the canonical template (`docs/plan/templates/work-unit-report.md`):
   - Frontmatter (`unit: inv-addy-20`, `phase: 1`, `package: addy`, `session: "006"`, `subagent_returned: ...`).
   - Title `# Unit inv-addy-20`.
   - All 7 canonical section headings.
   - Summary table with all 5 files, exact bytes, types, and links.
   - Execution verification table capturing real command exit codes.
3. Update `docs/analysis/manifest/addy.md`:
   - Change `[ ]` to `[x]` for rows 188, 189, 190, 191, 192.
4. Update `docs/plan/STATE.md`:
   - Update row for `inv-addy-20` to `complete`, session `006`, path `docs/analysis/inventory/addy/_units/inv-addy-20.md`.
   - Update the bottom summary counts (e.g. Completed units count incremented).
5. Verification:
   - Run `bun scripts/synthesis/glossary-lint.ts`.
   - Run `bun scripts/synthesis/coverage.ts`.
   - Run the validation scripts in `sources/addy/` via Bun.
   - Confirm all tests and linters pass cleanly.
6. Write a comprehensive 5-component `handoff.md` and send a message back to parent orchestrator.

## 2026-09-03T15:31:37Z

<USER_REQUEST>
You are Worker 1 for work unit inv-addy-20.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_20_1
Parent Orchestrator Conversation ID: ee39c068-caf0-493f-92bc-429693b797aa

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read your task assignment at: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_20_1/DISPATCH.md
And scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1/SCOPE.md

Consult the 3 Explorer reports for exact findings, line citations, schemas, and defects:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_1/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_2/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/report.md
- Verification script: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/verify-inv-addy-20.ts

You have exclusive write ownership of:
1. `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `docs/analysis/inventory/addy/agents-md.md`
4. `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `docs/analysis/inventory/addy/claude-md.md`
6. `docs/analysis/inventory/addy/_units/inv-addy-20.md`
7. `docs/analysis/manifest/addy.md`
8. `docs/plan/STATE.md`
9. Files inside your working directory `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_20_1/`

Deliverables to produce:
1. Five fully-populated inventory entries adhering strictly to `docs/plan/templates/inventory-entry.md` and METHOD.md rules (R1-R6). Every section must be populated with non-empty content (use `none` where applicable). Exact verbatim quotes with path:line citations.
2. The work-unit report `docs/analysis/inventory/addy/_units/inv-addy-20.md` adhering strictly to `docs/plan/templates/work-unit-report.md`.
3. Update `docs/analysis/manifest/addy.md` rows 188-192 to `[x]`.
4. Update `docs/plan/STATE.md` row 84 to `complete`, session `006`, path `docs/analysis/inventory/addy/_units/inv-addy-20.md`, and update the summary counts at the bottom.
5. Execute verification commands via Bun (`bun scripts/synthesis/glossary-lint.ts`, `bun scripts/synthesis/coverage.ts`, `sources/addy/` validation scripts) and verify exit codes.
6. Write a comprehensive 5-component `handoff.md` and send a message back to parent orchestrator (ee39c068-caf0-493f-92bc-429693b797aa).
</USER_REQUEST>
