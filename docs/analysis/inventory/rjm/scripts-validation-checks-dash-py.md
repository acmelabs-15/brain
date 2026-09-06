---
package: rjm
path: scripts/validation/checks_dash.py
type: script
bytes: 6784
unit: inv-rjm-292
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_dash.py, sha256: 706e2794af3fd28adc259ad441a2bcf0795a0e7675cd0093673750fc051a845d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_dash.py

## Purpose — required, verbatim
> "Branch-wide em/en-dash prohibition check for the pre-PR runner." — scripts/validation/checks_dash.py:2

## Design intent — required
Enforces the repository-wide style policy prohibiting Unicode em-dashes (U+2014) and en-dashes (U+2013) in authored markdown documentation, as required by `.claude/rules/universal.md` MUST NOT rule 4. This policy was instituted because automated bot reviewers repeatedly flag dashes and generate noisy review threads on pull requests. While commit hooks catch violations at commit time, this branch-level validator audits all changed markdown files across the entire branch relative to the resolved base ref (`_resolve_branch_base_ref`), catching any dashes committed prior to hook installation or introduced via external tools. To prevent false positives and test breakages, it excludes vendored dependencies, test fixtures intentionally containing dashes, and untracked agent scratch worktrees. To prevent false reports from uncommitted working tree edits, it reads file blobs directly from git HEAD.

## Phase — required
none

## Inputs — required
- Repository root path: `repo_root: Path` parameter passed to `validate_dash_prohibition` — scripts/validation/checks_dash.py:144
- Base ref resolution: `_resolve_branch_base_ref` — scripts/validation/checks_dash.py:66
- Git diff invocation via `_run_subprocess` — scripts/validation/checks_dash.py:71
- Git HEAD blob query: reading file content via `git show HEAD:<path>` — scripts/validation/checks_dash.py:99

## Outputs — required
- Boolean return value: True when clean or scan cannot run; False when dash violations exist — scripts/validation/checks_dash.py:157
- Standard output warning: `[WARNING] Em/en-dash branch scan skipped: no base ref resolved` — scripts/validation/checks_dash.py:68
- Standard output failure header: `[FAIL] Em/en-dash prohibition violated` — scripts/validation/checks_dash.py:132
- Standard output pass notice: `[PASS] Em/en-dash prohibition (no markdown files on branch)` — scripts/validation/checks_dash.py:164

## Invokes — required
- function _resolve_branch_base_ref — scripts/validation/checks_dash.py:24
- function _run_subprocess — scripts/validation/checks_dash.py:24

## Invoked by — required
- script checks_dash — scripts/validation/pre_pr_sequence.py:62
- script checks_dash — scripts/validation/pre_pr.py:96
- script checks_dash — scripts/validation/checks_tooling.py:37

## Concepts named — required, verbatim
- `_resolve_branch_base_ref` — scripts/validation/checks_dash.py:24 — used here
- `_run_subprocess` — scripts/validation/checks_dash.py:24 — used here
- `_DASH_RE` — scripts/validation/checks_dash.py:28 — defined here
- `_VENDORED_PREFIXES` — scripts/validation/checks_dash.py:44 — defined here
- `_is_vendored` — scripts/validation/checks_dash.py:55 — defined here
- `_branch_markdown_files` — scripts/validation/checks_dash.py:60 — defined here
- `_find_dash_violations` — scripts/validation/checks_dash.py:94 — defined here
- `_print_dash_violations` — scripts/validation/checks_dash.py:130 — defined here
- `validate_dash_prohibition` — scripts/validation/checks_dash.py:144 — defined here

## Structure
- Shebang and module docstring — scripts/validation/checks_dash.py:1-12
- Imports and common runner import — scripts/validation/checks_dash.py:14-24
- Detection regex and vendored prefix definitions — scripts/validation/checks_dash.py:26-52
- Vendored prefix filter predicate — scripts/validation/checks_dash.py:55-58
- Branch markdown file list resolver — scripts/validation/checks_dash.py:60-91
- Git HEAD blob dash violation scanner — scripts/validation/checks_dash.py:94-128
- Structured failure reporter — scripts/validation/checks_dash.py:130-142
- Main validation entry point — scripts/validation/checks_dash.py:144-175

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_dash.py`, language: Python 3, lines: 176
- documented invocation:
  - "Branch-wide em/en-dash check (Issue #1923, REQ-006-AC7)." — scripts/validation/checks_dash.py:145
- executed: yes
- actual command run:
  - `python3 scripts/validation/checks_dash.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 scripts/validation/checks_dash.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_dash import validate_dash_prohibition; print('Result:', validate_dash_prohibition(Path('.')))"` (cwd `sources/rjm`)
- actual exit code:
  - Direct execution: 1 (`ModuleNotFoundError: No module named 'scripts'`)
  - With PYTHONPATH: 0 (clean import, no CLI entry point)
  - Function execution via python3 -c: 0
- abridged stdout:
```
[base-ref] selected refs/remotes/origin/HEAD: no PR base resolved, first candidate ref that exists locally
[PASS] Em/en-dash prohibition (no markdown files on branch)
Result: True
```
- documented exit codes vs actual exit paths:
  - No documented numeric exit codes (defines boolean validation function).
  - Actual return paths:
    - line 162: `return True` when candidate_paths is None (fail open)
    - line 165: `return True` when candidate_paths is empty
    - line 170: `return False` when violations list is non-empty
    - line 175: `return True` when no violations found
- for validators/gates:
  - Can return False: yes, returns False on any em/en-dash violation in branch markdown files (line 170)
  - Tested on repository default branch: passes with return value `True` (0 markdown files changed on branch).
- does output match what the documentation claims: yes, scans branch markdown files for em/en-dash characters and reports status.

## Defects — required
- `script-bug` · `scripts/validation/checks_dash.py:21` — Direct execution fails with `ModuleNotFoundError: No module named 'scripts'` because `_SCRIPT_DIR` is added to `sys.path` but repo root is not, breaking `from scripts.cli_exec import resolve_executable` in `subprocess_runner.py`.

## Observations
- Uses Unicode escape sequences `[\u2013\u2014]` in `_DASH_RE` rather than literal dash characters to ensure the source file itself does not violate the dash prohibition rule.
- Explicitly queries git HEAD blobs via `git show HEAD:<relpath>` rather than reading the working tree, ensuring that only committed changes on the branch are judged against the base diff.

## Context cost
6784 bytes, 176 lines, ~1696 tokens.
