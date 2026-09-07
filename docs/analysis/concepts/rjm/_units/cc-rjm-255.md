---
unit: cc-rjm-255
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-255

## Files assigned
- [x] sources/rjm/scripts/ci/count_ratchet.py
- [x] sources/rjm/scripts/ci/detect_human_changes_requested.py
- [x] sources/rjm/scripts/ci/determine_placeholder_range.py
- [x] sources/rjm/scripts/ci/diagnose_copilot_cli.py
- [x] sources/rjm/scripts/ci/diff_line_scope.py
- [x] sources/rjm/scripts/ci/execute_ai_review_post_script.py
- [x] sources/rjm/scripts/ci/install_copilot_cli.py
- [x] sources/rjm/scripts/ci/load_ai_review_prompt.py
- [x] sources/rjm/scripts/ci/prepare_conflict_context.py
- [x] sources/rjm/scripts/ci/retrospective_gate.py
- [x] sources/rjm/scripts/ci/write_pr_discovery_summary.py
- [x] sources/rjm/scripts/ci/write_pr_maintenance_summary.py
- [x] sources/rjm/scripts/report_pr_supersession.py
- [x] sources/rjm/scripts/validation/ci_runner_base.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] docs/analysis/inventory/rjm/scripts-ci-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-detect-human-changes-requested-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-determine-placeholder-range-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-diagnose-copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-diff-line-scope-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-execute-ai-review-post-script-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-install-copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-load-ai-review-prompt-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-prepare-conflict-context-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-retrospective-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-pr-discovery-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-pr-maintenance-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-report-pr-supersession-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-ci-runner-base-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md

## Outputs produced
- docs/analysis/concepts/rjm/basereffacts.md (910 bytes)
- docs/analysis/concepts/rjm/is-shallow-repository.md (1155 bytes)
- docs/analysis/concepts/rjm/baseline-raised.md (912 bytes)
- docs/analysis/concepts/rjm/baseline-lowered.md (919 bytes)
- docs/analysis/concepts/rjm/baseline-unchanged.md (941 bytes)
- docs/analysis/concepts/rjm/fork-point-unreadable.md (972 bytes)
- docs/analysis/concepts/rjm/fork-baseline-absent.md (969 bytes)
- docs/analysis/concepts/rjm/fork-baseline-unreadable.md (1013 bytes)
- docs/analysis/concepts/rjm/baselinemove.md (905 bytes)
- docs/analysis/concepts/rjm/baselinemovefailure.md (970 bytes)
- docs/analysis/concepts/rjm/baseline-move.md (920 bytes)
- docs/analysis/concepts/rjm/pr-maintenance-yml.md (1553 bytes)
- docs/analysis/concepts/rjm/bot-authors.md (1136 bytes)
- docs/analysis/concepts/rjm/placeholder-identity-check.md (977 bytes)
- docs/analysis/concepts/rjm/pr-base-sha.md (932 bytes)
- docs/analysis/concepts/rjm/pr-head-sha.md (934 bytes)
- docs/analysis/concepts/rjm/mg-base-sha.md (931 bytes)
- docs/analysis/concepts/rjm/mg-head-sha.md (931 bytes)
- docs/analysis/concepts/rjm/resolve-range.md (923 bytes)
- docs/analysis/concepts/rjm/copilot-test-timeout-seconds.md (989 bytes)
- docs/analysis/concepts/rjm/run-command.md (1278 bytes)
- docs/analysis/concepts/rjm/append-line.md (1173 bytes)
- docs/analysis/concepts/rjm/parse-login.md (907 bytes)
- docs/analysis/concepts/rjm/parse-scopes.md (907 bytes)
- docs/analysis/concepts/rjm/mask-env-value.md (960 bytes)
- docs/analysis/concepts/rjm/run-diagnostics.md (937 bytes)
- docs/analysis/concepts/rjm/diff-added-file-re.md (942 bytes)
- docs/analysis/concepts/rjm/diff-hunk-re.md (923 bytes)
- docs/analysis/concepts/rjm/normalize-path.md (1087 bytes)
- docs/analysis/concepts/rjm/named-escapes.md (914 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-255.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/basereffacts.md docs/analysis/concepts/rjm/is-shallow-repository.md docs/analysis/concepts/rjm/baseline-raised.md docs/analysis/concepts/rjm/baseline-lowered.md docs/analysis/concepts/rjm/baseline-unchanged.md docs/analysis/concepts/rjm/fork-point-unreadable.md docs/analysis/concepts/rjm/fork-baseline-absent.md docs/analysis/concepts/rjm/fork-baseline-unreadable.md docs/analysis/concepts/rjm/baselinemove.md docs/analysis/concepts/rjm/baselinemovefailure.md docs/analysis/concepts/rjm/baseline-move.md docs/analysis/concepts/rjm/pr-maintenance-yml.md docs/analysis/concepts/rjm/bot-authors.md docs/analysis/concepts/rjm/placeholder-identity-check.md docs/analysis/concepts/rjm/pr-base-sha.md docs/analysis/concepts/rjm/pr-head-sha.md docs/analysis/concepts/rjm/mg-base-sha.md docs/analysis/concepts/rjm/mg-head-sha.md docs/analysis/concepts/rjm/resolve-range.md docs/analysis/concepts/rjm/copilot-test-timeout-seconds.md docs/analysis/concepts/rjm/run-command.md docs/analysis/concepts/rjm/append-line.md docs/analysis/concepts/rjm/parse-login.md docs/analysis/concepts/rjm/parse-scopes.md docs/analysis/concepts/rjm/mask-env-value.md docs/analysis/concepts/rjm/run-diagnostics.md docs/analysis/concepts/rjm/diff-added-file-re.md docs/analysis/concepts/rjm/diff-hunk-re.md docs/analysis/concepts/rjm/normalize-path.md docs/analysis/concepts/rjm/named-escapes.md` (exit code 0, 32 PASS, 0 FAIL, across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-255 covers 30 concepts extracted from CI automation, git baseline ratchet checking, and pull request validation scripts in package `rjm`.
- All 30 concepts represent Python internal identifiers, constants, helper functions, classes, or workflow file references rather than operational SDLC lifecycle concepts, and are classified as `kind: name-only` per D-023.
- All 41 occurrences across 15 source files and 15 inventory cards recorded in `facts/cc-rjm-255.txt` were mapped into the respective `Where used` tables.
- Inventory card defects (`orphan`, `missing-path`, `script-bug`, `doc-drift`, or `clean`) were systematically transferred into `Implementation status`.
- All 30 cards verified cleanly with `quote-check.ts` (32 citations checked, 32 PASS, 0 FAIL, 0 MISSING).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 15 source files and 15 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 work-unit report.
