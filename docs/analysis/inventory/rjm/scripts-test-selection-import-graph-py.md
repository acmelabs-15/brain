---
package: rjm
path: scripts/test_selection/import_graph.py
type: script
bytes: 12487
unit: inv-rjm-263
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/test_selection/import_graph.py, sha256: 67f96c39ec954d4380d904f09f4d6a77168f8f7b443f9a7c5a0742c752752d5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/test_selection/import_graph.py

## Purpose — required, verbatim
> "Build and cache the repository import graph for test selection." — scripts/test_selection/import_graph.py:1

## Design intent — required
Accelerates test execution across a large repository by statically constructing and caching a full in-repo module dependency graph, allowing test runners to identify exactly which test files transitively import a set of changed files instead of running the entire test suite. Because building the graph via AST parsing across thousands of Python files takes significant time (~9.7s on 2,100 files), the module persists the graph to `.cache/test_import_graph.json` with version tracking (`CACHE_VERSION = 3`) and invalidates the cache whenever any tracked Python file or `pyproject.toml` has an mtime newer than the cache. The design explicitly traces both static imports (`import`, `from ... import`) and dynamic imports (`__import__`, `importlib.import_module`), tracking modules with non-literal dynamic imports in `wildcard_dependents` to guarantee that transitive dependency calculations never silently miss unmapped edges.

## Phase — required
rjm:test

## Inputs — required
- `repo_root`: Target repository root path resolved via `find_repo_root()` — scripts/test_selection/import_graph.py:42
- In-repo Python files discovered by `python_files(repo_root)` excluding `_SKIP_PARTS` (`__pycache__`, `.venv`, `.cache`, `worktrees`, `node_modules`, `.git`, `.mypy_cache`) — scripts/test_selection/import_graph.py:29-31, 51-59
- Configuration file `pyproject.toml` used for cache mtime freshness checks — scripts/test_selection/import_graph.py:247-250
- Cache file `.cache/test_import_graph.json` — scripts/test_selection/import_graph.py:9

## Outputs — required
- Serialized JSON cache at `.cache/test_import_graph.json` (scripts/test_selection/import_graph.py:9) containing sorted `wildcard_dependents` — scripts/test_selection/import_graph.py:287
- In-memory `ImportGraphData` instance containing forward graph mapping (`dict[str, frozenset[str]]`) and `wildcard_dependents` (`frozenset[str]`) — scripts/test_selection/import_graph.py:35, 38-39
- Transitive closure `set[str]` produced by `affected_closure` — scripts/test_selection/import_graph.py:334

## Invokes — required
none

## Invoked by — required
- script import_graph — scripts/test_selection/select_tests.py:25

## Concepts named — required, verbatim
- `CACHE_VERSION` — scripts/test_selection/import_graph.py:25 — defined here
- `ImportGraphData` — scripts/test_selection/import_graph.py:35 — defined here
- `wildcard_dependents` — scripts/test_selection/import_graph.py:39 — defined here
- `find_repo_root` — scripts/test_selection/import_graph.py:42 — defined here
- `python_files` — scripts/test_selection/import_graph.py:51 — defined here
- `build_graph_data` — scripts/test_selection/import_graph.py:192 — defined here
- `build_graph` — scripts/test_selection/import_graph.py:229 — defined here
- `is_cache_fresh` — scripts/test_selection/import_graph.py:253 — defined here
- `load_or_build_data` — scripts/test_selection/import_graph.py:292 — defined here
- `load_or_build` — scripts/test_selection/import_graph.py:317 — defined here
- `reverse_graph` — scripts/test_selection/import_graph.py:325 — defined here
- `affected_closure` — scripts/test_selection/import_graph.py:334 — defined here

## Structure
- ImportGraphData dataclass — scripts/test_selection/import_graph.py:35
- find_repo_root — scripts/test_selection/import_graph.py:42
- python_files — scripts/test_selection/import_graph.py:51
- build_graph_data — scripts/test_selection/import_graph.py:192
- build_graph — scripts/test_selection/import_graph.py:229
- is_cache_fresh — scripts/test_selection/import_graph.py:253
- load_or_build_data — scripts/test_selection/import_graph.py:292
- load_or_build — scripts/test_selection/import_graph.py:317
- reverse_graph — scripts/test_selection/import_graph.py:325
- affected_closure — scripts/test_selection/import_graph.py:334

## Scripts — required if type is script or the skill ships scripts
The file is a library script without a standalone `__main__` CLI entry point:
- path: `scripts/test_selection/import_graph.py`, language: Python, lines: 348
- documented invocation: none (library module imported by `select_tests.py` and test harnesses)
- **executed:** yes
- actual command run:
  ```bash
  python3 scripts/test_selection/import_graph.py
  ```
  - actual stdout: (empty)
  - actual exit code: 0
- programmatic API verification:
  ```bash
  python3 -c "from scripts.test_selection import import_graph; root = import_graph.find_repo_root(); data = import_graph.load_or_build_data(root); print('nodes:', len(data.graph))"
  ```
  - actual stdout: `nodes: 4396`
  - actual exit code: 0
- documented exit codes: none documented in file docstring
- actual exit paths in code: raises `RuntimeError` at `scripts/test_selection/import_graph.py:212` and `scripts/test_selection/import_graph.py:216` on unreadable or invalid Python sources
- for validators/gates: not an executable gate; build failures raise `RuntimeError` which caller `select_tests.py` catches to trigger a fail-safe fallback to the full test suite

## Defects — required
none

## Observations
- Tolerant of concurrent deletion: Line 207 explicitly traps `FileNotFoundError` during file iteration, skipping files removed between `rglob` and `read_text` so concurrent git operations do not abort graph creation.
- Graceful cache write fallback: Lines 310-313 catch `OSError` on cache write, allowing execution to succeed even in read-only filesystems or when facing cache write permission issues.
- Dynamic import analysis: Inspects AST calls for `__import__` and `importlib.import_module`. When the module name argument is a dynamic variable (non-literal string), the calling file is tagged in `wildcard_dependents` (lines 149, 163).

## Context cost
12,487 bytes, ~3,100 tokens. Isolated module with standard library imports only.
