---
unit: inv-rjm-200
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-200

## Files assigned
- [x] `sources/rjm/scripts/ci/check_claude_authorization.py`
- [x] `sources/rjm/scripts/ci/check_codeql_sarif.py`
- [x] `sources/rjm/scripts/ci/check_metrics_thresholds.py`
- [x] `sources/rjm/scripts/ci/check_plugin_lib_mirrors.py`
- [x] `sources/rjm/scripts/ci/check_pr_merge_state.py`
- [x] `sources/rjm/scripts/ci/classify_semantic_title_result.py`
- [x] `sources/rjm/scripts/ci/cli_exit_contract_baseline.txt`
- [x] `sources/rjm/scripts/ci/cli_exit_contract_coverage.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-check-claude-authorization-py.md` (4380 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-codeql-sarif-py.md` (4213 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-metrics-thresholds-py.md` (4721 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-plugin-lib-mirrors-py.md` (3542 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-pr-merge-state-py.md` (5754 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-classify-semantic-title-result-py.md` (4274 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-baseline-txt.md` (2626 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-coverage-py.md` (4065 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-200.md` (unit report)

## Scripts executed
- `sources/rjm/scripts/ci/check_claude_authorization.py`: `python3 sources/rjm/scripts/ci/check_claude_authorization.py --help`, exit code 0
- `sources/rjm/scripts/ci/check_codeql_sarif.py`: `python3 sources/rjm/scripts/ci/check_codeql_sarif.py --help`, exit code 0
- `sources/rjm/scripts/ci/check_metrics_thresholds.py`: `python3 scripts/ci/check_metrics_thresholds.py` (executed from repo root `sources/rjm`), exit code 0
- `sources/rjm/scripts/ci/check_plugin_lib_mirrors.py`: `python3 scripts/ci/check_plugin_lib_mirrors.py` (executed from repo root `sources/rjm`), exit code 1 (system python missing yaml module) / exit code 0 (with `sources/rjm/.venv/bin/python3`)
- `sources/rjm/scripts/ci/check_pr_merge_state.py`: `python3 sources/rjm/scripts/ci/check_pr_merge_state.py --help`, exit code 0
- `sources/rjm/scripts/ci/classify_semantic_title_result.py`: `python3 sources/rjm/scripts/ci/classify_semantic_title_result.py --help`, exit code 0
- `sources/rjm/scripts/ci/cli_exit_contract_baseline.txt`: `cat sources/rjm/scripts/ci/cli_exit_contract_baseline.txt`, exit code 0
- `sources/rjm/scripts/ci/cli_exit_contract_coverage.py`: `python3 sources/rjm/scripts/ci/cli_exit_contract_coverage.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Phase 1V verification findings explicitly addressed: `check_pr_merge_state.py` includes the `orphan` defect line in `## Defects` because it is marked `Invoked by: orphan` (referenced only in tests and out-of-scope `.github/workflows/`).
- `cli_exit_contract_baseline.txt` is referenced by `scripts/ci/cli_exit_contract_ratchet.py:76` and `scripts/ci/merge_tree_ratchet_registry.py:57`.
- `cli_exit_contract_coverage.py` is imported by `scripts/ci/cli_exit_contract_ratchet.py:52` and imports helper `scripts/ci/_main_binding.py:229`.
- `check_metrics_thresholds.py` invokes `.claude/skills/metrics/collect_metrics.py:27`.
- `check_plugin_lib_mirrors.py` invokes `scripts/sync_plugin_lib.py:19` and `build/scripts/build_all.py:20`. Note that `build/` is out of scope per METHOD §1.2.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~11,000 tokens (44,261 bytes across 8 files). Approximate output written: ~8,200 tokens (33,575 bytes across 8 inventory cards and 1 unit report).
