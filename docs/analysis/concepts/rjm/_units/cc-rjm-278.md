---
unit: cc-rjm-278
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-278

## Files assigned
- [x] sources/rjm/scripts/eval/_runtime_output.py
- [x] sources/rjm/scripts/eval/_runtime_parity.py
- [x] sources/rjm/scripts/eval/_scoring_engine.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/eval_runtime_parity.py
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/scripts/validation/check_build_gates.py
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_skill_portability.py
- [x] sources/rjm/scripts/validation/run_install_parity_ci.py
- [x] sources/rjm/scripts/validation/run_plugin_version_bump_ci.py
- [x] sources/rjm/scripts/validation/test_investigation_eligibility.py
- [x] docs/analysis/inventory/rjm/scripts-eval--runtime-output-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--runtime-parity-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--scoring-engine-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-runtime-parity-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-build-gates-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-install-parity-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-plugin-version-bump-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-investigation-eligibility-py.md

## Outputs produced
- docs/analysis/concepts/rjm/question-mechanism.md (915 bytes)
- docs/analysis/concepts/rjm/question-payload.md (877 bytes)
- docs/analysis/concepts/rjm/structured-tool-model.md (869 bytes)
- docs/analysis/concepts/rjm/runtime-failure-record.md (912 bytes)
- docs/analysis/concepts/rjm/parse-events.md (873 bytes)
- docs/analysis/concepts/rjm/parity-evals.md (1267 bytes)
- docs/analysis/concepts/rjm/repo-root.md (2056 bytes)
- docs/analysis/concepts/rjm/supported-tools.md (801 bytes)
- docs/analysis/concepts/rjm/sentinel.md (934 bytes)
- docs/analysis/concepts/rjm/git-context-variables.md (863 bytes)
- docs/analysis/concepts/rjm/parityconfigerror.md (853 bytes)
- docs/analysis/concepts/rjm/assertionspec.md (1147 bytes)
- docs/analysis/concepts/rjm/control.md (1058 bytes)
- docs/analysis/concepts/rjm/score-assertions.md (848 bytes)
- docs/analysis/concepts/rjm/hash-file.md (788 bytes)
- docs/analysis/concepts/rjm/live-files.md (882 bytes)
- docs/analysis/concepts/rjm/hash-installed-agent.md (865 bytes)
- docs/analysis/concepts/rjm/prepare-workspace.md (920 bytes)
- docs/analysis/concepts/rjm/runtime-env.md (903 bytes)
- docs/analysis/concepts/rjm/probe-version.md (859 bytes)
- docs/analysis/concepts/rjm/verify-worktree-identity.md (905 bytes)
- docs/analysis/concepts/rjm/eval-agent-vs-baseline.md (1055 bytes)
- docs/analysis/concepts/rjm/design-004-5-3.md (884 bytes)
- docs/analysis/concepts/rjm/testpassscorer.md (1260 bytes)
- docs/analysis/concepts/rjm/eval-agent-types.md (880 bytes)
- docs/analysis/concepts/rjm/scorer.md (1222 bytes)
- docs/analysis/concepts/rjm/verdict-re.md (802 bytes)
- docs/analysis/concepts/rjm/regex-scorer.md (1269 bytes)
- docs/analysis/concepts/rjm/verdict-scorer.md (1320 bytes)
- docs/analysis/concepts/rjm/build-default-engine.md (1094 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-278.md (5609 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (32 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-278 have been generated and validated against source code.
- Concepts focus primarily on offline evaluation and runtime parity infrastructure:
  - Runtime parity event parsing and normalization (`question_mechanism`, `question_payload`, `structured_tool_model`, `runtime_failure_record`, `parse_events`).
  - Runtime parity fixture execution and workspace isolation (`parity evals`, `REPO_ROOT`, `SUPPORTED_TOOLS`, `SENTINEL`, `GIT_CONTEXT_VARIABLES`, `ParityConfigError`, `AssertionSpec`, `Control`, `score_assertions`, `hash_file`, `live_files`, `hash_installed_agent`, `prepare_workspace`, `runtime_env`, `probe_version`, `verify_worktree_identity`).
  - Offline scoring engine, strategy dispatch, and concrete scorers (`eval-agent-vs-baseline`, `DESIGN-004 §5.3`, `TestPassScorer`, `_eval_agent_types`, `Scorer`, `_VERDICT_RE`, `regex_scorer`, `verdict_scorer`, `build_default_engine`).
- All 30 concept cards pass `quote-check.ts` with 0 FAIL and 0 MISSING sources.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~72,000 tokens across 13 source files and 13 citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this work-unit report.
