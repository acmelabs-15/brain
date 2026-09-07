---
unit: cc-rjm-316
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-316

## Files assigned
- [x] sources/rjm/scripts/test_selection/__init__.py
- [x] sources/rjm/scripts/test_selection/import_graph.py
- [x] sources/rjm/scripts/test_selection/runtime_read_patterns.txt
- [x] sources/rjm/scripts/test_selection/select_tests.py
- [x] sources/rjm/scripts/testing/mutation_harness.py
- [x] sources/rjm/scripts/traceability/show_traceability_graph.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_push_lock_before_commit.py
- [x] sources/rjm/scripts/validation/check_skill_memory_references.py
- [x] sources/rjm/scripts/validation/check_zero_collection_tests.py
- [x] docs/analysis/inventory/rjm/scripts-test-selection---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-test-selection-import-graph-py.md
- [x] docs/analysis/inventory/rjm/scripts-test-selection-runtime-read-patterns-txt.md
- [x] docs/analysis/inventory/rjm/scripts-test-selection-select-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-testing-mutation-harness-py.md
- [x] docs/analysis/inventory/rjm/scripts-traceability-show-traceability-graph-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-push-lock-before-commit-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-memory-references-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-zero-collection-tests-py.md

## Outputs produced
- docs/analysis/concepts/rjm/import-graph-test-selection.md (1367 bytes)
- docs/analysis/concepts/rjm/cache-version.md (915 bytes)
- docs/analysis/concepts/rjm/importgraphdata.md (947 bytes)
- docs/analysis/concepts/rjm/wildcard-dependents.md (968 bytes)
- docs/analysis/concepts/rjm/find-repo-root.md (1151 bytes)
- docs/analysis/concepts/rjm/python-files.md (1168 bytes)
- docs/analysis/concepts/rjm/build-graph-data.md (997 bytes)
- docs/analysis/concepts/rjm/build-graph.md (1311 bytes)
- docs/analysis/concepts/rjm/is-cache-fresh.md (1019 bytes)
- docs/analysis/concepts/rjm/load-or-build-data.md (969 bytes)
- docs/analysis/concepts/rjm/load-or-build.md (948 bytes)
- docs/analysis/concepts/rjm/reverse-graph.md (974 bytes)
- docs/analysis/concepts/rjm/affected-closure.md (966 bytes)
- docs/analysis/concepts/rjm/claude-rules.md (958 bytes)
- docs/analysis/concepts/rjm/github-instructions.md (1008 bytes)
- docs/analysis/concepts/rjm/src-copilot-cli-instructions.md (1051 bytes)
- docs/analysis/concepts/rjm/conftest-py.md (1067 bytes)
- docs/analysis/concepts/rjm/tests-conftest-py.md (928 bytes)
- docs/analysis/concepts/rjm/config-wt-toml.md (921 bytes)
- docs/analysis/concepts/rjm/scripts-ci-ruff-count-baseline-txt.md (1005 bytes)
- docs/analysis/concepts/rjm/scripts-ci-subprocess-encoding-count-baseline-txt.md (1080 bytes)
- docs/analysis/concepts/rjm/agents-memory-episodes.md (975 bytes)
- docs/analysis/concepts/rjm/full-suite.md (912 bytes)
- docs/analysis/concepts/rjm/selection.md (904 bytes)
- docs/analysis/concepts/rjm/load-runtime-read-patterns.md (1014 bytes)
- docs/analysis/concepts/rjm/has-dynamic-import.md (990 bytes)
- docs/analysis/concepts/rjm/select.md (902 bytes)
- docs/analysis/concepts/rjm/changed-from-git.md (1008 bytes)
- docs/analysis/concepts/rjm/caught.md (1264 bytes)
- docs/analysis/concepts/rjm/missed.md (1259 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-316.md (5046 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md (executed on all 30 cards, exit code 0, 30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to cc-rjm-316 authored and verified.
- The concept unit covers test selection architecture (`scripts/test_selection/`), runtime dependency patterns (`runtime_read_patterns.txt`), test selector logic (`select_tests.py`), mutation harness verdicts (`CAUGHT`, `MISSED` in `mutation_harness.py`), traceability graph building, and validation script helpers.
- 27 concepts were identifiers, file paths, or glob patterns classified as `kind: name-only` per D-023.
- 1 concept (`import-graph-test-selection`) is an active testing optimization technique (`kind: technique`, `package_phase: rjm:test`).
- 2 concepts (`CAUGHT`, `MISSED`) are mutation evaluation verdicts in testing (`kind: gate`, `package_phase: rjm:test`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 10 source files and 10 inventory cards; approximate tokens of output written: ~8,500 tokens across 30 concept cards and this unit report.
