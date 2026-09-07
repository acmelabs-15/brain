---
unit: cc-rjm-303
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-303

## Files assigned
- [x] scripts/README.md
- [x] scripts/maintenance/_gc_stale.py
- [x] scripts/maintenance/detect_orphan_commits.py
- [x] scripts/maintenance/detect_unlanded_commits.py
- [x] scripts/maintenance/gc_worktrees.py
- [x] scripts/maintenance/repair_packed_refs.py
- [x] scripts/maintenance/worktree_occupancy.py
- [x] scripts/validation/check_git_hook_health.py
- [x] scripts/validation/check_repo_health.py
- [x] scripts/validation/check_tmp_worktrees.py
- [x] scripts/validation/portability_git.py
- [x] scripts/validation/push_ref_staleness.py
- [x] docs/analysis/inventory/rjm/scripts-maintenance--gc-stale-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-detect-orphan-commits-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-detect-unlanded-commits-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-gc-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-repair-packed-refs-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-worktree-occupancy-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-git-hook-health-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-repo-health-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-tmp-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-git-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-push-ref-staleness-py.md
- [x] docs/analysis/inventory/rjm/scripts-readme-md.md

## Outputs produced
- docs/analysis/concepts/rjm/resolved.md (815 bytes)
- docs/analysis/concepts/rjm/gc-anchors.md (832 bytes)
- docs/analysis/concepts/rjm/orphanfinding.md (878 bytes)
- docs/analysis/concepts/rjm/find-orphan-commits.md (913 bytes)
- docs/analysis/concepts/rjm/fetch-merged-prs.md (950 bytes)
- docs/analysis/concepts/rjm/fetch-remote-tips.md (935 bytes)
- docs/analysis/concepts/rjm/make-is-landed.md (959 bytes)
- docs/analysis/concepts/rjm/format-step-summary.md (933 bytes)
- docs/analysis/concepts/rjm/default-limit.md (856 bytes)
- docs/analysis/concepts/rjm/gh-timeout.md (822 bytes)
- docs/analysis/concepts/rjm/git-timeout.md (1011 bytes)
- docs/analysis/concepts/rjm/unlandedbranch.md (888 bytes)
- docs/analysis/concepts/rjm/remote-merged-branches.md (947 bytes)
- docs/analysis/concepts/rjm/is-ancestor.md (1061 bytes)
- docs/analysis/concepts/rjm/tip-sha.md (871 bytes)
- docs/analysis/concepts/rjm/commit-count-not-in-base.md (969 bytes)
- docs/analysis/concepts/rjm/branch-pr-merged.md (904 bytes)
- docs/analysis/concepts/rjm/gc-worktrees-py.md (1193 bytes)
- docs/analysis/concepts/rjm/occupancy.md (987 bytes)
- docs/analysis/concepts/rjm/is-occupied.md (1018 bytes)
- docs/analysis/concepts/rjm/occupied-paths.md (986 bytes)
- docs/analysis/concepts/rjm/default-base.md (860 bytes)
- docs/analysis/concepts/rjm/git-timeout-seconds.md (1528 bytes)
- docs/analysis/concepts/rjm/decide-workers.md (843 bytes)
- docs/analysis/concepts/rjm/default-time-budget-seconds.md (909 bytes)
- docs/analysis/concepts/rjm/has-uncommitted-changes.md (907 bytes)
- docs/analysis/concepts/rjm/has-unpushed-commits.md (891 bytes)
- docs/analysis/concepts/rjm/is-merged-to-base.md (904 bytes)
- docs/analysis/concepts/rjm/packed-refs.md (865 bytes)
- docs/analysis/concepts/rjm/issue-2903.md (870 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-303.md (5218 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit originate from Python maintenance, garbage collection, and Git validation scripts (`scripts/maintenance/_gc_stale.py`, `scripts/maintenance/detect_orphan_commits.py`, `scripts/maintenance/detect_unlanded_commits.py`, `scripts/maintenance/gc_worktrees.py`, `scripts/maintenance/repair_packed_refs.py`, `scripts/maintenance/worktree_occupancy.py`, `scripts/validation/check_git_hook_health.py`, `scripts/validation/check_repo_health.py`, `scripts/validation/check_tmp_worktrees.py`, `scripts/validation/portability_git.py`, `scripts/validation/push_ref_staleness.py`, `scripts/README.md`).
- All 30 represent code identifiers (functions, dataclasses, constants), file names, or issue tracker citations rather than operational SDLC lifecycle concepts, and are classified as `kind: name-only` per METHOD.md R6 and D-023.
- All 30 concept cards pass byte-exact quotation verification via `bun scripts/synthesis/quote-check.ts` with zero failures (32 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 12 source files and 12 citing inventory cards; approximate tokens of output written: ~7,500 tokens across 30 concept cards and this unit report.
