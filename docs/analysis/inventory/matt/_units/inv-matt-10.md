---
unit: inv-matt-10
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-10

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/ask-matt.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-ask-matt-md.md` (9836 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-10 inventories the single external documentation page `sources/matt-external/ask-matt.md` (355,633 bytes, 71 lines) corresponding to manifest row `external/ask-matt.md`.
- Key findings and cross-unit relationships:
  - `external/ask-matt.md` is an HTML snapshot of `https://aihero.dev/skills-ask-matt`, which serves as the public documentation and navigation guide for the `ask-matt` skill (`sources/matt/skills/engineering/ask-matt/SKILL.md`).
  - Unlike repository internal documentation, this page provides an overarching structural taxonomy for the entire Matt skills ecosystem, organizing skills into:
    1. The main flow: `grill-with-docs` → prototype detour (via `handoff`) → `to-spec` / `to-tickets` → `implement` (driving `tdd` and `code-review`).
    2. On-ramps: `triage` (for incoming external bugs/requests), `diagnosing-bugs` (for tricky bugs), and `wayfinder` (for huge, foggy multi-session greenfield projects).
    3. Standalones: `prototype`, `to-questionnaire`, `resolving-merge-conflicts`, `grill-me`, `grilling`, `research`, `wizard`, `wait-what`, `teach`.
    4. Vocabulary layer: `domain-modeling` (domain concepts, ADRs, `CONTEXT.md`) and `codebase-design` (deep-module design concepts, seams, interfaces).
  - The page formalizes the "phase boundary" decision tree across five options (`Continue`, `/clear`, `handoff`, `Subagent`, `/compact`), ordering them by context cost and precision rather than defaulting immediately to `/compact`.
  - The page is cited by 12 other documentation files in `sources/matt/docs/` as the canonical router node to consult when unsure of which flow fits a situation.
  - Defect and drift notes:
    - Router lag is explicitly documented in the page prose: `/grilling` and `/resolving-merge-conflicts` were shipped well before being added to `/ask-matt`.
    - 13 of the 22 skills in the plugin carry `disable-model-invocation: true`, causing Claude Code harness to omit them from the injected context skill list and leading agents running `/ask-matt` to falsely claim that the skills are uninstalled.
    - Historical lineage: documents renames (`writing-great-skills` → `writing-for-agents`, `to-prd` → `to-spec`, `pathfinder` → `wayfinder`) and retired skills (`ubiquitous-language`, `design-an-interface`, `qa`, `request-refactor-plan`).
    - The page is acknowledged as a secondary source: where `ask-matt` and a `SKILL.md` disagree, the `SKILL.md` is declared authoritative.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~88,900 tokens (355,633 bytes across 1 file); approximate tokens of output written: ~2,500 tokens (9,836 bytes in inventory card).
