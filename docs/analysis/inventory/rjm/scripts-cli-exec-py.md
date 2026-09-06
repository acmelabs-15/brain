---
package: rjm
path: scripts/cli_exec.py
type: script
bytes: 6131
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/cli_exec.py, sha256: ebbfa4fce2f8e66a1f9246840c6892d29482d39de491357950e4210c76a25b4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/cli_exec.py

## Purpose — required, verbatim
> "Platform-safe resolution of a CLI executable for ``subprocess`` launch." — scripts/cli_exec.py:2

## Design intent — required
Cross-platform subprocess executable resolution helper designed to fix Windows CLI invocation failures (issue #2629). On Windows, npm-installed CLIs (`copilot`, `claude`) are generated as `.cmd` batch shims. Because Python's `subprocess.run` calls `CreateProcess` (which does not automatically scan `PATH` or apply `PATHEXT`), bare names raise `FileNotFoundError` (WinError 2). This module resolves executables against `PATH` using Windows `PATHEXT` rules in pure Python, keeping calls `shell=False`-safe and enabling Windows PATHEXT logic to be tested directly on Linux CI runners without depending on Windows-only `_winapi` internals.

## Phase — required
cross-phase

## Inputs — required
- Executable name parameter — scripts/cli_exec.py:100
- Keyword flag windows forcing Windows or POSIX resolution semantics — scripts/cli_exec.py:102
- Keyword environment mapping env parameter — scripts/cli_exec.py:103

## Outputs — required
- Full resolved path to executable on Windows or unchanged bare name on POSIX — scripts/cli_exec.py:116
- Raises FileNotFoundError on Windows when target executable cannot be located on PATH — scripts/cli_exec.py:119

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CreateProcess` — scripts/cli_exec.py:6 — used here
- `PATHEXT` — scripts/cli_exec.py:6 — used here
- `resolve_executable` — scripts/cli_exec.py:11 — defined here
- `shutil.which` — scripts/cli_exec.py:23 — used here
- `_DEFAULT_PATHEXT` — scripts/cli_exec.py:40 — defined here
- `_WIN_LIST_SEP` — scripts/cli_exec.py:46 — defined here

## Structure
- _windows_pathext(env: dict[str, str]) -> list[str]
- _match_in_dir(directory: str, target: str) -> str | None
- _resolve_windows(name: str, env: dict[str, str]) -> str | None
- resolve_executable(name: str, *, windows: bool | None = None, env: dict[str, str] | None = None) -> str

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/cli_exec.py`, Python 3, 137 lines
- **documented invocation:**
  > "``resolve_executable`` returns a value safe to pass as ``argv[0]``:" — scripts/cli_exec.py:11
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/cli_exec.py`
- **actual exit code:** 0
- **abridged stdout:** none (library module containing utility functions without a `__main__` entry block)
- **documented exit codes:** none (library module raises `FileNotFoundError` on failure rather than exiting)
  vs. actual exit paths:
  - `scripts/cli_exec.py:123`: returns `name` on POSIX systems
  - `scripts/cli_exec.py:132`: raises `FileNotFoundError` when executable not found on Windows PATH
  - `scripts/cli_exec.py:136`: returns resolved Windows file path
- **validators/gates:** none
- **output match:** yes, verifies platform and returns safe argv[0] string.

## Defects — required
none

## Observations
Exemplary cross-platform engineering: instead of delegating to `shutil.which` (which requires `win32` platform and fails on Linux runners), it reimplements Windows path resolution using `os.path` operations and hardcoded separator `;` (`_WIN_LIST_SEP`) so Windows resolution can be deterministically tested on Linux GitHub Actions runners.

## Context cost
File size: 6131 bytes (~1530 tokens). Standard library only.
