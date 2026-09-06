---
package: rjm
path: scripts/maintenance/_gc_parse.py
type: script
bytes: 3190
unit: inv-rjm-250
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_parse.py, sha256: 8b5b2db80218fb22c500b43624d6423f421e0ca1cf3b6e6e7a9091f19296bdad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/_gc_parse.py

## Purpose — required, verbatim
> "Read ``git worktree list --porcelain`` into ``Worktree`` records." — scripts/maintenance/_gc_parse.py:2

## Design intent — required
Isolates porcelain output parsing from decision logic by transforming raw output from `git worktree list --porcelain` into structured, strongly-typed `Worktree` record objects. By treating git's porcelain interface as a stable contract, parsing concerns (such as attribute lines for `HEAD`, `branch`, `bare`, `detached`, `locked`, and `prunable`) remain decoupled from garbage collection safety evaluations. Crucially preserves the human-readable explanation attached to `prunable` so callers can distinguish moved worktrees from deleted ones, and documents the intentional design trade-off where paths with embedded newlines fail safe without requiring `-z` delimiter quoting.

## Phase — required
cross-phase

## Inputs — required
- Git runner callable `run_git`: `Callable[..., str]` — scripts/maintenance/_gc_parse.py:56
- Git porcelain stdout output: `run_git(["worktree", "list", "--porcelain"])` — scripts/maintenance/_gc_parse.py:63

## Outputs — required
- Parsed worktree list: `list[Worktree]` — scripts/maintenance/_gc_parse.py:56,64

## Invokes — required
- script worktree_report — scripts/maintenance/_gc_parse.py:32

## Invoked by — required
- script _gc_parse — scripts/maintenance/gc_worktrees.py:66
- script _gc_parse — scripts/maintenance/gc_worktrees.py:71
- script _gc_parse — scripts/maintenance/gc_worktrees.py:78

## Concepts named — required, verbatim
- `git worktree list --porcelain` — scripts/maintenance/_gc_parse.py:2 — used here
- `Worktree` — scripts/maintenance/_gc_parse.py:2 — used here
- `prunable` — scripts/maintenance/_gc_parse.py:9 — used here
- `Issue #2761` — scripts/maintenance/_gc_parse.py:22 — used here
- `_apply_attribute` — scripts/maintenance/_gc_parse.py:35 — defined here
- `list_worktrees` — scripts/maintenance/_gc_parse.py:56 — defined here

## Structure
- Module docstring on porcelain contract and deliberate newline limitation (scripts/maintenance/_gc_parse.py:1-23)
- Imports and TYPE_CHECKING guard (scripts/maintenance/_gc_parse.py:25-33)
- `_apply_attribute` attribute assignment helper (scripts/maintenance/_gc_parse.py:35-53)
- `list_worktrees` porcelain output parser (scripts/maintenance/_gc_parse.py:56-77)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/_gc_parse.py`, language: Python 3, lines: 78
- documented invocation:
  - "import _gc_parse" — scripts/maintenance/gc_worktrees.py:78
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_parse.py`
- abridged stdout: `(empty)`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (internal parsing module without standalone CLI entry point).
  Actual exit paths in code: no `sys.exit()` or `exit()` calls in code; module defines functions and returns. Exits 0 on module load.
- for validators/gates: can it exit non-zero? no CLI entry point. Does it fail on the source repo's own default branch? exits 0 when loaded as a module.
- does the output match what the documentation claims? yes, parses porcelain worktree output as intended.

## Defects — required
none

## Observations
- Deliberate avoidance of `-z` flag: lines 13-20 document why git's `-z` null-byte terminator is omitted despite newlines splitting porcelain output: neither reachable failure mode results in commit loss (either points to real worktree leaving newline worktree intact, or fails to find admin entry and refuses).

## Context cost
3190 bytes, 78 lines, ~800 tokens. Loads `worktree_report.py` (10484 bytes). Total transitive context cost: ~13674 bytes (~3400 tokens).
