---
unit: cc-rjm-257
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-257

## Files assigned
- [x] sources/rjm/scripts/ci/install_copilot_cli.py
- [x] sources/rjm/scripts/ci/install_locked_deps.py
- [x] sources/rjm/scripts/ci/invoke_copilot_cli.py
- [x] sources/rjm/scripts/ci/load_ai_review_prompt.py
- [x] sources/rjm/scripts/ci/main_pytest_failure_alert.py
- [x] sources/rjm/scripts/test_selection/runtime_read_patterns.txt
- [x] docs/analysis/inventory/rjm/scripts-ci-install-copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-install-locked-deps-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-invoke-copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-load-ai-review-prompt-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-main-pytest-failure-alert-py.md
- [x] docs/analysis/inventory/rjm/scripts-test-selection-runtime-read-patterns-txt.md

## Outputs produced
- docs/analysis/concepts/rjm/default-copilot-version.md (937 bytes)
- docs/analysis/concepts/rjm/install-copilot-cli.md (891 bytes)
- docs/analysis/concepts/rjm/uv-lock.md (1049 bytes)
- docs/analysis/concepts/rjm/extra.md (814 bytes)
- docs/analysis/concepts/rjm/export-name.md (867 bytes)
- docs/analysis/concepts/rjm/fallback-temp.md (871 bytes)
- docs/analysis/concepts/rjm/export-path.md (883 bytes)
- docs/analysis/concepts/rjm/prompt-template-path.md (934 bytes)
- docs/analysis/concepts/rjm/full-prompt-path.md (928 bytes)
- docs/analysis/concepts/rjm/infrastructure-pattern.md (952 bytes)
- docs/analysis/concepts/rjm/permanent-auth-pattern.md (954 bytes)
- docs/analysis/concepts/rjm/explicit-transient-pattern.md (956 bytes)
- docs/analysis/concepts/rjm/retry-after-pattern.md (926 bytes)
- docs/analysis/concepts/rjm/invokeconfig.md (884 bytes)
- docs/analysis/concepts/rjm/attemptresult.md (893 bytes)
- docs/analysis/concepts/rjm/is-permanent-auth-failure.md (971 bytes)
- docs/analysis/concepts/rjm/parse-config.md (910 bytes)
- docs/analysis/concepts/rjm/build-full-prompt.md (916 bytes)
- docs/analysis/concepts/rjm/is-infrastructure-failure.md (1020 bytes)
- docs/analysis/concepts/rjm/analyze-non-infra-failure.md (975 bytes)
- docs/analysis/concepts/rjm/write-results.md (947 bytes)
- docs/analysis/concepts/rjm/prompt-output-path.md (939 bytes)
- docs/analysis/concepts/rjm/default-prompt-path.md (941 bytes)
- docs/analysis/concepts/rjm/fallback-prompt.md (913 bytes)
- docs/analysis/concepts/rjm/load-prompt.md (890 bytes)
- docs/analysis/concepts/rjm/python-tests.md (915 bytes)
- docs/analysis/concepts/rjm/failed-needs.md (914 bytes)
- docs/analysis/concepts/rjm/find-existing-issue.md (946 bytes)
- docs/analysis/concepts/rjm/issue-body.md (931 bytes)
- docs/analysis/concepts/rjm/notify.md (910 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-257.md (7167 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/default-copilot-version.md docs/analysis/concepts/rjm/install-copilot-cli.md docs/analysis/concepts/rjm/uv-lock.md docs/analysis/concepts/rjm/extra.md docs/analysis/concepts/rjm/export-name.md docs/analysis/concepts/rjm/fallback-temp.md docs/analysis/concepts/rjm/export-path.md docs/analysis/concepts/rjm/prompt-template-path.md docs/analysis/concepts/rjm/full-prompt-path.md docs/analysis/concepts/rjm/infrastructure-pattern.md docs/analysis/concepts/rjm/permanent-auth-pattern.md docs/analysis/concepts/rjm/explicit-transient-pattern.md docs/analysis/concepts/rjm/retry-after-pattern.md docs/analysis/concepts/rjm/invokeconfig.md docs/analysis/concepts/rjm/attemptresult.md docs/analysis/concepts/rjm/is-permanent-auth-failure.md docs/analysis/concepts/rjm/parse-config.md docs/analysis/concepts/rjm/build-full-prompt.md docs/analysis/concepts/rjm/is-infrastructure-failure.md docs/analysis/concepts/rjm/analyze-non-infra-failure.md docs/analysis/concepts/rjm/write-results.md docs/analysis/concepts/rjm/prompt-output-path.md docs/analysis/concepts/rjm/default-prompt-path.md docs/analysis/concepts/rjm/fallback-prompt.md docs/analysis/concepts/rjm/load-prompt.md docs/analysis/concepts/rjm/python-tests.md docs/analysis/concepts/rjm/failed-needs.md docs/analysis/concepts/rjm/find-existing-issue.md docs/analysis/concepts/rjm/issue-body.md docs/analysis/concepts/rjm/notify.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-257 covers 30 concept cards derived from CI automation scripts and test selection patterns in rjm:
  1. Copilot CLI installation and verification utilities (`DEFAULT_COPILOT_VERSION`, `install_copilot_cli`) from `scripts/ci/install_copilot_cli.py`.
  2. Locked dependency export and injection utilities (`uv.lock`, `EXTRA`, `EXPORT_NAME`, `FALLBACK_TEMP`, `_export_path`) from `scripts/ci/install_locked_deps.py` and `scripts/test_selection/runtime_read_patterns.txt`.
  3. Copilot CLI review invocation orchestration, error classification, retry handling, and config data structures (`PROMPT_TEMPLATE_PATH`, `FULL_PROMPT_PATH`, `INFRASTRUCTURE_PATTERN`, `PERMANENT_AUTH_PATTERN`, `EXPLICIT_TRANSIENT_PATTERN`, `RETRY_AFTER_PATTERN`, `InvokeConfig`, `AttemptResult`, `is_permanent_auth_failure`, `parse_config`, `build_full_prompt`, `is_infrastructure_failure`, `analyze_non_infra_failure`, `write_results`) from `scripts/ci/invoke_copilot_cli.py`.
  4. AI review prompt loading, template fallbacks, and step output publishing (`PROMPT_OUTPUT_PATH`, `DEFAULT_PROMPT_PATH`, `FALLBACK_PROMPT`, `load_prompt`) from `scripts/ci/load_ai_review_prompt.py`.
  5. Pytest failure alerting and GitHub issue deduplication on main (`Python Tests`, `_failed_needs`, `_find_existing_issue`, `_issue_body`, `_notify`) from `scripts/ci/main_pytest_failure_alert.py`.
- All 30 concepts represent programming language identifiers, configuration constants, dataclasses, file names, or CI workflow labels rather than autonomous SDLC lifecycle concepts, and are classified with `kind: name-only` and `package_phase: none` per D-023.
- All 31 occurrences recorded across the 6 inventory cards in `facts/cc-rjm-257.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`clean` for install_copilot_cli.py and runtime_read_patterns.txt; `defects: orphan` for install_locked_deps.py, invoke_copilot_cli.py, load_ai_review_prompt.py, and main_pytest_failure_alert.py).
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 authored concept cards and 1 work-unit report.
