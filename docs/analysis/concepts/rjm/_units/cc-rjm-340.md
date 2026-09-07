---
unit: cc-rjm-340
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-340

## Files assigned
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] sources/rjm/scripts/validation/check_skill_contract_tests.py
- [x] sources/rjm/scripts/validation/check_skill_md_drift.py
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_tmp_worktrees.py
- [x] sources/rjm/scripts/validation/check_vendor_portability.py
- [x] sources/rjm/scripts/validation/portability_baseline.py
- [x] sources/rjm/scripts/validation/portability_floor.py
- [x] sources/rjm/scripts/validation/portability_git.py
- [x] sources/rjm/scripts/validation/tracked_paths.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-shipped-skill-routes-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-tmp-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-contract-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-vendor-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-floor-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-git-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-tracked-paths-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md

## Outputs produced
- docs/analysis/concepts/rjm/unwrap.md (875 bytes)
- docs/analysis/concepts/rjm/checkerror.md (903 bytes)
- docs/analysis/concepts/rjm/skill-names.md (887 bytes)
- docs/analysis/concepts/rjm/stat-mode.md (914 bytes)
- docs/analysis/concepts/rjm/present.md (883 bytes)
- docs/analysis/concepts/rjm/is-directory.md (975 bytes)
- docs/analysis/concepts/rjm/discover-roots.md (888 bytes)
- docs/analysis/concepts/rjm/cell-text.md (880 bytes)
- docs/analysis/concepts/rjm/route-names.md (905 bytes)
- docs/analysis/concepts/rjm/scan-root.md (912 bytes)
- docs/analysis/concepts/rjm/test-check-skill-md-exec-portability-py.md (971 bytes)
- docs/analysis/concepts/rjm/portability-baseline.md (1247 bytes)
- docs/analysis/concepts/rjm/portability-floor.md (1383 bytes)
- docs/analysis/concepts/rjm/refuse-oversized-baseline.md (1185 bytes)
- docs/analysis/concepts/rjm/refuse-symlinked-baseline.md (1209 bytes)
- docs/analysis/concepts/rjm/refuse-undiffable-baseline.md (1381 bytes)
- docs/analysis/concepts/rjm/test-root.md (856 bytes)
- docs/analysis/concepts/rjm/exit-code.md (870 bytes)
- docs/analysis/concepts/rjm/script-call.md (885 bytes)
- docs/analysis/concepts/rjm/documented-contracts.md (895 bytes)
- docs/analysis/concepts/rjm/test-corpus.md (868 bytes)
- docs/analysis/concepts/rjm/path-exists-in-repo.md (1009 bytes)
- docs/analysis/concepts/rjm/consumer-workspace-paths.md (947 bytes)
- docs/analysis/concepts/rjm/generated-artifacts.md (908 bytes)
- docs/analysis/concepts/rjm/marker-pattern.md (1015 bytes)
- docs/analysis/concepts/rjm/html-comment-pattern.md (914 bytes)
- docs/analysis/concepts/rjm/strip-html-comments.md (874 bytes)
- docs/analysis/concepts/rjm/path-char.md (830 bytes)
- docs/analysis/concepts/rjm/simple-anchor.md (865 bytes)
- docs/analysis/concepts/rjm/known-subdirs.md (872 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-340.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/unwrap.md docs/analysis/concepts/rjm/checkerror.md docs/analysis/concepts/rjm/skill-names.md docs/analysis/concepts/rjm/stat-mode.md docs/analysis/concepts/rjm/present.md docs/analysis/concepts/rjm/is-directory.md docs/analysis/concepts/rjm/discover-roots.md docs/analysis/concepts/rjm/cell-text.md docs/analysis/concepts/rjm/route-names.md docs/analysis/concepts/rjm/scan-root.md docs/analysis/concepts/rjm/test-check-skill-md-exec-portability-py.md docs/analysis/concepts/rjm/portability-baseline.md docs/analysis/concepts/rjm/portability-floor.md docs/analysis/concepts/rjm/refuse-oversized-baseline.md docs/analysis/concepts/rjm/refuse-symlinked-baseline.md docs/analysis/concepts/rjm/refuse-undiffable-baseline.md docs/analysis/concepts/rjm/test-root.md docs/analysis/concepts/rjm/exit-code.md docs/analysis/concepts/rjm/script-call.md docs/analysis/concepts/rjm/documented-contracts.md docs/analysis/concepts/rjm/test-corpus.md docs/analysis/concepts/rjm/path-exists-in-repo.md docs/analysis/concepts/rjm/consumer-workspace-paths.md docs/analysis/concepts/rjm/generated-artifacts.md docs/analysis/concepts/rjm/marker-pattern.md docs/analysis/concepts/rjm/html-comment-pattern.md docs/analysis/concepts/rjm/strip-html-comments.md docs/analysis/concepts/rjm/path-char.md docs/analysis/concepts/rjm/simple-anchor.md docs/analysis/concepts/rjm/known-subdirs.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-340 authors 30 concept cards (all kind: name-only per D-023) covering validation utilities, constants, regexes, and baseline guards across scripts/validation/:
  1. Shipped skill route validation routines and helpers (`_unwrap`, `CheckError`, `skill_names`, `_stat_mode`, `_present`, `_is_directory`, `discover_roots`, `_cell_text`, `route_names`, `scan_root`) from `scripts/validation/check_shipped_skill_routes.py` and `scripts/validation/check_tmp_worktrees.py`.
  2. Contract testing definitions, constants, and regexes (`test_check_skill_md_exec_portability.py`, `TEST_ROOT`, `EXIT_CODE`, `SCRIPT_CALL`, `documented_contracts`, `test_corpus`) from `scripts/validation/check_skill_contract_tests.py`.
  3. Portability baseline architecture, baseline floor evidence, and integrity guards (`portability_baseline`, `portability_floor`, `refuse_oversized_baseline`, `refuse_symlinked_baseline`, `refuse_undiffable_baseline`) across `scripts/validation/portability_baseline.py`, `scripts/validation/portability_floor.py`, `scripts/validation/portability_git.py`, `scripts/validation/check_vendor_portability.py`, and `scripts/validation/check_skill_contract_tests.py`.
  4. Path tracking and markdown drift extraction constants and helpers (`path_exists_in_repo`, `_CONSUMER_WORKSPACE_PATHS`, `_GENERATED_ARTIFACTS`, `_MARKER_PATTERN`, `_HTML_COMMENT_PATTERN`, `_strip_html_comments`, `_PATH_CHAR`, `_SIMPLE_ANCHOR`, `_KNOWN_SUBDIRS`) across `scripts/validation/tracked_paths.py`, `scripts/validation/check_skill_md_drift.py`, and `scripts/validation/check_skill_md_exec_portability.py`.
- All 45 occurrences from `facts/cc-rjm-340.txt` are represented in the Where used tables.
- Defect annotations from citing inventory cards were systematically populated in `Implementation status`:
  - `clean` for cards implemented in clean files (`check_shipped_skill_routes.py`, `check_tmp_worktrees.py`, `portability_baseline.py`, `portability_floor.py`, `tracked_paths.py`).
  - `defects: orphan` for items in `check_skill_contract_tests.py`.
  - `defects: doc-drift` for items in `check_skill_md_drift.py`.
  - `defects: doc-drift, other` for `_MARKER_PATTERN` (implemented across `check_skill_md_drift.py` and `check_skill_md_exec_portability.py`).
  - `out-of-scope` for `test_check_skill_md_exec_portability.py` (test suite under tests/validation/ outside manifest reachability).
- All 30 concept cards pass `quote-check.ts` with 0 failures (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
