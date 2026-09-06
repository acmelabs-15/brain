---
unit: inv-rjm-263
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-263

## Files assigned
- [x] sources/rjm/scripts/test_selection/import_graph.py
- [x] sources/rjm/scripts/test_selection/runtime_read_patterns.txt
- [x] sources/rjm/scripts/test_selection/select_tests.py
- [x] sources/rjm/scripts/testing/mutation_harness.py
- [x] sources/rjm/scripts/testing/mutation_workspace_git.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-test-selection-import-graph-py.md (6265 bytes)
- docs/analysis/inventory/rjm/scripts-test-selection-runtime-read-patterns-txt.md (4391 bytes)
- docs/analysis/inventory/rjm/scripts-test-selection-select-tests-py.md (6942 bytes)
- docs/analysis/inventory/rjm/scripts-testing-mutation-harness-py.md (8014 bytes)
- docs/analysis/inventory/rjm/scripts-testing-mutation-workspace-git-py.md (6919 bytes)

## Scripts executed
- scripts/test_selection/import_graph.py: `python3 scripts/test_selection/import_graph.py` (exit code: 0)
- scripts/test_selection/import_graph.py: `python3 -c "from scripts.test_selection import import_graph; root = import_graph.find_repo_root(); data = import_graph.load_or_build_data(root); print('nodes:', len(data.graph))"` (exit code: 0)
- scripts/test_selection/runtime_read_patterns.txt: `bash scripts/test_selection/runtime_read_patterns.txt` (exit code: 126)
- scripts/test_selection/runtime_read_patterns.txt: `python3 -c "from scripts.test_selection.select_tests import load_runtime_read_patterns; print(len(load_runtime_read_patterns()))"` (exit code: 0)
- scripts/test_selection/select_tests.py: `python3 scripts/test_selection/select_tests.py scripts/test_selection/import_graph.py` (exit code: 0)
- scripts/test_selection/select_tests.py: `python3 scripts/test_selection/select_tests.py README.md` (exit code: 0)
- scripts/test_selection/select_tests.py: `python3 scripts/test_selection/select_tests.py --format json README.md` (exit code: 0)
- scripts/testing/mutation_harness.py: `python3 scripts/testing/mutation_harness.py --help` (exit code: 0)
- scripts/testing/mutation_harness.py: `python3 scripts/testing/mutation_harness.py .pytest_tmp/harness_verify_tmp/battery_caught.json` (exit code: 0)
- scripts/testing/mutation_harness.py: `python3 scripts/testing/mutation_harness.py .pytest_tmp/harness_verify_tmp/battery_missed.json` (exit code: 1)
- scripts/testing/mutation_harness.py: `python3 scripts/testing/mutation_harness.py .pytest_tmp/harness_verify_tmp/battery_cfg.json` (exit code: 2)
- scripts/testing/mutation_harness.py: `python3 scripts/testing/mutation_harness.py nonexistent.json` (exit code: 3)
- scripts/testing/mutation_workspace_git.py: `python3 scripts/testing/mutation_workspace_git.py` (exit code: 0)
- scripts/testing/mutation_workspace_git.py: `python3 -c "from scripts.testing import mutation_workspace_git as mwg; from pathlib import Path; root = mwg.git_root(Path('.')); print('git_root:', root); print('marker:', mwg.marker_directory(root))"` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/test_selection/select_tests.py` and `scripts/test_selection/import_graph.py` interact directly with `scripts/ci/run_pytest_selected.py` (inv-rjm-207) and lefthook pre-push policy gates (`git_hook_policy.py`, `checks_tooling.py`).
- `scripts/testing/mutation_harness.py` imports `scripts/testing/mutation_workspace.py` (inv-rjm-264), which in turn delegates worktree allocation and git subprocess serialization to `scripts/testing/mutation_workspace_git.py`.
- `mutation_harness.py` is flagged as an `orphan` within the derived in-scope manifest because only tests (such as `tests/test_mutation_harness.py`) and CI permission checks invoke it directly, and `tests/` is excluded from the rjm lifecycle manifest boundary.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,300 tokens (45,241 bytes across 5 files). Approximate tokens of output written: ~8,100 tokens (32,531 bytes across 5 inventory cards).
