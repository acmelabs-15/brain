---
unit: cc-rjm-364
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-364

## Files assigned
- [x] sources/rjm/scripts/validation/push_lock_resolver.py
- [x] sources/rjm/scripts/validation/push_ref_staleness.py
- [x] sources/rjm/scripts/validation/rule_activation_coverage_baseline.json
- [x] sources/rjm/scripts/validation/ruleset_params_baseline.json
- [x] sources/rjm/scripts/validation/run_install_parity_ci.py
- [x] sources/rjm/scripts/validation/run_plugin_version_bump_ci.py
- [x] sources/rjm/scripts/validation/run_workflow_local_test.py
- [x] sources/rjm/scripts/validation/skill_md_exec_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_md_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_portability_baseline.json
- [x] docs/analysis/inventory/rjm/scripts-validation-push-lock-resolver-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-push-ref-staleness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-rule-activation-coverage-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-ruleset-params-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-install-parity-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-plugin-version-bump-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-workflow-local-test-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-exec-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-portability-baseline-json.md

## Outputs produced
- docs/analysis/concepts/rjm/flock-argument.md (865 bytes)
- docs/analysis/concepts/rjm/is-path-like.md (803 bytes)
- docs/analysis/concepts/rjm/assignments.md (872 bytes)
- docs/analysis/concepts/rjm/value-in-effect.md (821 bytes)
- docs/analysis/concepts/rjm/candidate-tokens.md (877 bytes)
- docs/analysis/concepts/rjm/lock-targets.md (847 bytes)
- docs/analysis/concepts/rjm/non-canonical.md (867 bytes)
- docs/analysis/concepts/rjm/unresolved-flock-variables.md (909 bytes)
- docs/analysis/concepts/rjm/default-remote.md (822 bytes)
- docs/analysis/concepts/rjm/unexpanded-placeholder.md (875 bytes)
- docs/analysis/concepts/rjm/auth-failure-hints.md (834 bytes)
- docs/analysis/concepts/rjm/remotelookuperror.md (819 bytes)
- docs/analysis/concepts/rjm/resolve-remote.md (858 bytes)
- docs/analysis/concepts/rjm/remote-sha.md (825 bytes)
- docs/analysis/concepts/rjm/stale-refs.md (853 bytes)
- docs/analysis/concepts/rjm/origin.md (783 bytes)
- docs/analysis/concepts/rjm/comment.md (1402 bytes)
- docs/analysis/concepts/rjm/uncovered-rules.md (838 bytes)
- docs/analysis/concepts/rjm/uncovered-skills.md (849 bytes)
- docs/analysis/concepts/rjm/builder-ethos.md (820 bytes)
- docs/analysis/concepts/rjm/canonical-source-mirror.md (860 bytes)
- docs/analysis/concepts/rjm/ci-scripts.md (808 bytes)
- docs/analysis/concepts/rjm/ref.md (735 bytes)
- docs/analysis/concepts/rjm/strict-required-status-checks-policy.md (889 bytes)
- docs/analysis/concepts/rjm/required-review-thread-resolution.md (888 bytes)
- docs/analysis/concepts/rjm/required-approving-review-count.md (877 bytes)
- docs/analysis/concepts/rjm/measured.md (771 bytes)
- docs/analysis/concepts/rjm/ci-runner-base.md (1054 bytes)
- docs/analysis/concepts/rjm/validate-plugin-version-bump-py.md (872 bytes)
- docs/analysis/concepts/rjm/pre-pr-runner.md (1235 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-364.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/flock-argument.md docs/analysis/concepts/rjm/is-path-like.md docs/analysis/concepts/rjm/assignments.md docs/analysis/concepts/rjm/value-in-effect.md docs/analysis/concepts/rjm/candidate-tokens.md docs/analysis/concepts/rjm/lock-targets.md docs/analysis/concepts/rjm/non-canonical.md docs/analysis/concepts/rjm/unresolved-flock-variables.md docs/analysis/concepts/rjm/default-remote.md docs/analysis/concepts/rjm/unexpanded-placeholder.md docs/analysis/concepts/rjm/auth-failure-hints.md docs/analysis/concepts/rjm/remotelookuperror.md docs/analysis/concepts/rjm/resolve-remote.md docs/analysis/concepts/rjm/remote-sha.md docs/analysis/concepts/rjm/stale-refs.md docs/analysis/concepts/rjm/origin.md docs/analysis/concepts/rjm/comment.md docs/analysis/concepts/rjm/uncovered-rules.md docs/analysis/concepts/rjm/uncovered-skills.md docs/analysis/concepts/rjm/builder-ethos.md docs/analysis/concepts/rjm/canonical-source-mirror.md docs/analysis/concepts/rjm/ci-scripts.md docs/analysis/concepts/rjm/ref.md docs/analysis/concepts/rjm/strict-required-status-checks-policy.md docs/analysis/concepts/rjm/required-review-thread-resolution.md docs/analysis/concepts/rjm/required-approving-review-count.md docs/analysis/concepts/rjm/measured.md docs/analysis/concepts/rjm/ci-runner-base.md docs/analysis/concepts/rjm/validate-plugin-version-bump-py.md docs/analysis/concepts/rjm/pre-pr-runner.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-364 completes 30 concept cards across lock resolution, push ref staleness detection, ratchet baseline configurations, CI runner execution wrappers, and local workflow testing:
  1. Shell statement lock resolution and variable binding helpers (`flock-argument`, `is-path-like`, `assignments`, `value-in-effect`, `candidate-tokens`, `lock-targets`, `non-canonical`, `unresolved-flock-variables`) in `push_lock_resolver.py`.
  2. Git pre-push staleness checking mechanics and remote validation (`default-remote`, `unexpanded-placeholder`, `auth-failure-hints`, `remotelookuperror`, `resolve-remote`, `remote-sha`, `stale-refs`, `origin`) in `push_ref_staleness.py`.
  3. Quality gate ratchet baselines and configuration metadata keys (`comment`, `uncovered-rules`, `uncovered-skills`, `builder-ethos`, `canonical-source-mirror`, `ci-scripts`, `ref`, `strict-required-status-checks-policy`, `required-review-thread-resolution`, `required-approving-review-count`, `measured`) across `rule_activation_coverage_baseline.json`, `ruleset_params_baseline.json`, `skill_md_exec_portability_baseline.json`, `skill_md_portability_baseline.json`, and `skill_portability_baseline.json`.
  4. CI execution runner modules and validation targets (`ci-runner-base`, `validate-plugin-version-bump-py`) across `run_install_parity_ci.py` and `run_plugin_version_bump_ci.py`.
  5. Local pre-PR gate runner (`pre-pr-runner`) in `run_workflow_local_test.py`.
- Concepts representing functions, constants, regexes, classes, or baseline configuration keys are classified as `kind: name-only` per D-023.
- Core lifecycle/quality-gate concepts are classified as `kind: gate` (`pre-pr-runner`).
- All 34 occurrences recorded in `facts/cc-rjm-364.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`clean`, `defects: orphan, doc-drift`, or `defects: doc-drift`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~25,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
