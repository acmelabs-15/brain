---
unit: cc-rjm-300
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-300

## Files assigned
- [x] sources/rjm/scripts/issue_triage.py
- [x] sources/rjm/scripts/llm_classification/__init__.py
- [x] sources/rjm/scripts/llm_classification/cache.py
- [x] sources/rjm/scripts/llm_classification/classifier.py
- [x] sources/rjm/scripts/llm_classification/config.py
- [x] sources/rjm/scripts/maintenance/_gc_stale.py
- [x] sources/rjm/scripts/maintenance/repair_worktree_venv.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] docs/analysis/inventory/rjm/scripts-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-llm-classification---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-llm-classification-cache-py.md
- [x] docs/analysis/inventory/rjm/scripts-llm-classification-classifier-py.md
- [x] docs/analysis/inventory/rjm/scripts-llm-classification-config-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance--gc-stale-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-repair-worktree-venv-py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md

## Outputs produced
- docs/analysis/concepts/rjm/is-stale.md (1337 bytes)
- docs/analysis/concepts/rjm/has-priority-label.md (911 bytes)
- docs/analysis/concepts/rjm/has-area-label.md (885 bytes)
- docs/analysis/concepts/rjm/has-agent-label.md (895 bytes)
- docs/analysis/concepts/rjm/check-state-consistency.md (988 bytes)
- docs/analysis/concepts/rjm/detect-linked-pr-status.md (986 bytes)
- docs/analysis/concepts/rjm/normalize-title-tokens.md (972 bytes)
- docs/analysis/concepts/rjm/detect-duplicates.md (993 bytes)
- docs/analysis/concepts/rjm/fetch-open-issues.md (888 bytes)
- docs/analysis/concepts/rjm/linkedprfetcherror.md (925 bytes)
- docs/analysis/concepts/rjm/fetch-linked-prs.md (959 bytes)
- docs/analysis/concepts/rjm/load-scan-state.md (926 bytes)
- docs/analysis/concepts/rjm/save-scan-state.md (910 bytes)
- docs/analysis/concepts/rjm/format-human.md (902 bytes)
- docs/analysis/concepts/rjm/load-issues-from-input.md (904 bytes)
- docs/analysis/concepts/rjm/clawsweeper.md (936 bytes)
- docs/analysis/concepts/rjm/llmclassificationresult.md (1184 bytes)
- docs/analysis/concepts/rjm/llmclassifier.md (1193 bytes)
- docs/analysis/concepts/rjm/get-default-classifier.md (1201 bytes)
- docs/analysis/concepts/rjm/llmfallbackconfig.md (1326 bytes)
- docs/analysis/concepts/rjm/cacheentry.md (859 bytes)
- docs/analysis/concepts/rjm/classificationcache.md (1030 bytes)
- docs/analysis/concepts/rjm/normalize.md (894 bytes)
- docs/analysis/concepts/rjm/get.md (833 bytes)
- docs/analysis/concepts/rjm/put.md (831 bytes)
- docs/analysis/concepts/rjm/system-prompt.md (958 bytes)
- docs/analysis/concepts/rjm/get-client.md (898 bytes)
- docs/analysis/concepts/rjm/call-llm.md (924 bytes)
- docs/analysis/concepts/rjm/should-use-fallback.md (985 bytes)
- docs/analysis/concepts/rjm/post-init.md (870 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-300.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/is-stale.md docs/analysis/concepts/rjm/has-priority-label.md docs/analysis/concepts/rjm/has-area-label.md docs/analysis/concepts/rjm/has-agent-label.md docs/analysis/concepts/rjm/check-state-consistency.md docs/analysis/concepts/rjm/detect-linked-pr-status.md docs/analysis/concepts/rjm/normalize-title-tokens.md docs/analysis/concepts/rjm/detect-duplicates.md docs/analysis/concepts/rjm/fetch-open-issues.md docs/analysis/concepts/rjm/linkedprfetcherror.md docs/analysis/concepts/rjm/fetch-linked-prs.md docs/analysis/concepts/rjm/load-scan-state.md docs/analysis/concepts/rjm/save-scan-state.md docs/analysis/concepts/rjm/format-human.md docs/analysis/concepts/rjm/load-issues-from-input.md docs/analysis/concepts/rjm/clawsweeper.md docs/analysis/concepts/rjm/llmclassificationresult.md docs/analysis/concepts/rjm/llmclassifier.md docs/analysis/concepts/rjm/get-default-classifier.md docs/analysis/concepts/rjm/llmfallbackconfig.md docs/analysis/concepts/rjm/cacheentry.md docs/analysis/concepts/rjm/classificationcache.md docs/analysis/concepts/rjm/normalize.md docs/analysis/concepts/rjm/get.md docs/analysis/concepts/rjm/put.md docs/analysis/concepts/rjm/system-prompt.md docs/analysis/concepts/rjm/get-client.md docs/analysis/concepts/rjm/call-llm.md docs/analysis/concepts/rjm/should-use-fallback.md docs/analysis/concepts/rjm/post-init.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-300 completes 30 concept cards (42 occurrences) spanning two primary subsystem areas:
  1. Mechanical issue triage scanner (`scripts/issue_triage.py`): includes triage predicates (`is_stale`, `has_priority_label`, `has_area_label`, `has_agent_label`), consistency checkers (`check_state_consistency`, `detect_linked_pr_status`), duplicate detection (`normalize_title_tokens`, `detect_duplicates`), GitHub CLI helpers and state persistence (`fetch_open_issues`, `LinkedPrFetchError`, `fetch_linked_prs`, `load_scan_state`, `save_scan_state`, `format_human`, `load_issues_from_input`), and architectural pattern `ClawSweeper`.
  2. LLM-based review comment classification (`scripts/llm_classification/` and `scripts/update_reviewer_signal_stats.py`): includes core classification data models and classes (`LLMClassificationResult`, `LLMClassifier`, `get_default_classifier`, `LLMFallbackConfig`), caching layer components (`CacheEntry`, `ClassificationCache`, `_normalize`, `get`, `put`), internal LLM orchestration methods and constants (`_SYSTEM_PROMPT`, `_get_client`, `_call_llm`, `should_use_fallback`), and configuration hooks (`__post_init__`).
- Non-lifecycle concepts representing Python identifiers, functions, classes, and constants were classified with `kind: name-only` per D-023.
- All 42 occurrences recorded in `facts/cc-rjm-300.txt` are faithfully mapped into their corresponding `Where used` tables.
- Defect statuses from citing inventory cards were propagated to `Implementation status`: `defects: orphan` for components associated with `scripts/issue_triage.py` and `scripts/update_reviewer_signal_stats.py`, and `clean` for modules with no recorded defects.
- All 30 cards pass byte-exact verification via `quote-check.ts` with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
