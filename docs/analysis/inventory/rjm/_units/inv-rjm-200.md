---
unit: inv-rjm-200
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-200

## Files assigned
- [x] `scripts/ci/check_claude_authorization.py`
- [x] `scripts/ci/check_codeql_sarif.py`
- [x] `scripts/ci/check_metrics_thresholds.py`
- [x] `scripts/ci/check_plugin_lib_mirrors.py`
- [x] `scripts/ci/check_pr_merge_state.py`
- [x] `scripts/ci/classify_semantic_title_result.py`
- [x] `scripts/ci/cli_exit_contract_baseline.txt`
- [x] `scripts/ci/cli_exit_contract_coverage.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-check-claude-authorization-py.md` (4184 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-codeql-sarif-py.md` (4274 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-metrics-thresholds-py.md` (5021 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-plugin-lib-mirrors-py.md` (3762 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-check-pr-merge-state-py.md` (4444 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-classify-semantic-title-result-py.md` (4306 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-baseline-txt.md` (2392 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-coverage-py.md` (6110 bytes)

## Scripts executed
- `scripts/ci/check_claude_authorization.py`: `python3 scripts/ci/check_claude_authorization.py --checker ./tests/workflows/test_claude_authorization.py --actor peter --author-association MEMBER --event-name issue_comment --comment-body "@claude help"`, exit code 0
- `scripts/ci/check_codeql_sarif.py`: `python3 scripts/ci/check_codeql_sarif.py --sarif-dir .`, exit code 1
- `scripts/ci/check_metrics_thresholds.py`: `python3 scripts/ci/check_metrics_thresholds.py`, exit code 0
- `scripts/ci/check_plugin_lib_mirrors.py`: `.venv/bin/python3 scripts/ci/check_plugin_lib_mirrors.py`, exit code 0
- `scripts/ci/check_pr_merge_state.py`: `python3 scripts/ci/check_pr_merge_state.py --repo rjmurillo/ai-agents --head-ref non-existent-branch`, exit code 0
- `scripts/ci/classify_semantic_title_result.py`: `python3 scripts/ci/classify_semantic_title_result.py --outcome success --pr-title "feat(ci): add check"`, exit code 0
- `scripts/ci/cli_exit_contract_baseline.txt`: `cat sources/rjm/scripts/ci/cli_exit_contract_baseline.txt`, exit code 0
- `scripts/ci/cli_exit_contract_coverage.py`: `python3 scripts/ci/cli_exit_contract_coverage.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `cli_exit_contract_baseline.txt` and `cli_exit_contract_coverage.py` are coupled with `cli_exit_contract_ratchet.py` (which implements the enforcement gate and ratchet policy).
- `check_plugin_lib_mirrors.py` runs `scripts/sync_plugin_lib.py` and `build/scripts/build_all.py`, requiring python runtime with `pyyaml` (present in `.venv`).
- `check_metrics_thresholds.py` hardcodes invocation of `.claude/skills/metrics/collect_metrics.py` via relative path from repository root, and contains an `unfailable-gate` where threshold alerts do not exit non-zero.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (44,261 bytes across 8 files).
Approximate tokens of output written: ~8,600 tokens (34,493 bytes across 8 cards + unit report).
