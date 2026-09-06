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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/cli_exit_contract_coverage.py

## Purpose — required, verbatim
> "Does a test file prove an extracted CI script's CLI can exit nonzero?" — scripts/ci/cli_exit_contract_coverage.py:1

## Design intent — required
Analyzes test source code via AST parsing and pattern matching to verify whether a test function drives an extracted CI script's CLI entry point (`main()` or subprocess call) and asserts a non-zero exit code in the same scope, preventing test coverage from counting assertions that test internal helpers without exercising actual process exit behavior.

## Phase — required
cross-phase

## Inputs — required
- Test source strings passed to `defines_main`: `scripts/ci/cli_exit_contract_coverage.py:48`
- Test source strings and tracked script stem frozenset passed to `covered_stems`: `scripts/ci/cli_exit_contract_coverage.py:423`

## Outputs — required
- Boolean verdict returned by `defines_main`: `scripts/ci/cli_exit_contract_coverage.py:48`
- Set of covered script stem strings returned by `covered_stems`: `scripts/ci/cli_exit_contract_coverage.py:423`

## Invokes — required
- script scripts.ci._main_binding — scripts/ci/cli_exit_contract_coverage.py:229

## Invoked by — required
orphan

## Concepts named — required, verbatim
`__all__` — scripts/ci/cli_exit_contract_coverage.py:16 — defined here
`_NONZERO_EXIT_ASSERTION` — scripts/ci/cli_exit_contract_coverage.py:30 — defined here
`_ANY_NONZERO_COMPARISON` — scripts/ci/cli_exit_contract_coverage.py:44 — defined here
`defines_main` — scripts/ci/cli_exit_contract_coverage.py:48 — defined here
`_FROM_IMPORT` — scripts/ci/cli_exit_contract_coverage.py:70 — defined here
`_PLAIN_IMPORT` — scripts/ci/cli_exit_contract_coverage.py:71 — defined here
`_LOADER_ALIAS` — scripts/ci/cli_exit_contract_coverage.py:72 — defined here
`_SPEC_FROM_FILE_LOCATION_ALIAS` — scripts/ci/cli_exit_contract_coverage.py:76 — defined here
`_MODULE_FROM_SPEC_ALIAS` — scripts/ci/cli_exit_contract_coverage.py:80 — defined here
`_SYS_MODULES_ALIAS` — scripts/ci/cli_exit_contract_coverage.py:86 — defined here
`_SCRIPT_FILE_NAME` — scripts/ci/cli_exit_contract_coverage.py:93 — defined here
`_PROCESS_CALLEES` — scripts/ci/cli_exit_contract_coverage.py:98 — defined here
`_UNQUALIFIED_NAME` — scripts/ci/cli_exit_contract_coverage.py:99 — defined here
`_imported_names` — scripts/ci/cli_exit_contract_coverage.py:102 — defined here
`_from_import_aliases` — scripts/ci/cli_exit_contract_coverage.py:114 — defined here
`_spec_from_file_aliases` — scripts/ci/cli_exit_contract_coverage.py:128 — defined here
`_spec_loader_stem` — scripts/ci/cli_exit_contract_coverage.py:143 — defined here
`_helper_loader_stems` — scripts/ci/cli_exit_contract_coverage.py:157 — defined here
`_helper_loader_aliases` — scripts/ci/cli_exit_contract_coverage.py:168 — defined here
`_module_aliases` — scripts/ci/cli_exit_contract_coverage.py:191 — defined here
`_bare_main_stems` — scripts/ci/cli_exit_contract_coverage.py:209 — defined here
`_compute_main_credit` — scripts/ci/cli_exit_contract_coverage.py:225 — defined here
`_test_functions` — scripts/ci/cli_exit_contract_coverage.py:235 — defined here
`_referenced_stems` — scripts/ci/cli_exit_contract_coverage.py:250 — defined here
`_Bindings` — scripts/ci/cli_exit_contract_coverage.py:261 — defined here
`_callee_name` — scripts/ci/cli_exit_contract_coverage.py:270 — defined here
`_stems_in_text` — scripts/ci/cli_exit_contract_coverage.py:278 — defined here
`_expression_stems` — scripts/ci/cli_exit_contract_coverage.py:282 — defined here
`_path_names` — scripts/ci/cli_exit_contract_coverage.py:295 — defined here
`_main_target` — scripts/ci/cli_exit_contract_coverage.py:316 — defined here
`_invocation_stems` — scripts/ci/cli_exit_contract_coverage.py:333 — defined here
`_scope_invocations` — scripts/ci/cli_exit_contract_coverage.py:356 — defined here
`_helper_stems` — scripts/ci/cli_exit_contract_coverage.py:374 — defined here
`_proves_failure` — scripts/ci/cli_exit_contract_coverage.py:396 — defined here
`_bindings` — scripts/ci/cli_exit_contract_coverage.py:411 — defined here
`covered_stems` — scripts/ci/cli_exit_contract_coverage.py:423 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/cli_exit_contract_coverage.py`, language: Python 3, lines: 459
- documented invocation: `"Does a test file prove an extracted CI script's CLI can exit nonzero?" — scripts/ci/cli_exit_contract_coverage.py:1`
- **executed:** yes
- actual command run: `python3 scripts/ci/cli_exit_contract_coverage.py`, abridged stdout: ``, **actual exit code**: 0
- documented exit codes: none; pure library module without a CLI entry point or `main()` function; exits 0 when executed directly
- for validators/gates: not directly executable as a CLI gate; functions as the static analysis engine for `cli_exit_contract_ratchet.py`
- does the output match what the documentation claims? yes, library parses ASTs and matches assertion patterns to determine CLI test coverage

## Defects — required
none

## Observations
Provides sophisticated AST and regex analysis of Python test files to verify that CLI exit contracts are tested at the function level rather than class or module level. Explicitly documented in `tests/ci/test_ci_scripts_are_wired.py` as a library without `main()` or shebang.

## Context cost
17656 bytes, approximately 4410 tokens.
