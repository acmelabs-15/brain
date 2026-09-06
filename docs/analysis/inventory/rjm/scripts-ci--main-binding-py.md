---
package: rjm
path: scripts/ci/_main_binding.py
type: script
bytes: 17611
unit: inv-rjm-198
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/_main_binding.py, sha256: 1009fe6ae95a4957bbb97bd561b2d48ac998636732375b335c3ef32dadacd60d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/_main_binding.py

## Purpose — required, verbatim
> "Per-call-site module-scope main-binding state for CLI exit-contract coverage." — scripts/ci/_main_binding.py:1

## Design intent — required
Static AST analysis module providing precise dataflow tracking for `main` function bindings across module-level execution order in Python test files. It supports `cli_exit_contract_coverage.py` by computing which CLI script stems should receive exit-contract test credit when bare `main()` invocations are analyzed. Global name resolution in Python occurs at call time (after the entire module executes), meaning all top-level functions observe module-end binding state unless shadowed. This module identifies compile-time local shadowing (function parameters, local assignments, local imports, for/with/except/match targets, or walrus expressions) that deny credit to bare `main()` calls within specific functions, and executes a conservative branch join across module-level control flow to ensure credit is granted only when all execution paths resolve to identical script targets.

## Phase — required
rjm:test

## Inputs — required
- AST module root `tree: ast.Module` — scripts/ci/_main_binding.py:106
- Known script stems set `stems: frozenset[str]` — scripts/ci/_main_binding.py:107
- Import alias map `aliases: dict[str, str]` — scripts/ci/_main_binding.py:108
- Referenced stem names `referenced: set[str]` — scripts/ci/_main_binding.py:109

## Outputs — required
- Mapping of AST function and class definition line numbers to credited script stems (returned by compute_bare_credit): `dict[int, frozenset[str]]` — scripts/ci/_main_binding.py:110

## Invokes — required
none

## Invoked by — required
- script _main_binding — scripts/ci/cli_exit_contract_coverage.py:229

## Concepts named — required, verbatim
- `UNBOUND` — scripts/ci/_main_binding.py:12 — defined here
- `TARGET` — scripts/ci/_main_binding.py:13 — defined here
- `LOCAL` — scripts/ci/_main_binding.py:14 — defined here
- `UNKNOWN` — scripts/ci/_main_binding.py:15 — defined here
- `Conservative branch join` — scripts/ci/_main_binding.py:17 — defined here
- `MainState` — scripts/ci/_main_binding.py:47 — defined here
- `compute_bare_credit` — scripts/ci/_main_binding.py:105 — defined here

## Structure
- State types — scripts/ci/_main_binding.py:35
- Public entry point — scripts/ci/_main_binding.py:93
- Function-local main detection — scripts/ci/_main_binding.py:142
- Module-level state walk — scripts/ci/_main_binding.py:233
- Statement effects on main state — scripts/ci/_main_binding.py:304
- Control flow with conservative joins — scripts/ci/_main_binding.py:373
- Helpers — scripts/ci/_main_binding.py:466

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/_main_binding.py`, language: Python, lines: 490
- documented invocation: none (pure helper library; defines no CLI arguments or top-level execution block)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/_main_binding.py`
- abridged stdout: `(empty)`
- actual exit code: 0
- documented exit codes: none vs. actual exit paths: no `exit`, `sys.exit`, or `raise SystemExit` statements present in the file
- for validators/gates: not a standalone gate; internal dataflow analysis engine for `scripts/ci/cli_exit_contract_coverage.py`
- does the output match what the documentation claims: yes (imports and executes cleanly as a Python module)

## Defects — required
none

## Observations
Provides AST inspection across control flow structures including `ast.Try` / `ast.TryStar` (Python 3.11+), pattern matching (`ast.Match`, `ast.MatchAs`, `ast.MatchStar`, `ast.MatchMapping`), and walrus assignment expressions (`ast.NamedExpr`). The join operator `_join()` strictly demotes any ambiguity (`_Kind.UNKNOWN` or `_Kind.LOCAL`) to `_Kind.UNKNOWN`, ensuring sound under-approximation of test credits.

## Context cost
17611 bytes (~4400 tokens).
