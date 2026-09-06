---
package: rjm
path: scripts/testing/mutation_workspace_git.py
type: script
bytes: 11428
unit: inv-rjm-263
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/testing/mutation_workspace_git.py, sha256: 57a9d9dfa073c1d628afccce78bde4137748c564d5f6a1f4d9e0eb4720c708d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/testing/mutation_workspace_git.py

## Purpose — required, verbatim
> "Git and path operations for isolated mutation worktrees." — scripts/testing/mutation_workspace_git.py:1

## Design intent — required
Provides hardened, race-free git worktree lifecycle management and path validation primitives for isolated mutation testing. Because running test mutations in an active developer worktree risks corrupting working copies on unexpected crashes or timeouts, this module allocates isolated detached worktrees under `.pytest_cache/mutation-worktrees/` (`SCRATCH_DIRECTORY`). To ensure correctness across concurrent runs and platforms, it serializes worktree additions and removals behind cross-platform file locks (`fcntl.flock` on Unix, `msvcrt.locking` on Windows) on `.git/mutation-worktrees.lock`. It also strips git environment variables to prevent nested repository contamination, detects and rejects hardlink inode aliases that could allow untracked files to masquerade as isolated copies, and ensures rigorous post-run worktree deletion.

## Phase — required
rjm:test

## Inputs — required
- Repository root path `repo_root`: Target git repository path — scripts/testing/mutation_workspace_git.py:72
- Target file path `target`: Path to verify and resolve relative to repository root — scripts/testing/mutation_workspace_git.py:268
- Scratch root directory `scratch_root`: Destination directory for disposable worktree — scripts/testing/mutation_workspace_git.py:294, 311
- Environment variables: Cleansed by stripping git variables matching `_GIT_ENVIRONMENT_KEYS` and `_GIT_ENVIRONMENT_PREFIXES` — scripts/testing/mutation_workspace_git.py:86-91

## Outputs — required
- Detached git worktree allocated at specified scratch directory — scripts/testing/mutation_workspace_git.py:294-304
- Lock file `.git/mutation-worktrees.lock` used to serialize worktree operations — scripts/testing/mutation_workspace_git.py:17, 185-188
- Marker directory path `.git/mutation-active` resolved via `marker_directory` — scripts/testing/mutation_workspace_git.py:15, 152-166
- File system cleanup: removes worktree directory and deregisters from git via `remove_worktree` — scripts/testing/mutation_workspace_git.py:311-334

## Invokes — required
none

## Invoked by — required
- script mutation_workspace_git — scripts/testing/mutation_workspace.py:31

## Concepts named — required, verbatim
- `GIT_COMMAND_TIMEOUT_SECONDS` — scripts/testing/mutation_workspace_git.py:14 — defined here
- `MARKER_DIRECTORY_NAME` — scripts/testing/mutation_workspace_git.py:15 — defined here
- `SCRATCH_DIRECTORY` — scripts/testing/mutation_workspace_git.py:16 — defined here
- `MutationWorkspaceError` — scripts/testing/mutation_workspace_git.py:39 — defined here
- `run_git` — scripts/testing/mutation_workspace_git.py:72 — defined here
- `require_git_stdout` — scripts/testing/mutation_workspace_git.py:115 — defined here
- `git_root` — scripts/testing/mutation_workspace_git.py:125 — defined here
- `marker_directory` — scripts/testing/mutation_workspace_git.py:152 — defined here
- `tracked_repository_path` — scripts/testing/mutation_workspace_git.py:195 — defined here
- `relative_target` — scripts/testing/mutation_workspace_git.py:268 — defined here
- `add_worktree` — scripts/testing/mutation_workspace_git.py:294 — defined here
- `remove_worktree` — scripts/testing/mutation_workspace_git.py:311 — defined here
- `registered_worktrees` — scripts/testing/mutation_workspace_git.py:336 — defined here

## Structure
- Constants and environment keys — scripts/testing/mutation_workspace_git.py:14-36
- MutationWorkspaceError exception — scripts/testing/mutation_workspace_git.py:39
- Cross-platform file locking — scripts/testing/mutation_workspace_git.py:43-70
- run_git — scripts/testing/mutation_workspace_git.py:72
- require_git_stdout — scripts/testing/mutation_workspace_git.py:115
- git_root and _find_worktree_root — scripts/testing/mutation_workspace_git.py:125-150
- marker_directory and lock paths — scripts/testing/mutation_workspace_git.py:152-182
- _serialized_worktree_state — scripts/testing/mutation_workspace_git.py:184
- tracked_repository_path and inode check — scripts/testing/mutation_workspace_git.py:195-266
- relative_target — scripts/testing/mutation_workspace_git.py:268
- add_worktree, remove_worktree, registered_worktrees — scripts/testing/mutation_workspace_git.py:294-353

## Scripts — required if type is script or the skill ships scripts
The file is a library script without a standalone `__main__` entry point:
- path: `scripts/testing/mutation_workspace_git.py`, language: Python, lines: 353
- documented invocation: none (internal git operation library imported by `mutation_workspace.py`)
- **executed:** yes
- actual command run:
  ```bash
  python3 scripts/testing/mutation_workspace_git.py
  ```
  - actual stdout: (empty)
  - actual exit code: 0
- programmatic API verification:
  ```bash
  python3 -c "from scripts.testing import mutation_workspace_git as mwg; from pathlib import Path; root = mwg.git_root(Path('.')); print('git_root:', root); print('marker:', mwg.marker_directory(root))"
  ```
  - actual stdout:
    ```
    git_root: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm
    marker: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.git/mutation-active
    ```
  - actual exit code: 0
- documented exit codes: none documented in file docstring
- actual exit paths in code: raises `MutationWorkspaceError` on git failures, timeouts, or isolation validation mismatches (e.g. lines 109, 112, 118, 121, 128, 137, 203, 210, 215, 233, 244, 251, 263, 273, 275, 285, 288, 306, 315, 324, 331, 344)
- for validators/gates: not an executable gate; internal utility providing isolated worktree primitives.

## Defects — required
none

## Observations
- Inode aliasing defense: Function `_reject_tracked_inode_alias` (lines 240-266) compares `st_dev` and `st_ino` between candidate target files and all tracked git files to reject hard-linked untracked files that could alias and overwrite tracked source files.
- Environment scrubbing: Lines 86-95 explicitly strip all `GIT_*` keys and prefixes from `os.environ` and redirect `GIT_CONFIG_GLOBAL` and `GIT_CONFIG_SYSTEM` to `os.devnull` so that outer git settings cannot interfere with isolated operations.
- Cross-platform file locking: Implements `fcntl.flock(handle.fileno(), fcntl.LOCK_EX)` on POSIX systems and `msvcrt.locking(fd, msvcrt.LK_LOCK, 1)` on Windows (lines 48-70) to serialize worktree operations safely across multiple processes.

## Context cost
11,428 bytes, ~2,900 tokens. Isolated module with standard library imports only.
