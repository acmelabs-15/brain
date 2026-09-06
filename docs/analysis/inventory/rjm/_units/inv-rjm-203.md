---
unit: inv-rjm-203
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-203

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/determine_placeholder_range.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/diagnose_copilot_cli.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/diff_line_scope.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/drift_collect_details.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/drift_create_alert_issue.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/drift_run_detection.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/drift_write_summary.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/enforce_pr_validation.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/establish_ai_review_deadline.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/execute_ai_review_post_script.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/failure_classification.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/find_copilot_ready_issues.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ci-determine-placeholder-range-py.md (4025 bytes)
- docs/analysis/inventory/rjm/scripts-ci-diagnose-copilot-cli-py.md (4854 bytes)
- docs/analysis/inventory/rjm/scripts-ci-diff-line-scope-py.md (3721 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-collect-details-py.md (4253 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-create-alert-issue-py.md (4574 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-run-detection-py.md (3844 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-write-summary-py.md (3358 bytes)
- docs/analysis/inventory/rjm/scripts-ci-enforce-pr-validation-py.md (3580 bytes)
- docs/analysis/inventory/rjm/scripts-ci-establish-ai-review-deadline-py.md (4200 bytes)
- docs/analysis/inventory/rjm/scripts-ci-execute-ai-review-post-script-py.md (4530 bytes)
- docs/analysis/inventory/rjm/scripts-ci-failure-classification-py.md (3520 bytes)
- docs/analysis/inventory/rjm/scripts-ci-find-copilot-ready-issues-py.md (4303 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-203.md (unit report)

## Scripts executed
- `scripts/ci/determine_placeholder_range.py`: `python3 scripts/ci/determine_placeholder_range.py`, exit code 0; `EVENT_NAME=pull_request python3 scripts/ci/determine_placeholder_range.py`, exit code 2
- `scripts/ci/diagnose_copilot_cli.py`: `GITHUB_OUTPUT=/tmp/test_gh_out.txt python3 scripts/ci/diagnose_copilot_cli.py`, exit code 0; `python3 scripts/ci/diagnose_copilot_cli.py`, exit code 2
- `scripts/ci/diff_line_scope.py`: `python3 scripts/ci/diff_line_scope.py`, exit code 0
- `scripts/ci/drift_collect_details.py`: `python3 scripts/ci/drift_collect_details.py`, exit code 0
- `scripts/ci/drift_create_alert_issue.py`: `python3 scripts/ci/drift_create_alert_issue.py`, exit code 2
- `scripts/ci/drift_run_detection.py`: `python3 scripts/ci/drift_run_detection.py`, exit code 0
- `scripts/ci/drift_write_summary.py`: `python3 scripts/ci/drift_write_summary.py`, exit code 0; `DRIFT_DETECTED=true python3 scripts/ci/drift_write_summary.py`, exit code 0
- `scripts/ci/enforce_pr_validation.py`: `python3 scripts/ci/enforce_pr_validation.py`, exit code 0; `OVERALL_STATUS=FAIL python3 scripts/ci/enforce_pr_validation.py`, exit code 1
- `scripts/ci/establish_ai_review_deadline.py`: `GITHUB_OUTPUT=/tmp/deadline_out.txt TIMEOUT_MINUTES=5 python3 scripts/ci/establish_ai_review_deadline.py`, exit code 0; `python3 scripts/ci/establish_ai_review_deadline.py`, exit code 2
- `scripts/ci/execute_ai_review_post_script.py`: `EXECUTE_SCRIPT=scripts/ci/enforce_pr_validation.py python3 scripts/ci/execute_ai_review_post_script.py`, exit code 0; `python3 scripts/ci/execute_ai_review_post_script.py`, exit code 1
- `scripts/ci/failure_classification.py`: `python3 scripts/ci/failure_classification.py`, exit code 0
- `scripts/ci/find_copilot_ready_issues.py`: `GITHUB_OUTPUT=/tmp/ready_issues.txt python3 scripts/ci/find_copilot_ready_issues.py`, exit code 0; `python3 scripts/ci/find_copilot_ready_issues.py`, exit code 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-203` covers 12 CI automation and gate scripts in `scripts/ci/` (42,431 bytes total across 12 files).
- CI infrastructure architecture:
  - `diff_line_scope.py` provides the canonical post-image touched lines algorithm used across both pre-commit mypy checks (`scripts/validation/git_hook_policy.py`) and CI ruff ratchets (`scripts/ci/ruff_ratchet.py`), avoiding drift between local pre-commit gates and CI merge gates (issue #2993).
  - `drift_collect_details.py`, `drift_create_alert_issue.py`, `drift_run_detection.py`, and `drift_write_summary.py` form a modular pipeline replacing inline YAML shell scripts in `.github/workflows/drift-detection.yml` per ADR-006 and ADR-035.
  - `diagnose_copilot_cli.py`, `establish_ai_review_deadline.py`, and `execute_ai_review_post_script.py` support the composite action `.github/actions/ai-review/action.yml`, standardizing diagnostic collection, budget calculation, and post-analysis callbacks.
  - `failure_classification.py` extracts error categorization logic out of `build_ai_review_context.py` per issue #4597.
  - `enforce_pr_validation.py` enforces gate status while preserving the advisory-only status of PR commit count per ADR-099 and issue #5233.
- Duplication ledger: none of the 12 files appear in `docs/analysis/manifest/rjm-duplicates.md` (no exact aliases or variant divergence cards required).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10,600 tokens (42,431 bytes across 12 source files).
- Approximate tokens of output written: ~12,500 tokens across 12 inventory cards and 1 work-unit report.
