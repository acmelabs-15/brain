---
unit: cc-rjm-349
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-349

## Files assigned
- [x] sources/rjm/scripts/validation/check_worktree_recipes.py
- [x] sources/rjm/scripts/validation/check_zero_collection_tests.py
- [x] sources/rjm/scripts/validation/checks_changed_paths.py
- [x] sources/rjm/scripts/validation/checks_tooling.py
- [x] sources/rjm/scripts/validation/checks_workflow_targets.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-worktree-recipes-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-zero-collection-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-changed-paths-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-tooling-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-workflow-targets-py.md

## Outputs produced
- docs/analysis/concepts/rjm/reason-in-checkout.md (983 bytes)
- docs/analysis/concepts/rjm/extract-destination.md (1013 bytes)
- docs/analysis/concepts/rjm/scan-text.md (931 bytes)
- docs/analysis/concepts/rjm/is-scanned.md (968 bytes)
- docs/analysis/concepts/rjm/check-repository.md (1020 bytes)
- docs/analysis/concepts/rjm/validate-worktree-recipes.md (1047 bytes)
- docs/analysis/concepts/rjm/check-tmp-worktrees-py.md (957 bytes)
- docs/analysis/concepts/rjm/exemption-marker.md (958 bytes)
- docs/analysis/concepts/rjm/conditional-skip-marker.md (1004 bytes)
- docs/analysis/concepts/rjm/collectionerror.md (975 bytes)
- docs/analysis/concepts/rjm/collectionresult.md (971 bytes)
- docs/analysis/concepts/rjm/read-string-list-field.md (997 bytes)
- docs/analysis/concepts/rjm/parse-collection-report.md (1007 bytes)
- docs/analysis/concepts/rjm/read-pytest-config.md (965 bytes)
- docs/analysis/concepts/rjm/require-nonempty-strings.md (1042 bytes)
- docs/analysis/concepts/rjm/contains-marker.md (974 bytes)
- docs/analysis/concepts/rjm/declaration-kind.md (979 bytes)
- docs/analysis/concepts/rjm/declares-exemption.md (1032 bytes)
- docs/analysis/concepts/rjm/collect-files.md (1069 bytes)
- docs/analysis/concepts/rjm/write-collection-report-plugin.md (1076 bytes)
- docs/analysis/concepts/rjm/collection-environment.md (1101 bytes)
- docs/analysis/concepts/rjm/run-pytest-collect.md (1010 bytes)
- docs/analysis/concepts/rjm/read-collection-report.md (1009 bytes)
- docs/analysis/concepts/rjm/pytest-zero-collection.md (999 bytes)
- docs/analysis/concepts/rjm/pytest-zero-collection-conditional.md (1049 bytes)
- docs/analysis/concepts/rjm/git-paths-z.md (1069 bytes)
- docs/analysis/concepts/rjm/changed-paths-since-base.md (1174 bytes)
- docs/analysis/concepts/rjm/changedpathmissingerror.md (1127 bytes)
- docs/analysis/concepts/rjm/missing-path-message.md (1162 bytes)
- docs/analysis/concepts/rjm/filtered-targets.md (1067 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-349.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/reason-in-checkout.md docs/analysis/concepts/rjm/extract-destination.md docs/analysis/concepts/rjm/scan-text.md docs/analysis/concepts/rjm/is-scanned.md docs/analysis/concepts/rjm/check-repository.md docs/analysis/concepts/rjm/validate-worktree-recipes.md docs/analysis/concepts/rjm/check-tmp-worktrees-py.md docs/analysis/concepts/rjm/exemption-marker.md docs/analysis/concepts/rjm/conditional-skip-marker.md docs/analysis/concepts/rjm/collectionerror.md docs/analysis/concepts/rjm/collectionresult.md docs/analysis/concepts/rjm/read-string-list-field.md docs/analysis/concepts/rjm/parse-collection-report.md docs/analysis/concepts/rjm/read-pytest-config.md docs/analysis/concepts/rjm/require-nonempty-strings.md docs/analysis/concepts/rjm/contains-marker.md docs/analysis/concepts/rjm/declaration-kind.md docs/analysis/concepts/rjm/declares-exemption.md docs/analysis/concepts/rjm/collect-files.md docs/analysis/concepts/rjm/write-collection-report-plugin.md docs/analysis/concepts/rjm/collection-environment.md docs/analysis/concepts/rjm/run-pytest-collect.md docs/analysis/concepts/rjm/read-collection-report.md docs/analysis/concepts/rjm/pytest-zero-collection.md docs/analysis/concepts/rjm/pytest-zero-collection-conditional.md docs/analysis/concepts/rjm/git-paths-z.md docs/analysis/concepts/rjm/changed-paths-since-base.md docs/analysis/concepts/rjm/changedpathmissingerror.md docs/analysis/concepts/rjm/missing-path-message.md docs/analysis/concepts/rjm/filtered-targets.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-349 completes 30 concept cards spanning worktree recipe validation, zero-collection pytest guards, and git changed-path discovery for pre-PR target narrowing:
  1. Git worktree placement validation helpers and constants (`reason-in-checkout`, `extract-destination`, `scan-text`, `is-scanned`, `check-repository`, `validate-worktree-recipes`, `check-tmp-worktrees-py`) in `check_worktree_recipes.py`.
  2. Pytest zero-collection detection, error reporting, configuration parsing, and exemption marker infrastructure (`exemption-marker`, `conditional-skip-marker`, `collectionerror`, `collectionresult`, `read-string-list-field`, `parse-collection-report`, `read-pytest-config`, `require-nonempty-strings`, `contains-marker`, `declaration-kind`, `declares-exemption`, `collect-files`, `write-collection-report-plugin`, `collection-environment`, `run-pytest-collect`, `read-collection-report`, `pytest-zero-collection`, `pytest-zero-collection-conditional`) in `check_zero_collection_tests.py`.
  3. Git changed-path discovery, NUL-delimited path parsing, fail-closed missing target guards, and filtered target selection (`git-paths-z`, `changed-paths-since-base`, `changedpathmissingerror`, `missing-path-message`, `filtered-targets`) across `checks_changed_paths.py`, `checks_workflow_targets.py`, and `checks_tooling.py`.
- Concepts representing functions, exception classes, constants, file names, or marker tokens are classified as `kind: name-only` per D-023.
- All 35 occurrences recorded in `facts/cc-rjm-349.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: exit-code-mismatch`, `defects: orphan`, or `clean`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
