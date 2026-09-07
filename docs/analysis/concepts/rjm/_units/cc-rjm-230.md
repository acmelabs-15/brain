---
unit: cc-rjm-230
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-230

## Files assigned
- [x] sources/rjm/.github/scripts/invoke_pr_comment_processing.py
- [x] sources/rjm/.github/scripts/invoke_pr_maintenance.py
- [x] sources/rjm/.github/scripts/parse_artifact_insights.py
- [x] sources/rjm/scripts/ai_review_common/issue_triage.py
- [x] sources/rjm/scripts/ci/collect_metrics_and_report.py
- [x] sources/rjm/scripts/ci/detect_human_changes_requested.py
- [x] sources/rjm/scripts/ci/write_pr_maintenance_summary.py
- [x] sources/rjm/scripts/maintenance/detect_orphan_commits.py
- [x] sources/rjm/scripts/report_pr_supersession.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] docs/analysis/inventory/rjm/github-scripts-invoke-pr-comment-processing-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-parse-artifact-insights-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-invoke-pr-maintenance-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-pr-maintenance-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-report-pr-supersession-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-detect-human-changes-requested-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-collect-metrics-and-report-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-detect-orphan-commits-py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md

## Outputs produced
- docs/analysis/concepts/rjm/code-fence-pattern.md (969 bytes)
- docs/analysis/concepts/rjm/parse-findings.md (1086 bytes)
- docs/analysis/concepts/rjm/add-comment-reaction.md (947 bytes)
- docs/analysis/concepts/rjm/reply-to-comment.md (924 bytes)
- docs/analysis/concepts/rjm/process-comments.md (915 bytes)
- docs/analysis/concepts/rjm/issue-2522.md (955 bytes)
- docs/analysis/concepts/rjm/reaction-failures.md (897 bytes)
- docs/analysis/concepts/rjm/protected-branches.md (929 bytes)
- docs/analysis/concepts/rjm/bot-categories.md (931 bytes)
- docs/analysis/concepts/rjm/agent-controlled.md (1075 bytes)
- docs/analysis/concepts/rjm/mention-triggered.md (916 bytes)
- docs/analysis/concepts/rjm/review-bot.md (866 bytes)
- docs/analysis/concepts/rjm/open-prs-query.md (1105 bytes)
- docs/analysis/concepts/rjm/fetch-status-context-page.md (960 bytes)
- docs/analysis/concepts/rjm/get-open-prs.md (961 bytes)
- docs/analysis/concepts/rjm/classify-bot.md (967 bytes)
- docs/analysis/concepts/rjm/has-bot-reviewer.md (999 bytes)
- docs/analysis/concepts/rjm/has-conflicts.md (1084 bytes)
- docs/analysis/concepts/rjm/has-failing-checks.md (1113 bytes)
- docs/analysis/concepts/rjm/has-unresolved-threads.md (1130 bytes)
- docs/analysis/concepts/rjm/issue-974.md (909 bytes)
- docs/analysis/concepts/rjm/get-derivative-prs.md (979 bytes)
- docs/analysis/concepts/rjm/derivative-prs.md (1383 bytes)
- docs/analysis/concepts/rjm/get-parents-with-derivatives.md (961 bytes)
- docs/analysis/concepts/rjm/discover-and-classify.md (995 bytes)
- docs/analysis/concepts/rjm/pending-derivatives.md (886 bytes)
- docs/analysis/concepts/rjm/changes-requested.md (1501 bytes)
- docs/analysis/concepts/rjm/human-blocked.md (891 bytes)
- docs/analysis/concepts/rjm/print-summary.md (943 bytes)
- docs/analysis/concepts/rjm/write-step-summary.md (1842 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-230.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/code-fence-pattern.md docs/analysis/concepts/rjm/parse-findings.md docs/analysis/concepts/rjm/add-comment-reaction.md docs/analysis/concepts/rjm/reply-to-comment.md docs/analysis/concepts/rjm/process-comments.md docs/analysis/concepts/rjm/issue-2522.md docs/analysis/concepts/rjm/reaction-failures.md docs/analysis/concepts/rjm/protected-branches.md docs/analysis/concepts/rjm/bot-categories.md docs/analysis/concepts/rjm/agent-controlled.md docs/analysis/concepts/rjm/mention-triggered.md docs/analysis/concepts/rjm/review-bot.md docs/analysis/concepts/rjm/open-prs-query.md docs/analysis/concepts/rjm/fetch-status-context-page.md docs/analysis/concepts/rjm/get-open-prs.md docs/analysis/concepts/rjm/classify-bot.md docs/analysis/concepts/rjm/has-bot-reviewer.md docs/analysis/concepts/rjm/has-conflicts.md docs/analysis/concepts/rjm/has-failing-checks.md docs/analysis/concepts/rjm/has-unresolved-threads.md docs/analysis/concepts/rjm/issue-974.md docs/analysis/concepts/rjm/get-derivative-prs.md docs/analysis/concepts/rjm/derivative-prs.md docs/analysis/concepts/rjm/get-parents-with-derivatives.md docs/analysis/concepts/rjm/discover-and-classify.md docs/analysis/concepts/rjm/pending-derivatives.md docs/analysis/concepts/rjm/changes-requested.md docs/analysis/concepts/rjm/human-blocked.md docs/analysis/concepts/rjm/print-summary.md docs/analysis/concepts/rjm/write-step-summary.md` (exit code 0, 32 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-230 completes 30 concept cards (42 total occurrence rows) originating from PR comment processing (`invoke_pr_comment_processing.py`), PR maintenance discovery and classification (`invoke_pr_maintenance.py`), artifact insight parsing (`parse_artifact_insights.py`), and related CI reporting utilities.
- Two core lifecycle concepts were extracted:
  1. `derivative-prs` (`kind: artifact`, `package_phase: rjm:review`): dependent, stacked pull requests targeting non-protected feature branches.
  2. `changes-requested` (`kind: gate`, `package_phase: rjm:review`): blocking review decision gate requiring revisions before PR merge.
- The remaining 28 concepts represent internal script functions, regular expressions, dictionary constants, issue tracking references, and classification labels, authored with `kind: name-only` per D-023.
- `_write_step_summary` consolidates 6 occurrence rows across 6 different Python maintenance and validation scripts.
- All defect annotations from the 11 inventory cards were accurately reflected in the `Implementation status` fields.
- Byte-exact verification passed cleanly with zero FAILs via `bun scripts/synthesis/quote-check.ts`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~45,000 tokens across 11 source scripts and 11 inventory cards.
Approximate tokens of output written: ~8,500 tokens across 30 concept cards and 1 unit report.
