---
package: rjm
path: scripts/ci/cli_exit_contract_coverage.py
type: script
bytes: 17656
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_coverage.py, sha256: 526a9777ae1176bc673bb10e4dff23828612f4ad861882c0bfa79d637f9bdf20}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/cli_exit_contract_coverage.py

## Purpose — required, verbatim
> "Does a test file prove an extracted CI script's CLI can exit nonzero?" — scripts/ci/cli_exit_contract_coverage.py:1

## Design intent — required
Static AST and regex analysis engine that determines whether test files prove that extracted CI scripts can exit non-zero on failure conditions (issue #4068). Split out of `cli_exit_contract_ratchet.py`, this module analyzes Python test source code to verify that a test function both drives a script's CLI (via direct `main()` call, subprocess invocation, or helper) AND contains an assertion verifying non-zero exit behavior (`== 1`, `!= 0`, `EXIT_*`, `returncode`, `excinfo.value.code`). This prevents accidental crediting of unrelated assertions and ensures CI scripts have proven failure contracts.

## Phase — required
none

## Inputs — required
- Test source strings (`test_source`) and frozen sets of tracked script stem names (`stems`) passed to `covered_stems` — scripts/ci/cli_exit_contract_coverage.py:423
- Module source string (`source`) passed to `defines_main` — scripts/ci/cli_exit_contract_coverage.py:48

## Outputs — required
- Set of verified script stem names (`set[str]`) returned by `covered_stems` — scripts/ci/cli_exit_contract_coverage.py:423
- Boolean value returned by `defines_main` indicating presence of a module-level `main` function — scripts/ci/cli_exit_contract_coverage.py:48

## Invokes — required
- script scripts.ci._main_binding — scripts/ci/cli_exit_contract_coverage.py:229

## Invoked by — required
- script cli_exit_contract_coverage — scripts/ci/cli_exit_contract_ratchet.py:52

## Concepts named — required, verbatim
- `covered_stems` — scripts/ci/cli_exit_contract_coverage.py:16 — defined here
- `defines_main` — scripts/ci/cli_exit_contract_coverage.py:16 — defined here
- `_test_functions` — scripts/ci/cli_exit_contract_coverage.py:235 — defined here
- `_scope_invocations` — scripts/ci/cli_exit_contract_coverage.py:356 — defined here
- `_proves_failure` — scripts/ci/cli_exit_contract_coverage.py:396 — defined here
- `_bindings` — scripts/ci/cli_exit_contract_coverage.py:411 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/cli_exit_contract_coverage.py`, language: Python, lines: 459
- documented invocation:
  "from scripts.ci.cli_exit_contract_coverage import covered_stems, defines_main" — scripts/ci/cli_exit_contract_ratchet.py:52
  (library module imported by `cli_exit_contract_ratchet.py` and driven directly by `tests/ci/test_cli_exit_contract_ratchet.py`; contains no `main()` or CLI entry point)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/cli_exit_contract_coverage.py`
  abridged stdout: `` (empty output; defines library classes and functions)
  actual exit code: 0
- documented exit codes: none (library module without CLI entry point) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (pure library module imported by `cli_exit_contract_ratchet.py`; returns exit code 0 when invoked as a script without executing any logic)
- does the output match what the documentation claims? yes (exports `covered_stems` and `defines_main` for test coverage analysis).

## Defects — required
none

## Observations
- Deliberately does not define a `main()` function or shebang; explicitly documented in `tests/ci/test_ci_scripts_are_wired.py:46-52` as a library holding AST test-coverage analysis for `cli_exit_contract_ratchet.py`.
- Combines cheap regex bails (`_ANY_NONZERO_COMPARISON`) with detailed AST tree walking and source-ordered main binding credit analysis to minimize parse overhead across dozens of test suites.

## Context cost
17656 bytes (~4400 tokens) + loads `scripts/ci/_main_binding.py` (17611 bytes).
