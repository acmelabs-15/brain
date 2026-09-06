---
package: rjm
path: scripts/validation/check_nested_tests.py
type: script
bytes: 5069
unit: inv-rjm-280
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_nested_tests.py, sha256: d24df7b8ede26217d2a8aba6b19c32623aa889ac6195f834c25373bae72b4d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_nested_tests.py

## Purpose — required, verbatim
> "Gate: detect test functions defined inside other functions." — scripts/validation/check_nested_tests.py:2

## Design intent — required
Detects test functions nested inside other functions across the pytest test suites. In pytest, test discovery only collects functions at the module level or methods defined inside test classes; any function starting with `test_` that is defined within another function body is silently skipped during test runs. This defect occurred live in PR #3688 where four tests nested below a return statement in a helper function never executed, creating a silent regression guard gap (issue #3879). By parsing the AST of all tracked test files and flagging any `test_*` function definition enclosed within another function, this validation gate prevents unexecuted test functions from entering the repository.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments:
  - Repository root directory via `argv[0]` (default: `Path(__file__).resolve().parents[2]` — scripts/validation/check_nested_tests.py:132)
- Test files located by `_tracked_test_files()`:
  - Tracked test files from `git ls-files tests/*/test_*.py tests/test_*.py` (scripts/validation/check_nested_tests.py:58)
  - Fallback file system search using `repo_root.rglob("test_*.py")` skipping `_SKIP_DIRS` (`.venv`, `venv`, `.git`, `__pycache__`, `node_modules`, `.mypy_cache`, `.ruff_cache` — scripts/validation/check_nested_tests.py:28-30, 75-78)
- Test file source code parsed into AST via `ast.parse()` (scripts/validation/check_nested_tests.py:95)

## Outputs — required
- Standard error messages when nested test functions are detected:
  - `[FAIL] <count> test function(s) are nested inside another function and will never be collected by pytest:` (scripts/validation/check_nested_tests.py:115)
  - `  <rel>:<lineno>  <name>()` (scripts/validation/check_nested_tests.py:121)
  - `Fix: move each flagged function to module level or into a class body.` (scripts/validation/check_nested_tests.py:123)
  - `[FAIL] Invalid repository root: <repo_root>` (scripts/validation/check_nested_tests.py:134)
- Boolean status returned by `validate_no_nested_tests()` contract (scripts/validation/check_nested_tests.py:105, 113)

## Invokes — required
none

## Invoked by — required
- script check_nested_tests — scripts/validation/pre_pr.py:78
- script check_nested_tests — scripts/validation/pre_pr_sequence.py:52

## Concepts named — required, verbatim
- `pytest` — scripts/validation/check_nested_tests.py:5 — used here
- `FunctionDef` — scripts/validation/check_nested_tests.py:11 — used here
- `AST` — scripts/validation/check_nested_tests.py:12 — used here
- `ADR-035` — scripts/validation/check_nested_tests.py:15 — used here
- `_SKIP_DIRS` — scripts/validation/check_nested_tests.py:28 — defined here
- `_NestedTestFinder` — scripts/validation/check_nested_tests.py:33 — defined here
- `AsyncFunctionDef` — scripts/validation/check_nested_tests.py:40 — used here
- `ClassDef` — scripts/validation/check_nested_tests.py:86 — used here
- `pre_pr.py` — scripts/validation/check_nested_tests.py:109 — used here

## Structure
- Gate: detect test functions defined inside other functions. (module docstring, lines 2-20)
- Imports and skip directories constant (lines 21-30)
- AST visitor _NestedTestFinder (lines 33-52)
- Test file discovery and git ls-files query (lines 54-80)
- AST analysis and validation functions (lines 82-127)
- CLI entry point and exit code mapping (lines 129-141)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_nested_tests.py`, language: Python, lines: 141
- documented invocation: none (no explicit CLI example documented in docstring; main entry point at line 129)
- **executed:** yes
- actual command run: `python3 scripts/validation/check_nested_tests.py`
- abridged stdout: (clean execution, no output)
- **actual exit code:** 0
- documented exit codes:
  - "0 - Success (no nested test functions found)" — scripts/validation/check_nested_tests.py:16
  - "1 - Logic error (one or more uncollectable test functions found)" — scripts/validation/check_nested_tests.py:17
  - "2 - Config error (invalid repository root)" — scripts/validation/check_nested_tests.py:18
  - actual exit paths:
    - 0: `return 0` when `validate_no_nested_tests(repo_root)` evaluates to True (line 136)
    - 1: `return 1` when `validate_no_nested_tests(repo_root)` evaluates to False (line 136)
    - 2: `return 2` when repository root is invalid (line 135)
- for validators/gates: can it exit non-zero? Yes, exits 1 when nested test functions are found, 2 on invalid repository root. Does it fail on the source repo's own default branch? No, passes with exit code 0.
- does the output match what the documentation claims? Yes, returns exit code 0 when all tests in the repository are collectable.

## Defects — required
none

## Observations
Created to eliminate a subtle test discovery defect discovered in PR #3688 where test functions placed under an early return statement in a helper function were silently skipped by pytest. The implementation uses Python's `ast` module to detect enclosing `FunctionDef` and `AsyncFunctionDef` nodes, while intentionally ignoring nested classes (`ClassDef`), which pytest collects as expected.

## Context cost
`check_nested_tests.py` is 5,069 bytes. Invokes no other files. Total context cost: ~5,069 bytes (~1,267 tokens).
