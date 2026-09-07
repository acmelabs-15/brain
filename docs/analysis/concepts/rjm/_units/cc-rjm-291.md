---
unit: cc-rjm-291
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-291

## Files assigned
- [x] sources/rjm/scripts/github_core/__init__.py
- [x] sources/rjm/scripts/github_core/api.py
- [x] sources/rjm/scripts/github_core/gh_client.py
- [x] sources/rjm/scripts/github_core/log_safety.py
- [x] sources/rjm/scripts/github_core/protocol.py
- [x] sources/rjm/scripts/github_core/rate_limit.py
- [x] sources/rjm/scripts/github_core/repo.py
- [x] sources/rjm/scripts/github_core/review_threads.py
- [x] sources/rjm/scripts/github_core/validation.py
- [x] sources/rjm/scripts/issue_triage.py
- [x] sources/rjm/scripts/pr_maintenance/__init__.py
- [x] sources/rjm/scripts/progress/__init__.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] sources/rjm/scripts/validation/__init__.py
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/scripts/validation/check_model_pins.py
- [x] sources/rjm/scripts/validation/check_skill_skip_clauses.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] sources/rjm/scripts/validation/validate_skill_shells.py
- [x] docs/analysis/inventory/rjm/scripts-github-core---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-api-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-review-threads-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-rate-limit-py.md
- [x] docs/analysis/inventory/rjm/scripts-pr-maintenance---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-gh-client-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-protocol-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-repo-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-validation-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-skip-clauses-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-skill-shells-py.md
- [x] docs/analysis/inventory/rjm/scripts-progress---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-validation---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-log-safety-py.md
- [x] docs/analysis/inventory/rjm/scripts-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-model-pins-py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md

## Outputs produced
- docs/analysis/concepts/rjm/fetchstatus.md (1157 bytes)
- docs/analysis/concepts/rjm/ghauthresult.md (1014 bytes)
- docs/analysis/concepts/rjm/ratelimitresult.md (1252 bytes)
- docs/analysis/concepts/rjm/ghcliclient.md (988 bytes)
- docs/analysis/concepts/rjm/githubclient.md (1090 bytes)
- docs/analysis/concepts/rjm/repo-root-ok.md (960 bytes)
- docs/analysis/concepts/rjm/resolve-repo-root.md (1392 bytes)
- docs/analysis/concepts/rjm/all.md (1341 bytes)
- docs/analysis/concepts/rjm/safe-log-str.md (1065 bytes)
- docs/analysis/concepts/rjm/count-unresolved-threads.md (1102 bytes)
- docs/analysis/concepts/rjm/filter-unresolved-threads.md (1124 bytes)
- docs/analysis/concepts/rjm/get-unresolved-review-threads.md (1107 bytes)
- docs/analysis/concepts/rjm/transform-review-thread.md (1142 bytes)
- docs/analysis/concepts/rjm/is-github-name-valid.md (1254 bytes)
- docs/analysis/concepts/rjm/get-repo-info.md (1062 bytes)
- docs/analysis/concepts/rjm/auth-error-markers.md (922 bytes)
- docs/analysis/concepts/rjm/is-auth-failure-text.md (977 bytes)
- docs/analysis/concepts/rjm/sanitize-failure-detail.md (999 bytes)
- docs/analysis/concepts/rjm/cwe-117.md (1203 bytes)
- docs/analysis/concepts/rjm/classify-gh-failure-response.md (984 bytes)
- docs/analysis/concepts/rjm/is-gh-authenticated.md (1100 bytes)
- docs/analysis/concepts/rjm/drained-rate-limit-buckets.md (965 bytes)
- docs/analysis/concepts/rjm/describe-gh-auth-failure.md (1010 bytes)
- docs/analysis/concepts/rjm/rest-page-pace-seconds.md (931 bytes)
- docs/analysis/concepts/rjm/rest-refusal-backoff-seconds.md (976 bytes)
- docs/analysis/concepts/rjm/gh-api-paginated.md (955 bytes)
- docs/analysis/concepts/rjm/gh-graphql.md (918 bytes)
- docs/analysis/concepts/rjm/get-all-prs-with-comments.md (1086 bytes)
- docs/analysis/concepts/rjm/create-issue-comment.md (918 bytes)
- docs/analysis/concepts/rjm/get-trusted-source-comments.md (952 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-291.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/fetchstatus.md docs/analysis/concepts/rjm/ghauthresult.md docs/analysis/concepts/rjm/ratelimitresult.md docs/analysis/concepts/rjm/ghcliclient.md docs/analysis/concepts/rjm/githubclient.md docs/analysis/concepts/rjm/repo-root-ok.md docs/analysis/concepts/rjm/resolve-repo-root.md docs/analysis/concepts/rjm/all.md docs/analysis/concepts/rjm/safe-log-str.md docs/analysis/concepts/rjm/count-unresolved-threads.md docs/analysis/concepts/rjm/filter-unresolved-threads.md docs/analysis/concepts/rjm/get-unresolved-review-threads.md docs/analysis/concepts/rjm/transform-review-thread.md docs/analysis/concepts/rjm/is-github-name-valid.md docs/analysis/concepts/rjm/get-repo-info.md docs/analysis/concepts/rjm/auth-error-markers.md docs/analysis/concepts/rjm/is-auth-failure-text.md docs/analysis/concepts/rjm/sanitize-failure-detail.md docs/analysis/concepts/rjm/cwe-117.md docs/analysis/concepts/rjm/classify-gh-failure-response.md docs/analysis/concepts/rjm/is-gh-authenticated.md docs/analysis/concepts/rjm/drained-rate-limit-buckets.md docs/analysis/concepts/rjm/describe-gh-auth-failure.md docs/analysis/concepts/rjm/rest-page-pace-seconds.md docs/analysis/concepts/rjm/rest-refusal-backoff-seconds.md docs/analysis/concepts/rjm/gh-api-paginated.md docs/analysis/concepts/rjm/gh-graphql.md docs/analysis/concepts/rjm/get-all-prs-with-comments.md docs/analysis/concepts/rjm/create-issue-comment.md docs/analysis/concepts/rjm/get-trusted-source-comments.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-291 covers 30 concepts comprising GitHub interaction utilities, authentication and error handling, GraphQL and REST pagination, and rate limit protections across `scripts/github_core/` and related scripts.
- All 30 concepts represent code identifiers (classes, protocols, functions, dataclasses, constants, module attributes, CLI arguments) or security taxonomies (`CWE-117`) rather than SDLC lifecycle concepts, and were authored with `kind: name-only` per D-023.
- All 60 occurrences listed in `facts/cc-rjm-291.txt` are represented in the respective `Where used` tables.
- Defect statuses were systematically propagated from citing inventory cards to `Implementation status` (`clean` or `defects: <classes>`).
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~40,000 tokens across 19 source files and 19 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 work-unit report.
