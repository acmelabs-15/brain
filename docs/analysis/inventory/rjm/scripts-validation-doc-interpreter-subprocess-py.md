---
package: rjm
path: scripts/validation/doc_interpreter_subprocess.py
type: script
bytes: 4679
unit: inv-rjm-294
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/doc_interpreter_subprocess.py, sha256: cfff472cecc2ca0e7116ec51b47308b4c4f77537773708d195f62457c9c87b01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/doc_interpreter_subprocess.py

## Purpose — required, verbatim
> "Find tracked Python scripts launched through ``sys.executable``." — scripts/validation/doc_interpreter_subprocess.py:1

## Design intent — required
Provides static AST analysis to discover tracked Python scripts launched as subprocesses using `sys.executable`. Extracted as a reusable analysis component for `check_doc_interpreter_portability.py`, it inspects Python abstract syntax trees (`ast.Module`) across module-level statements and reachable local function scopes to identify subprocess calls (`subprocess.run`, `subprocess.Popen`, `call`, etc.) where the command invocation launches Python via `sys.executable [path, ...]`. It tracks variable assignments to resolve script paths constructed directly or via `os.path.join`, filtering matches against the set of tracked repository Python files. Without it, the documented interpreter portability checker would miss transitive Python script execution launched through subprocess calls, or require brittle regular expression matching of Python source code.

## Phase — required
rjm:test

## Inputs — required
- AST module tree: `tree: ast.Module` (lines 67, 127).
- Tracked Python scripts path set: `tracked_py: set[str]` (lines 21, 29, 97, 105, 127).
- AST statement bodies and expressions inspected during AST traversal (lines 44, 56, 84, 97, 105).

## Outputs — required
- Target tracked scripts set: `set[str]` returned by `python_subprocess_targets` (lines 127-132) and `_scope_targets` (lines 105, 124).
- Scopes list: `list[list[ast.stmt]]` returned by `_reachable_scopes` (lines 67, 81).
- Resolved tracked suffix or path expression: `str | None` (lines 21, 26, 29, 41).

## Invokes — required
none

## Invoked by — required
- script doc_interpreter_subprocess — scripts/validation/check_doc_interpreter_portability.py:113

## Concepts named — required, verbatim
- `_SUBPROCESS_CALLS` — scripts/validation/doc_interpreter_subprocess.py:8 — defined here
- `_FUNCTION_NODES` — scripts/validation/doc_interpreter_subprocess.py:9 — defined here
- `_is_sys_executable` — scripts/validation/doc_interpreter_subprocess.py:12 — defined here
- `_tracked_suffix` — scripts/validation/doc_interpreter_subprocess.py:21 — defined here
- `_path_expression` — scripts/validation/doc_interpreter_subprocess.py:29 — defined here
- `_executable_nodes` — scripts/validation/doc_interpreter_subprocess.py:44 — defined here
- `_called_local_functions` — scripts/validation/doc_interpreter_subprocess.py:55 — defined here
- `_reachable_scopes` — scripts/validation/doc_interpreter_subprocess.py:67 — defined here
- `_python_subprocess_command` — scripts/validation/doc_interpreter_subprocess.py:84 — defined here
- `_path_assignment` — scripts/validation/doc_interpreter_subprocess.py:97 — defined here
- `_scope_targets` — scripts/validation/doc_interpreter_subprocess.py:105 — defined here
- `python_subprocess_targets` — scripts/validation/doc_interpreter_subprocess.py:127 — defined here
- `sys.executable` — scripts/validation/doc_interpreter_subprocess.py:1 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/doc_interpreter_subprocess.py`, language: Python, lines: 133
- documented invocation: none (AST analysis library imported by `check_doc_interpreter_portability.py`; no CLI or `__main__` entry point)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/validation/doc_interpreter_subprocess.py`, abridged stdout: `(empty)`, **actual exit code**: 0
- documented exit codes: none (module defines AST analysis functions and returns `set[str]`; no `sys.exit` calls) vs. actual exit paths in code: none (no exit paths in file)
- for validators/gates: can it exit non-zero? N/A (module library; returns AST target sets). does it fail on the source repo's own default branch? no (exits 0 when executed standalone).
- does the output match what the documentation claims? yes (executes cleanly as an importable module without side effects).

## Defects — required
none

## Observations
- Implements scope reachability analysis (`_reachable_scopes`) to trace only functions actually called directly or transitively from module body execution, pruning uncalled helper functions.
- Supports both direct string literals and `os.path.join` argument parsing for script path resolution (`_path_expression`), as well as single variable assignment tracking (`_path_assignment`).

## Context cost
File: 4,679 bytes (~1,170 tokens). Standalone, standard library AST imports only.
