---
package: rjm
path: scripts/github_core/repo.py
type: script
bytes: 3658
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/repo.py, sha256: 189b9f3cfa59b9d185a0524db79b323a9c0368a0d5fe3236762b409c66eed47e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/repo.py

## Purpose — required, verbatim
> "Repository root resolution with git worktree awareness." — scripts/github_core/repo.py:1

## Design intent — required
Provides worktree-aware git repository root resolution that explicitly distinguishes between "not inside a git repository" and "git command execution failed / could not be queried". Standard resolution utilities like `get_repo_root` collapse these distinct failure modes into `None`. For security callers (such as path traversal prevention and containment boundaries in `validation.py`), distinguishing between a verified absence of a repository and an unexplained tool or timeout failure is essential to prevent fail-open security bypasses. It queries `git rev-parse --show-toplevel` with pinned `LC_ALL=C` and a configurable timeout, normalizing relative paths against the starting directory or current working directory.

## Phase — required
cross-phase

## Inputs — required
- Starting directory parameter `start_dir: str | Path | None = None` (scripts/github_core/repo.py:26, 80) specifying directory to run git from (`-C` flag) or `None` to use current working directory.
- Execution timeout parameter `timeout: int = _DEFAULT_TIMEOUT` (scripts/github_core/repo.py:27, 81) with default 10 seconds.
- Subprocess execution environment running `git rev-parse --show-toplevel` with locale pinned via `{"LC_ALL": "C"}` (scripts/github_core/repo.py:47, 56).
- Filesystem path resolution via `pathlib.Path.resolve()` and `Path.cwd()` (scripts/github_core/repo.py:70, 71, 73).

## Outputs — required
- Resolution tuple `tuple[Path | None, str]` from `resolve_repo_root` (scripts/github_core/repo.py:28): `(root, REPO_ROOT_OK)` on success, `(None, REPO_ROOT_NOT_A_REPO)` when directory is not a git repository, or `(None, REPO_ROOT_GIT_FAILED)` on process failure, timeout, or missing git binary.
- Repository root path `Path | None` from `get_repo_root` (scripts/github_core/repo.py:82), returning the resolved root path or `None` on failure.

## Invokes — required
- command git — scripts/github_core/repo.py:44

## Invoked by — required
- script repo — scripts/github_core/validation.py:72
- script repo — scripts/github_core/__init__.py:56
- script repo — scripts/new_validated_pr.py:29
- script repo — scripts/detect_test_coverage_gaps.py:31
- script repo — scripts/invoke_batch_pr_review.py:27
- script repo — scripts/invoke_session_start_gate.py:33
- script repo — scripts/sync_mcp_config.py:32
- script repo — scripts/update_reviewer_signal_stats.py:41
- script repo — scripts/validation/traceability.py:482
- script repo — scripts/traceability/spec_utils.py:190
- script repo — scripts/security/invoke_precommit_security.py:34
- script repo — scripts/security/invoke_security_retrospective.py:34
- script repo — scripts/security/run_semgrep.py:46

## Concepts named — required, verbatim
- `_DEFAULT_TIMEOUT` — scripts/github_core/repo.py:9 — defined here
- `REPO_ROOT_OK` — scripts/github_core/repo.py:12 — defined here
- `REPO_ROOT_NOT_A_REPO` — scripts/github_core/repo.py:14 — defined here
- `REPO_ROOT_GIT_FAILED` — scripts/github_core/repo.py:16 — defined here
- `_NOT_A_REPO_STDERR` — scripts/github_core/repo.py:21 — defined here
- `resolve_repo_root` — scripts/github_core/repo.py:24 — defined here
- `get_repo_root` — scripts/github_core/repo.py:78 — defined here

## Structure
none (python module; functions: resolve_repo_root, get_repo_root)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/repo.py`, language: Python 3, lines: 103
- documented invocation: none (library module without CLI entrypoint; imported by dependent automation scripts and security gates)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/repo.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.repo import resolve_repo_root, get_repo_root; print(resolve_repo_root()); print(get_repo_root())"`
  abridged stdout: `(PosixPath('/Users/peterkloss/Dev/ACMElabs/brain-v2'), 'ok')\n/Users/peterkloss/Dev/ACMElabs/brain-v2`
  **actual exit code:** 0
- documented exit codes: none (library module without CLI docstring exit codes) vs. actual exit paths in code:
  - no `sys.exit` calls; functions return status tuples or `Path | None`. Standalone execution completes with exit code 0.
- for validators/gates:
  - can it exit non-zero? no (module itself does not call exit), but functions return `REPO_ROOT_GIT_FAILED` or `REPO_ROOT_NOT_A_REPO` allowing security callers (like `validation.py`) to exit non-zero.
  - does it fail on the source repo's own default branch? no, returns `(PosixPath('/Users/peterkloss/Dev/ACMElabs/brain-v2'), 'ok')` when invoked from repo root.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Deterministic error detection: Pins `LC_ALL=C` in `subprocess.run` environment (line 56) to guarantee stderr error substring matching against `"not a git repository"` is locale-independent.
- Worktree safety: Intentionally invokes `git rev-parse --show-toplevel` rather than `--git-common-dir` because bare-backed worktrees have a shared git directory outside the working tree checkout, which would undermine path anchoring for security checks (lines 85-88).
- Relative path normalization: Explicitly converts relative paths emitted by git into absolute paths resolved against `start_dir` or `Path.cwd()` (lines 68-73).
- Context cost: 3,658 bytes, approximately 915 tokens.
