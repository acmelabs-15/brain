---
unit: inv-rjm-196
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-196

## Files assigned
- [x] sources/rjm/scripts/ai_review_common/issue_triage.py
- [x] sources/rjm/scripts/ai_review_common/quality_gate.py
- [x] sources/rjm/scripts/ai_review_common/retry.py
- [x] sources/rjm/scripts/ai_review_common/verdict.py
- [x] sources/rjm/scripts/ai_review_common/workflow.py
- [x] sources/rjm/scripts/ai_review_outputs.py
- [x] sources/rjm/scripts/analyze_pr_failure.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ai-review-common-issue-triage-py.md (6044 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-quality-gate-py.md (5011 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-retry-py.md (3503 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-verdict-py.md (5932 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-workflow-py.md (4390 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-outputs-py.md (4061 bytes)
- docs/analysis/inventory/rjm/scripts-analyze-pr-failure-py.md (5739 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-196.md

## Scripts executed
- `sources/rjm/scripts/ai_review_common/issue_triage.py`: `python3 -m scripts.ai_review_common.issue_triage`, exit code 0
- `sources/rjm/scripts/ai_review_common/quality_gate.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/ai_review_common/quality_gate.py`, exit code 0
- `sources/rjm/scripts/ai_review_common/retry.py`: `python3 sources/rjm/scripts/ai_review_common/retry.py`, exit code 0
- `sources/rjm/scripts/ai_review_common/verdict.py`: `python3 sources/rjm/scripts/ai_review_common/verdict.py`, exit code 0
- `sources/rjm/scripts/ai_review_common/workflow.py`: `python3 sources/rjm/scripts/ai_review_common/workflow.py`, exit code 0
- `sources/rjm/scripts/ai_review_outputs.py`: `python3 sources/rjm/scripts/ai_review_outputs.py`, exit code 0
- `sources/rjm/scripts/analyze_pr_failure.py`: `python3 sources/rjm/scripts/analyze_pr_failure.py --help`, exit code 0; `python3 sources/rjm/scripts/analyze_pr_failure.py`, exit code 2; `python3 sources/rjm/scripts/analyze_pr_failure.py --pr 999999 --owner nonexist --repo nonexist`, exit code 3

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/ai_review_common/verdict.py` is the canonical implementation of the review verdict vocabulary (`PASS`, `WARN`, `CRITICAL_FAIL`, `UNKNOWN`, etc.) and priority resolution (`merge_verdicts`). It is vendored into `.claude/lib/ai_review_common/verdict.py` and referenced extensively across review axes (`.claude/skills/review/references/`).
- `scripts/ai_review_outputs.py` calls `scripts/redact_secrets.py` (which is part of another inventory unit) to redact sensitive CI tokens prior to writing review outputs.
- `scripts/analyze_pr_failure.py` is a standalone retrospective data-gathering utility that queries GitHub PR metrics and maps them to `.agents/retrospective/*pr-<pr>*` synthesis panels.

## Blocked or uncertain
none

## Time and size
Source read: ~42,966 bytes (approx. 10,700 tokens across 7 files).
Output written: ~37,000 bytes (approx. 9,200 tokens across 7 inventory cards and unit report).
