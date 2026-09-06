---
package: rjm
path: scripts/validation/checks_workflow_targets.py
type: script
bytes: 3009
unit: inv-rjm-293
in_scope_via: scripts/validation/checks_tooling.py
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_workflow_targets.py, sha256: 4b80c0e4c0e0bfe2052d15a8318cfa758fb70d424f1a14c0139a7cf57620d795}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_workflow_targets.py

## Purpose — required, verbatim
> "Changed workflow targets, including local contract dependencies." — scripts/validation/checks_workflow_targets.py:2

## Design intent — required
Provides dependency-aware target selection for GitHub Actions workflow validation. Instead of scanning all repository workflows on every local invocation or missing workflows affected by upstream changes, this module computes the transitive set of affected workflow YAML files based on git diffs against the branch base ref. It handles composite action contracts: if any composite action definition (`.github/actions/*/action.yml` or `action.yaml`) is modified or deleted, all workflow files in `.github/workflows/` are returned as targets, ensuring that action interface changes are verified across all callers. Furthermore, when specific workflow files are modified or deleted, it inspects all other workflow files to detect local references (`./.github/workflows/...`), returning the complete set of affected workflows. If no workflow or composite action files have changed, it returns an empty list, allowing `validate_workflow_yaml` to skip `actionlint` execution.

## Phase — required
none

## Inputs — required
- `repo_root` path parameter representing the repository root — scripts/validation/checks_workflow_targets.py:22
- Git change sets via `_changed_paths_since_base` and `_git_paths_z` across branch base ref, staged changes, and unstaged changes
- Filesystem inspection of workflow files under `.github/workflows/`

## Outputs — required
- Returns `list[str]` of affected workflow relative paths, `[]` if no workflow files are affected, or `None` if base ref could not be resolved — scripts/validation/checks_workflow_targets.py:26
- Exceptions: raises `ChangedPathMissingError` if any detected changed workflow or action file is missing from the working directory — scripts/validation/checks_workflow_targets.py:60

## Invokes — required
- script checks_changed_paths — scripts/validation/checks_workflow_targets.py:13
- script checks_common — scripts/validation/checks_workflow_targets.py:19

## Invoked by — required
- function _workflow_yaml_targets — scripts/validation/checks_tooling.py:38

## Concepts named — required, verbatim
- `_deleted_paths_since_base` — scripts/validation/checks_workflow_targets.py:22 — defined here
- `_workflow_yaml_targets` — scripts/validation/checks_workflow_targets.py:42 — defined here
- `ChangedPathMissingError` — scripts/validation/checks_workflow_targets.py:14 — used here
- `_changed_paths_since_base` — scripts/validation/checks_workflow_targets.py:15 — used here
- `_git_paths_z` — scripts/validation/checks_workflow_targets.py:16 — used here
- `_missing_path_message` — scripts/validation/checks_workflow_targets.py:17 — used here
- `_resolve_branch_base_ref` — scripts/validation/checks_workflow_targets.py:19 — used here

## Structure
- Shebang and module docstring — scripts/validation/checks_workflow_targets.py:1-2
- Imports and sys.path setup — scripts/validation/checks_workflow_targets.py:4-20
- _deleted_paths_since_base function — scripts/validation/checks_workflow_targets.py:22-40
- _workflow_yaml_targets function — scripts/validation/checks_workflow_targets.py:42-80

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_workflow_targets.py`, language: Python 3, lines: 80
- documented invocation:
  - "Changed workflow targets, including local contract dependencies." — scripts/validation/checks_workflow_targets.py:2
- executed: yes
- actual command run: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_workflow_targets.py`
- abridged stdout:
```
ModuleNotFoundError: No module named 'scripts'
```
- actual exit code: 1 (without PYTHONPATH); exit code 0 when run with `PYTHONPATH=. python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_workflow_targets.py` (silent library module execution)
- documented exit codes vs. actual exit paths in code:
  - Documented exit codes: none explicitly documented in module docstring; helper functions return `list[str] | None` or raise `ChangedPathMissingError`
  - Actual exit paths in code: no `sys.exit` calls present in module
- for validators/gates:
  - Can individual validation functions return `False` or fail? The module is a target selector, not a boolean gate; it returns target file lists or raises `ChangedPathMissingError` when git-detected files are absent on disk.
  - Does it fail on the source repo's own default branch? On the default branch, calling `_workflow_yaml_targets(Path('.'))` executes cleanly and returns `[]` (no changed workflows).
- does the output match what the documentation claims? yes; calculates changed workflow targets including contract dependencies as documented

## Defects — required
- `script-bug`: The script includes a shebang `#!/usr/bin/env python3` (line 1), but lacks repo root on `sys.path` (it only appends `_SCRIPT_DIR = Path(__file__).resolve().parent`, line 9), causing direct execution to fail with `ModuleNotFoundError: No module named 'scripts'` via `checks_changed_paths` -> `checks_common` -> `subprocess_runner` -> `scripts.cli_exec`.
- `exit-code-mismatch`: The script has a shebang `#!/usr/bin/env python3` (line 1) but lacks an `if __name__ == "__main__":` entry point or CLI interface; when run with `PYTHONPATH=.`, it exits 0 without output.

## Observations
- Action metadata dependency expansion: When any action metadata file under `.github/actions/` is modified or deleted, the function automatically expands targets to include all workflows (`all_workflows`, lines 68-69), guarding against composite action interface breakages.
- Reusable workflow dependency tracking: Lines 75-78 scan all candidate workflow files for local invocation references (`f"./{provider}" in text`) to include caller workflows when a reusable workflow is modified.

## Context cost
3,009 bytes (~750 tokens). Loads `checks_changed_paths.py` (8,564 bytes) and `checks_common.py` (19,425 bytes).
