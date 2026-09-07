---
unit: cc-rjm-247
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-247

## Files assigned
- [x] sources/rjm/scripts/ai_review_common/verdict.py
- [x] sources/rjm/scripts/ai_review_common/workflow.py
- [x] sources/rjm/scripts/ai_review_outputs.py
- [x] sources/rjm/scripts/analyze_pr_failure.py
- [x] sources/rjm/scripts/ci/build_ai_review_context.py
- [x] sources/rjm/scripts/ci/build_pr_validation_report.py
- [x] sources/rjm/scripts/ci/build_retrospective_prompt.py
- [x] sources/rjm/scripts/ci/check_pr_merge_state.py
- [x] sources/rjm/scripts/ci/diagnose_copilot_cli.py
- [x] sources/rjm/scripts/ci/invoke_copilot_cli.py
- [x] sources/rjm/scripts/ci/load_ai_review_prompt.py
- [x] sources/rjm/scripts/ci/main_pytest_failure_alert.py
- [x] sources/rjm/scripts/ci/map_pr_description_result.py
- [x] sources/rjm/scripts/ci/spec_extract_refs.py
- [x] sources/rjm/scripts/ci/spec_load_content.py
- [x] sources/rjm/scripts/ci/update_needs_split_label.py
- [x] sources/rjm/scripts/gh_retry_helpers.py
- [x] sources/rjm/scripts/github_core/__init__.py
- [x] sources/rjm/scripts/github_core/bot_config.py
- [x] sources/rjm/scripts/report_pr_supersession.py

## Outputs produced
- docs/analysis/concepts/rjm/extract-verdict-pattern.md (1006 bytes)
- docs/analysis/concepts/rjm/infra-patterns.md (956 bytes)
- docs/analysis/concepts/rjm/trace-failures.md (925 bytes)
- docs/analysis/concepts/rjm/completeness-failures.md (948 bytes)
- docs/analysis/concepts/rjm/json-labels-pattern.md (928 bytes)
- docs/analysis/concepts/rjm/json-milestone-pattern.md (955 bytes)
- docs/analysis/concepts/rjm/ai-review-dir.md (939 bytes)
- docs/analysis/concepts/rjm/concurrency-prefixes.md (980 bytes)
- docs/analysis/concepts/rjm/secret-environment-variables.md (1130 bytes)
- docs/analysis/concepts/rjm/reviewcontextlike.md (918 bytes)
- docs/analysis/concepts/rjm/outputconfigerror.md (1127 bytes)
- docs/analysis/concepts/rjm/sanitize-file-identifier.md (949 bytes)
- docs/analysis/concepts/rjm/append-output.md (1363 bytes)
- docs/analysis/concepts/rjm/choose-multiline-delimiter.md (1146 bytes)
- docs/analysis/concepts/rjm/append-multiline-output.md (1628 bytes)
- docs/analysis/concepts/rjm/runner-temp.md (1205 bytes)
- docs/analysis/concepts/rjm/bot-suffixes.md (929 bytes)
- docs/analysis/concepts/rjm/run-gh.md (1744 bytes)
- docs/analysis/concepts/rjm/paginated-items.md (964 bytes)
- docs/analysis/concepts/rjm/parse-concatenated-json-arrays.md (1062 bytes)
- docs/analysis/concepts/rjm/resolve-repo.md (946 bytes)
- docs/analysis/concepts/rjm/is-bot.md (1208 bytes)
- docs/analysis/concepts/rjm/fetch-pr-metadata.md (1077 bytes)
- docs/analysis/concepts/rjm/fetch-pr-comments.md (952 bytes)
- docs/analysis/concepts/rjm/fetch-pr-reviews.md (932 bytes)
- docs/analysis/concepts/rjm/fetch-pr-files.md (940 bytes)
- docs/analysis/concepts/rjm/build-comment-distribution.md (978 bytes)
- docs/analysis/concepts/rjm/build-file-distribution.md (982 bytes)
- docs/analysis/concepts/rjm/build-review-timeline.md (944 bytes)
- docs/analysis/concepts/rjm/find-synthesis-panels.md (987 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/extract-verdict-pattern.md ... docs/analysis/concepts/rjm/find-synthesis-panels.md` — exit code 0 (35 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
All 30 concepts in this unit represent internal Python constants, regular expressions, utility functions, exception classes, or CI runner environment variables across rjm's review, retrospective, and CI automation scripts. All were correctly categorized as `kind: name-only` per D-023 with `(used, not defined)` definitions and explanatory design notes.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 20 cited script files (~146 KB). Approximate tokens of output written: ~8,000 tokens across 30 concept cards (31,748 bytes).
