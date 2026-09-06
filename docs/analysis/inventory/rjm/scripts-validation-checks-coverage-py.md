---
package: rjm
path: scripts/validation/checks_coverage.py
type: script
bytes: 3979
unit: inv-rjm-292
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_coverage.py, sha256: 1b5a720fe23fc66bb90a5f4646618744fca700376aabaf0f8eb15f8f7deefaea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_coverage.py

## Purpose — required, verbatim
> "Review-marker coverage gate for the pre-PR runner." — scripts/validation/checks_coverage.py:2

## Design intent — required
Extracts the review-marker coverage validation gate from `pre_pr.py` into a focused helper module to preserve modular code boundaries. The module exposes `validate_review_marker`, an advisory check by default that inspects git HEAD to verify whether the commit carries a SHA-bound `Reviewed-By: /review@...` marker indicating that `/review` has passed on the exact code being submitted. Because pre-PR validation is routinely run during active iteration prior to code review, the check defaults to advisory mode to avoid halting ongoing development work. When strict validation is required (such as before running `/ship`), setting the environment variable `REVIEW_MARKER_ENFORCED=1` escalates any missing or stale review marker to a hard blocking failure. To ensure log readability and avoid confusing engineers when advisory checks do not pass, the module automatically rewrites child subprocess `[FAIL]` indicators to `[WARN]` so that log severity levels match overall pre-PR success.

## Phase — required
none

## Inputs — required
- Environment variable `REVIEW_MARKER_ENFORCED`: string flag ("1" or "true") to escalate the advisory check to blocking mode — scripts/validation/checks_coverage.py:67
- Subordinate validation script: `validate_review_marker.py` — scripts/validation/checks_coverage.py:69
- Repository root path: `repo_root: Path` parameter passed to `validate_review_marker` — scripts/validation/checks_coverage.py:54

## Outputs — required
- Boolean return value: True when the review marker is valid or when operating in default advisory mode; False when failing under `REVIEW_MARKER_ENFORCED` — scripts/validation/checks_coverage.py:67
- Standard output emitting warning or failure notices:
  - `[FAIL] validate_review_marker.py not present` — scripts/validation/checks_coverage.py:72
  - `[WARN] validate_review_marker.py not found (advisory skip)` — scripts/validation/checks_coverage.py:74
  - Rewritten subprocess output with `[FAIL]` transformed to `[WARN]` on advisory paths — scripts/validation/checks_coverage.py:51, 98
  - Advisory guidance explaining how to escalate to blocking — scripts/validation/checks_coverage.py:100

## Invokes — required
- script validate_review_marker.py — scripts/validation/checks_coverage.py:69
- function _run_subprocess — scripts/validation/checks_coverage.py:22

## Invoked by — required
- script checks_coverage — scripts/validation/pre_pr_sequence.py:59
- script checks_coverage — scripts/validation/pre_pr.py:93

## Concepts named — required, verbatim
- `_run_subprocess` — scripts/validation/checks_coverage.py:22 — used here
- `_FAIL_TOKEN` — scripts/validation/checks_coverage.py:24 — defined here
- `_WARN_TOKEN` — scripts/validation/checks_coverage.py:25 — defined here
- `_as_advisory` — scripts/validation/checks_coverage.py:28 — defined here
- `_print_output` — scripts/validation/checks_coverage.py:43 — defined here
- `validate_review_marker` — scripts/validation/checks_coverage.py:54 — defined here
- `REVIEW_MARKER_ENFORCED` — scripts/validation/checks_coverage.py:67 — used here

## Structure
- Shebang and module docstring — scripts/validation/checks_coverage.py:1-10
- Imports and common runner import — scripts/validation/checks_coverage.py:12-25
- Token rewriting and advisory formatting — scripts/validation/checks_coverage.py:28-41
- Subprocess output printer — scripts/validation/checks_coverage.py:43-52
- Review marker validator implementation — scripts/validation/checks_coverage.py:54-103

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_coverage.py`, language: Python 3, lines: 104
- documented invocation:
  - "Advisory check for a SHA-bound ``Reviewed-By: /review@...`` marker on HEAD." — scripts/validation/checks_coverage.py:55
- executed: yes
- actual command run:
  - `python3 scripts/validation/checks_coverage.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 scripts/validation/checks_coverage.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_coverage import validate_review_marker; print('Result:', validate_review_marker(Path('.')))"` (cwd `sources/rjm`)
- actual exit code:
  - Direct execution: 1 (`ModuleNotFoundError: No module named 'scripts'`)
  - With PYTHONPATH: 0 (clean import, no CLI entry point)
  - Function execution via python3 -c: 0
- abridged stdout:
```
[WARN] HEAD (2abef31dc681) changes files; a review marker must be an empty commit whose Reviewed-By trailer names its parent. Re-run /review after the code tip is ready.
  Note: advisory only (default). /ship blocks on this; pre_pr does not. Set REVIEW_MARKER_ENFORCED=1 to make it BLOCKING here. See Issue #1938.
Result: True
```
- documented exit codes vs actual exit paths:
  - No documented numeric exit codes (defines a Python function returning bool).
  - Actual return paths:
    - line 73: `return False` when `validate_review_marker.py` is absent and `enforced` is True
    - line 75: `return True` when `validate_review_marker.py` is absent and `enforced` is False
    - line 85: `return True` when exit code is 0
    - line 92: `return False` when non-zero exit code and `enforced` is True
    - line 103: `return True` when non-zero exit code and `enforced` is False (advisory fallback)
- for validators/gates:
  - Can exit non-zero / return False: yes, returns False when `REVIEW_MARKER_ENFORCED=1` is set and HEAD lacks an active review marker commit.
  - Tested on repository default branch: passes with return value `True` in default advisory mode.
- does output match what the documentation claims: yes, executes `validate_review_marker.py`, rewrites `[FAIL]` to `[WARN]`, and returns `True` under default advisory configuration.

## Defects — required
- `script-bug` · `scripts/validation/checks_coverage.py:20` — Direct execution fails with `ModuleNotFoundError: No module named 'scripts'` because `_SCRIPT_DIR` is added to `sys.path` but repo root is not, breaking `from scripts.cli_exec import resolve_executable` in `subprocess_runner.py`.

## Observations
- Demonstrates thoughtful developer experience engineering: converts blocking `[FAIL]` tokens into `[WARN]` so that advisory checks do not visually contradict a passing overall pre-PR run.
- Distinguishes between development pushes (where code review has not yet happened) and release operations (`/ship`), avoiding unnecessary workflow friction while maintaining release-gate safety.

## Context cost
3979 bytes, 104 lines, ~995 tokens.
