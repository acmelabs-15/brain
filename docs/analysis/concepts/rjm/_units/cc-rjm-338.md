---
unit: cc-rjm-338
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-338

## Files assigned
- [x] sources/rjm/scripts/validation/check_python3_entrypoints.py
- [x] sources/rjm/scripts/validation/check_repo_health.py
- [x] sources/rjm/scripts/validation/check_repo_health_report.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-python3-entrypoints-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-repo-health-report-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-repo-health-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md

## Outputs produced
- docs/analysis/concepts/rjm/bare-py3-pattern.md (965 bytes)
- docs/analysis/concepts/rjm/default-docs.md (882 bytes)
- docs/analysis/concepts/rjm/check-docs.md (920 bytes)
- docs/analysis/concepts/rjm/repo-health-gate.md (1320 bytes)
- docs/analysis/concepts/rjm/core-bare.md (1039 bytes)
- docs/analysis/concepts/rjm/worktreeconfig.md (909 bytes)
- docs/analysis/concepts/rjm/scope-repairs.md (886 bytes)
- docs/analysis/concepts/rjm/default-repair.md (850 bytes)
- docs/analysis/concepts/rjm/immunization.md (866 bytes)
- docs/analysis/concepts/rjm/work-tree-fatal.md (921 bytes)
- docs/analysis/concepts/rjm/repohealth.md (1008 bytes)
- docs/analysis/concepts/rjm/report-corruption.md (947 bytes)
- docs/analysis/concepts/rjm/report-usable.md (927 bytes)
- docs/analysis/concepts/rjm/gotchas-md.md (841 bytes)
- docs/analysis/concepts/rjm/effective-pair.md (955 bytes)
- docs/analysis/concepts/rjm/active-bare-scopes.md (949 bytes)
- docs/analysis/concepts/rjm/main-work-tree.md (946 bytes)
- docs/analysis/concepts/rjm/git-budget-seconds.md (924 bytes)
- docs/analysis/concepts/rjm/gitbudget.md (827 bytes)
- docs/analysis/concepts/rjm/unreadablecorebareerror.md (938 bytes)
- docs/analysis/concepts/rjm/scoped-core-bare.md (945 bytes)
- docs/analysis/concepts/rjm/marker-git-dir.md (889 bytes)
- docs/analysis/concepts/rjm/work-tree-root.md (944 bytes)
- docs/analysis/concepts/rjm/common-git-dir.md (910 bytes)
- docs/analysis/concepts/rjm/reported-main-worktree.md (959 bytes)
- docs/analysis/concepts/rjm/holds-checked-out-content.md (922 bytes)
- docs/analysis/concepts/rjm/has-main-work-tree-index.md (948 bytes)
- docs/analysis/concepts/rjm/worktree-config-enabled.md (955 bytes)
- docs/analysis/concepts/rjm/rules-subdir.md (864 bytes)
- docs/analysis/concepts/rjm/skills-subdir.md (863 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-338.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/bare-py3-pattern.md docs/analysis/concepts/rjm/default-docs.md docs/analysis/concepts/rjm/check-docs.md docs/analysis/concepts/rjm/repo-health-gate.md docs/analysis/concepts/rjm/core-bare.md docs/analysis/concepts/rjm/worktreeconfig.md docs/analysis/concepts/rjm/scope-repairs.md docs/analysis/concepts/rjm/default-repair.md docs/analysis/concepts/rjm/immunization.md docs/analysis/concepts/rjm/work-tree-fatal.md docs/analysis/concepts/rjm/repohealth.md docs/analysis/concepts/rjm/report-corruption.md docs/analysis/concepts/rjm/report-usable.md docs/analysis/concepts/rjm/gotchas-md.md docs/analysis/concepts/rjm/effective-pair.md docs/analysis/concepts/rjm/active-bare-scopes.md docs/analysis/concepts/rjm/main-work-tree.md docs/analysis/concepts/rjm/git-budget-seconds.md docs/analysis/concepts/rjm/gitbudget.md docs/analysis/concepts/rjm/unreadablecorebareerror.md docs/analysis/concepts/rjm/scoped-core-bare.md docs/analysis/concepts/rjm/marker-git-dir.md docs/analysis/concepts/rjm/work-tree-root.md docs/analysis/concepts/rjm/common-git-dir.md docs/analysis/concepts/rjm/reported-main-worktree.md docs/analysis/concepts/rjm/holds-checked-out-content.md docs/analysis/concepts/rjm/has-main-work-tree-index.md docs/analysis/concepts/rjm/worktree-config-enabled.md docs/analysis/concepts/rjm/rules-subdir.md docs/analysis/concepts/rjm/skills-subdir.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-338 completes 30 concept cards across entrypoint validation, repository health validation, and rule activation static coverage checking:
  1. `check_python3_entrypoints.py`: `_BARE_PY3_PATTERN`, `_DEFAULT_DOCS`, and `check_docs`. Defect from inventory (`defects: orphan`) propagated to implementation status.
  2. Repo health validation gate (`repo-health gate`) and reporting infrastructure in `check_repo_health_report.py`: `repo-health gate` authored as `kind: gate`, `package_phase: cross-phase`. Helper constants, dataclass, and functions (`_SCOPE_REPAIRS`, `_DEFAULT_REPAIR`, `_IMMUNIZATION`, `_WORK_TREE_FATAL`, `RepoHealth`, `report_corruption`, `report_usable`, and git config extension `worktreeConfig`) authored as `kind: name-only` per D-023.
  3. Git health gate implementation in `check_repo_health.py`: git config key `core.bare`, reference file `GOTCHAS.md`, budget constants/dataclasses (`GIT_BUDGET_SECONDS`, `GitBudget`), custom exception `UnreadableCoreBareError`, and internal inspection routines (`_effective_pair`, `_active_bare_scopes`, `_main_work_tree`, `_scoped_core_bare`, `_marker_git_dir`, `_work_tree_root`, `_common_git_dir`, `_reported_main_worktree`, `_holds_checked_out_content`, `_has_main_work_tree_index`, `_worktree_config_enabled`) authored with `kind: name-only`.
  4. Static rule activation coverage ratchet in `check_rule_activation_coverage.py`: directory path constants `RULES_SUBDIR` and `SKILLS_SUBDIR` authored with `kind: name-only`.
- All 32 occurrences listed in `facts/cc-rjm-338.txt` are represented in the respective Where used tables.
- All 30 cards verified with byte-exact quotation matching via `bun scripts/synthesis/quote-check.ts` resulting in zero FAILs and zero MISSING sources.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
