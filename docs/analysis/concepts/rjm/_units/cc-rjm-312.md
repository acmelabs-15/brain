---
unit: cc-rjm-312
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-312

## Files assigned
- [x] sources/rjm/scripts/redact_secrets.py
- [x] sources/rjm/scripts/report_pr_supersession.py
- [x] sources/rjm/scripts/restructure_memories.py
- [x] docs/analysis/inventory/rjm/scripts-redact-secrets-py.md
- [x] docs/analysis/inventory/rjm/scripts-report-pr-supersession-py.md
- [x] docs/analysis/inventory/rjm/scripts-restructure-memories-py.md

## Outputs produced
- docs/analysis/concepts/rjm/bearer-token.md (927 bytes)
- docs/analysis/concepts/rjm/email.md (801 bytes)
- docs/analysis/concepts/rjm/redactionresult.md (867 bytes)
- docs/analysis/concepts/rjm/redact.md (877 bytes)
- docs/analysis/concepts/rjm/environment-secret.md (921 bytes)
- docs/analysis/concepts/rjm/authorization-header.md (925 bytes)
- docs/analysis/concepts/rjm/url-credential.md (884 bytes)
- docs/analysis/concepts/rjm/credential-assignment.md (940 bytes)
- docs/analysis/concepts/rjm/issue-4355.md (899 bytes)
- docs/analysis/concepts/rjm/closed-linked-issue.md (962 bytes)
- docs/analysis/concepts/rjm/stale-base.md (948 bytes)
- docs/analysis/concepts/rjm/no-linked-issue.md (947 bytes)
- docs/analysis/concepts/rjm/check-pr-live-state-py.md (967 bytes)
- docs/analysis/concepts/rjm/default-stale-base.md (893 bytes)
- docs/analysis/concepts/rjm/reason-closed-issue.md (918 bytes)
- docs/analysis/concepts/rjm/reason-no-issue.md (890 bytes)
- docs/analysis/concepts/rjm/reason-stale-base.md (899 bytes)
- docs/analysis/concepts/rjm/linked-issue-states.md (971 bytes)
- docs/analysis/concepts/rjm/classify-pull-request.md (916 bytes)
- docs/analysis/concepts/rjm/render-human.md (889 bytes)
- docs/analysis/concepts/rjm/githubreaderror.md (884 bytes)
- docs/analysis/concepts/rjm/fetch-open-pull-requests.md (986 bytes)
- docs/analysis/concepts/rjm/fetch-base-distance.md (982 bytes)
- docs/analysis/concepts/rjm/collect-distances.md (961 bytes)
- docs/analysis/concepts/rjm/memories-dir.md (869 bytes)
- docs/analysis/concepts/rjm/top-level-keep.md (883 bytes)
- docs/analysis/concepts/rjm/min-group-size.md (883 bytes)
- docs/analysis/concepts/rjm/prefix-to-dir.md (862 bytes)
- docs/analysis/concepts/rjm/is-index-file.md (899 bytes)
- docs/analysis/concepts/rjm/classify-file.md (916 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-312.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/bearer-token.md docs/analysis/concepts/rjm/email.md docs/analysis/concepts/rjm/redactionresult.md docs/analysis/concepts/rjm/redact.md docs/analysis/concepts/rjm/environment-secret.md docs/analysis/concepts/rjm/authorization-header.md docs/analysis/concepts/rjm/url-credential.md docs/analysis/concepts/rjm/credential-assignment.md docs/analysis/concepts/rjm/issue-4355.md docs/analysis/concepts/rjm/closed-linked-issue.md docs/analysis/concepts/rjm/stale-base.md docs/analysis/concepts/rjm/no-linked-issue.md docs/analysis/concepts/rjm/check-pr-live-state-py.md docs/analysis/concepts/rjm/default-stale-base.md docs/analysis/concepts/rjm/reason-closed-issue.md docs/analysis/concepts/rjm/reason-no-issue.md docs/analysis/concepts/rjm/reason-stale-base.md docs/analysis/concepts/rjm/linked-issue-states.md docs/analysis/concepts/rjm/classify-pull-request.md docs/analysis/concepts/rjm/render-human.md docs/analysis/concepts/rjm/githubreaderror.md docs/analysis/concepts/rjm/fetch-open-pull-requests.md docs/analysis/concepts/rjm/fetch-base-distance.md docs/analysis/concepts/rjm/collect-distances.md docs/analysis/concepts/rjm/memories-dir.md docs/analysis/concepts/rjm/top-level-keep.md docs/analysis/concepts/rjm/min-group-size.md docs/analysis/concepts/rjm/prefix-to-dir.md docs/analysis/concepts/rjm/is-index-file.md docs/analysis/concepts/rjm/classify-file.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-312 completes 30 concept cards (30 occurrences) across three utility scripts:
  1. Secret and PII redaction (`scripts/redact_secrets.py`): includes token pattern rules (`bearer-token`, `email`), result data structure (`RedactionResult`), core transformation function (`redact`), and CI sink redaction reason identifiers (`environment-secret`, `authorization-header`, `url-credential`, `credential-assignment`).
  2. Pull request supersession diagnostic reporting (`scripts/report_pr_supersession.py`): includes tracking issue citation (`issue #4355`), classification reason labels (`closed-linked-issue`, `stale-base`, `no-linked-issue`), referenced comparison script (`check_pr_live_state.py`), threshold and reason constants (`DEFAULT_STALE_BASE`, `REASON_CLOSED_ISSUE`, `REASON_NO_ISSUE`, `REASON_STALE_BASE`), pure domain logic and formatters (`linked_issue_states`, `classify_pull_request`, `render_human`), and GitHub API I/O adapters (`GitHubReadError`, `fetch_open_pull_requests`, `fetch_base_distance`, `collect_distances`).
  3. Serena memory directory restructuring (`scripts/restructure_memories.py`): includes configuration constants (`MEMORIES_DIR`, `TOP_LEVEL_KEEP`, `MIN_GROUP_SIZE`, `PREFIX_TO_DIR`), and file classification predicates/functions (`is_index_file`, `classify_file`).
- All 30 concepts represent Python functions, data classes, string constants, tracking issues, or script filenames and are classified as `kind: name-only` per D-023 with `(used, not defined)` definitions and rationale in design notes.
- Defect statuses were mapped from citing inventory cards: `clean` for `scripts/redact_secrets.py`, `defects: missing-path` for `scripts/report_pr_supersession.py`, and `defects: script-bug` for `scripts/restructure_memories.py`.
- All 30 cards pass byte-exact verification via `quote-check.ts` with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 3 source files and 3 inventory cards.
Approximate tokens of output written: ~8,200 tokens across 30 authored concept cards and 1 unit report.
