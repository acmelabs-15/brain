---
unit: cc-rjm-353
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-353

## Files assigned
- [x] sources/rjm/scripts/validation/checks_tooling.py
- [x] sources/rjm/scripts/validation/checks_workflow_targets.py
- [x] sources/rjm/scripts/validation/ci_runner_base.py
- [x] sources/rjm/scripts/validation/citation_anchors.py
- [x] sources/rjm/scripts/validation/push_ref_staleness.py
- [x] sources/rjm/scripts/validation/run_install_parity_ci.py
- [x] sources/rjm/scripts/validation/run_plugin_version_bump_ci.py
- [x] sources/rjm/scripts/validation/session_scope.py
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-tooling-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-workflow-targets-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-ci-runner-base-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-citation-anchors-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-push-ref-staleness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-install-parity-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-plugin-version-bump-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-session-scope-py.md

## Outputs produced
- docs/analysis/concepts/rjm/run-python-validator.md (1086 bytes)
- docs/analysis/concepts/rjm/validate-path-normalization.md (1036 bytes)
- docs/analysis/concepts/rjm/validate-planning-artifacts.md (1040 bytes)
- docs/analysis/concepts/rjm/validate-agent-drift.md (1013 bytes)
- docs/analysis/concepts/rjm/validate-copilot-version-pin.md (1054 bytes)
- docs/analysis/concepts/rjm/validate-instruction-budget.md (1055 bytes)
- docs/analysis/concepts/rjm/validate-always-on-corpus-claims.md (1103 bytes)
- docs/analysis/concepts/rjm/workflow-yaml-targets.md (1223 bytes)
- docs/analysis/concepts/rjm/new-session-logs.md (1078 bytes)
- docs/analysis/concepts/rjm/deleted-paths-since-base.md (1080 bytes)
- docs/analysis/concepts/rjm/validate-branch.md (1242 bytes)
- docs/analysis/concepts/rjm/validate-sha.md (916 bytes)
- docs/analysis/concepts/rjm/fetch-base-ref.md (1274 bytes)
- docs/analysis/concepts/rjm/print-fetch-error.md (966 bytes)
- docs/analysis/concepts/rjm/resolve-base.md (1253 bytes)
- docs/analysis/concepts/rjm/pr-base-ref.md (1244 bytes)
- docs/analysis/concepts/rjm/push-before-sha.md (1232 bytes)
- docs/analysis/concepts/rjm/head.md (1326 bytes)
- docs/analysis/concepts/rjm/extensions.md (849 bytes)
- docs/analysis/concepts/rjm/citation.md (882 bytes)
- docs/analysis/concepts/rjm/backtick-span.md (902 bytes)
- docs/analysis/concepts/rjm/dquote-span.md (937 bytes)
- docs/analysis/concepts/rjm/identifier.md (919 bytes)
- docs/analysis/concepts/rjm/pathlike.md (893 bytes)
- docs/analysis/concepts/rjm/strip-prose-decorations.md (990 bytes)
- docs/analysis/concepts/rjm/span-anchor.md (975 bytes)
- docs/analysis/concepts/rjm/anchor-candidates.md (997 bytes)
- docs/analysis/concepts/rjm/anchor-matches.md (967 bytes)
- docs/analysis/concepts/rjm/continuation-quote.md (989 bytes)
- docs/analysis/concepts/rjm/gap-split.md (982 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-353.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/run-python-validator.md docs/analysis/concepts/rjm/validate-path-normalization.md docs/analysis/concepts/rjm/validate-planning-artifacts.md docs/analysis/concepts/rjm/validate-agent-drift.md docs/analysis/concepts/rjm/validate-copilot-version-pin.md docs/analysis/concepts/rjm/validate-instruction-budget.md docs/analysis/concepts/rjm/validate-always-on-corpus-claims.md docs/analysis/concepts/rjm/workflow-yaml-targets.md docs/analysis/concepts/rjm/new-session-logs.md docs/analysis/concepts/rjm/deleted-paths-since-base.md docs/analysis/concepts/rjm/validate-branch.md docs/analysis/concepts/rjm/validate-sha.md docs/analysis/concepts/rjm/fetch-base-ref.md docs/analysis/concepts/rjm/print-fetch-error.md docs/analysis/concepts/rjm/resolve-base.md docs/analysis/concepts/rjm/pr-base-ref.md docs/analysis/concepts/rjm/push-before-sha.md docs/analysis/concepts/rjm/head.md docs/analysis/concepts/rjm/extensions.md docs/analysis/concepts/rjm/citation.md docs/analysis/concepts/rjm/backtick-span.md docs/analysis/concepts/rjm/dquote-span.md docs/analysis/concepts/rjm/identifier.md docs/analysis/concepts/rjm/pathlike.md docs/analysis/concepts/rjm/strip-prose-decorations.md docs/analysis/concepts/rjm/span-anchor.md docs/analysis/concepts/rjm/anchor-candidates.md docs/analysis/concepts/rjm/anchor-matches.md docs/analysis/concepts/rjm/continuation-quote.md docs/analysis/concepts/rjm/gap-split.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-353 completes 30 concept cards covering validation tooling helpers, CI git runner infrastructure, session scope filtering, and citation freshness anchor semantics:
  1. Validation tooling runners and gates in `checks_tooling.py`: `_run_python_validator`, `validate_path_normalization`, `validate_planning_artifacts`, `validate_agent_drift`, `validate_copilot_version_pin`, `validate_instruction_budget`, `validate_always_on_corpus_claims`.
  2. Workflow target and change detection in `checks_workflow_targets.py` and `checks_tooling.py`: `_workflow_yaml_targets`, `_deleted_paths_since_base`.
  3. Session scope detection in `session_scope.py` and `checks_tooling.py`: `new_session_logs`.
  4. CI runner base git utilities and environment contracts across `ci_runner_base.py`, `run_install_parity_ci.py`, `run_plugin_version_bump_ci.py`, and `push_ref_staleness.py`: `validate_branch`, `validate_sha`, `fetch_base_ref`, `_print_fetch_error`, `resolve_base`, `PR_BASE_REF`, `PUSH_BEFORE_SHA`, `HEAD`.
  5. Citation freshness anchor parsing and matching regexes and functions in `citation_anchors.py`: `_EXTENSIONS`, `_CITATION`, `_BACKTICK_SPAN`, `_DQUOTE_SPAN`, `_IDENTIFIER`, `_PATHLIKE`, `_strip_prose_decorations`, `_span_anchor`, `_anchor_candidates`, `_anchor_matches`, `_continuation_quote`, `_gap_split`.
- All 30 concepts represent Python function identifiers, regular expressions, environment variables, git ref constants, or helper identifiers, correctly categorized as `kind: name-only` and `package_phase: none` per D-023.
- All 45 occurrences recorded in `facts/cc-rjm-353.txt` are faithfully mapped in the cards' `Where used` tables with exact file paths, line numbers, roles, and contextual usage descriptions.
- Defect statuses from citing inventory cards were systematically carried over into each card's `Implementation status` (`clean`, `defects: doc-drift, other, exit-code-mismatch`, `defects: script-bug, exit-code-mismatch`, `defects: orphan, doc-drift`, or combinations thereof).
- Byte-exact verification was executed via `bun scripts/synthesis/quote-check.ts` across all 30 concept cards, achieving 30 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~34,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
