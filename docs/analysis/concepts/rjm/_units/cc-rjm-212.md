---
unit: cc-rjm-212
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-212

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/references/enterprise-patterns.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/philosophy-of-software-design.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/refactoring.md
- [x] sources/rjm/.claude/skills/taste-lints/SKILL.md
- [x] sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py
- [x] sources/rjm/scripts/validation/check_subprocess_encoding.py
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-enterprise-patterns-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-philosophy-of-software-design-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-refactoring-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-taste-lints-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-taste-lints-scripts-taste-lints-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-subprocess-encoding-py.md

## Outputs produced
- docs/analysis/concepts/rjm/smart-skill.md (1410 bytes)
- docs/analysis/concepts/rjm/repository-as-dao.md (1261 bytes)
- docs/analysis/concepts/rjm/ambient-transactions.md (1295 bytes)
- docs/analysis/concepts/rjm/a-philosophy-of-software-design.md (1421 bytes)
- docs/analysis/concepts/rjm/deep-vs-shallow-module-test.md (1739 bytes)
- docs/analysis/concepts/rjm/complexity.md (1869 bytes)
- docs/analysis/concepts/rjm/module.md (1306 bytes)
- docs/analysis/concepts/rjm/interface.md (1353 bytes)
- docs/analysis/concepts/rjm/deep-module.md (1270 bytes)
- docs/analysis/concepts/rjm/shallow-module.md (1319 bytes)
- docs/analysis/concepts/rjm/information-hiding.md (1493 bytes)
- docs/analysis/concepts/rjm/cognitive-load.md (1260 bytes)
- docs/analysis/concepts/rjm/strategic-programming.md (1582 bytes)
- docs/analysis/concepts/rjm/tactical.md (1449 bytes)
- docs/analysis/concepts/rjm/change-amplification.md (1248 bytes)
- docs/analysis/concepts/rjm/unknown-unknowns.md (1386 bytes)
- docs/analysis/concepts/rjm/temporal-decomposition.md (1453 bytes)
- docs/analysis/concepts/rjm/pass-through-methods.md (1487 bytes)
- docs/analysis/concepts/rjm/different-layer-different-abstraction.md (1590 bytes)
- docs/analysis/concepts/rjm/pull-complexity-downward.md (1591 bytes)
- docs/analysis/concepts/rjm/define-errors-out-of-existence.md (1635 bytes)
- docs/analysis/concepts/rjm/design-it-twice.md (1581 bytes)
- docs/analysis/concepts/rjm/shallow-class.md (1283 bytes)
- docs/analysis/concepts/rjm/conjoined-methods.md (1287 bytes)
- docs/analysis/concepts/rjm/pass-through-method.md (1394 bytes)
- docs/analysis/concepts/rjm/configuration-soup.md (1419 bytes)
- docs/analysis/concepts/rjm/comment-as-crutch.md (1410 bytes)
- docs/analysis/concepts/rjm/behavior-change.md (1327 bytes)
- docs/analysis/concepts/rjm/code-smell.md (1228 bytes)
- docs/analysis/concepts/rjm/inline-variable.md (1465 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-212.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/smart-skill.md docs/analysis/concepts/rjm/repository-as-dao.md docs/analysis/concepts/rjm/ambient-transactions.md docs/analysis/concepts/rjm/a-philosophy-of-software-design.md docs/analysis/concepts/rjm/deep-vs-shallow-module-test.md docs/analysis/concepts/rjm/complexity.md docs/analysis/concepts/rjm/module.md docs/analysis/concepts/rjm/interface.md docs/analysis/concepts/rjm/deep-module.md docs/analysis/concepts/rjm/shallow-module.md docs/analysis/concepts/rjm/information-hiding.md docs/analysis/concepts/rjm/cognitive-load.md docs/analysis/concepts/rjm/strategic-programming.md docs/analysis/concepts/rjm/tactical.md docs/analysis/concepts/rjm/change-amplification.md docs/analysis/concepts/rjm/unknown-unknowns.md docs/analysis/concepts/rjm/temporal-decomposition.md docs/analysis/concepts/rjm/pass-through-methods.md docs/analysis/concepts/rjm/different-layer-different-abstraction.md docs/analysis/concepts/rjm/pull-complexity-downward.md docs/analysis/concepts/rjm/define-errors-out-of-existence.md docs/analysis/concepts/rjm/design-it-twice.md docs/analysis/concepts/rjm/shallow-class.md docs/analysis/concepts/rjm/conjoined-methods.md docs/analysis/concepts/rjm/pass-through-method.md docs/analysis/concepts/rjm/configuration-soup.md docs/analysis/concepts/rjm/comment-as-crutch.md docs/analysis/concepts/rjm/behavior-change.md docs/analysis/concepts/rjm/code-smell.md docs/analysis/concepts/rjm/inline-variable.md` (exit code 0, 37 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-212 completes 30 concept cards across core software engineering library references and taste lints:
  1. Enterprise patterns and anti-patterns (`smart-skill`, `repository-as-dao`, `ambient-transactions`) from `enterprise-patterns.md`.
  2. Philosophy of software design heuristics (`a-philosophy-of-software-design`, `deep-vs-shallow-module-test`, `complexity`, `module`, `interface`, `deep-module`, `shallow-module`, `information-hiding`, `cognitive-load`, `strategic-programming`, `tactical`, `change-amplification`, `unknown-unknowns`, `temporal-decomposition`, `pass-through-methods`, `different-layer-different-abstraction`, `pull-complexity-downward`, `define-errors-out-of-existence`, `design-it-twice`, `shallow-class`, `conjoined-methods`, `pass-through-method`, `configuration-soup`, `comment-as-crutch`) from `philosophy-of-software-design.md`.
  3. Fowler refactoring discipline (`behavior-change`, `code-smell`, `inline-variable`) from `refactoring.md`.
  4. Taste invariant linter integration for `complexity` spanning `philosophy-of-software-design.md`, `taste_lints.py`, `SKILL.md`, and `check_subprocess_encoding.py`.
- All 33 occurrences cited in `facts/cc-rjm-212.txt` are faithfully represented in the respective Where used tables.
- Defect statuses from citing inventory entries have been correctly mapped to `Implementation status` (`clean`, `defects: internal-contradiction`, and `defects: doc-drift, other`).
- Every concept card passes byte-exact verification with `bun scripts/synthesis/quote-check.ts` (exit code 0, 37 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
