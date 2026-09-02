## 2026-09-02T14:00:15Z
<USER_REQUEST>
You are Explorer 3 investigating work unit `inv-addy-4` for the lifecycle synthesis project.
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_3/`.
The authoritative request is in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.

## Context & Operating Manual
- Read and strictly adhere to:
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/AGENTS.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md`
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/work-unit-report.md`
- Working tree: `/Users/peterkloss/Dev/ACMElabs/brain-v2`
- Branch: `v2` only. No reading from other branches or git history before project boundary.

## Hard Rules (R1 - R6)
- **R1 — Full reads. Coverage is proven, not asserted.** Every in-scope file is read from first line to last. No sampling.
- **R2 — Evidence, and scripts are run.** Every claim about a source names `path:line`. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to actual exit paths.
- **R3 — Verbatim in extraction.** Inventory and concept-card fields marked *verbatim* carry the source's exact words, quoted with `path:line`. No paraphrase.
- **R4 — One vocabulary, from the glossary.** Until a term is decided in Phase 4, refer to it with its source and package prefix: `addy:spec`, `addy:review`, etc.
- **R5 — Defect is not dismissal.** Record every defect found (broken reference, script bug, doc/code drift, unfailable gate) with classification and `path:line`.
- **R6 — Depth rule.** Every named technique, framework, artifact, gate, role, checklist, template, or phase gets recorded under Concepts named.

## Assigned Files (17 files for `inv-addy-4`)
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/security-checklist.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/accessibility-checklist.md`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/definition-of-done.md`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.opencode/skills`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.agents/plugins/marketplace.json`
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/rules/skills-contributing.md`
7. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/ship.md`
8. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/constraints.md`
9. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/code-simplify.md`
10. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/build.md`
11. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/plan.md`
12. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/spec.md`
13. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/review.md`
14. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/test.md`
15. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/webperf.md`
16. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/agents/code-reviewer.md`
17. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/agents/test-engineer.md`

## Required Task
1. Read all 17 files in full using `view_file`. Check every referenced path with `ls` / `view_file`.
2. Extract complete inventory entries for all 17 files following `docs/plan/templates/inventory-entry.md` exactly.
3. Check for §4 checklist items (existence, execution, doc drift between `.claude/commands/*.md` and `.gemini/commands/*.toml` / `agents/*.md`, internal consistency, cross-file consistency, composition, context cost, design intent).
4. Produce a complete work-unit report following `docs/plan/templates/work-unit-report.md`.
5. Write your complete analysis and generated inventory entries to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_3/handoff.md` and send a message when done.
</USER_REQUEST>
