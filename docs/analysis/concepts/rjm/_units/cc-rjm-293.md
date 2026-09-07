---
unit: cc-rjm-293
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-293

## Files assigned
- [x] sources/rjm/scripts/github_core/formatting.py
- [x] sources/rjm/scripts/github_core/gh_client.py
- [x] sources/rjm/scripts/github_core/output.py
- [x] sources/rjm/scripts/github_core/placeholder_identity.py
- [x] sources/rjm/scripts/github_core/pr_merge_state.py
- [x] sources/rjm/scripts/github_core/protocol.py
- [x] sources/rjm/scripts/github_core/pull_request_targets.py
- [x] sources/rjm/scripts/validate_skill_output.py
- [x] docs/analysis/inventory/rjm/scripts-github-core-formatting-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-gh-client-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-output-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-placeholder-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-pr-merge-state-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-protocol-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-pull-request-targets-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-skill-output-py.md

## Outputs produced
- docs/analysis/concepts/rjm/get-priority-emoji.md (831 bytes)
- docs/analysis/concepts/rjm/get-reaction-emoji.md (819 bytes)
- docs/analysis/concepts/rjm/parse-response-body.md (890 bytes)
- docs/analysis/concepts/rjm/rest-get.md (914 bytes)
- docs/analysis/concepts/rjm/rest-post.md (970 bytes)
- docs/analysis/concepts/rjm/rest-patch.md (954 bytes)
- docs/analysis/concepts/rjm/graphql.md (877 bytes)
- docs/analysis/concepts/rjm/is-authenticated.md (938 bytes)
- docs/analysis/concepts/rjm/write-skill-output.md (858 bytes)
- docs/analysis/concepts/rjm/get-output-format.md (875 bytes)
- docs/analysis/concepts/rjm/adr-103.md (982 bytes)
- docs/analysis/concepts/rjm/add-output-format-arg.md (857 bytes)
- docs/analysis/concepts/rjm/detect-script-name.md (822 bytes)
- docs/analysis/concepts/rjm/status-color.md (806 bytes)
- docs/analysis/concepts/rjm/placeholder-emails.md (860 bytes)
- docs/analysis/concepts/rjm/placeholder-email-regexes.md (873 bytes)
- docs/analysis/concepts/rjm/placeholder-names.md (858 bytes)
- docs/analysis/concepts/rjm/co-author-re.md (829 bytes)
- docs/analysis/concepts/rjm/is-placeholder-identity.md (910 bytes)
- docs/analysis/concepts/rjm/filter-coauthor-trailers.md (877 bytes)
- docs/analysis/concepts/rjm/pr-merge-state-query.md (839 bytes)
- docs/analysis/concepts/rjm/detail-limit.md (792 bytes)
- docs/analysis/concepts/rjm/prmergestatus.md (855 bytes)
- docs/analysis/concepts/rjm/prmergestate.md (844 bytes)
- docs/analysis/concepts/rjm/probe-failed.md (845 bytes)
- docs/analysis/concepts/rjm/merged-by-login.md (860 bytes)
- docs/analysis/concepts/rjm/read-pr-merge-state.md (936 bytes)
- docs/analysis/concepts/rjm/max-list-pages.md (841 bytes)
- docs/analysis/concepts/rjm/target-from-pull-request.md (948 bytes)
- docs/analysis/concepts/rjm/open-pull-request-targets.md (885 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-293.md (this file)

## Scripts executed
- `bun scripts/synthesis/unit-facts.ts cc-rjm-293` (exit code 0)
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/get-priority-emoji.md docs/analysis/concepts/rjm/get-reaction-emoji.md docs/analysis/concepts/rjm/parse-response-body.md docs/analysis/concepts/rjm/rest-get.md docs/analysis/concepts/rjm/rest-post.md docs/analysis/concepts/rjm/rest-patch.md docs/analysis/concepts/rjm/graphql.md docs/analysis/concepts/rjm/is-authenticated.md docs/analysis/concepts/rjm/write-skill-output.md docs/analysis/concepts/rjm/get-output-format.md docs/analysis/concepts/rjm/adr-103.md docs/analysis/concepts/rjm/add-output-format-arg.md docs/analysis/concepts/rjm/detect-script-name.md docs/analysis/concepts/rjm/status-color.md docs/analysis/concepts/rjm/placeholder-emails.md docs/analysis/concepts/rjm/placeholder-email-regexes.md docs/analysis/concepts/rjm/placeholder-names.md docs/analysis/concepts/rjm/co-author-re.md docs/analysis/concepts/rjm/is-placeholder-identity.md docs/analysis/concepts/rjm/filter-coauthor-trailers.md docs/analysis/concepts/rjm/pr-merge-state-query.md docs/analysis/concepts/rjm/detail-limit.md docs/analysis/concepts/rjm/prmergestatus.md docs/analysis/concepts/rjm/prmergestate.md docs/analysis/concepts/rjm/probe-failed.md docs/analysis/concepts/rjm/merged-by-login.md docs/analysis/concepts/rjm/read-pr-merge-state.md docs/analysis/concepts/rjm/max-list-pages.md docs/analysis/concepts/rjm/target-from-pull-request.md docs/analysis/concepts/rjm/open-pull-request-targets.md` (exit code 0, 30 PASS, 0 FAIL)
- `bun scripts/synthesis/coverage.ts --quiet` (exit code 1 across workspace due to unrelated in-flight unit index updates; zero defects on cc-rjm-293 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-293 authors 30 concept cards across 8 github_core and skill output validation scripts in rjm:
  1. `scripts/github_core/formatting.py`: priority and reaction emoji utilities (`get_priority_emoji`, `get_reaction_emoji`).
  2. `scripts/github_core/gh_client.py` and `scripts/github_core/protocol.py`: GitHub client transport protocol and CLI delegation methods (`_parse_response_body`, `rest_get`, `rest_post`, `rest_patch`, `graphql`, `is_authenticated`).
  3. `scripts/github_core/output.py`: envelope standardization helpers (`write_skill_output`, `get_output_format`, `add_output_format_arg`, `_detect_script_name`, `_status_color`, `ADR-103`).
  4. `scripts/github_core/placeholder_identity.py`: git test credential denylist constants and sanitizers (`PLACEHOLDER_EMAILS`, `PLACEHOLDER_EMAIL_REGEXES`, `PLACEHOLDER_NAMES`, `_CO_AUTHOR_RE`, `is_placeholder_identity`, `filter_coauthor_trailers`).
  5. `scripts/github_core/pr_merge_state.py`: tri-state PR merge verification reader (`PR_MERGE_STATE_QUERY`, `_DETAIL_LIMIT`, `PrMergeStatus`, `PrMergeState`, `_probe_failed`, `_merged_by_login`, `read_pr_merge_state`).
  6. `scripts/github_core/pull_request_targets.py`: pull request target pagination and parsing (`_MAX_LIST_PAGES`, `target_from_pull_request`, `open_pull_request_targets`).
  7. `scripts/validate_skill_output.py`: procedural output validator enforcing ADR-056 and ADR-103 envelope contracts.
- All concepts in this unit represent code identifiers, functions, classes, constants, or decision record references and were correctly classified as `kind: name-only` per D-023.
- All 36 occurrences listed in `facts/cc-rjm-293.txt` are represented in the respective `Where used` tables.
- Defect annotations from citing inventory cards were propagated to `Implementation status` (`clean` for formatting, gh_client, protocol, output, placeholder_identity; `defects: doc-drift` for ADR-103 via validate_skill_output; `defects: script-bug` for pr_merge_state and pull_request_targets).
- Every card passed byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~7,200 tokens across 30 concept cards and 1 work-unit report.
