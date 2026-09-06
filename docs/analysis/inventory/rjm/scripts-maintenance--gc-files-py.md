---
package: rjm
path: scripts/maintenance/_gc_files.py
type: script
bytes: 2559
unit: inv-rjm-250
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_files.py, sha256: 38075cc7f6defb6abe67618f885ed2a4823969aca9bad7aaf802767e5860bd08}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/_gc_files.py

## Purpose — required, verbatim
> "What the filesystem actually says about a path." — scripts/maintenance/_gc_files.py:1

## Design intent — required
Provides accurate filesystem status probing by differentiating between genuine file absence and inability to probe (such as permission denials, broken symlink chains, or directory errors). Standard Python `Path.is_file()` swallows all `OSError` exceptions and returns `False`, causing inaccessible files or broken symlinks to be treated as non-existent. In worktree garbage collection, falsely assuming a missing file allowed worktrees anchoring uncommitted staged blobs or reflog records to be deleted. `regular_file` and `nothing_at` use `stat` and `lstat` carefully, returning `None` for unknowns and reserving `False`/`True` strictly for verified absence.

## Phase — required
cross-phase

## Inputs — required
- Filesystem path `path`: `Path` — scripts/maintenance/_gc_files.py:16,47
- Filesystem metadata queries via `path.stat().st_mode` (line 39) and `path.lstat()` (line 56)

## Outputs — required
- Boolean or tri-state filesystem existence indicators: `bool | None` (line 16), `bool` (line 47)

## Invokes — required
none

## Invoked by — required
- script _gc_files — scripts/maintenance/_gc_anchors.py:21
- script _gc_files — scripts/maintenance/_gc_stale.py:18

## Concepts named — required, verbatim
- `regular_file` — scripts/maintenance/_gc_files.py:16 — defined here
- `nothing_at` — scripts/maintenance/_gc_files.py:47 — defined here
- `stat` — scripts/maintenance/_gc_files.py:12 — used here
- `Path` — scripts/maintenance/_gc_files.py:13 — used here
- `OSError` — scripts/maintenance/_gc_files.py:3 — used here
- `FileNotFoundError` — scripts/maintenance/_gc_files.py:28 — used here
- `NotADirectoryError` — scripts/maintenance/_gc_files.py:29 — used here
- `lstat` — scripts/maintenance/_gc_files.py:31 — used here

## Structure
- Module docstring on filesystem interrogation and OSError handling (scripts/maintenance/_gc_files.py:1-8)
- Imports (scripts/maintenance/_gc_files.py:10-13)
- `regular_file` function (scripts/maintenance/_gc_files.py:16-44)
- `nothing_at` function (scripts/maintenance/_gc_files.py:47-61)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/_gc_files.py`, language: Python 3, lines: 62
- documented invocation:
  - "from scripts.maintenance._gc_files import nothing_at, regular_file" — scripts/maintenance/_gc_anchors.py:21
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_files.py`
- abridged stdout: `(empty)`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (internal helper module without CLI entry point).
  Actual exit paths in code: no `sys.exit()` or `exit()` calls in code; module defines functions and returns. Exits 0 on module execution.
- for validators/gates: can it exit non-zero? no CLI entry point. Does it fail on the source repo's own default branch? exits 0 when loaded as a module.
- does the output match what the documentation claims? yes, acts as an importable module without error.

## Defects — required
none

## Observations
- Tri-state returns (`True`, `False`, `None`) are explicitly used to prevent false negatives from permission barriers or dangling symlinks.
- `stat` vs `lstat`: `lstat` is specifically chosen to detect the presence of symlinks without following them, preventing broken links from falsely looking like missing entries.

## Context cost
2559 bytes, 62 lines, ~640 tokens. Standalone module with standard library dependencies only (`pathlib`, `stat`).
