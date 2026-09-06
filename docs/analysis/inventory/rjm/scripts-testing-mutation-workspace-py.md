---
package: rjm
path: scripts/testing/mutation_workspace.py
type: script
bytes: 17102
unit: inv-rjm-264
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/testing/mutation_workspace.py, sha256: 6dae0c8e7dbbb2330c629b9d71304b37544571558668154302e9b74eab92ab27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/testing/mutation_workspace.py

## Purpose — required, verbatim
> "Isolate mutation harness edits in disposable git worktrees." — scripts/testing/mutation_workspace.py:1

## Design intent — required
Provides safety isolation for mutation testing runs by executing code modifications inside disposable detached git worktrees rather than mutating the active workspace. It computes SHA-256 target snapshots before mutation runs, verifies targets match HEAD, writes a durable JSON marker to the git directory (`.git/mutation-active/<run_id>.json`), traps termination signals (SIGINT, SIGTERM) to ensure clean worktree removal and active target verification, and cleans up both the worktree and marker upon completion. If terminated ungracefully (such as via SIGKILL), the lingering marker causes pre-push validation (`check_markers`) to fail closed, preventing developers or CI from pushing unverified mutations to remotes.

## Phase — required
rjm:test

## Inputs — required
- Target file paths to mutate (Sequence of Path or str) — scripts/testing/mutation_workspace.py:89
- Git repository root path (`--repo-root`) — scripts/testing/mutation_workspace.py:484
- Subcommand (`check` or `recover`) — scripts/testing/mutation_workspace.py:483
- Marker files in git directory (`.git/mutation-active/`) — scripts/testing/mutation_workspace.py:365

## Outputs — required
- Disposable git worktree in scratch directory (`scratch_root` — scripts/testing/mutation_workspace.py:281)
- Durable JSON marker file (`marker_path` — scripts/testing/mutation_workspace.py:282)
- Recovered/cleaned worktrees and deleted markers (`resolved_marker.unlink` — scripts/testing/mutation_workspace.py:462)
- Process exit code (0 for success, 1 for blocked/error, 3 for external error)

## Invokes — required
- script mutation_workspace_git — scripts/testing/mutation_workspace.py:31

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `MutationInterrupted` — scripts/testing/mutation_workspace.py:50 — defined here
- `TargetSnapshot` — scripts/testing/mutation_workspace.py:55 — defined here
- `MutationWorkspace` — scripts/testing/mutation_workspace.py:63 — defined here
- `purge_bytecode` — scripts/testing/mutation_workspace.py:81 — defined here
- `isolated_mutation_worktree` — scripts/testing/mutation_workspace.py:267 — defined here
- `check_markers` — scripts/testing/mutation_workspace.py:403 — defined here
- `recover_marker` — scripts/testing/mutation_workspace.py:439 — defined here
- `recover_markers` — scripts/testing/mutation_workspace.py:470 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI script and test harness utility:
- path: `scripts/testing/mutation_workspace.py`, language: Python, lines: 501
- documented invocation:
  `"uv run --frozen python -m scripts.testing.mutation_workspace recover" — scripts/testing/mutation_workspace.py:419`
- **executed:** yes
- actual command run:
  ```bash
  python3 scripts/testing/mutation_workspace.py check
  ```
- actual stdout (abridged):
  ```text
  ERROR: incomplete mutation harness state; push blocked.
  marker: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.git/mutation-active/9e9286dc3e164885b92dcf5c0068b92c.json
  process: 4056 (running)
  scratch worktree: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.pytest_cache/mutation-worktrees/9e9286dc3e164885b92dcf5c0068b92c
  affected tracked paths:
    - scripts/validation/git_hook_policy.py [UNCHANGED]
    - scripts/validation/run_workflow_local_test.py [UNCHANGED]
  Run `uv run --frozen python -m scripts.testing.mutation_workspace recover` after the mutation process stops.
  ```
- **actual exit code:** 1
- documented exit codes vs. actual exit paths:
  Documented constants in code:
  - `EXIT_OK = 0` — scripts/testing/mutation_workspace.py:44
  - `EXIT_BLOCKED = 1` — scripts/testing/mutation_workspace.py:45
  - `EXIT_EXTERNAL_ERROR = 3` — scripts/testing/mutation_workspace.py:46
  Actual exit paths in code:
  - `scripts/testing/mutation_workspace.py:409` — `return EXIT_OK` when no markers present
  - `scripts/testing/mutation_workspace.py:423` — `return EXIT_BLOCKED` when incomplete mutation harness marker exists
  - `scripts/testing/mutation_workspace.py:451` — `return EXIT_BLOCKED` when marker outside marker directory
  - `scripts/testing/mutation_workspace.py:466` — `return EXIT_BLOCKED` on recovery failure
  - `scripts/testing/mutation_workspace.py:467` — `return EXIT_OK` on recovery success
  - `scripts/testing/mutation_workspace.py:478` — `return EXIT_BLOCKED if failures else EXIT_OK`
  - `scripts/testing/mutation_workspace.py:496` — `return EXIT_EXTERNAL_ERROR` on unhandled MutationWorkspaceError
- for validators/gates: can exit non-zero (exits 1 on incomplete mutation markers). Fails with exit code 1 on the source repo default branch because an active marker (`9e9286dc3e164885b92dcf5c0068b92c.json`) is present in `.git/mutation-active/`.
- does the output match what the documentation claims? yes (blocks when incomplete marker is present and suggests recovery command).

## Defects — required
- orphan · scripts/testing/mutation_workspace.py:1 · Referenced in test suites and CI scripts, but not directly invoked by any in-scope lifecycle slash-commands.

## Observations
- Uses robust signal trapping (SIGINT, SIGTERM) to guarantee that disposable worktrees are removed and active targets verified before exiting.
- Uses atomic marker replacement with UUID-tagged `.finished` files (`_mark_run_finished`) to handle crashes during cleanup.
- Fails closed on pre-push: if a SIGKILL occurs mid-run, the marker remains and prevents pushing code that may have been mutated in unverified ways.

## Context cost
17,102 bytes (~4,275 tokens). Loads `scripts/testing/mutation_workspace_git.py` (~4,300 bytes) and standard library modules.
