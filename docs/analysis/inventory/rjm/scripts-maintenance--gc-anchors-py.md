---
package: rjm
path: scripts/maintenance/_gc_anchors.py
type: script
bytes: 7917
unit: inv-rjm-249
in_scope_via: scripts/maintenance/_gc_stale.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_anchors.py, sha256: 5fc8d66c8c261d72b266e12530edb85d80ec424089f4c38cd9c7d55d0f2e5b2a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/maintenance/_gc_anchors.py

## Purpose — required, verbatim
> "What a worktree's admin directory names, and nothing else." — scripts/maintenance/_gc_anchors.py:1

## Design intent — required
Inspects Git worktree administration directories (`.git/worktrees/<name>`) to detect anchor references—specifically reflogs under `logs/` and worktree-local refs under `refs/`—that would be destroyed by `git worktree remove`. Because these anchors are invisible to main repository ref queries, commits held exclusively by them appear unreferenced to standard reachability checks. To prevent catastrophic data loss during worktree cleanup, readers implement three-valued logic (returning `None` for unparseable, truncated, or ambiguous records rather than treating them as empty) to prevent false-positive "all-clear" signals.

## Phase — required
cross-phase

## Inputs — required
- Admin directory path `admin: Path` passed to `reflog_oids` (`scripts/maintenance/_gc_anchors.py:27`) and `worktree_ref_oids` (`scripts/maintenance/_gc_anchors.py:164`)
- Directory root path `root: Path` passed to `walk_files` (`scripts/maintenance/_gc_anchors.py:101`)
- Worktree reflog files under `<admin>/logs/` read by `_reflog_text` (`scripts/maintenance/_gc_anchors.py:48, 61, 72`)
- Worktree reference files under `<admin>/refs/` read by `worktree_ref_oids` (`scripts/maintenance/_gc_anchors.py:177, 183`)
- Directory entries traversed via `os.scandir` (`scripts/maintenance/_gc_anchors.py:130`)

## Outputs — required
- List of non-null object IDs in reflogs `list[str] | None` returned by `reflog_oids` (`scripts/maintenance/_gc_anchors.py:27`)
- List of regular file paths `list[Path] | None` returned by `walk_files` (`scripts/maintenance/_gc_anchors.py:101`)
- List of object IDs in worktree refs `list[str] | None` returned by `worktree_ref_oids` (`scripts/maintenance/_gc_anchors.py:164`)

## Invokes — required
- script _gc_files — scripts/maintenance/_gc_anchors.py:21

## Invoked by — required
- script _gc_anchors — scripts/maintenance/_gc_stale.py:17

## Concepts named — required, verbatim
- `nothing_at` — scripts/maintenance/_gc_anchors.py:21 — used here
- `regular_file` — scripts/maintenance/_gc_anchors.py:21 — used here
- `reflog_oids` — scripts/maintenance/_gc_anchors.py:27 — defined here
- `_reflog_text` — scripts/maintenance/_gc_anchors.py:61 — defined here
- `_collect_reflog_oids` — scripts/maintenance/_gc_anchors.py:77 — defined here
- `walk_files` — scripts/maintenance/_gc_anchors.py:101 — defined here
- `_route_entries` — scripts/maintenance/_gc_anchors.py:138 — defined here
- `worktree_ref_oids` — scripts/maintenance/_gc_anchors.py:164 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/_gc_anchors.py`, language: Python 3, lines: 194
- documented invocation: none
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_anchors.py`, abridged stdout: none, **actual exit code**: 0
- documented exit codes: none vs. actual exit paths: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? yes, loads cleanly

## Defects — required
none

## Observations
- Rejects reftable backends cleanly (`admin / "reftable"` returning `None`) because files-backend readers cannot parse the reftable format.
- Implements conservative three-valued logic (`None` = unknown, `[]` = empty/safe, `[oid, ...]` = anchored commits): any unexpected encoding, truncated line, directory symlink, socket, FIFO, or permission failure returns `None` instead of clearing the worktree for deletion.
- Custom iterative directory walk (`walk_files`) uses `os.scandir` instead of `Path.rglob` because `rglob` silently swallows `PermissionError` and skips directory symlinks, which would produce dangerous silent false-positives.

## Context cost
7,917 bytes plus imported helper `_gc_files` (~15,500 bytes total, ~3,900 tokens).
