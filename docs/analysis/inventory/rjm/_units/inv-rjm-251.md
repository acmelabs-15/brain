---
unit: inv-rjm-251
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-251

## Files assigned
- [x] sources/rjm/scripts/maintenance/_gc_stale.py
- [x] sources/rjm/scripts/maintenance/detect_orphan_commits.py
- [x] sources/rjm/scripts/maintenance/detect_unlanded_commits.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-maintenance--gc-stale-py.md (8684 bytes)
- docs/analysis/inventory/rjm/scripts-maintenance-detect-orphan-commits-py.md (8887 bytes)
- docs/analysis/inventory/rjm/scripts-maintenance-detect-unlanded-commits-py.md (7945 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-251.md

## Scripts executed
- `sources/rjm/scripts/maintenance/_gc_stale.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_stale.py`, exit code 0 (clean import and execution with no stdout; internal helper module tested via 28 passing unit tests in `tests/test_gc_stale_probes.py`)
- `sources/rjm/scripts/maintenance/detect_orphan_commits.py`: `python3 scripts/maintenance/detect_orphan_commits.py`, exit code 1 (detected 1 post-merge commit on PR #5527 `renovate/github-copilot-1.x`); `python3 scripts/maintenance/detect_orphan_commits.py --limit 1`, exit code 0; `python3 scripts/maintenance/detect_orphan_commits.py --limit 0`, exit code 2
- `sources/rjm/scripts/maintenance/detect_unlanded_commits.py`: `python3 scripts/maintenance/detect_unlanded_commits.py`, exit code 1 (detected 274 remote branches with unmerged commits not in `origin/main`); `python3 scripts/maintenance/detect_unlanded_commits.py --repo /nonexistent`, exit code 2; `python3 scripts/maintenance/detect_unlanded_commits.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/maintenance/_gc_stale.py` is invoked by `scripts/maintenance/gc_worktrees.py`, `scripts/maintenance/_gc_apply.py` (inv-rjm-250), and `scripts/maintenance/_gc_reasons.py`. It depends on `scripts/maintenance/_gc_anchors.py`, `scripts/maintenance/_gc_files.py`, and `scripts/maintenance/worktree_report.py`.
- `scripts/maintenance/detect_orphan_commits.py` models its exit code contract on `scripts/audit_orphaned_branches.py:22` (inv-rjm-197), and references `scripts/ci/write_pr_discovery_summary.py` (issue #4316). It is invoked by GitHub Actions hourly sweep workflow `.github/workflows/pr-maintenance.yml:98` with `continue-on-error: true`.
- `scripts/maintenance/detect_unlanded_commits.py` represents a git-branch-based predecessor approach to `detect_orphan_commits.py`, surfacing remote branches whose tip commits are not ancestors of `origin/main` following squash merges. It defines helper `_is_ancestor` which is dead code in the file.

## Blocked or uncertain
none

## Time and size
Source read: 33,387 bytes across 3 files (~8,350 tokens).
Output written: 25,516 bytes across 3 inventory cards + 1 unit report (~6,400 tokens).
