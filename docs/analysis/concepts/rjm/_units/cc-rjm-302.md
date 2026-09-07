---
unit: cc-rjm-302
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-302

## Files assigned
- [x] sources/rjm/scripts/maintenance/_gc_parse.py
- [x] sources/rjm/scripts/maintenance/_gc_reasons.py
- [x] sources/rjm/scripts/maintenance/_gc_remote.py
- [x] sources/rjm/scripts/maintenance/_gc_stale.py
- [x] sources/rjm/scripts/maintenance/gc_worktrees.py
- [x] sources/rjm/scripts/maintenance/worktree_report.py
- [x] sources/rjm/scripts/validation/check_skill_resolver_anchoring.py
- [x] docs/analysis/inventory/rjm/scripts-maintenance--gc-parse-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance--gc-reasons-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance--gc-remote-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance--gc-stale-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-gc-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-worktree-report-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-resolver-anchoring-py.md

## Outputs produced
- docs/analysis/concepts/rjm/worktree.md (1453 bytes)
- docs/analysis/concepts/rjm/prunable.md (910 bytes)
- docs/analysis/concepts/rjm/apply-attribute.md (956 bytes)
- docs/analysis/concepts/rjm/list-worktrees.md (957 bytes)
- docs/analysis/concepts/rjm/keep-stale.md (1090 bytes)
- docs/analysis/concepts/rjm/keep-stale-head-unknown.md (1122 bytes)
- docs/analysis/concepts/rjm/keep-stale-occupied.md (1111 bytes)
- docs/analysis/concepts/rjm/keep-stale-unreachable.md (1127 bytes)
- docs/analysis/concepts/rjm/path-confirmed-absent.md (973 bytes)
- docs/analysis/concepts/rjm/stale-keep-reason.md (1016 bytes)
- docs/analysis/concepts/rjm/head-warning.md (971 bytes)
- docs/analysis/concepts/rjm/staged-warning.md (956 bytes)
- docs/analysis/concepts/rjm/admin-warning.md (967 bytes)
- docs/analysis/concepts/rjm/stale-head-is-reachable.md (1012 bytes)
- docs/analysis/concepts/rjm/suspended-operation-reason.md (1042 bytes)
- docs/analysis/concepts/rjm/gitrunner.md (1044 bytes)
- docs/analysis/concepts/rjm/load-remote-head-refs.md (956 bytes)
- docs/analysis/concepts/rjm/load-origin-upstreams.md (959 bytes)
- docs/analysis/concepts/rjm/try-load-origin-upstreams.md (979 bytes)
- docs/analysis/concepts/rjm/is-merged-by-deleted-upstream.md (963 bytes)
- docs/analysis/concepts/rjm/admin-dir-for.md (973 bytes)
- docs/analysis/concepts/rjm/staged.md (861 bytes)
- docs/analysis/concepts/rjm/clean.md (851 bytes)
- docs/analysis/concepts/rjm/staged-content-state.md (973 bytes)
- docs/analysis/concepts/rjm/unreachable-admin-commits.md (1066 bytes)
- docs/analysis/concepts/rjm/existing-objects.md (1018 bytes)
- docs/analysis/concepts/rjm/operation-markers.md (939 bytes)
- docs/analysis/concepts/rjm/admin-dir-from-marker.md (1000 bytes)
- docs/analysis/concepts/rjm/ref-update-in-flight.md (955 bytes)
- docs/analysis/concepts/rjm/anchored.md (1203 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-302.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/worktree.md docs/analysis/concepts/rjm/prunable.md docs/analysis/concepts/rjm/apply-attribute.md docs/analysis/concepts/rjm/list-worktrees.md docs/analysis/concepts/rjm/keep-stale.md docs/analysis/concepts/rjm/keep-stale-head-unknown.md docs/analysis/concepts/rjm/keep-stale-occupied.md docs/analysis/concepts/rjm/keep-stale-unreachable.md docs/analysis/concepts/rjm/path-confirmed-absent.md docs/analysis/concepts/rjm/stale-keep-reason.md docs/analysis/concepts/rjm/head-warning.md docs/analysis/concepts/rjm/staged-warning.md docs/analysis/concepts/rjm/admin-warning.md docs/analysis/concepts/rjm/stale-head-is-reachable.md docs/analysis/concepts/rjm/suspended-operation-reason.md docs/analysis/concepts/rjm/gitrunner.md docs/analysis/concepts/rjm/load-remote-head-refs.md docs/analysis/concepts/rjm/load-origin-upstreams.md docs/analysis/concepts/rjm/try-load-origin-upstreams.md docs/analysis/concepts/rjm/is-merged-by-deleted-upstream.md docs/analysis/concepts/rjm/admin-dir-for.md docs/analysis/concepts/rjm/staged.md docs/analysis/concepts/rjm/clean.md docs/analysis/concepts/rjm/staged-content-state.md docs/analysis/concepts/rjm/unreachable-admin-commits.md docs/analysis/concepts/rjm/existing-objects.md docs/analysis/concepts/rjm/operation-markers.md docs/analysis/concepts/rjm/admin-dir-from-marker.md docs/analysis/concepts/rjm/ref-update-in-flight.md docs/analysis/concepts/rjm/anchored.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-302 covers 30 concept cards across 40 occurrences recorded in `facts/cc-rjm-302.txt`.
- The concepts encompass git worktree garbage collection, stale checkout analysis, and resolver path anchoring:
  1. Worktree porcelain parsing and reporting: `Worktree`, `prunable`, `_apply_attribute`, `list_worktrees`.
  2. Stale worktree retention reasons and warnings: `KEEP_STALE`, `KEEP_STALE_HEAD_UNKNOWN`, `KEEP_STALE_OCCUPIED`, `KEEP_STALE_UNREACHABLE`, `_path_confirmed_absent`, `stale_keep_reason`, `_head_warning`, `_staged_warning`, `_admin_warning`, `stale_head_is_reachable`, `suspended_operation_reason`.
  3. Git execution and remote tracking branch resolution: `GitRunner`, `load_remote_head_refs`, `load_origin_upstreams`, `try_load_origin_upstreams`, `is_merged_by_deleted_upstream`.
  4. Stale admin directory and Git internals inspection: `admin_dir_for`, `STAGED`, `CLEAN`, `staged_content_state`, `unreachable_admin_commits`, `_existing_objects`, `_OPERATION_MARKERS`, `admin_dir_from_marker`, `_ref_update_in_flight`.
  5. Cross-file resolver anchoring: `_anchored` (used as helper in `_gc_stale.py` and regex pattern in `check_skill_resolver_anchoring.py`).
- All 30 concepts represent Python functions, type aliases, classes, constants, or regex patterns and are classified as `kind: name-only` per D-023.
- Implementation status is `clean` across the maintenance scripts, with `defects: orphan` reflected on `anchored` from `check_skill_resolver_anchoring.py`.
- Byte-exact verification via `quote-check.ts` passes with 0 FAIL across all 30 cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~8,000 tokens across 30 concept cards and 1 unit report.
