---
package: rjm
path: scripts/ci/merge_tree_materialization.py
type: script
bytes: 7284
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/merge_tree_materialization.py, sha256: aeda3844a027c282ae04e33379a456f239d06f484aece396003e530861ba6b0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/merge_tree_materialization.py

## Purpose — required, verbatim
> "Exact-tree materialization and isolated Git helpers for merge ratchets." — scripts/ci/merge_tree_materialization.py:1

## Design intent — required
Provides hermetic git environment isolation and tree materialization helpers for merge ratchet checks. Checks out exact git tree objects via `git read-tree` and `git checkout-index --all --force` into a temporary index, bypassing `.gitattributes` `export-ignore` filtering, and cleans up transient temporary directories and indices with Windows-resilient retry logic and permission handling.

## Phase — required
rjm:build

## Inputs — required
- Destination and repository arguments to `materialize_tree` — scripts/ci/merge_tree_materialization.py:157
- Scratch repository directory path to `init_scratch_repo` — scripts/ci/merge_tree_materialization.py:197
- Isolated home directory path to `isolated_git_environment` — scripts/ci/merge_tree_materialization.py:61

## Outputs — required
- Materialized checkout files generated at destination directory by `materialize_tree` — scripts/ci/merge_tree_materialization.py:157
- Scratch git repository initialized and committed by `_initialize_repo` — scripts/ci/merge_tree_materialization.py:180

## Invokes — required
- script cli_exec — scripts/ci/merge_tree_materialization.py:15

## Invoked by — required
- script merge_tree_materialization — scripts/ci/merge_tree_ratchet_check.py:62
- script count_ratchet — scripts/ci/count_ratchet.py:111

## Concepts named — required, verbatim
- `_CLEANUP_RETRY_DELAYS` — scripts/ci/merge_tree_materialization.py:17 — defined here
- `_TRANSIENT_CLEANUP_ERRNOS` — scripts/ci/merge_tree_materialization.py:18 — defined here
- `_make_writable_and_retry` — scripts/ci/merge_tree_materialization.py:21 — defined here
- `run_git` — scripts/ci/merge_tree_materialization.py:34 — defined here
- `isolated_git_environment` — scripts/ci/merge_tree_materialization.py:61 — defined here
- `remove_tree` — scripts/ci/merge_tree_materialization.py:93 — defined here
- `_cleanup_materialization` — scripts/ci/merge_tree_materialization.py:113 — defined here
- `_checkout_tree` — scripts/ci/merge_tree_materialization.py:130 — defined here
- `materialize_tree` — scripts/ci/merge_tree_materialization.py:157 — defined here
- `_initialize_repo` — scripts/ci/merge_tree_materialization.py:180 — defined here
- `init_scratch_repo` — scripts/ci/merge_tree_materialization.py:197 — defined here

## Structure
none (python support module; functions: `_make_writable_and_retry`, `run_git`, `isolated_git_environment`, `remove_tree`, `_cleanup_materialization`, `_checkout_tree`, `materialize_tree`, `_initialize_repo`, `init_scratch_repo`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/merge_tree_materialization.py`, language: Python 3, lines: 217
- documented invocation:
  - "``scripts/ci/merge_tree_materialization.py::isolated_git_environment``," — scripts/ci/count_ratchet.py:111
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/ci/merge_tree_materialization.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (library helper module without CLI entry point).
  Actual exit paths: no `sys.exit` calls in module; returns booleans (`materialized and cleaned`, `initialized and cleanup_error is None`) from exported functions.
- for validators/gates: can it exit non-zero? no (support module). Does it fail on the source repo's own default branch? fails with `ModuleNotFoundError: No module named 'scripts'` when executed bare without PYTHONPATH due to missing `sys.path` bootstrapping (line 15).
- does the output match what the documentation claims? yes, loads cleanly and exports git isolation and tree materialization functions.

## Defects — required
- script-bug · scripts/ci/merge_tree_materialization.py:15 · Imports from scripts.cli_exec import resolve_executable without bootstrapping sys.path to repository root (unlike invoke_copilot_cli.py:14-16), causing ModuleNotFoundError: No module named 'scripts' when executed directly without external PYTHONPATH.

## Observations
- Sanitizes user and git environment in `isolated_git_environment()` (lines 61-90) by clearing all `GIT_*` environment variables, `GNUPGHOME`, `HOME`, `LEFTHOOK`, `USERPROFILE`, and `XDG_CONFIG_HOME`, pointing them to temporary directories and setting `GIT_CONFIG_NOSYSTEM=1` and `GIT_ATTR_NOSYSTEM=1` to guarantee reproducibility.
- Uses `core.symlinks=true` with `checkout-index --all --force --prefix=...` in `_checkout_tree` (lines 142-150) so symlinks are materialized accurately on supported platforms.

## Context cost
7284 bytes (~1821 tokens) plus `scripts/cli_exec.py` (6131 bytes, ~1532 tokens) = ~13415 bytes (~3353 tokens).
