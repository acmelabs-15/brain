---
unit: cc-rjm-252
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-252

## Files assigned
- [x] sources/rjm/scripts/ci/check_bot_identity.py
- [x] sources/rjm/scripts/ci/check_claude_authorization.py
- [x] sources/rjm/scripts/ci/check_codeql_sarif.py
- [x] sources/rjm/scripts/ci/check_metrics_thresholds.py
- [x] sources/rjm/scripts/ci/check_plugin_lib_mirrors.py
- [x] sources/rjm/scripts/ci/check_pr_merge_state.py
- [x] sources/rjm/scripts/ci/cli_exit_contract_ratchet.py
- [x] sources/rjm/scripts/ci/count_ratchet.py
- [x] sources/rjm/scripts/ci/ruff_count_ratchet.py
- [x] sources/rjm/scripts/ci/subprocess_encoding_count_ratchet.py
- [x] sources/rjm/scripts/ci/taste_count_ratchet.py
- [x] sources/rjm/scripts/ci/validate_ai_review_budgets.py
- [x] sources/rjm/scripts/report_pr_supersession.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/scripts/validation/check_generated_staleness.py
- [x] docs/analysis/inventory/rjm/scripts-ci-check-bot-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-claude-authorization-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-codeql-sarif-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-metrics-thresholds-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-plugin-lib-mirrors-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-pr-merge-state-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-ruff-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-subprocess-encoding-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-taste-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-validate-ai-review-budgets-py.md
- [x] docs/analysis/inventory/rjm/scripts-report-pr-supersession-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-generated-staleness-py.md

