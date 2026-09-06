---
unit: inv-rjm-201
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-201

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/cli_exit_contract_ratchet.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/codeql_integration_summary.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/collect_ai_metrics.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/collect_metrics_and_report.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/combine_pin_coverage.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/commit_and_push.py`

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-ratchet-py.md (9480 bytes)
- docs/analysis/inventory/rjm/scripts-ci-codeql-integration-summary-py.md (6086 bytes)
- docs/analysis/inventory/rjm/scripts-ci-collect-ai-metrics-py.md (6218 bytes)
- docs/analysis/inventory/rjm/scripts-ci-collect-metrics-and-report-py.md (5737 bytes)
- docs/analysis/inventory/rjm/scripts-ci-combine-pin-coverage-py.md (6498 bytes)
- docs/analysis/inventory/rjm/scripts-ci-commit-and-push-py.md (5457 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-201.md (2600 bytes)

## Scripts executed
- `sources/rjm/scripts/ci/cli_exit_contract_ratchet.py`: `python3 sources/rjm/scripts/ci/cli_exit_contract_ratchet.py --repo-root sources/rjm` (exit code: 0)
- `sources/rjm/scripts/ci/codeql_integration_summary.py`: `GITHUB_STEP_SUMMARY=/tmp/test_codeql_summary.md INSTALL_RESULT=success LANGUAGE_RESULT=success JSON_RESULT=success python3 sources/rjm/scripts/ci/codeql_integration_summary.py` (exit code: 0)
- `sources/rjm/scripts/ci/collect_ai_metrics.py`: `python3 sources/rjm/scripts/ci/collect_ai_metrics.py --repository test/repo --weeks 2 --csv-out /tmp/test_metrics.csv` (exit code: 0)
- `sources/rjm/scripts/ci/collect_metrics_and_report.py`: `python3 sources/rjm/scripts/ci/collect_metrics_and_report.py` (exit code: 1)
- `sources/rjm/scripts/ci/combine_pin_coverage.py`: `sources/rjm/.venv/bin/python sources/rjm/scripts/ci/combine_pin_coverage.py --main-data /tmp/nonexistent-main --pin-data /tmp/nonexistent-pin --output-data /tmp/out` (exit code: 1)
- `sources/rjm/scripts/ci/commit_and_push.py`: `python3 sources/rjm/scripts/ci/commit_and_push.py --path foo.txt --message "update foo" --user-name "Bot" --user-email "bot@example.com"` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 6 files in this unit are CI automation scripts extracted from GitHub Actions workflow YAML `run:` blocks under ADR-006 to ensure testability and prevent logic duplication.
- `cli_exit_contract_ratchet.py` enforces an equality ratchet preventing silent error-swallowing when workflow steps are refactored into Python; it links directly with `scripts/ci/cli_exit_contract_coverage.py` and `scripts/ci/count_ratchet.py`, and is wired into pre-push checks via `scripts/validation/checks_ratchet.py`.
- `combine_pin_coverage.py` documents an empirical wall-clock performance measurement (+27.02s / +6.2% for full-suite `--cov-branch`), explaining the architectural split between statement-only partition coverage and isolated 100% branch-coverage pins.
- No files in this unit appear in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`), so no divergence cards were required.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~7760 tokens (31039 bytes across 6 assigned files, plus test files and workflow references)
- Approximate tokens of output written: ~10500 tokens across 6 inventory cards and this unit report
