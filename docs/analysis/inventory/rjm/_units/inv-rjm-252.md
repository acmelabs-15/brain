---
unit: inv-rjm-252
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-252

## Files assigned
- [x] `scripts/maintenance/gc_worktrees.py` — read in full
- [x] `scripts/maintenance/repair_packed_refs.py` — read in full
- [x] `scripts/maintenance/repair_worktree_venv.py` — read in full
- [x] `scripts/maintenance/worktree_occupancy.py` — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-maintenance-gc-worktrees-py.md` (9981 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance-repair-packed-refs-py.md` (6430 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance-repair-worktree-venv-py.md` (8195 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance-worktree-occupancy-py.md` (4882 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-252.md`

## Scripts executed
- `scripts/maintenance/gc_worktrees.py`: `python3 scripts/maintenance/gc_worktrees.py`, exit code: 0
- `scripts/maintenance/repair_packed_refs.py`: `python3 scripts/maintenance/repair_packed_refs.py`, exit code: 0
- `scripts/maintenance/repair_worktree_venv.py`: `python3 scripts/maintenance/repair_worktree_venv.py --check`, exit code: 0
- `scripts/maintenance/worktree_occupancy.py`: `python3 -c "import sys; sys.path.insert(0, '.'); from scripts.maintenance.worktree_occupancy import occupied_paths; print(occupied_paths())"`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/maintenance/gc_worktrees.py` and `scripts/maintenance/worktree_occupancy.py` coordinate closely with other maintenance modules in units inv-rjm-250 (`_gc_apply.py`), inv-rjm-251 (`_gc_reasons.py`, `_gc_stale.py`, `_gc_parse.py`, `_gc_remote.py`), and `worktree_report.py`.
- `repair_packed_refs.py` runs as the primary git repair pre-commit hook in `lefthook.yml` to prevent LSP blank-line syntax corruption from breaking git operations.
- `repair_worktree_venv.py` handles stale launcher shebangs created after moving worktrees, which is referenced in `git-advanced-workflows` and `ai-agents-build-and-env` skills.

## Blocked or uncertain
none

## Time and size
Source read: 44,625 bytes (~11,200 tokens across 4 files).
Output written: ~31,000 bytes (~7,800 tokens across 4 inventory cards plus unit report).
