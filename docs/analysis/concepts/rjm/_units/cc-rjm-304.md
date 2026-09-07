---
unit: cc-rjm-304
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-304

## Files assigned
- [x] scripts/maintenance/repair_packed_refs.py
- [x] scripts/maintenance/repair_worktree_venv.py
- [x] scripts/maintenance/worktree_occupancy.py
- [x] scripts/maintenance/worktree_report.py
- [x] docs/analysis/inventory/rjm/scripts-maintenance-repair-packed-refs-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-repair-worktree-venv-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-worktree-occupancy-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-worktree-report-py.md

## Outputs produced
- docs/analysis/concepts/rjm/repairresult.md (843 bytes)
- docs/analysis/concepts/rjm/find-worktree-root.md (903 bytes)
- docs/analysis/concepts/rjm/resolve-common-git-dir.md (923 bytes)
- docs/analysis/concepts/rjm/normalize-packed-refs.md (957 bytes)
- docs/analysis/concepts/rjm/verify-git-refs.md (915 bytes)
- docs/analysis/concepts/rjm/repair-packed-refs.md (925 bytes)
- docs/analysis/concepts/rjm/resolve-git-dir.md (934 bytes)
- docs/analysis/concepts/rjm/backup-packed-refs.md (949 bytes)
- docs/analysis/concepts/rjm/write-repaired-packed-refs.md (1014 bytes)
- docs/analysis/concepts/rjm/issue-3170.md (945 bytes)
- docs/analysis/concepts/rjm/repair-command.md (1063 bytes)
- docs/analysis/concepts/rjm/staleshebang.md (891 bytes)
- docs/analysis/concepts/rjm/repairreport.md (881 bytes)
- docs/analysis/concepts/rjm/worktree-root.md (878 bytes)
- docs/analysis/concepts/rjm/find-launcher-dir.md (959 bytes)
- docs/analysis/concepts/rjm/read-shebang.md (885 bytes)
- docs/analysis/concepts/rjm/interpreter-of-shebang.md (926 bytes)
- docs/analysis/concepts/rjm/scan-launcher-dir.md (946 bytes)
- docs/analysis/concepts/rjm/run-repair.md (890 bytes)
- docs/analysis/concepts/rjm/report-to-json.md (872 bytes)
- docs/analysis/concepts/rjm/process-gone.md (896 bytes)
- docs/analysis/concepts/rjm/keep-main.md (866 bytes)
- docs/analysis/concepts/rjm/keep-bare.md (839 bytes)
- docs/analysis/concepts/rjm/keep-locked.md (842 bytes)
- docs/analysis/concepts/rjm/keep-dirty.md (875 bytes)
- docs/analysis/concepts/rjm/keep-detached.md (885 bytes)
- docs/analysis/concepts/rjm/keep-unpushed.md (902 bytes)
- docs/analysis/concepts/rjm/keep-git-error.md (881 bytes)
- docs/analysis/concepts/rjm/keep-time-budget.md (934 bytes)
- docs/analysis/concepts/rjm/keep-occupied.md (892 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-304.md (2600 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit originate from Python maintenance and garbage collection utility scripts (`scripts/maintenance/repair_packed_refs.py`, `scripts/maintenance/repair_worktree_venv.py`, `scripts/maintenance/worktree_occupancy.py`, `scripts/maintenance/worktree_report.py`).
- All 30 represent code identifiers (functions, dataclasses, constants) or external issue tracker citations rather than operational SDLC lifecycle concepts, and are classified as `kind: name-only` per METHOD.md R6 and D-023.
- All 30 concept cards pass byte-exact quotation verification via `bun scripts/synthesis/quote-check.ts` with zero failures (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,000 tokens across 4 source files and 4 citing inventory cards; approximate tokens of output written: ~7,000 tokens across 30 concept cards and this unit report.
