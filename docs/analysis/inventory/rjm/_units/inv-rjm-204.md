---
unit: inv-rjm-204
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-204

## Files assigned
- [x] `scripts/ci/install_copilot_cli.py`
- [x] `scripts/ci/install_locked_deps.py`
- [x] `scripts/ci/invoke_copilot_cli.py`
- [x] `scripts/ci/load_ai_review_prompt.py`
- [x] `scripts/ci/main_pytest_failure_alert.py`
- [x] `scripts/ci/map_pr_description_result.py`
- [x] `scripts/ci/materialize_installed_plugin.py`
- [x] `scripts/ci/measure_npm_pack_size.py`
- [x] `scripts/ci/merge_tree_materialization.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-install-copilot-cli-py.md` (4755 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-install-locked-deps-py.md` (4505 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-invoke-copilot-cli-py.md` (7384 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-load-ai-review-prompt-py.md` (4552 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-main-pytest-failure-alert-py.md` (4111 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-map-pr-description-result-py.md` (3869 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-materialize-installed-plugin-py.md` (3979 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-measure-npm-pack-size-py.md` (3906 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-merge-tree-materialization-py.md` (5138 bytes)

## Scripts executed
- `scripts/ci/install_copilot_cli.py`, `python3 sources/rjm/scripts/ci/install_copilot_cli.py`, exit code 2
- `scripts/ci/install_locked_deps.py`, `python3 sources/rjm/scripts/ci/install_locked_deps.py /tmp`, exit code 0
- `scripts/ci/invoke_copilot_cli.py`, `python3 sources/rjm/scripts/ci/invoke_copilot_cli.py`, exit code 2
- `scripts/ci/load_ai_review_prompt.py`, `python3 sources/rjm/scripts/ci/load_ai_review_prompt.py`, exit code 2
- `scripts/ci/main_pytest_failure_alert.py`, `python3 sources/rjm/scripts/ci/main_pytest_failure_alert.py`, exit code 0
- `scripts/ci/map_pr_description_result.py`, `python3 sources/rjm/scripts/ci/map_pr_description_result.py --help`, exit code 2
- `scripts/ci/materialize_installed_plugin.py`, `python3 sources/rjm/scripts/ci/materialize_installed_plugin.py --help`, exit code 0
- `scripts/ci/measure_npm_pack_size.py`, `python3 sources/rjm/scripts/ci/measure_npm_pack_size.py --help`, exit code 0
- `scripts/ci/merge_tree_materialization.py`, `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/ci/merge_tree_materialization.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/ci/map_pr_description_result.py` contains a defect where `main()` accepts `argv: list[str] | None = None`, but `sys.argv[1:]` is omitted from `main()` at line 53, causing CLI arguments to be ignored.
- `scripts/ci/merge_tree_materialization.py` contains a defect where `from scripts.cli_exec import resolve_executable` is imported without `sys.path` bootstrapping, failing when executed directly unless `PYTHONPATH` includes the repository root.
- Several CI scripts are orphans within the derived manifest reachability graph (`install_locked_deps.py`, `invoke_copilot_cli.py`, `load_ai_review_prompt.py`, `main_pytest_failure_alert.py`, `map_pr_description_result.py`, `materialize_installed_plugin.py`, `measure_npm_pack_size.py`) because their call sites reside in workflow YAML files (`.github/workflows/*.yml` or `.github/actions/*`) which are outside the derived manifest graph.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,472 tokens (45,890 bytes); approximate tokens of output written: ~10,550 tokens (42,199 bytes).
