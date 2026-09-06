---
package: rjm
path: scripts/validation/check_repo_health_report.py
type: script
bytes: 6358
unit: inv-rjm-282
in_scope_via: scripts/validation/check_repo_health.py
aliases: []
memo_inputs:
  - {path: scripts/validation/check_repo_health_report.py, sha256: 740b36ed275f8f61a8db2b37fa1c1fc738a7b050c8306cb0c00e5e8b1055fdbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/validation/check_repo_health_report.py

## Purpose — required, verbatim
> "What the repo-health gate tells the reader, and the verdict it says it about." — scripts/validation/check_repo_health_report.py:1

## Design intent — required
Isolates diagnosis reporting and remediation messaging from git inspection logic, keeping the repo health validator under the repository's 500-line taste ceiling while ensuring that error verdicts are clear, comprehensive, and testable independently. Because git repository corruption (such as `core.bare` inadvertently set to true) manifests as confusing failures across unrelated tools and previously generated incorrect diagnoses (issue #4698), this module formats precise, scope-specific remediation instructions (worktree, local, global, system, or command scope) and enforces that failure verdicts route to stderr while all-clears with examined scope counts route to stdout per `.claude/rules/ci-scripts.md` MUST-12.

## Phase — required
rjm:test

## Inputs — required
- `RepoHealth` dataclass instances containing `status`, `work_tree`, `bare_scopes`, `scopes_read`, `effective_bare`, `worktree_config`, and `masked_scopes` — scripts/validation/check_repo_health_report.py:58-70
- Repository root path (`repo_root: Path`) passed to report functions — scripts/validation/check_repo_health_report.py:109, 125, 135, 144, 149
- Error detail strings (`detail: str`) passed to reporting functions — scripts/validation/check_repo_health_report.py:109

## Outputs — required
- Diagnostic and repair messages formatted and printed to `sys.stdout` and `sys.stderr`:
  - "[FAIL] {repo_root} has an unusable core.bare value: {detail}" — scripts/validation/check_repo_health_report.py:111
  - "[ERROR] Repository health could not be verified: {detail}" — scripts/validation/check_repo_health_report.py:122
  - "repo health: core.bare read in {health.scopes_read} config scope(s), " — scripts/validation/check_repo_health_report.py:130
  - "repo health: skipped, {repo_root} belongs to a bare repository " — scripts/validation/check_repo_health_report.py:138
  - "repo health: skipped, {repo_root} is not a git repository (0 scopes read)" — scripts/validation/check_repo_health_report.py:146
  - "[FAIL] Invalid repository root: {repo_root}" — scripts/validation/check_repo_health_report.py:151

## Invokes — required
none

## Invoked by — required
- script check_repo_health_report — scripts/validation/check_repo_health.py:85

## Concepts named — required, verbatim
- `repo-health gate` — scripts/validation/check_repo_health_report.py:1 — defined here
- `core.bare` — scripts/validation/check_repo_health_report.py:18 — used here
- `worktreeConfig` — scripts/validation/check_repo_health_report.py:26 — used here
- `_SCOPE_REPAIRS` — scripts/validation/check_repo_health_report.py:40 — defined here
- `_DEFAULT_REPAIR` — scripts/validation/check_repo_health_report.py:50 — defined here
- `_IMMUNIZATION` — scripts/validation/check_repo_health_report.py:52 — defined here
- `_WORK_TREE_FATAL` — scripts/validation/check_repo_health_report.py:54 — defined here
- `RepoHealth` — scripts/validation/check_repo_health_report.py:58 — defined here
- `report_corruption` — scripts/validation/check_repo_health_report.py:84 — defined here
- `report_usable` — scripts/validation/check_repo_health_report.py:125 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_repo_health_report.py`, language: Python, lines: 152
- documented invocation: "Split from ``check_repo_health.py`` so that file stays under the 500-line taste" — scripts/validation/check_repo_health_report.py:3
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 scripts/validation/check_repo_health_report.py`
    stdout: ``
    actual exit code: 0
  - Command: `python3 scripts/validation/check_repo_health.py .`
    stdout: `repo health: core.bare read in 1 config scope(s), none set true, for /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm`
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    none
  - Actual exit paths in code:
    none
- for validators/gates: can it exit non-zero?
  No, this module provides presentation functions and data classes; exit code logic is handled by caller `scripts/validation/check_repo_health.py`.
  Does it fail on the source repo's own default branch?
  No, executes with exit code 0 and provides formatting functions that evaluate cleanly against the repository.
- does the output match what the documentation claims?
  Yes, provides formatted diagnosis and repair instructions for `check_repo_health.py`.

## Defects — required
none

## Observations
Implements specific git 2.43.0 compatibility logic where immunization (`git config --worktree --replace-all core.bare false`) is only emitted when `extensions.worktreeConfig` is enabled, avoiding fatal git errors on configurations lacking worktreeConfig. Separates stdout for successful checks with scope counts from stderr for failure verdicts per `.claude/rules/ci-scripts.md` MUST-12.

## Context cost
6358 bytes, 152 lines (~1590 tokens). Standard library only (`dataclasses`, `pathlib`, `sys`).
