---
package: rjm
path: scripts/detect_test_coverage_gaps.py
type: script
bytes: 5842
unit: inv-rjm-214
in_scope_via: .agents/architecture/ADR-005-powershell-only-scripting.md
aliases: []
memo_inputs:
  - {path: scripts/detect_test_coverage_gaps.py, sha256: 93f4e168b55812e1cb40e9f907fb5c79dab7b5ea84b805bd60453b4a2c6f7a68}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/detect_test_coverage_gaps.py

## Purpose — required, verbatim
> "Detect PowerShell files without corresponding test files" — scripts/detect_test_coverage_gaps.py:2
> "Non-blocking WARNING that detects .ps1 files without corresponding .Tests.ps1 files." — scripts/detect_test_coverage_gaps.py:4

## Design intent — required
A static verification utility designed to discover untested PowerShell scripts before pre-merge validation or QA checks catch them. By convention in the repository, every `.ps1` script should have an accompanying `.Tests.ps1` Pester test either co-located or in a `tests/` subdirectory. Running this check gives early, non-blocking feedback to developers and agents to ensure PowerShell script modifications maintain high test coverage.

## Phase — required
cross-phase

## Inputs — required
- CLI options:
  - `--path`: "Root path to scan (default: current directory)" — scripts/detect_test_coverage_gaps.py:130
  - `--staged-only`: "Only check git-staged files" — scripts/detect_test_coverage_gaps.py:132
  - `--ignore-file`: "Path to file with ignore patterns" — scripts/detect_test_coverage_gaps.py:133
- Default ignore patterns: `DEFAULT_IGNORE_PATTERNS` — scripts/detect_test_coverage_gaps.py:33
- Files checked: staged files via `git diff --cached` (line 63) or repository files matching `*.ps1` via `rglob` (line 86)
- Optional external ignore pattern file loaded via `load_ignore_patterns` (line 48)

## Outputs — required
- Standard output diagnostics:
  - "WARNING: Detected PowerShell files without test coverage" — scripts/detect_test_coverage_gaps.py:168
  - "No PowerShell files to check for test coverage" — scripts/detect_test_coverage_gaps.py:151
  - "All PowerShell files have corresponding test coverage" — scripts/detect_test_coverage_gaps.py:178
- Exit codes:
  - "0  - Success: Detection completed (gaps may exist as warnings)" — scripts/detect_test_coverage_gaps.py:8
  - "1  - Error: Could not find git repo root" — scripts/detect_test_coverage_gaps.py:9

## Invokes — required
- script scripts.github_core.repo — scripts/detect_test_coverage_gaps.py:31

## Invoked by — required
- doc scripts/README.md — scripts/README.md:83
- script src/copilot-cli/skills/github/scripts/pr/pr_validations.py — src/copilot-cli/skills/github/scripts/pr/pr_validations.py:161

## Concepts named — required, verbatim
- `PowerShell` — scripts/detect_test_coverage_gaps.py:2 — used here
- `Tests.ps1` — scripts/detect_test_coverage_gaps.py:4 — used here
- `ADR-035` — scripts/detect_test_coverage_gaps.py:11 — used here
- `Exit Code Standardization` — scripts/detect_test_coverage_gaps.py:11 — used here
- `Issue #3391` — scripts/detect_test_coverage_gaps.py:26 — used here
- `DEFAULT_IGNORE_PATTERNS` — scripts/detect_test_coverage_gaps.py:33 — defined here
- `staged-only` — scripts/detect_test_coverage_gaps.py:132 — defined here
- `ignore-file` — scripts/detect_test_coverage_gaps.py:133 — defined here

## Structure
none (python script; functions: get_repo_root, load_ignore_patterns, get_staged_ps1_files, get_all_ps1_files, should_ignore, find_test_file, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/detect_test_coverage_gaps.py`, language: Python 3, lines: 184
- documented invocation:
  - "uv run --frozen python -m scripts.detect_test_coverage_gaps --staged-only" — scripts/README.md:91
  - "uv run --frozen python -m scripts.detect_test_coverage_gaps --ignore-file \".testignore\"" — scripts/README.md:94
- executed: yes
- actual command run: `python3 scripts/detect_test_coverage_gaps.py`
  abridged stdout:
  ```
  WARNING: Detected PowerShell files without test coverage
    Consider adding test files to improve quality and catch regressions

    .venv/bin/activate.ps1
      -> Missing: .venv/bin/activate.Tests.ps1

  This is a WARNING (non-blocking). To suppress, add patterns to ignore file.
  ```
  actual exit code: 0
- documented exit codes:
  - "0  - Success: Detection completed (gaps may exist as warnings)" — scripts/detect_test_coverage_gaps.py:8
  - "1  - Error: Could not find git repo root" — scripts/detect_test_coverage_gaps.py:9
  vs. actual exit paths:
  - `return 1` at line 139 (git repo root not found)
  - `return 0` at line 152 (no PowerShell files found to check)
  - `return 0` at line 176 (gaps detected, non-blocking warning)
  - `return 0` at line 179 (all files have tests)
  - `sys.exit(main())` at line 183
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on repo root errors; returns 0 when coverage gaps are found because it is explicitly non-blocking. Does it fail on the source repo's default branch? No, exits 0.
- does output match what the documentation claims?
  Yes, emits non-blocking warning for missing test coverage and exits 0.

## Defects — required
- script-bug — scripts/detect_test_coverage_gaps.py:88 — `get_all_ps1_files` filters out `.git/` and `node_modules/` but omits `.venv/` and `venv/`, resulting in false positives on `.venv/bin/activate.ps1`.

## Observations
- Contains path resolution fallback logic on `sys.path` (lines 22-29) ensuring imports work when run from linked worktrees or environments without editable packaging.
- Supports ignore files (`--ignore-file`) to suppress known test coverage exceptions.

## Context cost
5842 bytes (~1460 tokens) plus imported `scripts/github_core/repo.py` (2213 bytes, ~550 tokens). Total context cost: ~2010 tokens.
