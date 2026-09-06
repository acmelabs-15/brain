---
package: rjm
path: scripts/validation/checks_mypy.py
type: script
bytes: 1646
unit: inv-rjm-292
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_mypy.py, sha256: 50e06e69069b23a7397d2db3b84cf201e0681cf8d32d64b49a278755d2712f0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_mypy.py

## Purpose — required, verbatim
> "Mypy changed-files gate for the pre-PR runner (Issue #4674)." — scripts/validation/checks_mypy.py:1

## Design intent — required
Provides an incremental static type check gate for Python files modified on the current branch during the pre-PR validation sequence. Extracted from `checks_tooling.py` to maintain modularity and respect file length constraints, it integrates with `git_hook_policy.run_mypy` to enforce count-ratchet semantics: pre-existing type errors are tolerated, but pull requests introducing new type errors are blocked. By diffing changed Python files against the branch base ref and type-checking only modified files, it shifts type regression detection left to local developer workstations, eliminating costly CI round-trip failures while keeping pre-PR execution fast.

## Phase — required
none

## Inputs — required
- Repository root path: `repo_root: Path` parameter passed to `validate_mypy_changed_files` — scripts/validation/checks_mypy.py:20
- Base ref resolution: `_resolve_branch_base_ref` — scripts/validation/checks_mypy.py:25
- Git diff invocation via `_run_subprocess` — scripts/validation/checks_mypy.py:30

## Outputs — required
- Boolean return value: True when no Python files changed, when git diff fails (fail open), or when `run_mypy` returns 0; False when `run_mypy` returns non-zero — scripts/validation/checks_mypy.py:50
- Standard output warning: `[WARNING] Mypy gate skipped: no base ref resolved` — scripts/validation/checks_mypy.py:27
- Standard output pass notice: `[PASS] Mypy (no Python files changed on branch)` — scripts/validation/checks_mypy.py:44

## Invokes — required
- function _resolve_branch_base_ref — scripts/validation/checks_mypy.py:17
- function _run_subprocess — scripts/validation/checks_mypy.py:17
- function run_mypy — scripts/validation/checks_mypy.py:48

## Invoked by — required
- script checks_mypy — scripts/validation/pre_pr_sequence.py:63

## Concepts named — required, verbatim
- `_resolve_branch_base_ref` — scripts/validation/checks_mypy.py:17 — used here
- `_run_subprocess` — scripts/validation/checks_mypy.py:17 — used here
- `validate_mypy_changed_files` — scripts/validation/checks_mypy.py:20 — defined here
- `run_mypy` — scripts/validation/checks_mypy.py:48 — used here

## Structure
- Module docstring — scripts/validation/checks_mypy.py:1-6
- Imports and path configuration — scripts/validation/checks_mypy.py:8-18
- Changed-files mypy validation engine — scripts/validation/checks_mypy.py:20-50

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_mypy.py`, language: Python 3, lines: 51
- documented invocation:
  - "Run mypy over Python files changed on the branch (ratchet semantics)." — scripts/validation/checks_mypy.py:21
- executed: yes
- actual command run:
  - `python3 scripts/validation/checks_mypy.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 scripts/validation/checks_mypy.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_mypy import validate_mypy_changed_files; print('Result:', validate_mypy_changed_files(Path('.')))"` (cwd `sources/rjm`)
- actual exit code:
  - Direct execution: 1 (`ModuleNotFoundError: No module named 'scripts'`)
  - With PYTHONPATH: 0 (clean import, no CLI entry point)
  - Function execution via python3 -c: 0
- abridged stdout:
```
[base-ref] selected refs/remotes/origin/HEAD: no PR base resolved, first candidate ref that exists locally
[PASS] Mypy (no Python files changed on branch)
Result: True
```
- documented exit codes vs actual exit paths:
  - No documented numeric exit codes (defines boolean validation function).
  - Actual return paths:
    - line 28: `return True` when base_ref is None
    - line 37: `return True` when git diff fails
    - line 45: `return True` when no Python files changed
    - line 50: `return bool(run_mypy(py_files, repo_root) == 0)`
- for validators/gates:
  - Can return False: yes, returns False when `run_mypy` returns a non-zero exit code due to type regressions.
  - Tested on repository default branch: passes with return value `True` (0 Python files changed on branch).
- does output match what the documentation claims: yes, diffs Python files against base ref and runs ratchet-aware type checking.

## Defects — required
- `script-bug` · `scripts/validation/checks_mypy.py:14` — Direct execution fails with `ModuleNotFoundError: No module named 'scripts'` because `_SCRIPT_DIR` is added to `sys.path` but repo root is not, breaking `from scripts.cli_exec import resolve_executable` in `subprocess_runner.py`.

## Observations
- Employs lazy import of `run_mypy` from `git_hook_policy` inside `validate_mypy_changed_files` (line 48) only when changed Python files are actually detected, avoiding heavy mypy import overhead when no Python files have been modified.

## Context cost
1646 bytes, 51 lines, ~410 tokens.
