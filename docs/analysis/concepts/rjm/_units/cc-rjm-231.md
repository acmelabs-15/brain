---
unit: cc-rjm-231
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-231

## Files assigned
- [x] sources/rjm/.github/scripts/invoke_pr_maintenance.py
- [x] sources/rjm/.github/scripts/measure_workflow_coalescing.py
- [x] sources/rjm/.github/scripts/parse_artifact_insights.py
- [x] sources/rjm/.github/scripts/parse_feature_review.py
- [x] sources/rjm/.github/scripts/parse_pr_standards.py
- [x] sources/rjm/.github/scripts/test_rate_limit.py
- [x] sources/rjm/scripts/ai_review_common/__init__.py
- [x] sources/rjm/scripts/ai_review_common/feature_review.py
- [x] sources/rjm/scripts/ai_review_common/issue_triage.py
- [x] sources/rjm/scripts/ai_review_common/quality_gate.py
- [x] sources/rjm/scripts/ai_review_common/verdict.py
- [x] sources/rjm/scripts/ai_review_outputs.py
- [x] sources/rjm/scripts/ci/artifact_write_summary.py
- [x] sources/rjm/scripts/ci/check_codeql_sarif.py
- [x] sources/rjm/scripts/ci/codeql_integration_summary.py
- [x] sources/rjm/scripts/ci/collect_ai_metrics.py
- [x] sources/rjm/scripts/ci/collect_metrics_and_report.py
- [x] sources/rjm/scripts/generate_third_party_notices.py
- [x] sources/rjm/scripts/github_core/__init__.py
- [x] sources/rjm/scripts/github_core/api.py
- [x] sources/rjm/scripts/github_core/rate_limit.py
- [x] sources/rjm/scripts/github_core/recovery_manifest.py
- [x] sources/rjm/scripts/github_core/runs_file.py
- [x] sources/rjm/scripts/pr_maintenance/__init__.py
- [x] sources/rjm/scripts/quality_gate/run_pytest.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] docs/analysis/inventory/rjm/github-scripts-invoke-pr-maintenance-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-artifact-write-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-codeql-sarif-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-codeql-integration-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-collect-metrics-and-report-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-test-rate-limit-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-api-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-rate-limit-py.md
- [x] docs/analysis/inventory/rjm/scripts-pr-maintenance---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-measure-workflow-coalescing-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-recovery-manifest-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-runs-file-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-parse-artifact-insights-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-quality-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-verdict-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-parse-feature-review-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-feature-review-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-parse-pr-standards-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-outputs-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-collect-ai-metrics-py.md
- [x] docs/analysis/inventory/rjm/scripts-generate-third-party-notices-py.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate-run-pytest-py.md

