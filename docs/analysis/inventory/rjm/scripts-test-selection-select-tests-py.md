---
package: rjm
path: scripts/test_selection/select_tests.py
type: script
bytes: 8199
unit: inv-rjm-263
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/test_selection/select_tests.py, sha256: 55afa726a2f4e6a81d372ad357019fb4af318250ffd3c84775545b54f076c03c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/test_selection/select_tests.py

## Purpose — required, verbatim
> "Select the pytest files affected by a set of changed files." — scripts/test_selection/select_tests.py:1

## Design intent — required
Implements a conservative fail-safe test selector derived from issue #5050 and ADR-104 that identifies which pytest test files need execution based on repository changes. To prevent false negatives (tests incorrectly skipped leading to merged bugs), the selector falls back to running the full test suite (`FULL_SUITE`) whenever static AST analysis cannot guarantee complete dependency coverage. Fallback triggers include any non-Python file modification, any `conftest.py` modification, any file matching `runtime_read_patterns.txt`, any unresolvable dynamic import (`importlib` or `__import__`) inside a modified file, or any changed file unmapped by the import graph. When all changes are mapped static Python files, it resolves the transitive closure via `import_graph.py` and returns the minimal subset of impacted `test_*.py` files, promoting empty selections to `FULL_SUITE` so a change can never pass tests by running zero tests.

## Phase — required
rjm:test

## Inputs — required
- Positional arguments `files`: Changed file paths relative to repository root — scripts/test_selection/select_tests.py:205
- Command-line flag `--repo-root`: Repository root path — scripts/test_selection/select_tests.py:189-192
- Command-line flag `--from-git`: Base git reference to diff against via `git diff BASE...HEAD` — scripts/test_selection/select_tests.py:197
- Command-line flag `--format`: Output format, choice of `text` or `json` — scripts/test_selection/select_tests.py:200-204
- Pattern file `runtime_read_patterns.txt` (scripts/test_selection/select_tests.py:31) loaded via `load_runtime_read_patterns` — scripts/test_selection/select_tests.py:52
- Git diff subprocess: executed via `changed_from_git` — scripts/test_selection/select_tests.py:167-184
- Repository import graph: data loaded via `import_graph.load_or_build_data` — scripts/test_selection/select_tests.py:148

## Outputs — required
- Text format output to stdout: `FULL_SUITE` or line-delimited test file paths — scripts/test_selection/select_tests.py:234, 237
- JSON format output to stdout: JSON dictionary with `full`, `reason`, and `tests` fields — scripts/test_selection/select_tests.py:226-228
- Selection diagnostics emitted to stderr with `selection:` prefix — scripts/test_selection/select_tests.py:232
- Exit code: 0 — scripts/test_selection/select_tests.py:230, 238

## Invokes — required
- script import_graph — scripts/test_selection/select_tests.py:25
- doc runtime_read_patterns.txt — scripts/test_selection/select_tests.py:31

## Invoked by — required
- script select_tests — scripts/ci/run_pytest_selected.py:27
- script select_tests — scripts/validation/git_hook_policy.py:47

## Concepts named — required, verbatim
- `FULL_SUITE` — scripts/test_selection/select_tests.py:30 — defined here
- `Selection` — scripts/test_selection/select_tests.py:35 — defined here
- `load_runtime_read_patterns` — scripts/test_selection/select_tests.py:52 — defined here
- `has_dynamic_import` — scripts/test_selection/select_tests.py:85 — defined here
- `select` — scripts/test_selection/select_tests.py:117 — defined here
- `changed_from_git` — scripts/test_selection/select_tests.py:167 — defined here
- `main` — scripts/test_selection/select_tests.py:209 — defined here

## Structure
- Selection dataclass — scripts/test_selection/select_tests.py:35
- load_runtime_read_patterns — scripts/test_selection/select_tests.py:52
- has_dynamic_import — scripts/test_selection/select_tests.py:85
- select — scripts/test_selection/select_tests.py:117
- changed_from_git — scripts/test_selection/select_tests.py:167
- main — scripts/test_selection/select_tests.py:209

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI script and test selection gate utility:
- path: `scripts/test_selection/select_tests.py`, language: Python, lines: 243
- documented invocation:
  "python scripts/test_selection/select_tests.py --from-git origin/main path/a.py" — scripts/test_selection/select_tests.py:11
- **executed:** yes
- actual command 1 (import graph subset):
  ```bash
  python3 scripts/test_selection/select_tests.py scripts/test_selection/import_graph.py
  ```
  - actual stdout:
    ```
    tests/ci/test_run_pytest_selected.py
    tests/ci/test_zero_collection_guard_wiring.py
    tests/test_selection/test_import_graph.py
    tests/test_selection/test_select_tests.py
    tests/workflows/test_pytest_xdist_parallelism.py
    ```
  - actual stderr: `selection: import-graph subset`
  - actual exit code: 0
- actual command 2 (fail-safe fallback on non-Python change):
  ```bash
  python3 scripts/test_selection/select_tests.py README.md
  ```
  - actual stdout: `FULL_SUITE`
  - actual stderr: `selection: non-Python change: README.md`
  - actual exit code: 0
- actual command 3 (json output formatting):
  ```bash
  python3 scripts/test_selection/select_tests.py --format json README.md
  ```
  - actual stdout: `{"full": true, "reason": "non-Python change: README.md", "tests": []}`
  - actual exit code: 0
- documented exit codes: none documented in file docstring
- actual exit paths in code:
  - `return 0` — scripts/test_selection/select_tests.py:230
  - `return 0` — scripts/test_selection/select_tests.py:238
  - `raise SystemExit(main())` — scripts/test_selection/select_tests.py:242
- for validators/gates: executes with exit code 0; communicates gate verdict via `FULL_SUITE` token or JSON payload consumed by `scripts/ci/run_pytest_selected.py` and lefthook pre-push runners.

## Defects — required
none

## Observations
- Zero-test execution guard: Lines 162-163 explicitly check `if not tests: return _full("no test transitively imports the changed files")`, ensuring that a change that has no transitive test dependencies runs the full test suite rather than passing with zero tests executed.
- Dynamic import sensitivity: `has_dynamic_import` (lines 85-115) parses AST nodes to detect `importlib` and `__import__` references in modified files, treating dynamic imports as unmappable boundaries that force full-suite test execution.
- Wildcard dependency closure: Merges transitive dependents of `graph_data.wildcard_dependents` into the affected closure (lines 159-160) to account for files whose dynamic imports could target any module.

## Context cost
8,199 bytes, ~2,100 tokens. Loads `scripts/test_selection/import_graph.py` (12,487 bytes) and `scripts/test_selection/runtime_read_patterns.txt` (267 bytes), total ~20.9 KB (~5,200 tokens).
