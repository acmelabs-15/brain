---
package: rjm
path: scripts/maintenance/_gc_anchors.py
type: script
bytes: 7917
unit: inv-rjm-249
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_anchors.py, sha256: 5fc8d66c8c261d72b266e12530edb85d80ec424089f4c38cd9c7d55d0f2e5b2a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/_gc_anchors.py

## Purpose — required, verbatim
> "What a worktree's admin directory names, and nothing else." — scripts/maintenance/_gc_anchors.py:1

## Design intent — required
Safely reads object IDs (OIDs) anchored within a git worktree's administrative directory (`.git/worktrees/<id>/`) before worktree deletion occurs. Because `git worktree remove` deletes the worktree's admin directory containing its private reflogs (`logs/`) and private references (`refs/`), commits pointed to only by these anchors would otherwise be permanently pruned by git garbage collection. The module adopts rigorous three-valued logic ("yes", "no", or "unknown"/`None`): any unreadable, corrupt, or unexpectedly encoded file returns `None` rather than an empty list, preventing false "silent all-clears" that could lead to irrecoverable data loss.

## Phase — required
cross-phase

## Inputs — required
- Worktree administrative directory path (`admin: Path`) passed to `reflog_oids()` and `worktree_ref_oids()` (scripts/maintenance/_gc_anchors.py:27, 164)
- Filesystem path (`root: Path`) passed to `walk_files()` (scripts/maintenance/_gc_anchors.py:101)
- Filesystem contents read from `.git/worktrees/<id>/logs/`, `.git/worktrees/<id>/refs/`, and detection of `.git/worktrees/<id>/reftable` (scripts/maintenance/_gc_anchors.py:46, 48, 72, 177, 183)

## Outputs — required
- List of distinct object ID strings (or `None` on unparseable/opaque state) returned by `reflog_oids()` and `worktree_ref_oids()` (scripts/maintenance/_gc_anchors.py:58, 193)
- List of sorted regular file `Path` objects (or `None` on permission/untrustworthy filesystem states) returned by `walk_files()` (scripts/maintenance/_gc_anchors.py:135)

## Invokes — required
- script scripts.maintenance._gc_files — scripts/maintenance/_gc_anchors.py:21

## Invoked by — required
- script _gc_anchors — scripts/maintenance/_gc_stale.py:17

## Concepts named — required, verbatim
- `worktree` — scripts/maintenance/_gc_anchors.py:1 — used here
- `admin directory` — scripts/maintenance/_gc_anchors.py:1 — used here
- `reflogs` — scripts/maintenance/_gc_anchors.py:4 — used here
- `refs` — scripts/maintenance/_gc_anchors.py:5 — used here
- `reachability` — scripts/maintenance/_gc_anchors.py:6 — used here
- `three-valued` — scripts/maintenance/_gc_anchors.py:9 — used here
- `reflog_oids` — scripts/maintenance/_gc_anchors.py:27 — defined here
- `walk_files` — scripts/maintenance/_gc_anchors.py:101 — defined here
- `worktree_ref_oids` — scripts/maintenance/_gc_anchors.py:164 — defined here

## Structure
none (python module; functions: `reflog_oids`, `_reflog_text`, `_collect_reflog_oids`, `walk_files`, `_route_entries`, `worktree_ref_oids`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/_gc_anchors.py`, language: Python 3, lines: 194
- documented invocation: "What a worktree's admin directory names, and nothing else." — scripts/maintenance/_gc_anchors.py:1
- **executed:** yes
- actual command run: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from pathlib import Path; from scripts.maintenance import _gc_anchors; print('walk_files on temp dir:', _gc_anchors.walk_files(Path('.')))"`
  abridged stdout:
  ```
  walk_files on temp dir: [...]
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented exit codes: none.
  Actual exit paths in code: none (library module; returns lists or `None`).
- for validators/gates: can it exit non-zero? No. Does it fail on the source repo's own default branch? No.
- does the output match what the documentation claims? Yes, implements three-valued anchor readers avoiding false empty lists.

## Defects — required
none

## Observations
- Refuses to inspect `reftable` formats (`admin / "reftable"`), deliberately answering `None` to prevent dangerous false-negative reachability assumptions when non-files backends are present.
- Explicitly rejects directory symlinks and non-standard filesystem entries (FIFOs, sockets, device nodes) during directory walking to prevent missed anchors or infinite directory recursion.
- Collects object IDs using `dict[str, None]` for deduplication to preserve discovery order while ensuring O(1) membership checks.

## Context cost
7917 bytes (~1979 tokens). Imports `scripts.maintenance._gc_files` (2559 bytes) and standard library (`os`, `re`, `stat`, `pathlib`). Total transitive size: ~10476 bytes (~2619 tokens).