## Outputs produced
- docs/analysis/concepts/rjm/github-step-summary.md (1773 bytes)
- docs/analysis/concepts/rjm/ratelimitstatus.md (1796 bytes)
- docs/analysis/concepts/rjm/default-workflows.md (899 bytes)
- docs/analysis/concepts/rjm/workflowrun.md (1127 bytes)
- docs/analysis/concepts/rjm/runoverlap.md (845 bytes)
- docs/analysis/concepts/rjm/coalescingmetrics.md (869 bytes)
- docs/analysis/concepts/rjm/parse-datetime.md (881 bytes)
- docs/analysis/concepts/rjm/test-prerequisites.md (909 bytes)
- docs/analysis/concepts/rjm/repoinfo.md (1259 bytes)
- docs/analysis/concepts/rjm/check-gh-auth.md (1006 bytes)
- docs/analysis/concepts/rjm/get-repository-context.md (891 bytes)
- docs/analysis/concepts/rjm/get-workflow-runs.md (866 bytes)
- docs/analysis/concepts/rjm/get-concurrency-group.md (903 bytes)
- docs/analysis/concepts/rjm/check-runs-overlap.md (916 bytes)
- docs/analysis/concepts/rjm/get-overlapping-runs.md (936 bytes)
- docs/analysis/concepts/rjm/get-coalescing-metrics.md (895 bytes)
- docs/analysis/concepts/rjm/avg-cancellation-time.md (890 bytes)
- docs/analysis/concepts/rjm/format-markdown-report.md (885 bytes)
- docs/analysis/concepts/rjm/safe-name-pattern.md (1313 bytes)
- docs/analysis/concepts/rjm/priority-order.md (874 bytes)
- docs/analysis/concepts/rjm/valid-types.md (887 bytes)
- docs/analysis/concepts/rjm/allowed-labels.md (836 bytes)
- docs/analysis/concepts/rjm/parse-finding-block.md (885 bytes)
- docs/analysis/concepts/rjm/filter-by-priority.md (911 bytes)
- docs/analysis/concepts/rjm/findings-to-json.md (881 bytes)
- docs/analysis/concepts/rjm/get-feature-review-assignees.md (1101 bytes)
- docs/analysis/concepts/rjm/get-feature-review-labels.md (1085 bytes)
- docs/analysis/concepts/rjm/get-feature-review-recommendation.md (1137 bytes)
- docs/analysis/concepts/rjm/validate-pr-description-py.md (927 bytes)
- docs/analysis/concepts/rjm/write-outputs.md (1325 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-231.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/github-step-summary.md docs/analysis/concepts/rjm/ratelimitstatus.md docs/analysis/concepts/rjm/default-workflows.md docs/analysis/concepts/rjm/workflowrun.md docs/analysis/concepts/rjm/runoverlap.md docs/analysis/concepts/rjm/coalescingmetrics.md docs/analysis/concepts/rjm/parse-datetime.md docs/analysis/concepts/rjm/test-prerequisites.md docs/analysis/concepts/rjm/repoinfo.md docs/analysis/concepts/rjm/check-gh-auth.md docs/analysis/concepts/rjm/get-repository-context.md docs/analysis/concepts/rjm/get-workflow-runs.md docs/analysis/concepts/rjm/get-concurrency-group.md docs/analysis/concepts/rjm/check-runs-overlap.md docs/analysis/concepts/rjm/get-overlapping-runs.md docs/analysis/concepts/rjm/get-coalescing-metrics.md docs/analysis/concepts/rjm/avg-cancellation-time.md docs/analysis/concepts/rjm/format-markdown-report.md docs/analysis/concepts/rjm/safe-name-pattern.md docs/analysis/concepts/rjm/priority-order.md docs/analysis/concepts/rjm/valid-types.md docs/analysis/concepts/rjm/allowed-labels.md docs/analysis/concepts/rjm/parse-finding-block.md docs/analysis/concepts/rjm/filter-by-priority.md docs/analysis/concepts/rjm/findings-to-json.md docs/analysis/concepts/rjm/get-feature-review-assignees.md docs/analysis/concepts/rjm/get-feature-review-labels.md docs/analysis/concepts/rjm/get-feature-review-recommendation.md docs/analysis/concepts/rjm/validate-pr-description-py.md docs/analysis/concepts/rjm/write-outputs.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-231 covers 30 concept cards across CI workflow automation, GitHub API client infrastructure, workflow run coalescing measurement, and AI review parsing utilities:
  1. GitHub Actions environment variables and shared output helpers (`github-step-summary`, `write-outputs`).
  2. Rate limit management and authentication infrastructure (`ratelimitstatus`, `repoinfo`, `check-gh-auth`).
  3. Workflow coalescing telemetry and metrics extraction (`default-workflows`, `workflowrun`, `runoverlap`, `coalescingmetrics`, `parse-datetime`, `test-prerequisites`, `get-repository-context`, `get-workflow-runs`, `get-concurrency-group`, `check-runs-overlap`, `get-overlapping-runs`, `get-coalescing-metrics`, `avg-cancellation-time`, `format-markdown-report`).
  4. Artifact insight parsing and filtering (`safe-name-pattern`, `priority-order`, `valid-types`, `allowed-labels`, `parse-finding-block`, `filter-by-priority`, `findings-to-json`).
  5. Feature review recommendation, assignee, and label extraction (`get-feature-review-assignees`, `get-feature-review-labels`, `get-feature-review-recommendation`, `validate-pr-description-py`).
- All 30 concepts in this unit represent code identifiers, functions, constants, dataclasses, environment variables, or script filenames rather than standalone lifecycle concepts, and were authored with `kind: name-only` per D-023.
- All 58 occurrences across the 30 concepts specified in `facts/cc-rjm-231.txt` were mapped into the respective `Where used` tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: orphan, internal-contradiction, script-bug, doc-drift`, `defects: doc-drift, orphan, exit-code-mismatch`, etc.).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 27 source files and 27 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
