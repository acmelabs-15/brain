---
unit: inv-rjm-250
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-250

## Files assigned
- [x] `scripts/maintenance/_gc_apply.py`
- [x] `scripts/maintenance/_gc_files.py`
- [x] `scripts/maintenance/_gc_parse.py`
- [x] `scripts/maintenance/_gc_reasons.py`
- [x] `scripts/maintenance/_gc_remote.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-maintenance--gc-apply-py.md` (6171 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance--gc-files-py.md` (3927 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance--gc-parse-py.md` (4056 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance--gc-reasons-py.md` (6166 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance--gc-remote-py.md` (4341 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-250.md` (~2150 bytes)

## Scripts executed
- `scripts/maintenance/_gc_apply.py`, `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_apply.py`, exit 0
- `scripts/maintenance/_gc_files.py`, `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_files.py`, exit 0
- `scripts/maintenance/_gc_parse.py`, `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_parse.py`, exit 0
- `scripts/maintenance/_gc_reasons.py`, `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_reasons.py`, exit 0
- `scripts/maintenance/_gc_remote.py`, `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_remote.py`, exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- These five files (`_gc_apply.py`, `_gc_files.py`, `_gc_parse.py`, `_gc_reasons.py`, `_gc_remote.py`) are modular internal components supporting `scripts/maintenance/gc_worktrees.py`.
- `_gc_apply.py` isolates destructive removal mutations and implements multi-stage revalidation against race conditions.
- `_gc_files.py` implements tri-state filesystem checks (`regular_file`, `nothing_at`) to distinguish `OSError` / permission barriers from true file absence.
- `_gc_parse.py` parses `git worktree list --porcelain` into structured `Worktree` objects and preserves the human-readable explanation for `prunable`.
- `_gc_reasons.py` structures warning generation across three independent data-loss channels (detached HEAD, orphaned index, unanchored reflog commits) and formats executable recovery commands targeting the main worktree.
- `_gc_remote.py` inspects remote origin refs to identify worktrees whose tracking branches were deleted upstream.

## Blocked or uncertain
none

## Time and size
Source read: 31266 bytes (~7816 tokens). Deliverables written: ~26811 bytes (~6700 tokens).
