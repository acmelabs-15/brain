---
unit: cc-rjm-215
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-215

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/SKILL.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/working-with-legacy-code.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-working-with-legacy-code-md.md

## Outputs produced
- docs/analysis/concepts/rjm/sprout-method.md (1466 bytes)
- docs/analysis/concepts/rjm/sprout-class.md (1417 bytes)
- docs/analysis/concepts/rjm/wrap-method.md (1509 bytes)
- docs/analysis/concepts/rjm/wrap-class.md (1421 bytes)
- docs/analysis/concepts/rjm/dependency-breaking-technique.md (1518 bytes)
- docs/analysis/concepts/rjm/tests-before-edits.md (1011 bytes)
- docs/analysis/concepts/rjm/object-seam.md (1366 bytes)
- docs/analysis/concepts/rjm/link-or-import-seam.md (1391 bytes)
- docs/analysis/concepts/rjm/preprocessor-or-build-seam.md (1351 bytes)
- docs/analysis/concepts/rjm/sprout-method-and-sprout-class.md (1017 bytes)
- docs/analysis/concepts/rjm/wrap-method-and-wrap-class.md (995 bytes)
- docs/analysis/concepts/rjm/extract-interface.md (1385 bytes)
- docs/analysis/concepts/rjm/parameterize-constructor.md (1460 bytes)
- docs/analysis/concepts/rjm/introduce-instance-delegator.md (1484 bytes)
- docs/analysis/concepts/rjm/subclass-and-override.md (1386 bytes)
- docs/analysis/concepts/rjm/pull-up-dependency.md (1352 bytes)
- docs/analysis/concepts/rjm/never-delete-failing-tests-to-make-a-refactor-pass.md (1133 bytes)
- docs/analysis/concepts/rjm/sprout-site.md (1389 bytes)
- docs/analysis/concepts/rjm/enterprise-patterns-md.md (1048 bytes)
- docs/analysis/concepts/rjm/repositories-and-service-layers.md (1438 bytes)
- docs/analysis/concepts/rjm/architecture-review.md (1288 bytes)
- docs/analysis/concepts/rjm/bulkhead.md (1307 bytes)
- docs/analysis/concepts/rjm/unified-software-engineering.md (1270 bytes)
- docs/analysis/concepts/rjm/references-clean-architecture-md.md (1070 bytes)
- docs/analysis/concepts/rjm/references-philosophy-of-software-design-md.md (1104 bytes)
- docs/analysis/concepts/rjm/references-domain-driven-design-md.md (1064 bytes)
- docs/analysis/concepts/rjm/references-enterprise-patterns-md.md (1130 bytes)
- docs/analysis/concepts/rjm/references-refactoring-md.md (1066 bytes)
- docs/analysis/concepts/rjm/references-working-with-legacy-code-md.md (1133 bytes)
- docs/analysis/concepts/rjm/references-data-intensive-applications-md.md (1126 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-215.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/sprout-method.md docs/analysis/concepts/rjm/sprout-class.md docs/analysis/concepts/rjm/wrap-method.md docs/analysis/concepts/rjm/wrap-class.md docs/analysis/concepts/rjm/dependency-breaking-technique.md docs/analysis/concepts/rjm/tests-before-edits.md docs/analysis/concepts/rjm/object-seam.md docs/analysis/concepts/rjm/link-or-import-seam.md docs/analysis/concepts/rjm/preprocessor-or-build-seam.md docs/analysis/concepts/rjm/sprout-method-and-sprout-class.md docs/analysis/concepts/rjm/wrap-method-and-wrap-class.md docs/analysis/concepts/rjm/extract-interface.md docs/analysis/concepts/rjm/parameterize-constructor.md docs/analysis/concepts/rjm/introduce-instance-delegator.md docs/analysis/concepts/rjm/subclass-and-override.md docs/analysis/concepts/rjm/pull-up-dependency.md docs/analysis/concepts/rjm/never-delete-failing-tests-to-make-a-refactor-pass.md docs/analysis/concepts/rjm/sprout-site.md docs/analysis/concepts/rjm/enterprise-patterns-md.md docs/analysis/concepts/rjm/repositories-and-service-layers.md docs/analysis/concepts/rjm/architecture-review.md docs/analysis/concepts/rjm/bulkhead.md docs/analysis/concepts/rjm/unified-software-engineering.md docs/analysis/concepts/rjm/references-clean-architecture-md.md docs/analysis/concepts/rjm/references-philosophy-of-software-design-md.md docs/analysis/concepts/rjm/references-domain-driven-design-md.md docs/analysis/concepts/rjm/references-enterprise-patterns-md.md docs/analysis/concepts/rjm/references-refactoring-md.md docs/analysis/concepts/rjm/references-working-with-legacy-code-md.md docs/analysis/concepts/rjm/references-data-intensive-applications-md.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-215 completes 30 concept cards derived from the software-engineering-library and working-with-legacy-code reference materials:
  1. Legacy code refactoring techniques (`sprout-method`, `sprout-class`, `wrap-method`, `wrap-class`, `dependency-breaking-technique`, `extract-interface`, `parameterize-constructor`, `introduce-instance-delegator`, `subclass-and-override`, `pull-up-dependency`).
  2. Testing seams and architecture boundaries (`object-seam`, `link-or-import-seam`, `preprocessor-or-build-seam`, `sprout-site`, `repositories-and-service-layers`).
  3. Architecture and engineering rules/gates (`architecture-review`, `bulkhead`, `unified-software-engineering`).
  4. Section headings and file references classified as `kind: name-only` per D-023:
     - Section headings: `tests-before-edits`, `sprout-method-and-sprout-class`, `wrap-method-and-wrap-class`, `never-delete-failing-tests-to-make-a-refactor-pass`.
     - Reference file paths: `enterprise-patterns-md`, `references-clean-architecture-md`, `references-philosophy-of-software-design-md`, `references-domain-driven-design-md`, `references-enterprise-patterns-md`, `references-refactoring-md`, `references-working-with-legacy-code-md`, `references-data-intensive-applications-md`.
- All 30 occurrences recorded in `facts/cc-rjm-215.txt` are mapped in the respective Where used tables.
- Inventory card defects (`none` for both input inventory cards) were mapped to `Implementation status: clean` across all cards.
- All 30 cards pass byte-exact quotation checks via `bun scripts/synthesis/quote-check.ts` (31 PASS, 0 FAIL, 0 MISSING source across 30 cards).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 authored concept cards and 1 unit report.
