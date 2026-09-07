---
unit: cc-matt-37
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-37

## Files assigned
- [x] sources/matt/skills/misc/README.md
- [x] sources/matt/skills/misc/scaffold-exercises/SKILL.md
- [x] sources/matt/skills/misc/setup-pre-commit/SKILL.md
- [x] sources/matt/skills/productivity/teach/GLOSSARY-FORMAT.md
- [x] sources/matt/skills/productivity/teach/RESOURCES-FORMAT.md
- [x] docs/analysis/inventory/matt/skills-misc-readme-md.md
- [x] docs/analysis/inventory/matt/skills-misc-scaffold-exercises-skill-md.md
- [x] docs/analysis/inventory/matt/skills-misc-setup-pre-commit-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-glossary-format-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-resources-format-md.md

## Outputs produced
- docs/analysis/concepts/matt/plugin.md — 1129 bytes
- docs/analysis/concepts/matt/git-commands.md — 942 bytes
- docs/analysis/concepts/matt/test-files.md — 1178 bytes
- docs/analysis/concepts/matt/type-assertions.md — 1194 bytes
- docs/analysis/concepts/matt/scaffold-exercises.md — 1896 bytes
- docs/analysis/concepts/matt/exercise-directory-structures.md — 1351 bytes
- docs/analysis/concepts/matt/sections.md — 1371 bytes
- docs/analysis/concepts/matt/problems.md — 1327 bytes
- docs/analysis/concepts/matt/solutions.md — 1328 bytes
- docs/analysis/concepts/matt/explainers.md — 1834 bytes
- docs/analysis/concepts/matt/setup-pre-commit.md — 1978 bytes
- docs/analysis/concepts/matt/husky-pre-commit-hooks.md — 1118 bytes
- docs/analysis/concepts/matt/lint-staged.md — 1185 bytes
- docs/analysis/concepts/matt/prettier.md — 1246 bytes
- docs/analysis/concepts/matt/type-checking.md — 1128 bytes
- docs/analysis/concepts/matt/pnpm-ai-hero-cli-internal-lint.md — 1041 bytes
- docs/analysis/concepts/matt/git-commit.md — 953 bytes
- docs/analysis/concepts/matt/exercises.md — 1378 bytes
- docs/analysis/concepts/matt/dash-case.md — 1109 bytes
- docs/analysis/concepts/matt/exercise-variants.md — 1291 bytes
- docs/analysis/concepts/matt/problem.md — 1162 bytes
- docs/analysis/concepts/matt/explainer.md — 1174 bytes
- docs/analysis/concepts/matt/stubbing.md — 1177 bytes
- docs/analysis/concepts/matt/main-ts.md — 972 bytes
- docs/analysis/concepts/matt/mkdir-p.md — 920 bytes
- docs/analysis/concepts/matt/explainer-1.md — 987 bytes
- docs/analysis/concepts/matt/gitkeep.md — 868 bytes
- docs/analysis/concepts/matt/speaker-notes-md.md — 922 bytes
- docs/analysis/concepts/matt/pnpm-run-exercise.md — 950 bytes
- docs/analysis/concepts/matt/git-mv.md — 965 bytes
- docs/analysis/concepts/matt/_units/cc-matt-37.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/plugin.md docs/analysis/concepts/matt/git-commands.md docs/analysis/concepts/matt/test-files.md docs/analysis/concepts/matt/type-assertions.md docs/analysis/concepts/matt/scaffold-exercises.md docs/analysis/concepts/matt/exercise-directory-structures.md docs/analysis/concepts/matt/sections.md docs/analysis/concepts/matt/problems.md docs/analysis/concepts/matt/solutions.md docs/analysis/concepts/matt/explainers.md docs/analysis/concepts/matt/setup-pre-commit.md docs/analysis/concepts/matt/husky-pre-commit-hooks.md docs/analysis/concepts/matt/lint-staged.md docs/analysis/concepts/matt/prettier.md docs/analysis/concepts/matt/type-checking.md docs/analysis/concepts/matt/pnpm-ai-hero-cli-internal-lint.md docs/analysis/concepts/matt/git-commit.md docs/analysis/concepts/matt/exercises.md docs/analysis/concepts/matt/dash-case.md docs/analysis/concepts/matt/exercise-variants.md docs/analysis/concepts/matt/problem.md docs/analysis/concepts/matt/explainer.md docs/analysis/concepts/matt/stubbing.md docs/analysis/concepts/matt/main-ts.md docs/analysis/concepts/matt/mkdir-p.md docs/analysis/concepts/matt/explainer-1.md docs/analysis/concepts/matt/gitkeep.md docs/analysis/concepts/matt/speaker-notes-md.md docs/analysis/concepts/matt/pnpm-run-exercise.md docs/analysis/concepts/matt/git-mv.md — exit 0 (32 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The unit covers utility developer tooling in `skills/misc/` alongside educational format specifications in `skills/productivity/teach/`.
- In `skills/misc/`, `skills/misc/README.md` categorizes niche skills retained for specific workflows rather than general plugin exposure (`plugin`). Tooling skills include `scaffold-exercises` (rigid directory patterns and linter compliance for courses) and `setup-pre-commit` (automated detection of package managers and configuring Husky/lint-staged/Prettier/typecheck gates).
- Cross-cutting educational concepts (`explainers`, `exercises/`) bridge course scaffolding (`skills/misc/scaffold-exercises/SKILL.md`) with curriculum design formats (`skills/productivity/teach/GLOSSARY-FORMAT.md`, `RESOURCES-FORMAT.md`), enforcing vocabulary precision and grounded knowledge curation across both domains.
- Tool commands, shell built-ins, and specific file/directory names (`git commands`, `main.ts`, `mkdir -p`, `.gitkeep`, `speaker-notes.md`, `pnpm run exercise`, `git mv`, `explainer.1/`, `pnpm ai-hero-cli internal lint`, `git commit`) are categorized with `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~29,700 bytes (~7,000 tokens) across 5 source files and 5 citing inventory cards.
Approximate output written: ~42,500 bytes (~10,000 tokens) across 30 concept cards and this unit report.
