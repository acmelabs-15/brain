---
unit: inv-rjm-203
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-203

## Files assigned
- [x] sources/rjm/scripts/ci/determine_placeholder_range.py
- [x] sources/rjm/scripts/ci/diagnose_copilot_cli.py
- [x] sources/rjm/scripts/ci/diff_line_scope.py
- [x] sources/rjm/scripts/ci/drift_collect_details.py
- [x] sources/rjm/scripts/ci/drift_create_alert_issue.py
- [x] sources/rjm/scripts/ci/drift_run_detection.py
- [x] sources/rjm/scripts/ci/drift_write_summary.py
- [x] sources/rjm/scripts/ci/enforce_pr_validation.py
- [x] sources/rjm/scripts/ci/establish_ai_review_deadline.py
- [x] sources/rjm/scripts/ci/execute_ai_review_post_script.py
- [x] sources/rjm/scripts/ci/failure_classification.py
- [x] sources/rjm/scripts/ci/find_copilot_ready_issues.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ci-determine-placeholder-range-py.md (4146 bytes)
- docs/analysis/inventory/rjm/scripts-ci-diagnose-copilot-cli-py.md (5617 bytes)
- docs/analysis/inventory/rjm/scripts-ci-diff-line-scope-py.md (4492 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-collect-details-py.md (5005 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-create-alert-issue-py.md (5148 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-run-detection-py.md (4321 bytes)
- docs/analysis/inventory/rjm/scripts-ci-drift-write-summary-py.md (3858 bytes)
- docs/analysis/inventory/rjm/scripts-ci-enforce-pr-validation-py.md (3827 bytes)
- docs/analysis/inventory/rjm/scripts-ci-establish-ai-review-deadline-py.md (4591 bytes)
- docs/analysis/inventory/rjm/scripts-ci-execute-ai-review-post-script-py.md (5302 bytes)
- docs/analysis/inventory/rjm/scripts-ci-failure-classification-py.md (3404 bytes)
- docs/analysis/inventory/rjm/scripts-ci-find-copilot-ready-issues-py.md (4247 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-203.md

## Scripts executed
- `sources/rjm/scripts/ci/determine_placeholder_range.py` — `python3 sources/rjm/scripts/ci/determine_placeholder_range.py` — exit code 0
- `sources/rjm/scripts/ci/diagnose_copilot_cli.py` — `GITHUB_OUTPUT="/tmp/test_gh_out_diag.txt" python3 sources/rjm/scripts/ci/diagnose_copilot_cli.py` — exit code 0
- `sources/rjm/scripts/ci/diff_line_scope.py` — `python3 sources/rjm/scripts/ci/diff_line_scope.py` — exit code 0
- `sources/rjm/scripts/ci/drift_collect_details.py` — `python3 sources/rjm/scripts/ci/drift_collect_details.py` (cwd: repo root) — exit code 2; `python3 scripts/ci/drift_collect_details.py` (cwd: sources/rjm) — exit code 0
- `sources/rjm/scripts/ci/drift_create_alert_issue.py` — `python3 sources/rjm/scripts/ci/drift_create_alert_issue.py` — exit code 2
- `sources/rjm/scripts/ci/drift_run_detection.py` — `python3 sources/rjm/scripts/ci/drift_run_detection.py` (cwd: repo root) — exit code 2; `python3 scripts/ci/drift_run_detection.py` (cwd: sources/rjm) — exit code 0
- `sources/rjm/scripts/ci/drift_write_summary.py` — `DRIFT_DETECTED=true python3 sources/rjm/scripts/ci/drift_write_summary.py` — exit code 0
- `sources/rjm/scripts/ci/enforce_pr_validation.py` — `python3 sources/rjm/scripts/ci/enforce_pr_validation.py` — exit code 0
- `sources/rjm/scripts/ci/establish_ai_review_deadline.py` — `GITHUB_OUTPUT="/tmp/test_gh_out_deadline.txt" TIMEOUT_MINUTES=5 python3 sources/rjm/scripts/ci/establish_ai_review_deadline.py` — exit code 0
- `sources/rjm/scripts/ci/execute_ai_review_post_script.py` — `python3 sources/rjm/scripts/ci/execute_ai_review_post_script.py` — exit code 1
- `sources/rjm/scripts/ci/failure_classification.py` — `python3 sources/rjm/scripts/ci/failure_classification.py` — exit code 0
- `sources/rjm/scripts/ci/find_copilot_ready_issues.py` — `GITHUB_OUTPUT="/tmp/test_gh_out_issues.txt" python3 sources/rjm/scripts/ci/find_copilot_ready_issues.py` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 12 files are Python scripts supporting CI workflows and validation gates under `scripts/ci/`.
- Per Phase 1V verification findings, every card with `Invoked by: orphan` explicitly records the `orphan` defect under `## Defects` with a cited line number and description.
- Specifically, `establish_ai_review_deadline.py` (named in Phase 1V report) now carries its required `orphan` defect entry.
- `diff_line_scope.py` provides shared unified diff line parsing extracted per issue #2993, consumed across units by `scripts/validation/git_hook_policy.py`, `scripts/validation/citation_head_state.py`, and `scripts/ci/ruff_ratchet.py`.
- `failure_classification.py` provides PR fetch error classification extracted per issue #4597, consumed across units by `scripts/ci/build_ai_review_context.py`.
- `execute_ai_review_post_script.py` carries a genuine `script-bug` defect: `main()` defines parameter `argv`, but `__main__` invokes `main()` with no arguments, so command-line arguments are never passed to `argv` or validated.
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md`; no divergence cards required.

## Blocked or uncertain
none

## Time and size
- Approximate source tokens read: ~10,608 tokens (42,431 bytes across 12 files).
- Approximate output tokens written: ~14,200 tokens (56,800 bytes across 12 inventory cards and 1 unit report).
