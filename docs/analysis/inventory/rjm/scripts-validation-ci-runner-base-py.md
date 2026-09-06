---
package: rjm
path: scripts/validation/ci_runner_base.py
type: script
bytes: 8701
unit: inv-rjm-294
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/ci_runner_base.py, sha256: b08a21f5a34af4f316b6c8aec454b9296876534c887abb8897a6a5a474559659}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/ci_runner_base.py

## Purpose — required, verbatim
> "Shared CI runner infrastructure for validation scripts." — scripts/validation/ci_runner_base.py:1

## Design intent — required
Provides shared CI runner infrastructure and common utilities for CI entry points (such as `run_install_parity_ci.py` and `run_plugin_version_bump_ci.py`) that need to safely interact with git refs and subprocesses in CI workflows. Specifically, it abstracts safe subprocess execution (without shell invocation, defending against CWE-78), validates branch names and git commit SHAs against strict allowlists to prevent option injection attacks, manages git shallow clone detection and repair (avoiding shallow grafts left behind by timeouts or partial fetches that corrupt diff ranges), and implements an authoritative diff base resolution hierarchy (`origin/<base_ref>`, `PUSH_BEFORE_SHA`, `HEAD^`). Without it, individual CI validation scripts would duplicate brittle git fetch and diff-base resolution logic, risk silent diff widening on grafted repositories, and potentially expose CI workflows to argument injection.

## Phase — required
rjm:test

## Inputs — required
- Environment variables: `PUSH_BEFORE_SHA` (git SHA for push diff base fallback, lines 54, 205).
- Git repository state queried via subprocess git commands (`git fetch`, `git rev-parse --is-shallow-repository`, `git rev-parse --verify --quiet`, lines 116-130, 160, 193, 198, 208, 218).
- Function arguments: `base_ref: str` (target base branch ref, lines 76, 172), `cmd: list[str]`, `check: bool`, `timeout: int` (lines 47-49).

## Outputs — required
- Exit codes returned to calling runners: `0` (success/complete history), `2` (configuration/fetch failure or persistent shallow graft, lines 71, 104-105, 114, 123, 136, 144).
- Subprocess execution tuples: `(exit_code: int, stdout: str, stderr: str)` (lines 49-50, 73).
- Resolved diff base string: `origin/<base_ref>`, SHA string, `HEAD^`, or `None` (lines 172-221).
- Error messages emitted to `sys.stderr` on fetch failure or shallow repo detection (lines 109-113, 138-143, 150-154).

## Invokes — required
none

## Invoked by — required
- script ci_runner_base — scripts/validation/run_install_parity_ci.py:31
- script ci_runner_base — scripts/validation/run_plugin_version_bump_ci.py:32

## Concepts named — required, verbatim
- `validate_branch` — scripts/validation/ci_runner_base.py:27 — defined here
- `validate_sha` — scripts/validation/ci_runner_base.py:37 — defined here
- `run` — scripts/validation/ci_runner_base.py:47 — defined here
- `fetch_base_ref` — scripts/validation/ci_runner_base.py:76 — defined here
- `_print_fetch_error` — scripts/validation/ci_runner_base.py:148 — defined here
- `_is_shallow_repository` — scripts/validation/ci_runner_base.py:157 — defined here
- `resolve_base` — scripts/validation/ci_runner_base.py:172 — defined here
- `PR_BASE_REF` — scripts/validation/ci_runner_base.py:54 — used here
- `PUSH_BEFORE_SHA` — scripts/validation/ci_runner_base.py:55 — used here
- `HEAD` — scripts/validation/ci_runner_base.py:176 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/ci_runner_base.py`, language: Python, lines: 222
- documented invocation: none (utility library imported by other CI runners; no CLI or `__main__` entry point)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/validation/ci_runner_base.py`, abridged stdout: `(empty)`, **actual exit code**: 0
- documented exit codes: none (module defines return codes `0` and `2` from `fetch_base_ref` and returns tuples from `run`; no direct `sys.exit` in file) vs. actual exit paths in code: none (`sys.exit` is not called directly in `ci_runner_base.py`)
- for validators/gates: can it exit non-zero? N/A (module library; functions return 0 or 2, handled by callers). does it fail on the source repo's own default branch? no (exits 0 when executed as standalone module).
- does the output match what the documentation claims? yes (executes cleanly as an importable module without side effects).

## Defects — required
none

## Observations
- Defends against CWE-78 command injection and option smuggling (`validate_branch` rejects strings with `..` or leading `-`, `validate_sha` checks 7-40 hex chars and rejects all-zero hashes).
- Solves issue #4680 regarding shallow clone graft corruption during CI fetches by verifying whether `--unshallow` successfully repaired the clone.
- Regression fix for #2254 in `resolve_base`: prioritizes `origin/<base_ref>` over `PUSH_BEFORE_SHA` to prevent false failures on incremental feature branch pushes.

## Context cost
File: 8,701 bytes (~2,175 tokens). Loads standard library only when imported.
