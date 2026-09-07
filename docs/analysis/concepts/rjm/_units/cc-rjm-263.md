---
unit: cc-rjm-263
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-263

## Files assigned
- [x] sources/rjm/scripts/ci/vanilla_hook_guard.py
- [x] sources/rjm/scripts/ci/verify_code_env.py
- [x] sources/rjm/scripts/ci/verify_codeql_artifacts.py
- [x] sources/rjm/scripts/ci/verify_codeql_sarif_structure.py
- [x] sources/rjm/scripts/ci/verify_github_auth.py
- [x] sources/rjm/scripts/ci/verify_npm_package_metadata.py
- [x] sources/rjm/scripts/ci/verify_npm_published.py
- [x] sources/rjm/scripts/ci/write_copilot_synthesis_summary.py
- [x] sources/rjm/scripts/ci/write_drift_job_summary.py
- [x] sources/rjm/scripts/error_classification.py
- [x] sources/rjm/scripts/github_core/api.py
- [x] sources/rjm/scripts/validation/pr_commit_count.py
- [x] sources/rjm/scripts/validation/validate_agent_catalog.py
- [x] docs/analysis/inventory/rjm/scripts-ci-vanilla-hook-guard-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-code-env-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-codeql-artifacts-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-codeql-sarif-structure-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-github-auth-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-npm-package-metadata-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-npm-published-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-copilot-synthesis-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-drift-job-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-error-classification-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-api-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-commit-count-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-agent-catalog-py.md

