---
unit: inv-rjm-201
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-201

## Files assigned
- [x] `scripts/ci/cli_exit_contract_ratchet.py`
- [x] `scripts/ci/codeql_integration_summary.py`
- [x] `scripts/ci/collect_ai_metrics.py`
- [x] `scripts/ci/collect_metrics_and_report.py`
- [x] `scripts/ci/combine_pin_coverage.py`
- [x] `scripts/ci/commit_and_push.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-ratchet-py.md` — 6943 bytes
- `docs/analysis/inventory/rjm/scripts-ci-codeql-integration-summary-py.md` — 4806 bytes
- `docs/analysis/inventory/rjm/scripts-ci-collect-ai-metrics-py.md` — 4822 bytes
- `docs/analysis/inventory/rjm/scripts-ci-collect-metrics-and-report-py.md` — 5123 bytes
- `docs/analysis/inventory/rjm/scripts-ci-combine-pin-coverage-py.md` — 6130 bytes
- `docs/analysis/inventory/rjm/scripts-ci-commit-and-push-py.md` — 5129 bytes

## Scripts executed
- `scripts/ci/cli_exit_contract_ratchet.py`: `python3 sources/rjm/scripts/ci/cli_exit_contract_ratchet.py --repo-root sources/rjm` (exit code: 0)
- `scripts/ci/codeql_integration_summary.py`: `GITHUB_STEP_SUMMARY=/tmp/step_summary.md INSTALL_RESULT=success LANGUAGE_RESULT=success JSON_RESULT=success python3 sources/rjm/scripts/ci/codeql_integration_summary.py` (exit code: 0)
- `scripts/ci/collect_ai_metrics.py`: `python3 sources/rjm/scripts/ci/collect_ai_metrics.py --repository test/repo --csv-out /tmp/test_ai_metrics.csv` (exit code: 0)
- `scripts/ci/collect_metrics_and_report.py`: `python3 scripts/ci/collect_metrics_and_report.py --since 7 --format markdown` (exit code: 0)
- `scripts/ci/combine_pin_coverage.py`: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/ci/combine_pin_coverage.py --help` (exit code: 0)
- `scripts/ci/commit_and_push.py`: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/commit_and_push.py --path foo.txt --message "test message" --user-name "test" --user-email "test@example.com"` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/ci/cli_exit_contract_ratchet.py` is invoked by `scripts/ci/merge_tree_ratchet_registry.py` and `scripts/validation/checks_ratchet.py` and enforces testing contracts across extracted CI scripts.
- `scripts/ci/collect_metrics_and_report.py` addresses the Phase 1V verification finding by recording `Invoked by: orphan` alongside an explicit `orphan` defect under `## Defects`.
- Scripts invoked strictly by `.github/workflows/` (which are out-of-scope for the rjm lifecycle manifest) are classified as `Invoked by: orphan` with corresponding `orphan` defects documented under `## Defects`.

## Blocked or uncertain
none

## Time and size
Source read: 31,039 bytes (~7,760 tokens); Output written: 32,953 bytes across 6 cards + unit report (~8,800 tokens).
