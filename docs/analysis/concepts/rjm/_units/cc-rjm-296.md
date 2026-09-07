---
unit: cc-rjm-296
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-296

## Files assigned
- [x] sources/rjm/scripts/github_core/workflow_event_subscriptions.py
- [x] sources/rjm/scripts/github_core/workflow_provenance.py
- [x] sources/rjm/scripts/github_core/workflow_runs.py
- [x] sources/rjm/scripts/github_core/worktree_identity.py
- [x] docs/analysis/inventory/rjm/scripts-github-core-workflow-event-subscriptions-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-workflow-provenance-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-workflow-runs-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-worktree-identity-py.md

## Outputs produced
- docs/analysis/concepts/rjm/path-filter-keys.md (983 bytes)
- docs/analysis/concepts/rjm/expression-marker.md (961 bytes)
- docs/analysis/concepts/rjm/trigger-mapping.md (988 bytes)
- docs/analysis/concepts/rjm/declared-types.md (944 bytes)
- docs/analysis/concepts/rjm/declares-path-filter.md (968 bytes)
- docs/analysis/concepts/rjm/job-identities.md (1003 bytes)
- docs/analysis/concepts/rjm/parse-workflow-subscriptions.md (981 bytes)
- docs/analysis/concepts/rjm/pin-to-head-ref.md (1098 bytes)
- docs/analysis/concepts/rjm/narrow-to-shared.md (960 bytes)
- docs/analysis/concepts/rjm/load-workflow-subscriptions.md (991 bytes)
- docs/analysis/concepts/rjm/pr-5357.md (891 bytes)
- docs/analysis/concepts/rjm/merge-ref.md (889 bytes)
- docs/analysis/concepts/rjm/fetch-workflow-document.md (934 bytes)
- docs/analysis/concepts/rjm/resolve-run-subscriptions.md (951 bytes)
- docs/analysis/concepts/rjm/parse-at-ref.md (893 bytes)
- docs/analysis/concepts/rjm/page-size.md (826 bytes)
- docs/analysis/concepts/rjm/cancellationoutcome.md (879 bytes)
- docs/analysis/concepts/rjm/jobsnotmaterializederror.md (917 bytes)
- docs/analysis/concepts/rjm/pullrequesttarget.md (877 bytes)
- docs/analysis/concepts/rjm/cancel-runs.md (844 bytes)
- docs/analysis/concepts/rjm/collect-runs-for-targets.md (899 bytes)
- docs/analysis/concepts/rjm/iter-paginated.md (846 bytes)
- docs/analysis/concepts/rjm/run-contexts.md (841 bytes)
- docs/analysis/concepts/rjm/max-pages.md (838 bytes)
- docs/analysis/concepts/rjm/path-segment.md (862 bytes)
- docs/analysis/concepts/rjm/query-value.md (891 bytes)
- docs/analysis/concepts/rjm/branch-runs.md (863 bytes)
- docs/analysis/concepts/rjm/run-head-repository.md (938 bytes)
- docs/analysis/concepts/rjm/bot-name.md (846 bytes)
- docs/analysis/concepts/rjm/bot-email.md (878 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-296.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/path-filter-keys.md docs/analysis/concepts/rjm/expression-marker.md docs/analysis/concepts/rjm/trigger-mapping.md docs/analysis/concepts/rjm/declared-types.md docs/analysis/concepts/rjm/declares-path-filter.md docs/analysis/concepts/rjm/job-identities.md docs/analysis/concepts/rjm/parse-workflow-subscriptions.md docs/analysis/concepts/rjm/pin-to-head-ref.md docs/analysis/concepts/rjm/narrow-to-shared.md docs/analysis/concepts/rjm/load-workflow-subscriptions.md docs/analysis/concepts/rjm/pr-5357.md docs/analysis/concepts/rjm/merge-ref.md docs/analysis/concepts/rjm/fetch-workflow-document.md docs/analysis/concepts/rjm/resolve-run-subscriptions.md docs/analysis/concepts/rjm/parse-at-ref.md docs/analysis/concepts/rjm/page-size.md docs/analysis/concepts/rjm/cancellationoutcome.md docs/analysis/concepts/rjm/jobsnotmaterializederror.md docs/analysis/concepts/rjm/pullrequesttarget.md docs/analysis/concepts/rjm/cancel-runs.md docs/analysis/concepts/rjm/collect-runs-for-targets.md docs/analysis/concepts/rjm/iter-paginated.md docs/analysis/concepts/rjm/run-contexts.md docs/analysis/concepts/rjm/max-pages.md docs/analysis/concepts/rjm/path-segment.md docs/analysis/concepts/rjm/query-value.md docs/analysis/concepts/rjm/branch-runs.md docs/analysis/concepts/rjm/run-head-repository.md docs/analysis/concepts/rjm/bot-name.md docs/analysis/concepts/rjm/bot-email.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-296 completes 30 concept cards across GitHub core infrastructure modules in `scripts/github_core/`:
  1. Workflow event subscription analysis (`workflow_event_subscriptions.py`): `_PATH_FILTER_KEYS`, `_EXPRESSION_MARKER`, `_trigger_mapping`, `_declared_types`, `_declares_path_filter`, `_job_identities`, `parse_workflow_subscriptions`, `pin_to_head_ref`, `_narrow_to_shared`, `load_workflow_subscriptions`.
  2. Workflow provenance resolution from Git merge refs (`workflow_provenance.py`): `PR #5357`, `merge_ref`, `fetch_workflow_document`, `resolve_run_subscriptions`, `_parse_at_ref` (plus second occurrence of `pin_to_head_ref`).
  3. Workflow run enumeration and safe cancellation (`workflow_runs.py`): `PAGE_SIZE`, `CancellationOutcome`, `JobsNotMaterializedError`, `PullRequestTarget`, `cancel_runs`, `collect_runs_for_targets`, `iter_paginated`, `run_contexts`, `_MAX_PAGES`, `_path_segment`, `_query_value`, `_branch_runs`, `run_head_repository`.
  4. Git worktree operator identity management (`worktree_identity.py`): `_BOT_NAME`, `_BOT_EMAIL`.
- All 30 concepts represent Python constants, functions, classes, or PR issue references in helper scripts rather than SDLC lifecycle concepts, and are correctly classified with `kind: name-only` and `package_phase: none` per D-023.
- All 31 occurrences recorded in `facts/cc-rjm-296.txt` (including 2 occurrences for `pin_to_head_ref`) are mapped into the respective `Where used` tables.
- All citing inventory cards (`scripts-github-core-workflow-event-subscriptions-py.md`, `scripts-github-core-workflow-provenance-py.md`, `scripts-github-core-workflow-runs-py.md`, `scripts-github-core-worktree-identity-py.md`) report `Defects: none`, so `Implementation status` is `clean` across all cards.
- All 30 concept cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~9,000 tokens across 30 authored concept cards and 1 unit report.
