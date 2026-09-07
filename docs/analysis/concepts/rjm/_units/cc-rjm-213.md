---
unit: cc-rjm-213
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-213

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/SKILL.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/refactoring.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/release-it.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/working-with-legacy-code.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-refactoring-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-release-it-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-working-with-legacy-code-md.md

## Outputs produced
- docs/analysis/concepts/rjm/move-method.md (1485 bytes)
- docs/analysis/concepts/rjm/characterization-test.md (2076 bytes)
- docs/analysis/concepts/rjm/replace-conditional-with-polymorphism.md (1560 bytes)
- docs/analysis/concepts/rjm/preparatory-refactoring.md (1568 bytes)
- docs/analysis/concepts/rjm/comprehension-refactoring.md (1557 bytes)
- docs/analysis/concepts/rjm/litter-pickup.md (1570 bytes)
- docs/analysis/concepts/rjm/planned-refactoring.md (1540 bytes)
- docs/analysis/concepts/rjm/long-function.md (1559 bytes)
- docs/analysis/concepts/rjm/long-parameter-list.md (1570 bytes)
- docs/analysis/concepts/rjm/introduce-parameter-object.md (1514 bytes)
- docs/analysis/concepts/rjm/preserve-whole-object.md (1561 bytes)
- docs/analysis/concepts/rjm/large-class.md (1528 bytes)
- docs/analysis/concepts/rjm/duplicated-code.md (1633 bytes)
- docs/analysis/concepts/rjm/pull-up-method.md (1420 bytes)
- docs/analysis/concepts/rjm/form-template-method.md (1617 bytes)
- docs/analysis/concepts/rjm/divergent-change.md (1534 bytes)
- docs/analysis/concepts/rjm/shotgun-surgery.md (1599 bytes)
- docs/analysis/concepts/rjm/data-clumps.md (1570 bytes)
- docs/analysis/concepts/rjm/primitive-obsession.md (1623 bytes)
- docs/analysis/concepts/rjm/replace-primitive-with-object.md (1596 bytes)
- docs/analysis/concepts/rjm/switch-statements.md (1548 bytes)
- docs/analysis/concepts/rjm/repeated-conditionals.md (1536 bytes)
- docs/analysis/concepts/rjm/mysterious-name.md (1497 bytes)
- docs/analysis/concepts/rjm/rename.md (1419 bytes)
- docs/analysis/concepts/rjm/comments.md (1565 bytes)
- docs/analysis/concepts/rjm/speculative-generality.md (1561 bytes)
- docs/analysis/concepts/rjm/temporary-field.md (1655 bytes)
- docs/analysis/concepts/rjm/message-chains.md (1582 bytes)
- docs/analysis/concepts/rjm/hide-delegate.md (1492 bytes)
- docs/analysis/concepts/rjm/stability-pattern.md (1640 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-213.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/move-method.md docs/analysis/concepts/rjm/characterization-test.md docs/analysis/concepts/rjm/replace-conditional-with-polymorphism.md docs/analysis/concepts/rjm/preparatory-refactoring.md docs/analysis/concepts/rjm/comprehension-refactoring.md docs/analysis/concepts/rjm/litter-pickup.md docs/analysis/concepts/rjm/planned-refactoring.md docs/analysis/concepts/rjm/long-function.md docs/analysis/concepts/rjm/long-parameter-list.md docs/analysis/concepts/rjm/introduce-parameter-object.md docs/analysis/concepts/rjm/preserve-whole-object.md docs/analysis/concepts/rjm/large-class.md docs/analysis/concepts/rjm/duplicated-code.md docs/analysis/concepts/rjm/pull-up-method.md docs/analysis/concepts/rjm/form-template-method.md docs/analysis/concepts/rjm/divergent-change.md docs/analysis/concepts/rjm/shotgun-surgery.md docs/analysis/concepts/rjm/data-clumps.md docs/analysis/concepts/rjm/primitive-obsession.md docs/analysis/concepts/rjm/replace-primitive-with-object.md docs/analysis/concepts/rjm/switch-statements.md docs/analysis/concepts/rjm/repeated-conditionals.md docs/analysis/concepts/rjm/mysterious-name.md docs/analysis/concepts/rjm/rename.md docs/analysis/concepts/rjm/comments.md docs/analysis/concepts/rjm/speculative-generality.md docs/analysis/concepts/rjm/temporary-field.md docs/analysis/concepts/rjm/message-chains.md docs/analysis/concepts/rjm/hide-delegate.md docs/analysis/concepts/rjm/stability-pattern.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-213 authors 30 concept cards covering refactoring techniques, refactoring triggers, code smells, legacy code testing, and production resilience patterns:
  1. Refactoring transformations and techniques (`move-method`, `replace-conditional-with-polymorphism`, `introduce-parameter-object`, `preserve-whole-object`, `pull-up-method`, `form-template-method`, `replace-primitive-with-object`, `rename`, `hide-delegate`).
  2. Refactoring triggers and categories (`preparatory-refactoring`, `comprehension-refactoring`, `litter-pickup`, `planned-refactoring`).
  3. Fowler code smell patterns (`long-function`, `long-parameter-list`, `large-class`, `duplicated-code`, `divergent-change`, `shotgun-surgery`, `data-clumps`, `primitive-obsession`, `switch-statements`, `repeated-conditionals`, `mysterious-name`, `comments`, `speculative-generality`, `temporary-field`, `message-chains`).
  4. Testing and resilience safety concepts (`characterization-test` across refactoring, legacy code, and skill router; `stability-pattern` from Release It!).
- All 32 occurrences listed in `facts/cc-rjm-213.txt` are faithfully represented in the respective Where used tables.
- Defect statuses from citing inventory cards were systematically applied to `Implementation status` (`defects: internal-contradiction` for refactoring.md concepts, and `defects: missing-path` for stability-pattern).
- All 30 cards pass `bun scripts/synthesis/quote-check.ts` with zero FAILs and zero missing sources.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~13,000 tokens across 4 source files and 4 citing inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
