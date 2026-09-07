---
unit: cc-rjm-295
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-295

## Files assigned
- [x] sources/rjm/scripts/github_core/review_threads.py
- [x] sources/rjm/scripts/github_core/runs_file.py
- [x] sources/rjm/scripts/github_core/validation.py
- [x] sources/rjm/scripts/github_core/workflow_event_subscriptions.py
- [x] docs/analysis/inventory/rjm/scripts-github-core-review-threads-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-runs-file-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-validation-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-workflow-event-subscriptions-py.md

## Outputs produced
- docs/analysis/concepts/rjm/issue-1910.md (863 bytes)
- docs/analysis/concepts/rjm/thread-is-unresolved.md (915 bytes)
- docs/analysis/concepts/rjm/review-threads-max-pages.md (914 bytes)
- docs/analysis/concepts/rjm/review-threads-query.md (864 bytes)
- docs/analysis/concepts/rjm/log-structural-missing.md (878 bytes)
- docs/analysis/concepts/rjm/unwrap-review-threads.md (877 bytes)
- docs/analysis/concepts/rjm/fetch-review-threads-page.md (915 bytes)
- docs/analysis/concepts/rjm/log-review-threads-page.md (899 bytes)
- docs/analysis/concepts/rjm/warn-review-threads-capped.md (955 bytes)
- docs/analysis/concepts/rjm/warn-structural-truncation.md (923 bytes)
- docs/analysis/concepts/rjm/warn-cursor-missing.md (877 bytes)
- docs/analysis/concepts/rjm/bulk-cancel-guard-py.md (870 bytes)
- docs/analysis/concepts/rjm/string-list.md (858 bytes)
- docs/analysis/concepts/rjm/json-bool.md (866 bytes)
- docs/analysis/concepts/rjm/optional-str.md (861 bytes)
- docs/analysis/concepts/rjm/run-from-mapping.md (889 bytes)
- docs/analysis/concepts/rjm/run-from-manifest-entry.md (913 bytes)
- docs/analysis/concepts/rjm/load-runs-file.md (862 bytes)
- docs/analysis/concepts/rjm/owner-pattern.md (849 bytes)
- docs/analysis/concepts/rjm/repo-pattern.md (844 bytes)
- docs/analysis/concepts/rjm/directory-aliases.md (882 bytes)
- docs/analysis/concepts/rjm/traversal-pattern.md (886 bytes)
- docs/analysis/concepts/rjm/is-safe-file-path.md (912 bytes)
- docs/analysis/concepts/rjm/candidate-temp-roots.md (900 bytes)
- docs/analysis/concepts/rjm/candidate-git-dir-roots.md (909 bytes)
- docs/analysis/concepts/rjm/assert-valid-body-file.md (942 bytes)
- docs/analysis/concepts/rjm/escaped-newline-body-error.md (962 bytes)
- docs/analysis/concepts/rjm/inline-body-error.md (890 bytes)
- docs/analysis/concepts/rjm/default-pull-request-types.md (963 bytes)
- docs/analysis/concepts/rjm/pull-request-triggers.md (925 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-295.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/issue-1910.md docs/analysis/concepts/rjm/thread-is-unresolved.md docs/analysis/concepts/rjm/review-threads-max-pages.md docs/analysis/concepts/rjm/review-threads-query.md docs/analysis/concepts/rjm/log-structural-missing.md docs/analysis/concepts/rjm/unwrap-review-threads.md docs/analysis/concepts/rjm/fetch-review-threads-page.md docs/analysis/concepts/rjm/log-review-threads-page.md docs/analysis/concepts/rjm/warn-review-threads-capped.md docs/analysis/concepts/rjm/warn-structural-truncation.md docs/analysis/concepts/rjm/warn-cursor-missing.md docs/analysis/concepts/rjm/bulk-cancel-guard-py.md docs/analysis/concepts/rjm/string-list.md docs/analysis/concepts/rjm/json-bool.md docs/analysis/concepts/rjm/optional-str.md docs/analysis/concepts/rjm/run-from-mapping.md docs/analysis/concepts/rjm/run-from-manifest-entry.md docs/analysis/concepts/rjm/load-runs-file.md docs/analysis/concepts/rjm/owner-pattern.md docs/analysis/concepts/rjm/repo-pattern.md docs/analysis/concepts/rjm/directory-aliases.md docs/analysis/concepts/rjm/traversal-pattern.md docs/analysis/concepts/rjm/is-safe-file-path.md docs/analysis/concepts/rjm/candidate-temp-roots.md docs/analysis/concepts/rjm/candidate-git-dir-roots.md docs/analysis/concepts/rjm/assert-valid-body-file.md docs/analysis/concepts/rjm/escaped-newline-body-error.md docs/analysis/concepts/rjm/inline-body-error.md docs/analysis/concepts/rjm/default-pull-request-types.md docs/analysis/concepts/rjm/pull-request-triggers.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-295 produces 30 concept cards corresponding to the 30 concepts assigned in `facts/cc-rjm-295.txt`:
  1. Review threads helper identifiers and error signals from `scripts/github_core/review_threads.py`: `Issue #1910`, `_thread_is_unresolved`, `_REVIEW_THREADS_MAX_PAGES`, `_REVIEW_THREADS_QUERY`, `_log_structural_missing`, `_unwrap_review_threads`, `_fetch_review_threads_page`, `_log_review_threads_page`, `_warn_review_threads_capped`, `_warn_structural_truncation`, `_warn_cursor_missing`.
  2. Runs file parsing and deserialization helpers from `scripts/github_core/runs_file.py`: `bulk_cancel_guard.py`, `string_list`, `_json_bool`, `_optional_str`, `run_from_mapping`, `run_from_manifest_entry`, `load_runs_file`.
  3. Defensive validation helpers and constants from `scripts/github_core/validation.py`: `_OWNER_PATTERN`, `_REPO_PATTERN`, `_DIRECTORY_ALIASES`, `_TRAVERSAL_PATTERN`, `is_safe_file_path`, `_candidate_temp_roots`, `_candidate_git_dir_roots`, `assert_valid_body_file`, `escaped_newline_body_error`, `inline_body_error`.
  4. Workflow event subscription constants from `scripts/github_core/workflow_event_subscriptions.py`: `DEFAULT_PULL_REQUEST_TYPES`, `_PULL_REQUEST_TRIGGERS`.
- All 30 concepts are non-lifecycle concepts (internal helper functions, constants, regexes, issue references, or script names) and were authored with `kind: name-only` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-295.txt` are represented in the respective `Where used` tables.
- All 4 citing inventory cards (`scripts-github-core-review-threads-py.md`, `scripts-github-core-runs-file-py.md`, `scripts-github-core-validation-py.md`, and `scripts-github-core-workflow-event-subscriptions-py.md`) report clean defects (`Defects: none`), so `Implementation status` is `clean` for all 30 cards.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 4 source files (1,346 lines) and 4 inventory cards.
Approximate tokens of output written: ~7,000 tokens across 30 concept cards and 1 work-unit report.