## Outputs produced
- docs/analysis/concepts/rjm/assert-degraded.md (938 bytes)
- docs/analysis/concepts/rjm/run-windows.md (909 bytes)
- docs/analysis/concepts/rjm/run-linux-container.md (931 bytes)
- docs/analysis/concepts/rjm/development-toolchain.md (912 bytes)
- docs/analysis/concepts/rjm/lefthook-check-install.md (850 bytes)
- docs/analysis/concepts/rjm/git-hooks.md (905 bytes)
- docs/analysis/concepts/rjm/node-js-markdownlint-cli2.md (925 bytes)
- docs/analysis/concepts/rjm/python-if-enabled-github-cli-if-available-pester-if-enabled.md (1054 bytes)
- docs/analysis/concepts/rjm/powershell-yaml.md (808 bytes)
- docs/analysis/concepts/rjm/enable-git-hooks.md (821 bytes)
- docs/analysis/concepts/rjm/enable-python.md (820 bytes)
- docs/analysis/concepts/rjm/enable-pester.md (822 bytes)
- docs/analysis/concepts/rjm/database-directory-and-sarif-output-file.md (1006 bytes)
- docs/analysis/concepts/rjm/exit-codes-adr-035.md (1227 bytes)
- docs/analysis/concepts/rjm/0-all-artifacts-present.md (898 bytes)
- docs/analysis/concepts/rjm/1-one-or-more-artifacts-missing.md (938 bytes)
- docs/analysis/concepts/rjm/2-usage-error.md (827 bytes)
- docs/analysis/concepts/rjm/exit-ok-0.md (811 bytes)
- docs/analysis/concepts/rjm/exit-missing-1.md (848 bytes)
- docs/analysis/concepts/rjm/exit-usage-2.md (824 bytes)
- docs/analysis/concepts/rjm/check-artifacts.md (852 bytes)
- docs/analysis/concepts/rjm/exit-invalid.md (1023 bytes)
- docs/analysis/concepts/rjm/classify-gh-failure-text.md (1198 bytes)
- docs/analysis/concepts/rjm/publish-yml.md (1064 bytes)
- docs/analysis/concepts/rjm/exit-not-published.md (867 bytes)
- docs/analysis/concepts/rjm/copilot-swe-agent.md (1188 bytes)
- docs/analysis/concepts/rjm/validate-conclusion.md (910 bytes)
- docs/analysis/concepts/rjm/lib-mirror-conclusion.md (932 bytes)
- docs/analysis/concepts/rjm/manifest-parity-conclusion.md (974 bytes)
- docs/analysis/concepts/rjm/agent-drift-detection-yml.md (887 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-263.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/assert-degraded.md docs/analysis/concepts/rjm/run-windows.md docs/analysis/concepts/rjm/run-linux-container.md docs/analysis/concepts/rjm/development-toolchain.md docs/analysis/concepts/rjm/lefthook-check-install.md docs/analysis/concepts/rjm/git-hooks.md docs/analysis/concepts/rjm/node-js-markdownlint-cli2.md docs/analysis/concepts/rjm/python-if-enabled-github-cli-if-available-pester-if-enabled.md docs/analysis/concepts/rjm/powershell-yaml.md docs/analysis/concepts/rjm/enable-git-hooks.md docs/analysis/concepts/rjm/enable-python.md docs/analysis/concepts/rjm/enable-pester.md docs/analysis/concepts/rjm/database-directory-and-sarif-output-file.md docs/analysis/concepts/rjm/exit-codes-adr-035.md docs/analysis/concepts/rjm/0-all-artifacts-present.md docs/analysis/concepts/rjm/1-one-or-more-artifacts-missing.md docs/analysis/concepts/rjm/2-usage-error.md docs/analysis/concepts/rjm/exit-ok-0.md docs/analysis/concepts/rjm/exit-missing-1.md docs/analysis/concepts/rjm/exit-usage-2.md docs/analysis/concepts/rjm/check-artifacts.md docs/analysis/concepts/rjm/exit-invalid.md docs/analysis/concepts/rjm/classify-gh-failure-text.md docs/analysis/concepts/rjm/publish-yml.md docs/analysis/concepts/rjm/exit-not-published.md docs/analysis/concepts/rjm/copilot-swe-agent.md docs/analysis/concepts/rjm/validate-conclusion.md docs/analysis/concepts/rjm/lib-mirror-conclusion.md docs/analysis/concepts/rjm/manifest-parity-conclusion.md docs/analysis/concepts/rjm/agent-drift-detection-yml.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-263 authors 30 concept cards across 13 CI, validation, and core API scripts:
  1. `scripts/ci/vanilla_hook_guard.py`: 3 concepts covering hook execution and fallback assertions (`assert_degraded`, `run_windows`, `run_linux_container`).
  2. `scripts/ci/verify_code_env.py`: 9 concepts covering toolchain readiness checks, hook installers, and feature toggle environment variables (`development toolchain`, `lefthook check-install`, `git hooks`, `Node.js, markdownlint-cli2,`, `Python (if enabled), GitHub CLI (if available), Pester (if enabled),`, `powershell-yaml`, `ENABLE_GIT_HOOKS`, `ENABLE_PYTHON`, `ENABLE_PESTER`).
  3. `scripts/ci/verify_codeql_artifacts.py`: 9 concepts covering CodeQL artifact checks and ADR-035 exit code constants (`database directory and SARIF output file`, `EXIT CODES (ADR-035):`, `0 - All artifacts present`, `1 - One or more artifacts missing`, `2 - Usage error`, `EXIT_OK = 0`, `EXIT_MISSING = 1`, `EXIT_USAGE = 2`, `check_artifacts`). Note that `EXIT CODES (ADR-035):` spans 3 files (`scripts/ci/verify_codeql_artifacts.py`, `scripts/error_classification.py`, `scripts/validation/validate_agent_catalog.py`).
  4. `scripts/ci/verify_codeql_sarif_structure.py` and `scripts/ci/verify_npm_package_metadata.py`: `EXIT_INVALID` exit code constant (2 occurrences).
  5. `scripts/ci/verify_github_auth.py`, `scripts/github_core/api.py`, and `scripts/validation/pr_commit_count.py`: `classify_gh_failure_text` helper function (3 occurrences).
  6. `scripts/ci/verify_npm_package_metadata.py` and `scripts/ci/verify_npm_published.py`: `publish.yml` workflow reference (2 occurrences) and `EXIT_NOT_PUBLISHED` exit code constant.
  7. `scripts/ci/write_copilot_synthesis_summary.py`: `copilot-swe-agent` agent identifier.
  8. `scripts/ci/write_drift_job_summary.py`: 4 concepts covering drift job conclusion environment variables and workflow name (`VALIDATE_CONCLUSION`, `LIB_MIRROR_CONCLUSION`, `MANIFEST_PARITY_CONCLUSION`, `agent-drift-detection.yml`).
- All 30 concepts are Python functions, exit code constants, environment variable names, docstring section headers, or workflow filenames rather than lifecycle phases, gates, or techniques, and are classified with `kind: name-only`, `(used, not defined)` definitions, and one-sentence Design notes per D-023.
- Defect annotations from inventory cards (`defects: orphan`, `defects: exit-code-mismatch`, `defects: script-bug`, `defects: missing-path`) were propagated to `Implementation status`.
- Verification passed with `bun scripts/synthesis/quote-check.ts` (31 PASS, 0 FAIL, 0 MISSING source across 30 cards).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~47,000 tokens across 13 source scripts and 13 inventory cards.
Approximate tokens of output written: ~8,000 tokens across 30 concept cards and 1 unit report.