## Outputs produced
- docs/analysis/concepts/rjm/issue-4607.md (878 bytes)
- docs/analysis/concepts/rjm/verify-github-auth-py.md (910 bytes)
- docs/analysis/concepts/rjm/retrospective-2026-08-05-pr-queue-and-doctrine-md.md (1019 bytes)
- docs/analysis/concepts/rjm/match.md (828 bytes)
- docs/analysis/concepts/rjm/expected-bot-id.md (922 bytes)
- docs/analysis/concepts/rjm/mismatch.md (897 bytes)
- docs/analysis/concepts/rjm/identity-strict.md (890 bytes)
- docs/analysis/concepts/rjm/missing.md (880 bytes)
- docs/analysis/concepts/rjm/claude-rules-ci-scripts-md.md (1070 bytes)
- docs/analysis/concepts/rjm/default-expected-bot-id.md (881 bytes)
- docs/analysis/concepts/rjm/default-expected-bot-login.md (892 bytes)
- docs/analysis/concepts/rjm/default-token-label.md (850 bytes)
- docs/analysis/concepts/rjm/default-api-url.md (852 bytes)
- docs/analysis/concepts/rjm/proberesult.md (827 bytes)
- docs/analysis/concepts/rjm/probe-user.md (880 bytes)
- docs/analysis/concepts/rjm/check-bot-identity.md (860 bytes)
- docs/analysis/concepts/rjm/run-check.md (1380 bytes)
- docs/analysis/concepts/rjm/tally.md (954 bytes)
- docs/analysis/concepts/rjm/grade.md (838 bytes)
- docs/analysis/concepts/rjm/render-summary.md (864 bytes)
- docs/analysis/concepts/rjm/load-documents.md (892 bytes)
- docs/analysis/concepts/rjm/find-sarif-files.md (875 bytes)
- docs/analysis/concepts/rjm/collect-metrics-json.md (937 bytes)
- docs/analysis/concepts/rjm/check-thresholds.md (965 bytes)
- docs/analysis/concepts/rjm/pass-states.md (900 bytes)
- docs/analysis/concepts/rjm/fail-states.md (845 bytes)
- docs/analysis/concepts/rjm/pullrequest.md (840 bytes)
- docs/analysis/concepts/rjm/load-open-prs.md (887 bytes)
- docs/analysis/concepts/rjm/check-prs.md (864 bytes)
- docs/analysis/concepts/rjm/exit-regression.md (1785 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-252.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/issue-4607.md docs/analysis/concepts/rjm/verify-github-auth-py.md docs/analysis/concepts/rjm/retrospective-2026-08-05-pr-queue-and-doctrine-md.md docs/analysis/concepts/rjm/match.md docs/analysis/concepts/rjm/expected-bot-id.md docs/analysis/concepts/rjm/mismatch.md docs/analysis/concepts/rjm/identity-strict.md docs/analysis/concepts/rjm/missing.md docs/analysis/concepts/rjm/claude-rules-ci-scripts-md.md docs/analysis/concepts/rjm/default-expected-bot-id.md docs/analysis/concepts/rjm/default-expected-bot-login.md docs/analysis/concepts/rjm/default-token-label.md docs/analysis/concepts/rjm/default-api-url.md docs/analysis/concepts/rjm/proberesult.md docs/analysis/concepts/rjm/probe-user.md docs/analysis/concepts/rjm/check-bot-identity.md docs/analysis/concepts/rjm/run-check.md docs/analysis/concepts/rjm/tally.md docs/analysis/concepts/rjm/grade.md docs/analysis/concepts/rjm/render-summary.md docs/analysis/concepts/rjm/load-documents.md docs/analysis/concepts/rjm/find-sarif-files.md docs/analysis/concepts/rjm/collect-metrics-json.md docs/analysis/concepts/rjm/check-thresholds.md docs/analysis/concepts/rjm/pass-states.md docs/analysis/concepts/rjm/fail-states.md docs/analysis/concepts/rjm/pullrequest.md docs/analysis/concepts/rjm/load-open-prs.md docs/analysis/concepts/rjm/check-prs.md docs/analysis/concepts/rjm/exit-regression.md` (exit code 0: 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-252 completes 30 concept cards (all 42 occurrences mapped) across CI verification and ratchet infrastructure:
  1. GitHub bot identity probing (`issue-4607`, `verify-github-auth-py`, `retrospective-2026-08-05-pr-queue-and-doctrine-md`, `match`, `expected-bot-id`, `mismatch`, `identity-strict`, `missing`, `default-expected-bot-id`, `default-expected-bot-login`, `default-token-label`, `default-api-url`, `proberesult`, `probe-user`, `check-bot-identity`) from `scripts/ci/check_bot_identity.py`.
  2. CI rule documentation referencing (`claude-rules-ci-scripts-md`) spanning `scripts/ci/check_bot_identity.py` and `scripts/report_pr_supersession.py`.
  3. Shared check execution functions (`run-check`) spanning authorization, plugin library mirrors, agent skill discriminator, and generated staleness validators.
  4. CodeQL SARIF grading and document processing (`tally`, `grade`, `render-summary`, `load-documents`, `find-sarif-files`) from `scripts/ci/check_codeql_sarif.py` and `scripts/validation/check_adr_lifecycle.py`.
  5. Metrics threshold validation helpers (`collect-metrics-json`, `check-thresholds`) from `scripts/ci/check_metrics_thresholds.py`.
  6. PR merge state gating (`pass-states`, `fail-states`, `pullrequest`, `load-open-prs`, `check-prs`) from `scripts/ci/check_pr_merge_state.py`.
  7. Regression exit contract constants (`exit-regression`) spanning 8 scripts in CI ratchets and validation checks.
- All concepts are identifiers, constants, function names, types, or file references, authored with `kind: name-only` per D-023.
- Defect annotations from citing inventory cards were systematically incorporated into `Implementation status` (`clean` for check_bot_identity items; `defects: missing-path` for claude-rules-ci-scripts-md; `defects: orphan` for SARIF, PR merge state, and ratchet scripts; `defects: missing-path, orphan, other` for run-check; `defects: exit-code-mismatch, orphan` for metrics thresholds).
- All 30 cards pass byte-exact quotation checking with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~70,000 tokens across 16 source files and 16 citing inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
