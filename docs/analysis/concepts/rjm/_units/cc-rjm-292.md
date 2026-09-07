---
unit: cc-rjm-292
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-292

## Files assigned
- [x] sources/rjm/scripts/github_core/bot_config.py
- [x] sources/rjm/scripts/github_core/checks_rollup.py
- [x] sources/rjm/scripts/github_core/comment_classification.py
- [x] sources/rjm/scripts/github_core/discourse_traversal.py
- [x] sources/rjm/scripts/github_core/formatting.py
- [x] sources/rjm/scripts/progress/reporter.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] docs/analysis/inventory/rjm/scripts-github-core-bot-config-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-checks-rollup-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-comment-classification-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-discourse-traversal-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-formatting-py.md
- [x] docs/analysis/inventory/rjm/scripts-progress-reporter-py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md

## Outputs produced
- docs/analysis/concepts/rjm/default-bots.md (865 bytes)
- docs/analysis/concepts/rjm/get-bot-authors-config.md (854 bytes)
- docs/analysis/concepts/rjm/get-bot-authors.md (801 bytes)
- docs/analysis/concepts/rjm/canonicalize-login.md (1035 bytes)
- docs/analysis/concepts/rjm/isrequired.md (913 bytes)
- docs/analysis/concepts/rjm/checkrun.md (828 bytes)
- docs/analysis/concepts/rjm/statuscontext.md (849 bytes)
- docs/analysis/concepts/rjm/extract-workflow-run-id.md (884 bytes)
- docs/analysis/concepts/rjm/partition-rows-by-run.md (863 bytes)
- docs/analysis/concepts/rjm/group-checks-by-name.md (842 bytes)
- docs/analysis/concepts/rjm/extract-required-check-lists.md (881 bytes)
- docs/analysis/concepts/rjm/fetch-ruleset-required-contexts.md (905 bytes)
- docs/analysis/concepts/rjm/find-missing-required.md (864 bytes)
- docs/analysis/concepts/rjm/security-pattern.md (875 bytes)
- docs/analysis/concepts/rjm/bug-pattern.md (846 bytes)
- docs/analysis/concepts/rjm/style-pattern.md (878 bytes)
- docs/analysis/concepts/rjm/summary-pattern.md (884 bytes)
- docs/analysis/concepts/rjm/parser-version.md (865 bytes)
- docs/analysis/concepts/rjm/referenceparser.md (874 bytes)
- docs/analysis/concepts/rjm/defaultparser.md (860 bytes)
- docs/analysis/concepts/rjm/invarianterror.md (871 bytes)
- docs/analysis/concepts/rjm/parserversionmismatcherror.md (932 bytes)
- docs/analysis/concepts/rjm/checkpoint.md (980 bytes)
- docs/analysis/concepts/rjm/save-checkpoint.md (880 bytes)
- docs/analysis/concepts/rjm/load-checkpoint.md (886 bytes)
- docs/analysis/concepts/rjm/itemfetcher.md (853 bytes)
- docs/analysis/concepts/rjm/traversalresult.md (864 bytes)
- docs/analysis/concepts/rjm/traverse.md (844 bytes)
- docs/analysis/concepts/rjm/priority-emoji.md (820 bytes)
- docs/analysis/concepts/rjm/reaction-emoji.md (828 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-292.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/default-bots.md docs/analysis/concepts/rjm/get-bot-authors-config.md docs/analysis/concepts/rjm/get-bot-authors.md docs/analysis/concepts/rjm/canonicalize-login.md docs/analysis/concepts/rjm/isrequired.md docs/analysis/concepts/rjm/checkrun.md docs/analysis/concepts/rjm/statuscontext.md docs/analysis/concepts/rjm/extract-workflow-run-id.md docs/analysis/concepts/rjm/partition-rows-by-run.md docs/analysis/concepts/rjm/group-checks-by-name.md docs/analysis/concepts/rjm/extract-required-check-lists.md docs/analysis/concepts/rjm/fetch-ruleset-required-contexts.md docs/analysis/concepts/rjm/find-missing-required.md docs/analysis/concepts/rjm/security-pattern.md docs/analysis/concepts/rjm/bug-pattern.md docs/analysis/concepts/rjm/style-pattern.md docs/analysis/concepts/rjm/summary-pattern.md docs/analysis/concepts/rjm/parser-version.md docs/analysis/concepts/rjm/referenceparser.md docs/analysis/concepts/rjm/defaultparser.md docs/analysis/concepts/rjm/invarianterror.md docs/analysis/concepts/rjm/parserversionmismatcherror.md docs/analysis/concepts/rjm/checkpoint.md docs/analysis/concepts/rjm/save-checkpoint.md docs/analysis/concepts/rjm/load-checkpoint.md docs/analysis/concepts/rjm/itemfetcher.md docs/analysis/concepts/rjm/traversalresult.md docs/analysis/concepts/rjm/traverse.md docs/analysis/concepts/rjm/priority-emoji.md docs/analysis/concepts/rjm/reaction-emoji.md` (exit code 0, 30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-292 covers 30 concept cards across 7 core Python scripts and modules in rjm:
  1. `scripts/github_core/bot_config.py`: Bot account detection, configuration loading, and username canonicalization (`_DEFAULT_BOTS`, `get_bot_authors_config`, `get_bot_authors`, `canonicalize_login`).
  2. `scripts/github_core/checks_rollup.py`: Status check evaluation, workflow run grouping, ruleset context retrieval, and missing check identification (`isRequired`, `CheckRun`, `StatusContext`, `extract_workflow_run_id`, `partition_rows_by_run`, `group_checks_by_name`, `extract_required_check_lists`, `fetch_ruleset_required_contexts`, `find_missing_required`).
  3. `scripts/github_core/comment_classification.py`: Regex pattern triage for review comments into domains (`_SECURITY_PATTERN`, `_BUG_PATTERN`, `_STYLE_PATTERN`, `_SUMMARY_PATTERN`).
  4. `scripts/github_core/discourse_traversal.py`: Persistent BFS traversal for linked GitHub issues and pull requests (`PARSER_VERSION`, `ReferenceParser`, `DefaultParser`, `InvariantError`, `ParserVersionMismatchError`, `Checkpoint`, `save_checkpoint`, `load_checkpoint`, `ItemFetcher`, `TraversalResult`, `traverse`).
  5. `scripts/github_core/formatting.py`: Emoji dictionary mappings for priorities and reactions (`PRIORITY_EMOJI`, `REACTION_EMOJI`).
  6. `scripts/progress/reporter.py`: CLI progress reporting checkpoint usage (`Checkpoint`).
  7. `scripts/update_reviewer_signal_stats.py`: Reviewer stats aggregation importing `canonicalize_login`.
- All 30 concepts represent programming identifiers, functions, classes, constants, exception types, or API fields and were classified as `kind: name-only` per D-023.
- All 32 occurrences listed in `facts/cc-rjm-292.txt` are represented in the respective `Where used` tables (including the two multi-occurrence concepts `canonicalize_login` and `Checkpoint`).
- Defect annotations from citing inventory cards were propagated to `Implementation status` (`clean` for bot_config, checks_rollup, formatting, progress/reporter; `defects: orphan` for comment_classification, discourse_traversal, update_reviewer_signal_stats, and the concepts referencing them).
- Byte-exact verification was confirmed via `bun scripts/synthesis/quote-check.ts` with 30 PASS and 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~6,800 tokens across 30 concept cards and 1 work-unit report.
