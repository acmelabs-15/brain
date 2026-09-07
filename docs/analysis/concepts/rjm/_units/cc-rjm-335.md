---
unit: cc-rjm-335
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-335

## Files assigned
- [x] sources/rjm/scripts/validation/check_duplicate_test_helpers.py
- [x] sources/rjm/scripts/validation/check_generated_staleness.py
- [x] sources/rjm/scripts/validation/check_git_hook_health.py
- [x] sources/rjm/scripts/validation/check_repo_health.py
- [x] sources/rjm/scripts/validation/check_subprocess_encoding.py
- [x] sources/rjm/scripts/validation/check_test_tree_writes.py
- [x] sources/rjm/scripts/validation/check_unreachable_code.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-duplicate-test-helpers-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-generated-staleness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-git-hook-health-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-repo-health-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-subprocess-encoding-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-test-tree-writes-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-unreachable-code-py.md

## Outputs produced
- docs/analysis/concepts/rjm/f811.md (907 bytes)
- docs/analysis/concepts/rjm/clean-git-env.md (1262 bytes)
- docs/analysis/concepts/rjm/is-git-root.md (920 bytes)
- docs/analysis/concepts/rjm/tracked-test-files.md (1077 bytes)
- docs/analysis/concepts/rjm/walk-test-files.md (910 bytes)
- docs/analysis/concepts/rjm/find-duplicate-module-level-helpers.md (1055 bytes)
- docs/analysis/concepts/rjm/validate-duplicate-test-helpers.md (993 bytes)
- docs/analysis/concepts/rjm/gate-budget-seconds.md (922 bytes)
- docs/analysis/concepts/rjm/termination-grace-seconds.md (998 bytes)
- docs/analysis/concepts/rjm/outer-cap-env.md (896 bytes)
- docs/analysis/concepts/rjm/process-start.md (894 bytes)
- docs/analysis/concepts/rjm/max-output-lines.md (878 bytes)
- docs/analysis/concepts/rjm/decode.md (876 bytes)
- docs/analysis/concepts/rjm/echo-tail.md (894 bytes)
- docs/analysis/concepts/rjm/remaining.md (890 bytes)
- docs/analysis/concepts/rjm/clamped-budget.md (911 bytes)
- docs/analysis/concepts/rjm/check-generated-staleness.md (976 bytes)
- docs/analysis/concepts/rjm/validate-generated-staleness.md (974 bytes)
- docs/analysis/concepts/rjm/lefthook-config-names.md (889 bytes)
- docs/analysis/concepts/rjm/probe-hook.md (862 bytes)
- docs/analysis/concepts/rjm/remedy.md (1038 bytes)
- docs/analysis/concepts/rjm/worktree-remedy.md (943 bytes)
- docs/analysis/concepts/rjm/global-remedy.md (927 bytes)
- docs/analysis/concepts/rjm/system-remedy.md (927 bytes)
- docs/analysis/concepts/rjm/gitexecutionerror.md (1000 bytes)
- docs/analysis/concepts/rjm/notgitrepositoryerror.md (1050 bytes)
- docs/analysis/concepts/rjm/uses-lefthook.md (918 bytes)
- docs/analysis/concepts/rjm/hooks-dir.md (892 bytes)
- docs/analysis/concepts/rjm/configured-hooks-path.md (977 bytes)
- docs/analysis/concepts/rjm/failed-condition.md (955 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-335.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/f811.md docs/analysis/concepts/rjm/clean-git-env.md docs/analysis/concepts/rjm/is-git-root.md docs/analysis/concepts/rjm/tracked-test-files.md docs/analysis/concepts/rjm/walk-test-files.md docs/analysis/concepts/rjm/find-duplicate-module-level-helpers.md docs/analysis/concepts/rjm/validate-duplicate-test-helpers.md docs/analysis/concepts/rjm/gate-budget-seconds.md docs/analysis/concepts/rjm/termination-grace-seconds.md docs/analysis/concepts/rjm/outer-cap-env.md docs/analysis/concepts/rjm/process-start.md docs/analysis/concepts/rjm/max-output-lines.md docs/analysis/concepts/rjm/decode.md docs/analysis/concepts/rjm/echo-tail.md docs/analysis/concepts/rjm/remaining.md docs/analysis/concepts/rjm/clamped-budget.md docs/analysis/concepts/rjm/check-generated-staleness.md docs/analysis/concepts/rjm/validate-generated-staleness.md docs/analysis/concepts/rjm/lefthook-config-names.md docs/analysis/concepts/rjm/probe-hook.md docs/analysis/concepts/rjm/remedy.md docs/analysis/concepts/rjm/worktree-remedy.md docs/analysis/concepts/rjm/global-remedy.md docs/analysis/concepts/rjm/system-remedy.md docs/analysis/concepts/rjm/gitexecutionerror.md docs/analysis/concepts/rjm/notgitrepositoryerror.md docs/analysis/concepts/rjm/uses-lefthook.md docs/analysis/concepts/rjm/hooks-dir.md docs/analysis/concepts/rjm/configured-hooks-path.md docs/analysis/concepts/rjm/failed-condition.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-335 completes 30 concept cards representing internal validators, functions, constants, and error classes in rjm validation scripts:
  1. Duplicate test helpers scanner and AST inspection helpers (`F811`, `_clean_git_env`, `_is_git_root`, `_tracked_test_files`, `_walk_test_files`, `find_duplicate_module_level_helpers`, `validate_duplicate_test_helpers`) from `scripts/validation/check_duplicate_test_helpers.py` (and related references in `check_subprocess_encoding.py`, `check_unreachable_code.py`, and `check_test_tree_writes.py`).
  2. Generated staleness gate parameters, timeouts, and process management routines (`_GATE_BUDGET_SECONDS`, `_TERMINATION_GRACE_SECONDS`, `_OUTER_CAP_ENV`, `_PROCESS_START`, `_MAX_OUTPUT_LINES`, `_decode`, `_echo_tail`, `_remaining`, `_clamped_budget`, `check_generated_staleness`, `validate_generated_staleness`) from `scripts/validation/check_generated_staleness.py`.
  3. Git hook health validation configuration, remedies, exception classes, and scope diagnostics (`LEFTHOOK_CONFIG_NAMES`, `PROBE_HOOK`, `REMEDY`, `WORKTREE_REMEDY`, `GLOBAL_REMEDY`, `SYSTEM_REMEDY`, `GitExecutionError`, `NotGitRepositoryError`, `_uses_lefthook`, `_hooks_dir`, `_configured_hooks_path`, `_failed_condition`) from `scripts/validation/check_git_hook_health.py` and `scripts/validation/check_repo_health.py`.
- All 30 concepts represent identifiers, constants, functions, or exception classes rather than SDLC lifecycle concepts, and were classified as `kind: name-only` per D-023.
- All 36 occurrences listed in `facts/cc-rjm-335.txt` are faithfully mapped as rows in the respective `Where used` tables.
- Defect status from citing inventory cards was propagated to `Implementation status`: `check_test_tree_writes.py` carries `defects: other` (propagated to `tracked-test-files.md`), while the remaining cards are `clean`.
- All 30 concept cards pass `bun scripts/synthesis/quote-check.ts` with 0 failures and 0 missing sources.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 authored concept cards and 1 unit report.
