---
package: rjm
path: scripts/validation/checks_changed_paths.py
type: script
bytes: 8564
unit: inv-rjm-291
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_changed_paths.py, sha256: dac06c7d9d9bd8e4359cb319cbfc994b45046be9130a022bc8469fda73c1ec29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_changed_paths.py

## Purpose — required, verbatim
> "Changed-path-since-base discovery, shared by the pre-PR target-scoping" — scripts/validation/checks_changed_paths.py:2

## Design intent — required
Provides unified and fail-closed discovery of files changed since a base git ref to allow pre-PR validation gates (such as markdown lint, workflow YAML validation, and YAML style checks) to narrow their targets without missing edits. Rather than using a naive two-dot `git diff HEAD` (which compares worktree directly to HEAD and hides changes if index content is staged while the worktree is restored to HEAD), it computes the union of four distinct NUL-delimited git signals: committed changes since base (`<base>...HEAD`), staged index changes (`git diff --cached HEAD`), unstaged worktree changes (`git diff`), and untracked files (`git ls-files --others --exclude-standard`). It uses `-z` to prevent octal escaping of Unicode or space-containing paths. Through `_filtered_targets` and `ChangedPathMissingError`, it raises a hard error if any path reported as changed is missing from the worktree (e.g. dirty or uncommitted deletions), preventing gates from silently validating only a subset of what would be pushed.

## Phase — required
rjm:test

## Inputs — required
- Function arguments:
  - `repo_root: Path` specifying repository root (scripts/validation/checks_changed_paths.py:26, 45, 133, 171)
  - `warn_label: str` label for diagnostic messages (scripts/validation/checks_changed_paths.py:26, 45, 133, 171)
  - `predicate: Callable[[str], bool]` filtering paths by criteria (scripts/validation/checks_changed_paths.py:171)
- Git repository state via subprocesses:
  - `_resolve_branch_base_ref(repo_root)` from `checks_common` (scripts/validation/checks_changed_paths.py:22, 76)
  - `git diff --name-only -z --diff-filter=ACMR <base_ref>...HEAD` (scripts/validation/checks_changed_paths.py:81, 83)
  - `git diff --name-only -z --diff-filter=ACMR --cached HEAD` (scripts/validation/checks_changed_paths.py:81, 84)
  - `git diff --name-only -z --diff-filter=ACMR` (scripts/validation/checks_changed_paths.py:81, 85)
  - `git ls-files --others --exclude-standard -z` (scripts/validation/checks_changed_paths.py:86)
  - `git diff --name-only -z --diff-filter=D --cached HEAD` (scripts/validation/checks_changed_paths.py:149)

## Outputs — required
- Return values:
  - `_git_paths_z`: `list[str] | None` (scripts/validation/checks_changed_paths.py:27)
  - `_changed_paths_since_base`: `list[str] | None` (scripts/validation/checks_changed_paths.py:45)
  - `_filtered_targets`: `list[str] | None` (scripts/validation/checks_changed_paths.py:172)
- Exceptions:
  - `ChangedPathMissingError` raised when a changed path is absent from the worktree (scripts/validation/checks_changed_paths.py:102, 186)
- Standard output warnings:
  - `[WARNING] {warn_label} target narrowing skipped: {action} failed: {stderr}` (scripts/validation/checks_changed_paths.py:40)
  - `[WARNING] {warn_label} target narrowing skipped: no base ref resolved` (scripts/validation/checks_changed_paths.py:78)

## Invokes — required
- script checks_common — scripts/validation/checks_changed_paths.py:22
- script checks_tooling — scripts/validation/checks_changed_paths.py:5

## Invoked by — required
- script checks_changed_paths — scripts/validation/checks_workflow_targets.py:13
- script checks_changed_paths — scripts/validation/checks_tooling.py:31

## Concepts named — required, verbatim
- `_git_paths_z` — scripts/validation/checks_changed_paths.py:25 — defined here
- `_changed_paths_since_base` — scripts/validation/checks_changed_paths.py:45 — defined here
- `ChangedPathMissingError` — scripts/validation/checks_changed_paths.py:102 — defined here
- `_missing_path_message` — scripts/validation/checks_changed_paths.py:133 — defined here
- `_filtered_targets` — scripts/validation/checks_changed_paths.py:170 — defined here
- `_resolve_branch_base_ref` — scripts/validation/checks_changed_paths.py:22 — used here
- `_run_subprocess` — scripts/validation/checks_changed_paths.py:22 — used here

## Structure
- `_git_paths_z` — scripts/validation/checks_changed_paths.py:25
- `_changed_paths_since_base` — scripts/validation/checks_changed_paths.py:45
- `ChangedPathMissingError` — scripts/validation/checks_changed_paths.py:102
- `_missing_path_message` — scripts/validation/checks_changed_paths.py:133
- `_filtered_targets` — scripts/validation/checks_changed_paths.py:170

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_changed_paths.py`, language: Python, lines: 188
- documented invocation:
  - "Extracted from ``checks_tooling.py`` (round 2 review, perf/git-hook-latency)" — scripts/validation/checks_changed_paths.py:5
- executed: yes
- actual command run:
  `sources/rjm/.venv/bin/python -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/validation'); import checks_changed_paths; from pathlib import Path; print(checks_changed_paths._changed_paths_since_base(Path('sources/rjm'), 'test'))"`
  abridged stdout:
  ```
  [base-ref] selected refs/remotes/origin/HEAD: no PR base resolved, first candidate ref that exists locally
  ['.serena/memories/.pr-branch-mapping.md.lock', 'sources/rjm/.serena/memories/.pr-branch-mapping.md.lock']
  ```
  actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: Internal library module extracted from `checks_tooling.py`; no direct CLI exit codes documented.
  - Actual exit paths: Direct CLI invocation `python checks_changed_paths.py` executes imports and exits 0. `_filtered_targets` raises `ChangedPathMissingError` at scripts/validation/checks_changed_paths.py:186 when changed files are missing from disk.
- for validators/gates: can it exit non-zero?
  Raises `ChangedPathMissingError` when target paths are absent from disk (line 186), forcing calling gates to fail closed. Does it fail on the source repo's own default branch? No, returns detected changed/untracked paths cleanly.
- does output match what documentation claims?
  Yes, safely retrieves changed paths across committed, staged, unstaged, and untracked sources using NUL delimiters.

## Defects — required
none

## Observations
Extracted from `checks_tooling.py` to keep that module under repository file-size limits. Re-exported and imported back into `checks_tooling.py` and `checks_workflow_targets.py`. Provides crucial correctness guarantees: handles spaces and non-ASCII paths safely via `-z`, and prevents bypassed validation when worktree state differs from staged/committed git index state.

## Context cost
File size: 8564 bytes, 188 lines, ~2100 tokens. Depends on `checks_common.py` (which re-exports `subprocess_runner.py`).
