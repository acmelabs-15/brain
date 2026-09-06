---
unit: cc-addy-31
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-31

## Files assigned
- [x] sources/addy/scripts/validate-artifact-paths.js
- [x] sources/addy/scripts/validate-commands-test.js
- [x] sources/addy/scripts/validate-commands.js
- [x] sources/addy/scripts/validate-reference-links-test.js
- [x] sources/addy/scripts/validate-reference-links.js
- [x] sources/addy/scripts/validate-skills.js
- [x] sources/addy/skills/constraint-driven-development/SKILL.md
- [x] sources/addy/skills/context-engineering/SKILL.md
- [x] sources/addy/skills/documentation-and-adrs/SKILL.md
- [x] sources/addy/skills/performance-optimization/SKILL.md
- [x] docs/analysis/inventory/addy/scripts-validate-artifact-paths-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-commands-test-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-commands-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-reference-links-test-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-reference-links-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-skills-js.md
- [x] docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md
- [x] docs/analysis/inventory/addy/skills-context-engineering-skill-md.md
- [x] docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md
- [x] docs/analysis/inventory/addy/skills-performance-optimization-skill-md.md

## Outputs produced
- docs/analysis/concepts/addy/guarded-files.md (884 bytes)
- docs/analysis/concepts/addy/artifact-re.md (875 bytes)
- docs/analysis/concepts/addy/findviolations.md (866 bytes)
- docs/analysis/concepts/addy/main.md (922 bytes)
- docs/analysis/concepts/addy/command-twins.md (1346 bytes)
- docs/analysis/concepts/addy/maps-plan-to-planning.md (885 bytes)
- docs/analysis/concepts/addy/missing-a-toml-twin.md (913 bytes)
- docs/analysis/concepts/addy/no-claude-twin.md (891 bytes)
- docs/analysis/concepts/addy/reports-all-descriptions-when-command-twins-drift.md (992 bytes)
- docs/analysis/concepts/addy/malformed-description.md (910 bytes)
- docs/analysis/concepts/addy/parses-escaped-quotes-in-double-quoted-toml-descriptions.md (994 bytes)
- docs/analysis/concepts/addy/writeclaudecommand.md (879 bytes)
- docs/analysis/concepts/addy/writetomlcommand.md (884 bytes)
- docs/analysis/concepts/addy/writematchingcommands.md (938 bytes)
- docs/analysis/concepts/addy/slash-command-directories.md (1322 bytes)
- docs/analysis/concepts/addy/dirs.md (792 bytes)
- docs/analysis/concepts/addy/name-map.md (809 bytes)
- docs/analysis/concepts/addy/name-map-reverse.md (857 bytes)
- docs/analysis/concepts/addy/descriptionfrommd.md (845 bytes)
- docs/analysis/concepts/addy/descriptionfromtoml.md (840 bytes)
- docs/analysis/concepts/addy/loadcommands.md (857 bytes)
- docs/analysis/concepts/addy/parity-check.md (1212 bytes)
- docs/analysis/concepts/addy/description-sync-check.md (1248 bytes)
- docs/analysis/concepts/addy/references-definition-of-done-md.md (933 bytes)
- docs/analysis/concepts/addy/claude-md.md (1930 bytes)
- docs/analysis/concepts/addy/perf-md.md (1813 bytes)
- docs/analysis/concepts/addy/skills-incremental-implementation-skill-md.md (970 bytes)
- docs/analysis/concepts/addy/validate-artifact-paths-js.md (903 bytes)
- docs/analysis/concepts/addy/docs-ideas-idea-name-md.md (850 bytes)
- docs/analysis/concepts/addy/scripts-lib-skill-lint-js.md (886 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-31.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/<slug>.md (exit 0, 30 PASS 0 FAIL)
- bun scripts/synthesis/concept-index.ts (exit 0)
- bun scripts/synthesis/coverage.ts (exit 0 on addy package)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Many concepts assigned to this unit represent script variables, internal functions, regexes, test suite scenarios, or specific file paths (`GUARDED_FILES`, `ARTIFACT_RE`, `findViolations`, `main`, `maps plan to planning`, `missing a TOML twin`, `no Claude twin`, `reports all descriptions when command twins drift`, `malformed description`, `parses escaped quotes in double-quoted TOML descriptions`, `writeClaudeCommand`, `writeTomlCommand`, `writeMatchingCommands`, `DIRS`, `NAME_MAP`, `NAME_MAP_REVERSE`, `descriptionFromMd`, `descriptionFromToml`, `loadCommands`, `references/definition-of-done.md`, `skills/incremental-implementation/SKILL.md`, `validate-artifact-paths.js`, `docs/ideas/[idea-name].md`, `scripts/lib/skill-lint.js`). These were classified with `kind: name-only`, `(used, not defined)` definitions, exhaustive occurrence rows, and explanatory design notes per METHOD.md R6, D-023, and prompt instructions.
- Cross-platform parity architecture is captured across several concepts: `command twins`, `slash-command directories`, `Parity check`, and `Description sync check`, which enforce behavioral and descriptive symmetry between Claude Code, Gemini CLI, and Antigravity CLI.
- Multi-occurrence artifacts `CLAUDE.md` (5 occurrences) and `PERF.md` (3 occurrences) capture persistent cross-phase rules file conventions and the optimization ledger pattern respectively.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~24,500 tokens (~100 KB across 10 source files and 10 inventory cards).
Approximate tokens of output written: ~7,600 tokens (30 concept cards: 30,246 bytes; 1 unit report).
