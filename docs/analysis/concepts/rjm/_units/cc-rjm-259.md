---
unit: cc-rjm-259
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-259

## Files assigned
- [x] sources/rjm/scripts/ci/mutation_harness_ciperms.py
- [x] sources/rjm/scripts/ci/parse_ai_review_output.py
- [x] sources/rjm/scripts/ci/parse_drift_results.py
- [x] sources/rjm/scripts/ci/parse_hook_bypass_results.py
- [x] sources/rjm/scripts/ci/parse_memory_health_results.py
- [x] sources/rjm/scripts/ci/parse_memory_validation_results.py
- [x] sources/rjm/scripts/ci/prepare_conflict_context.py
- [x] sources/rjm/scripts/ci/require_job_results.py
- [x] sources/rjm/scripts/ci/retrospective_gate.py
- [x] sources/rjm/scripts/ci/ruff_count_ratchet.py
- [x] sources/rjm/scripts/ci/ruleset_context_drift.py
- [x] sources/rjm/scripts/ci/ruleset_required_contexts.py
- [x] sources/rjm/scripts/github_core/recovery_manifest.py
- [x] sources/rjm/scripts/mutation_test_proc_group.py
- [x] sources/rjm/scripts/testing/mutation_workspace.py
- [x] sources/rjm/scripts/validate_quality_gate_output.py
- [x] sources/rjm/scripts/validation/check_ruleset_params_drift.py
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] sources/rjm/scripts/validation/git_hook_policy.py
- [x] sources/rjm/scripts/validation/ruleset_params_baseline.json

## Outputs produced
- docs/analysis/concepts/rjm/mutation.md (925 bytes)
- docs/analysis/concepts/rjm/cosmetic-control.md (1270 bytes)
- docs/analysis/concepts/rjm/isolated-mutation-worktree.md (1593 bytes)
- docs/analysis/concepts/rjm/valid-verdicts.md (1039 bytes)
- docs/analysis/concepts/rjm/parseresult.md (869 bytes)
- docs/analysis/concepts/rjm/agent-drift-status.md (918 bytes)
- docs/analysis/concepts/rjm/section-drift-status.md (917 bytes)
- docs/analysis/concepts/rjm/build-drift-details.md (949 bytes)
- docs/analysis/concepts/rjm/hook-bypass.md (1216 bytes)
- docs/analysis/concepts/rjm/indicator-count.md (928 bytes)
- docs/analysis/concepts/rjm/exit-malformed.md (892 bytes)
- docs/analysis/concepts/rjm/count-fields.md (899 bytes)
- docs/analysis/concepts/rjm/length-fields.md (976 bytes)
- docs/analysis/concepts/rjm/healthreport.md (955 bytes)
- docs/analysis/concepts/rjm/has-issues.md (1037 bytes)
- docs/analysis/concepts/rjm/exit-no-results.md (905 bytes)
- docs/analysis/concepts/rjm/conflict-context.md (1000 bytes)
- docs/analysis/concepts/rjm/exit-mismatch.md (895 bytes)
- docs/analysis/concepts/rjm/rework-title-re.md (922 bytes)
- docs/analysis/concepts/rjm/review-comment-escalation-threshold.md (1010 bytes)
- docs/analysis/concepts/rjm/scan-globs.md (903 bytes)
- docs/analysis/concepts/rjm/io-error-code.md (912 bytes)
- docs/analysis/concepts/rjm/exit-drift.md (1291 bytes)
- docs/analysis/concepts/rjm/alert-title.md (924 bytes)
- docs/analysis/concepts/rjm/alert-marker.md (920 bytes)
- docs/analysis/concepts/rjm/alert-labels.md (944 bytes)
- docs/analysis/concepts/rjm/branch.md (1036 bytes)
- docs/analysis/concepts/rjm/ruleset-id.md (1030 bytes)
- docs/analysis/concepts/rjm/required-contexts.md (1159 bytes)
- docs/analysis/concepts/rjm/refresh-command.md (912 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-259.md (5543 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-259 covers 30 concepts extracted from CI/CD testing, mutation testing, drift detection, hook bypass auditing, and GitHub workflow policy enforcement scripts.
- 1 card already existed on disk (`mutation.md`) and passed quote-check; the remaining 29 cards were authored from scratch.
- Lifecycle concepts:
  - `cosmetic-control`: technique (`rjm:test`) — control mutant technique in mutation testing modifying docstrings to verify test suites do not falsely kill non-semantic edits.
  - `isolated-mutation-worktree`: technique (`rjm:test`) — test isolation mechanism providing temporary detached git worktrees so mutants and bytecode modifications do not contaminate the main workspace.
  - `hook-bypass`: pattern (`cross-phase`) — security pattern representing the unauthorized circumvention of repository git hooks (e.g. `--no-verify`), audited and counted in CI.
- Non-lifecycle concepts:
  - The remaining 27 concepts were identifiers, exit code constants, regex patterns, or threshold variables and were classified as `kind: name-only` per METHOD.md R6 and D-023: `valid-verdicts`, `parseresult`, `agent-drift-status`, `section-drift-status`, `build-drift-details`, `indicator-count`, `exit-malformed`, `count-fields`, `length-fields`, `healthreport`, `has-issues`, `exit-no-results`, `conflict-context`, `exit-mismatch`, `rework-title-re`, `review-comment-escalation-threshold`, `scan-globs`, `io-error-code`, `exit-drift`, `alert-title`, `alert-marker`, `alert-labels`, `branch`, `ruleset-id`, `required-contexts`, `refresh-command`.
- All 30 cards pass quote-check with zero failures (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~80,000 tokens across 20 source files and citing inventory cards; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
