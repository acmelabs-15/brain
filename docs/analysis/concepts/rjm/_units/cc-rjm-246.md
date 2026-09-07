---
unit: cc-rjm-246
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-246

## Files assigned
- [x] sources/rjm/scripts/ai_review_common/issue_triage.py
- [x] sources/rjm/scripts/ai_review_common/quality_gate.py
- [x] sources/rjm/scripts/ai_review_common/retry.py
- [x] sources/rjm/scripts/ai_review_common/verdict.py
- [x] sources/rjm/scripts/ai_review_common/workflow.py
- [x] sources/rjm/scripts/ci/invoke_copilot_cli.py
- [x] sources/rjm/scripts/eval/_eval_api_adapter_constants.py
- [x] sources/rjm/scripts/llm_classification/classifier.py
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-quality-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-retry-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-verdict-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-workflow-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-invoke-copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-api-adapter-constants-py.md
- [x] docs/analysis/inventory/rjm/scripts-llm-classification-classifier-py.md

## Outputs produced
- docs/analysis/concepts/rjm/emoji-map.md (872 bytes)
- docs/analysis/concepts/rjm/get-verdict-exit-code.md (937 bytes)
- docs/analysis/concepts/rjm/format-collapsible-section.md (1027 bytes)
- docs/analysis/concepts/rjm/format-verdict-alert.md (980 bytes)
- docs/analysis/concepts/rjm/format-markdown-table-row.md (982 bytes)
- docs/analysis/concepts/rjm/convert-to-json-escaped.md (945 bytes)
- docs/analysis/concepts/rjm/write-log.md (877 bytes)
- docs/analysis/concepts/rjm/write-log-error.md (900 bytes)
- docs/analysis/concepts/rjm/invoke-with-retry.md (1270 bytes)
- docs/analysis/concepts/rjm/get-failure-category.md (1060 bytes)
- docs/analysis/concepts/rjm/get-labels.md (964 bytes)
- docs/analysis/concepts/rjm/get-labels-from-ai-output.md (1113 bytes)
- docs/analysis/concepts/rjm/get-milestone.md (981 bytes)
- docs/analysis/concepts/rjm/get-milestone-from-ai-output.md (1117 bytes)
- docs/analysis/concepts/rjm/get-verdict.md (1001 bytes)
- docs/analysis/concepts/rjm/get-concurrency-group-from-run.md (1118 bytes)
- docs/analysis/concepts/rjm/get-pr-changed-files.md (1103 bytes)
- docs/analysis/concepts/rjm/get-workflow-runs-by-pr.md (1049 bytes)
- docs/analysis/concepts/rjm/runs-overlap.md (1067 bytes)
- docs/analysis/concepts/rjm/t.md (850 bytes)
- docs/analysis/concepts/rjm/default-max-retries.md (1007 bytes)
- docs/analysis/concepts/rjm/default-retry-delay.md (891 bytes)
- docs/analysis/concepts/rjm/get-config-int.md (903 bytes)
- docs/analysis/concepts/rjm/max-retries.md (920 bytes)
- docs/analysis/concepts/rjm/retry-delay.md (1090 bytes)
- docs/analysis/concepts/rjm/verdict-pattern.md (892 bytes)
- docs/analysis/concepts/rjm/keyword-rules.md (922 bytes)
- docs/analysis/concepts/rjm/label-pattern.md (868 bytes)
- docs/analysis/concepts/rjm/milestone-pattern.md (896 bytes)
- docs/analysis/concepts/rjm/known-verdict-tokens.md (942 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-246.md (this report)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/emoji-map.md docs/analysis/concepts/rjm/get-verdict-exit-code.md docs/analysis/concepts/rjm/format-collapsible-section.md docs/analysis/concepts/rjm/format-verdict-alert.md docs/analysis/concepts/rjm/format-markdown-table-row.md docs/analysis/concepts/rjm/convert-to-json-escaped.md docs/analysis/concepts/rjm/write-log.md docs/analysis/concepts/rjm/write-log-error.md docs/analysis/concepts/rjm/invoke-with-retry.md docs/analysis/concepts/rjm/get-failure-category.md docs/analysis/concepts/rjm/get-labels.md docs/analysis/concepts/rjm/get-labels-from-ai-output.md docs/analysis/concepts/rjm/get-milestone.md docs/analysis/concepts/rjm/get-milestone-from-ai-output.md docs/analysis/concepts/rjm/get-verdict.md docs/analysis/concepts/rjm/get-concurrency-group-from-run.md docs/analysis/concepts/rjm/get-pr-changed-files.md docs/analysis/concepts/rjm/get-workflow-runs-by-pr.md docs/analysis/concepts/rjm/runs-overlap.md docs/analysis/concepts/rjm/t.md docs/analysis/concepts/rjm/default-max-retries.md docs/analysis/concepts/rjm/default-retry-delay.md docs/analysis/concepts/rjm/get-config-int.md docs/analysis/concepts/rjm/max-retries.md docs/analysis/concepts/rjm/retry-delay.md docs/analysis/concepts/rjm/verdict-pattern.md docs/analysis/concepts/rjm/keyword-rules.md docs/analysis/concepts/rjm/label-pattern.md docs/analysis/concepts/rjm/milestone-pattern.md docs/analysis/concepts/rjm/known-verdict-tokens.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-246 covers 30 concept cards representing helper function identifiers, constants, pattern expressions, and typing constructs across `scripts/ai_review_common/` (issue_triage.py, quality_gate.py, retry.py, verdict.py, workflow.py), `scripts/ci/invoke_copilot_cli.py`, `scripts/eval/_eval_api_adapter_constants.py`, and `scripts/llm_classification/classifier.py`.
- All 30 concepts are code-level Python symbols and utility identifiers rather than high-level SDLC lifecycle concepts, and were classified as `kind: name-only` per D-023.
- All 45 occurrences recorded in unit facts were mapped into their respective Where used tables with exact file paths, line citations, roles, and usage descriptions.
- Implementation status fields reflect defects recorded in the corresponding inventory cards (including `script-bug` and `other` in `issue_triage.py`, and `orphan` in `invoke_copilot_cli.py`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~20,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~8,500 tokens across 30 concept cards and 1 unit report.
