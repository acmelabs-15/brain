---
package: rjm
path: scripts/validation/check_duplicate_test_helpers.py
type: script
bytes: 6233
unit: inv-rjm-279
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/check_duplicate_test_helpers.py, sha256: 8906f18524078aa443be6371e81d6f866fc50df83b93e3be976f4b34b50fc0b5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_duplicate_test_helpers.py

## Purpose — required, verbatim
> "Gate: no duplicate module-level test helper definitions." — scripts/validation/check_duplicate_test_helpers.py:2

## Design intent — required
Validates that test files in `tests/` contain no duplicate module-level helper function definitions. While Ruff rule F811 detects redefined names, its default configuration intentionally ignores variables and function names matching `lint.dummy-variable-rgx` (which matches `_helper` and underscore-prefixed names). In test suites where helper functions are commonly marked private by naming convention, duplicate helper definitions created through copy-paste or parallel development silently clobber earlier definitions at runtime, causing tests to run against unexpected helper logic or masking outdated assertions. This gate parses the Abstract Syntax Tree (AST) of all tracked Python test files to detect any repeated top-level `def` or `async def` function names within the same module, reporting the file, function name, and both line numbers. Without it, test helper overwrites would pass static analysis and PR gates silently, undermining test reliability.

## Phase — required
none

## Inputs — required
- Optional repository root argument `argv[0]` (default: `Path(__file__).resolve().parents[2]`) — scripts/validation/check_duplicate_test_helpers.py:177
- Tracked and untracked Python test files under `tests/` discovered via `git ls-files` or filesystem walk — scripts/validation/check_duplicate_test_helpers.py:64, 118

## Outputs — required
- Standard error diagnostics reporting duplicate test helper definitions (`[FAIL] N duplicate module-level test helper definition(s) found:`) or scan errors — scripts/validation/check_duplicate_test_helpers.py:164, 179, 184
- Exit code 0 on success (no duplicate module-level test helpers found) — scripts/validation/check_duplicate_test_helpers.py:11, 182
- Exit code 1 on logic error (one or more duplicate helpers found) — scripts/validation/check_duplicate_test_helpers.py:12, 182
- Exit code 2 on config error (invalid repository root or `ScanError`) — scripts/validation/check_duplicate_test_helpers.py:13, 180, 185

## Invokes — required
none

## Invoked by — required
- script check_duplicate_test_helpers — scripts/validation/pre_pr_sequence.py:49

## Concepts named — required, verbatim
- `F811` — scripts/validation/check_duplicate_test_helpers.py:4 — used here
- `ADR-035` — scripts/validation/check_duplicate_test_helpers.py:10 — used here
- `_SKIP_DIRS` — scripts/validation/check_duplicate_test_helpers.py:24 — defined here
- `ScanError` — scripts/validation/check_duplicate_test_helpers.py:38 — defined here
- `_clean_git_env` — scripts/validation/check_duplicate_test_helpers.py:42 — defined here
- `_is_git_root` — scripts/validation/check_duplicate_test_helpers.py:47 — defined here
- `_tracked_test_files` — scripts/validation/check_duplicate_test_helpers.py:64 — defined here
- `_walk_test_files` — scripts/validation/check_duplicate_test_helpers.py:118 — defined here
- `find_duplicate_module_level_helpers` — scripts/validation/check_duplicate_test_helpers.py:131 — defined here
- `validate_duplicate_test_helpers` — scripts/validation/check_duplicate_test_helpers.py:157 — defined here
- `main` — scripts/validation/check_duplicate_test_helpers.py:174 — defined here

## Structure
- Shebang and module docstring: purpose and ADR-035 exit code specification — scripts/validation/check_duplicate_test_helpers.py:1-14
- Standard library imports and directory skip set constant — scripts/validation/check_duplicate_test_helpers.py:16-35
- ScanError exception class definition — scripts/validation/check_duplicate_test_helpers.py:38-40
- Clean git environment helper function — scripts/validation/check_duplicate_test_helpers.py:42-45
- Git repository root verification via rev-parse — scripts/validation/check_duplicate_test_helpers.py:47-62
- Tracked test file discovery via git ls-files — scripts/validation/check_duplicate_test_helpers.py:64-116
- Fallback directory walker for non-git environments — scripts/validation/check_duplicate_test_helpers.py:118-129
- AST parser and duplicate module-level helper scanner — scripts/validation/check_duplicate_test_helpers.py:131-155
- Validation reporting and failure message formatter — scripts/validation/check_duplicate_test_helpers.py:157-172
- Main CLI function with exit code mapping — scripts/validation/check_duplicate_test_helpers.py:174-186
- Top-level script execution guard — scripts/validation/check_duplicate_test_helpers.py:188-190

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_duplicate_test_helpers.py`, language: Python, lines: 190
- documented invocation:
  - "0 - Success (no duplicate module-level test helpers found)" — scripts/validation/check_duplicate_test_helpers.py:11
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/check_duplicate_test_helpers.py sources/rjm`
- abridged stdout: `(empty)`
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - "0 - Success (no duplicate module-level test helpers found)" — scripts/validation/check_duplicate_test_helpers.py:11
  - "1 - Logic error (one or more duplicate helpers found)" — scripts/validation/check_duplicate_test_helpers.py:12
  - "2 - Config error (invalid repository root)" — scripts/validation/check_duplicate_test_helpers.py:13
  - actual exit paths in code:
    - line 180: `return 2` if not repo_root.is_dir()
    - line 182: `return 0 if validate_duplicate_test_helpers(repo_root) else 1`
    - line 185: `return 2` on ScanError
    - line 189: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes (exits 1 on duplicate helpers, 2 on invalid repo root or scan error)
  - does it fail on the source repo's own default branch: no, exits 0 with zero duplicate helpers found
- does output match what the documentation claims: yes, clean scan produces no error diagnostics and exits 0

## Defects — required
none

## Observations
- The gate targets a specific gap where Ruff's dummy-variable regex allows duplicate `_helper` functions to bypass F811 redefinition checks.
- It intentionally restricts checking to module-level `def` and `async def` definitions because nested functions and class methods possess their own independent variable scopes.
- It uses `_clean_git_env()` to strip ambient `GIT_*` environment variables, avoiding git context pollution when run inside hooks or git worktrees.

## Context cost
6233 bytes, 190 lines, approximately 1550 tokens.
