---
package: rjm
path: scripts/maintenance/worktree_occupancy.py
type: script
bytes: 4365
unit: inv-rjm-252
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/worktree_occupancy.py, sha256: 0ff4bf8d3dfd4fae6383856d75f39edb13a00db14774e72b8e6bb4c38f23396c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/worktree_occupancy.py

## Purpose — required, verbatim
> "Which worktrees hold a live process, read from ``/proc``." — scripts/maintenance/worktree_occupancy.py:2

## Design intent — required
Prevents git worktree maintenance tools from deleting directories that currently host active agent shells or background processes. By inspecting the Linux `/proc` filesystem directly for process working directories (`/proc/<pid>/cwd`), it provides live-process detection completely decoupled from git repository status. To avoid false positives and false negatives, it distinguishes between processes that vanished during the scan (`_PROCESS_GONE`), inaccessible processes owned by the user (`unreadable`), and hosts lacking `/proc` entirely (`proc_available=False`), disclosing blind spots rather than erroneously reporting occupied directories as vacant.

## Phase — required
cross-phase

## Inputs — required
- Linux process filesystem `/proc`: `proc = pathlib.Path("/proc")` — scripts/maintenance/worktree_occupancy.py:72
- Symlink resolution of process working directories: `os.readlink(entry / "cwd")` — scripts/maintenance/worktree_occupancy.py:82
- Process owner filtering against current user ID: `uid = os.getuid()` — scripts/maintenance/worktree_occupancy.py:75
- Target worktree path string: `def is_occupied(path: str, cwds: frozenset[str]) -> bool:` — scripts/maintenance/worktree_occupancy.py:96

## Outputs — required
- `Occupancy` container holding `cwds`, `unreadable`, and `proc_available`: `return Occupancy(frozenset(found), unreadable)` — scripts/maintenance/worktree_occupancy.py:93
- Boolean containment verdict: `return any(cwd == base or cwd.startswith(base + "/") for cwd in cwds)` — scripts/maintenance/worktree_occupancy.py:105
- Process exit codes: none

## Invokes — required
none

## Invoked by — required
- script worktree_occupancy — scripts/maintenance/gc_worktrees.py:83
- doc src/copilot-cli/instructions/testing.instructions.md — src/copilot-cli/instructions/testing.instructions.md:38

## Concepts named — required, verbatim
- `gc_worktrees.py` — scripts/maintenance/worktree_occupancy.py:4 — used here
- `Occupancy` — scripts/maintenance/worktree_occupancy.py:17 — defined here
- `_PROCESS_GONE` — scripts/maintenance/worktree_occupancy.py:40 — defined here
- `occupied_paths` — scripts/maintenance/worktree_occupancy.py:43 — defined here
- `is_occupied` — scripts/maintenance/worktree_occupancy.py:96 — defined here

## Structure
- Module docstring on kernel process inspection and boundary with git logic (scripts/maintenance/worktree_occupancy.py:1-7)
- Imports and system error codes (scripts/maintenance/worktree_occupancy.py:9-15)
- `Occupancy` NamedTuple definition and field documentation (scripts/maintenance/worktree_occupancy.py:17-35)
- Vanished process errno filter `_PROCESS_GONE` (scripts/maintenance/worktree_occupancy.py:40-41)
- Working directory scanner `occupied_paths` (scripts/maintenance/worktree_occupancy.py:43-93)
- Worktree containment predicate `is_occupied` (scripts/maintenance/worktree_occupancy.py:96-106)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/worktree_occupancy.py`, language: Python, lines: 106
- documented invocation:
  none
- executed: yes
- actual command run: `python3 -c "import sys; sys.path.insert(0, '.'); from scripts.maintenance.worktree_occupancy import occupied_paths; print(occupied_paths())"`
- abridged stdout:
```
Occupancy(cwds=frozenset(), unreadable=0, proc_available=False)
```
- actual exit code: 0
- documented exit codes:
  none
- actual exit paths in code:
  none
- for validators/gates: library module without CLI entry point or exit codes; returns `proc_available=False` on macOS.
- does output match documentation: yes, executes successfully and returns an `Occupancy` instance identifying that `/proc` is unavailable.

## Defects — required
none

## Observations
- Trailing slash bug fix history: as documented in `src/copilot-cli/instructions/testing.instructions.md:38`, an earlier version stripped trailing slashes on only one side of the comparison, causing live worktrees whose root equaled cwd to be reported as vacant; the current implementation normalizes with `base = path.rstrip("/")` before checking equality and prefix matching.
- Explicit disclosure of operating system blind spots: returning `proc_available=False` when `/proc` is missing prevents silent assumptions that no processes are running, enabling callers like `gc_worktrees.py` to alert operators.

## Context cost
4365 bytes (~1100 tokens); compact library utility with zero external dependencies.
