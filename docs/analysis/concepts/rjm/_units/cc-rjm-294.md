---
unit: cc-rjm-294
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-294

## Files assigned
- [x] sources/rjm/scripts/github_core/pull_request_targets.py
- [x] sources/rjm/scripts/github_core/rate_limit.py
- [x] sources/rjm/scripts/github_core/recovery_manifest.py
- [x] sources/rjm/scripts/github_core/repo.py
- [x] sources/rjm/scripts/github_core/runs_file.py
- [x] sources/rjm/scripts/github_core/validation.py
- [x] sources/rjm/scripts/github_core/workflow_event_subscriptions.py
- [x] sources/rjm/scripts/github_core/workflow_provenance.py
- [x] docs/analysis/inventory/rjm/scripts-github-core-pull-request-targets-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-rate-limit-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-recovery-manifest-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-repo-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-runs-file-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-validation-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-workflow-event-subscriptions-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-workflow-provenance-py.md

## Outputs produced
- docs/analysis/concepts/rjm/iter-paginated-list.md (1012 bytes)
- docs/analysis/concepts/rjm/pull-request-targets.md (954 bytes)
- docs/analysis/concepts/rjm/probe-endpoint.md (911 bytes)
- docs/analysis/concepts/rjm/graphql-probe-args.md (954 bytes)
- docs/analysis/concepts/rjm/run-probe.md (924 bytes)
- docs/analysis/concepts/rjm/probe-api-serving.md (951 bytes)
- docs/analysis/concepts/rjm/probe-failure-is-a-refusal.md (1007 bytes)
- docs/analysis/concepts/rjm/fetch-rate-limit.md (911 bytes)
- docs/analysis/concepts/rjm/evaluate-resource.md (912 bytes)
- docs/analysis/concepts/rjm/probe-api-reachability.md (1019 bytes)
- docs/analysis/concepts/rjm/issue-4835.md (1438 bytes)
- docs/analysis/concepts/rjm/pull-request-recovery-events.md (1233 bytes)
- docs/analysis/concepts/rjm/recovery-events.md (1129 bytes)
- docs/analysis/concepts/rjm/workflowsubscriptions.md (1151 bytes)
- docs/analysis/concepts/rjm/declared-required-contexts.md (1160 bytes)
- docs/analysis/concepts/rjm/subscribes-to.md (1201 bytes)
- docs/analysis/concepts/rjm/manifest-version.md (870 bytes)
- docs/analysis/concepts/rjm/active-statuses.md (1132 bytes)
- docs/analysis/concepts/rjm/recoveryentry.md (972 bytes)
- docs/analysis/concepts/rjm/blastradius.md (945 bytes)
- docs/analysis/concepts/rjm/recoverymanifest.md (974 bytes)
- docs/analysis/concepts/rjm/dedupe-runs.md (964 bytes)
- docs/analysis/concepts/rjm/summarize-blast-radius.md (1011 bytes)
- docs/analysis/concepts/rjm/resolve-workflow.md (944 bytes)
- docs/analysis/concepts/rjm/plan-recovery.md (918 bytes)
- docs/analysis/concepts/rjm/manifest-to-dict.md (978 bytes)
- docs/analysis/concepts/rjm/default-timeout.md (874 bytes)
- docs/analysis/concepts/rjm/repo-root-not-a-repo.md (1106 bytes)
- docs/analysis/concepts/rjm/repo-root-git-failed.md (938 bytes)
- docs/analysis/concepts/rjm/not-a-repo-stderr.md (979 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-294.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/iter-paginated-list.md docs/analysis/concepts/rjm/pull-request-targets.md docs/analysis/concepts/rjm/probe-endpoint.md docs/analysis/concepts/rjm/graphql-probe-args.md docs/analysis/concepts/rjm/run-probe.md docs/analysis/concepts/rjm/probe-api-serving.md docs/analysis/concepts/rjm/probe-failure-is-a-refusal.md docs/analysis/concepts/rjm/fetch-rate-limit.md docs/analysis/concepts/rjm/evaluate-resource.md docs/analysis/concepts/rjm/probe-api-reachability.md docs/analysis/concepts/rjm/issue-4835.md docs/analysis/concepts/rjm/pull-request-recovery-events.md docs/analysis/concepts/rjm/recovery-events.md docs/analysis/concepts/rjm/workflowsubscriptions.md docs/analysis/concepts/rjm/declared-required-contexts.md docs/analysis/concepts/rjm/subscribes-to.md docs/analysis/concepts/rjm/manifest-version.md docs/analysis/concepts/rjm/active-statuses.md docs/analysis/concepts/rjm/recoveryentry.md docs/analysis/concepts/rjm/blastradius.md docs/analysis/concepts/rjm/recoverymanifest.md docs/analysis/concepts/rjm/dedupe-runs.md docs/analysis/concepts/rjm/summarize-blast-radius.md docs/analysis/concepts/rjm/resolve-workflow.md docs/analysis/concepts/rjm/plan-recovery.md docs/analysis/concepts/rjm/manifest-to-dict.md docs/analysis/concepts/rjm/default-timeout.md docs/analysis/concepts/rjm/repo-root-not-a-repo.md docs/analysis/concepts/rjm/repo-root-git-failed.md docs/analysis/concepts/rjm/not-a-repo-stderr.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-294 completes 30 concept cards spanning core GitHub infrastructure automation modules:
  1. Pull request targets discovery and pagination (`iter-paginated-list`, `pull-request-targets`) from `pull_request_targets.py`.
  2. Rate limit probing, non-exempt live endpoint checks, and quota status evaluation (`probe-endpoint`, `graphql-probe-args`, `run-probe`, `probe-api-serving`, `probe-failure-is-a-refusal`, `fetch-rate-limit`, `evaluate-resource`, `probe-api-reachability`) from `rate_limit.py`.
  3. Bulk Actions cancellation recovery verification, incident reference, event subscriptions, and manifest data structures (`issue-4835`, `pull-request-recovery-events`, `recovery-events`, `workflowsubscriptions`, `declared-required-contexts`, `subscribes-to`, `manifest-version`, `active-statuses`, `recoveryentry`, `blastradius`, `recoverymanifest`, `dedupe-runs`, `summarize-blast-radius`, `resolve-workflow`, `plan-recovery`, `manifest-to-dict`) from `recovery_manifest.py`, `workflow_event_subscriptions.py`, `runs_file.py`, and `workflow_provenance.py`.
  4. Repository root discovery with git worktree awareness and error classification status constants (`default-timeout`, `repo-root-not-a-repo`, `repo-root-git-failed`, `not-a-repo-stderr`) from `repo.py` and `validation.py`.
- All 30 concepts represent Python constants, functions, dataclasses, or issue tracker references rather than standalone SDLC lifecycle methodology concepts; therefore, all cards were authored with `kind: name-only` per D-023.
- All 40 occurrences recorded in `facts/cc-rjm-294.txt` are exhaustively represented in the respective Where used tables.
- Defect annotations from citing inventory cards were propagated to `Implementation status` (`defects: script-bug` for `pull_request_targets.py` concepts; `clean` for all others).
- Byte-exact quote verification confirmed via `bun scripts/synthesis/quote-check.ts` with 30 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~21,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
