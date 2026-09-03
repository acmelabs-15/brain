# Scope: inv-addy-19

## Architecture
Phase 1: Inventory Extraction. Unit `inv-addy-19` extracts comprehensive inventory analysis for 3 skills from `addy` (`sources/addy/skills/`).

## Assigned Source Files
1. `sources/addy/skills/source-driven-development/SKILL.md` (9,949 bytes)
2. `sources/addy/skills/performance-optimization/SKILL.md` (21,717 bytes)
3. `sources/addy/skills/browser-testing-with-devtools/SKILL.md` (14,539 bytes)
Total source size: 46,205 bytes.

## Target Deliverables
1. `docs/analysis/inventory/addy/skills-source-driven-development-skill-md.md`
2. `docs/analysis/inventory/addy/skills-performance-optimization-skill-md.md`
3. `docs/analysis/inventory/addy/skills-browser-testing-with-devtools-skill-md.md`
4. `docs/analysis/inventory/addy/_units/inv-addy-19.md`
5. Updates to `docs/analysis/manifest/addy.md` (`skills/source-driven-development/SKILL.md`, `skills/performance-optimization/SKILL.md`, `skills/browser-testing-with-devtools/SKILL.md` rows marked `[x]`)
6. Updates to `docs/plan/STATE.md` (`inv-addy-19` status changed to `complete`, report linked, rows inventoried count incremented by 3)

## Mandatory Methodology Rules (R1-R6)
- **R1 — Full reads. Coverage is proven, not asserted.** Every assigned file read from first line to last.
- **R2 — Evidence, and scripts are run.** Every claim names `path:line`. Every script or documented command in scope is executed with its documented example; actual exit code and stdout recorded.
- **R3 — Verbatim in extraction.** Fields marked verbatim (`Purpose`, `Concepts named`) must quote exact text with `path:line`.
- **R4 — One vocabulary, from the glossary.** Prefix terms with package prefix (`addy:...`).
- **R5 — Defect is not dismissal.** Distinguish design intent from implementation defects. Categorize all defects (`missing-path`, `script-bug`, `doc-drift`, `internal-contradiction`, `cross-file-contradiction`, etc.).
- **R6 — Depth rule.** Named concepts get inventoried exhaustively.

## Checklist (§4)
- Check existence of all referenced files (`ls`).
- Run any inlined scripts, helper scripts, validator scripts, or eval fixtures associated with these skills.
- Check documentation drift across `CLAUDE.md`, `README.md`, `evals/`, `commands/`, `agents/`.
- Check context cost and composition.
