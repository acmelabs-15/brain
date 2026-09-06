---
package: rjm
path: scripts/github_core/repo.py
type: script
bytes: 3658
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: scripts/github_core/repo.py, sha256: 189b9f3cfa59b9d185a0524db79b323a9c0368a0d5fe3236762b409c66eed47e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/github_core/repo.py

## Purpose — required, verbatim
> "Repository root resolution with git worktree awareness." — scripts/github_core/repo.py:1

## Design intent — required
Provides resilient, git worktree-aware resolution of repository root paths (`resolve_repo_root` and `get_repo_root`) via `git rev-parse --show-toplevel`. It solves the critical ambiguity where previous implementations conflated "not inside a git repository" with "git command failed or timed out", enabling security-sensitive callers (such as path traversal guards and containment checks) to distinguish between a confirmed absence of a git repository (`REPO_ROOT_NOT_A_REPO`) and an operational failure (`REPO_ROOT_GIT_FAILED`) that must fail closed. Additionally, it explicitly uses `LC_ALL=C` to deterministically parse localized git fatal messages across environments.

## Phase — required
cross-phase

## Inputs — required
- Directory path to execute git from (`start_dir: str | Path | None = None`, scripts/github_core/repo.py:26, 80).
- Subprocess execution timeout in seconds (`timeout: int = _DEFAULT_TIMEOUT`, scripts/github_core/repo.py:27, 81).

## Outputs — required
- Tuple `(Path | None, str)` from `resolve_repo_root` containing the resolved `Path` (or `None`) and status code string `REPO_ROOT_OK`, `REPO_ROOT_NOT_A_REPO`, or `REPO_ROOT_GIT_FAILED` (scripts/github_core/repo.py:28, 40-42, 75).
- Resolved repo root `Path` (or `None`) from `get_repo_root` (scripts/github_core/repo.py:78-82, 95, 102).

## Invokes — required
- command git — scripts/github_core/repo.py:44

## Invoked by — required
- script repo — scripts/github_core/__init__.py:56
- script repo — scripts/github_core/validation.py:72
- script repo — scripts/validation/traceability.py:482
- script repo — scripts/new_validated_pr.py:29

## Concepts named — required, verbatim
- `_DEFAULT_TIMEOUT` — scripts/github_core/repo.py:9 — defined here
- `REPO_ROOT_OK` — scripts/github_core/repo.py:12 — defined here
- `REPO_ROOT_NOT_A_REPO` — scripts/github_core/repo.py:14 — defined here
- `REPO_ROOT_GIT_FAILED` — scripts/github_core/repo.py:16 — defined here
- `_NOT_A_REPO_STDERR` — scripts/github_core/repo.py:21 — defined here
- `resolve_repo_root` — scripts/github_core/repo.py:24 — defined here
- `get_repo_root` — scripts/github_core/repo.py:78 — defined here

## Structure
none (python module; constants: _DEFAULT_TIMEOUT, REPO_ROOT_OK, REPO_ROOT_NOT_A_REPO, REPO_ROOT_GIT_FAILED, _NOT_A_REPO_STDERR; functions: resolve_repo_root, get_repo_root)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/repo.py`, language: Python 3, lines: 103
- documented invocation: none (library module without CLI entrypoint; imported by `scripts/github_core/validation.py`, `scripts/github_core/__init__.py`, `scripts/validation/traceability.py`, and other scripts)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/repo.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/repo.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes: none (library module without CLI entrypoint) vs. actual exit paths in code:
  - no `exit`, `sys.exit`, or `raise SystemExit` statements in code
- for validators/gates:
  - can it exit non-zero? no direct process exit; functions return error classification strings (`REPO_ROOT_NOT_A_REPO`, `REPO_ROOT_GIT_FAILED`) and `None` which callers evaluate to trigger fail-closed security exits.
  - does it fail on the source repo's own default branch? no, runs cleanly with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Deterministic error checking: pins `LC_ALL=C` in subprocess execution environment to reliably match against the English fatal substring `"not a git repository"`.
- Linked worktree awareness: invokes `git rev-parse --show-toplevel` to discover the worktree root instead of `--git-common-dir`, ensuring proper path containment boundaries in linked or bare-backed worktrees.
- Context cost: 3,658 bytes, 103 lines, ~915 tokens.

## Context cost
3658 bytes, ~915 tokens.
