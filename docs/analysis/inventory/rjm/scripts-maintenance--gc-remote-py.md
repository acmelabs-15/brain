---
package: rjm
path: scripts/maintenance/_gc_remote.py
type: script
bytes: 2229
unit: inv-rjm-250
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_remote.py, sha256: 26e40c416c74f117beb585cf042ed381311485f23c722ceb52c7c9edfef76d5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/_gc_remote.py

## Purpose — required, verbatim
> "Remote branch helpers for worktree garbage collection." — scripts/maintenance/_gc_remote.py:1

## Design intent — required
Provides inspection of remote repository branches to safely detect and prune worktrees tracking branches deleted on origin. A worktree can be considered merged and safe for deletion when its upstream remote tracking branch no longer exists on origin (`is_merged_by_deleted_upstream`). To support this without race conditions or false deletions from network or config errors, `_gc_remote` queries `git ls-remote --heads origin` and branch upstream mappings (`config --get-regexp`), encapsulating config failure fallback in `try_load_origin_upstreams`.

## Phase — required
cross-phase

## Inputs — required
- Git runner callable `run_git`: `GitRunner` — scripts/maintenance/_gc_remote.py:7,10,24,45
- Branch name `branch`: `str` — scripts/maintenance/_gc_remote.py:54
- Remote heads cache `remote_head_refs`: `frozenset[str]` — scripts/maintenance/_gc_remote.py:55
- Upstream mapping `origin_upstreams`: `dict[str, str]` — scripts/maintenance/_gc_remote.py:56
- Git commands executed: `["ls-remote", "--heads", "origin"]` (line 12), `["config", "--get-regexp", r"^branch\..*\.(remote|merge)$"]` (line 26)

## Outputs — required
- Remote head ref names: `frozenset[str]` — scripts/maintenance/_gc_remote.py:10
- Origin upstream dictionary: `dict[str, str]` — scripts/maintenance/_gc_remote.py:24,45
- Boolean merged status: `bool` — scripts/maintenance/_gc_remote.py:57

## Invokes — required
none

## Invoked by — required
- script _gc_remote — scripts/maintenance/gc_worktrees.py:66
- script _gc_remote — scripts/maintenance/gc_worktrees.py:73
- script _gc_remote — scripts/maintenance/gc_worktrees.py:80

## Concepts named — required, verbatim
- `GitRunner` — scripts/maintenance/_gc_remote.py:7 — defined here
- `load_remote_head_refs` — scripts/maintenance/_gc_remote.py:10 — defined here
- `load_origin_upstreams` — scripts/maintenance/_gc_remote.py:24 — defined here
- `try_load_origin_upstreams` — scripts/maintenance/_gc_remote.py:45 — defined here
- `is_merged_by_deleted_upstream` — scripts/maintenance/_gc_remote.py:53 — defined here

## Structure
- Module docstring on remote branch helpers (scripts/maintenance/_gc_remote.py:1)
- Imports and `GitRunner` type alias (scripts/maintenance/_gc_remote.py:3-7)
- `load_remote_head_refs` remote branch query (scripts/maintenance/_gc_remote.py:10-21)
- `load_origin_upstreams` git config upstream mapper (scripts/maintenance/_gc_remote.py:24-42)
- `try_load_origin_upstreams` safe upstream loader wrapper (scripts/maintenance/_gc_remote.py:45-50)
- `is_merged_by_deleted_upstream` deleted remote branch verifier (scripts/maintenance/_gc_remote.py:53-60)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/_gc_remote.py`, language: Python 3, lines: 61
- documented invocation:
  - "import _gc_remote" — scripts/maintenance/gc_worktrees.py:80
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_remote.py`
- abridged stdout: `(empty)`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (internal remote helper module without standalone CLI entry point).
  Actual exit paths in code: no `sys.exit()` or `exit()` calls in code; module defines functions and returns. Exits 0 on module execution.
- for validators/gates: can it exit non-zero? no CLI entry point. Does it fail on the source repo's own default branch? exits 0 when loaded as a module.
- does the output match what the documentation claims? yes, provides remote head and upstream loading.

## Defects — required
none

## Observations
- Fail-safe config lookup: `try_load_origin_upstreams` absorbs `RuntimeError` and returns an empty map `{}`, ensuring that git config errors do not falsely identify branches as deleted remotely.

## Context cost
2229 bytes, 61 lines, ~560 tokens. Self-contained module with standard library imports (`Callable`).
