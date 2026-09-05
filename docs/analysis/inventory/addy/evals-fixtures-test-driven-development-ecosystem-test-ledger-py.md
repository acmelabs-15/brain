---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/test_ledger.py
type: file
bytes: 533
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/test_ledger.py, sha256: e6b0a010a846f2a21af829bc6b99f5f92d50608c7539c5176f40a86848c78dbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development-ecosystem/test_ledger.py

## Purpose — required, verbatim
> "class ApplyEntriesTest(unittest.TestCase):" — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:6
(no explicit purpose statement)

## Design intent — required
Test suite fixture accompanying `ledger.py` in the multi-ecosystem `test-driven-development` evaluation suite (`evals/cases/test-driven-development.json` eval id 3). Implements three `unittest.TestCase` assertions verifying single credits, ordered multiple credits, and rejection of unknown entry kinds with a `ValueError`. Serves as the existing test baseline that an agent must extend by writing a failing test for `"debit"` transactions before implementing debit support in `ledger.py`.

## Phase — required
none

## Inputs — required
Imports `unittest` and `apply_entries` from `ledger` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:1-3.

## Outputs — required
Runs unit test assertions and prints test results to standard output.

## Invokes — required
- file ledger — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3

## Invoked by — required
none

## Concepts named — required, verbatim
- `ApplyEntriesTest` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:6 — defined here
- `unittest.TestCase` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:6 — used here
- `apply_entries` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3 — used here
- `credit` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:8 — used here
- `ValueError` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:14 — used here

## Structure
- Imports: unittest, apply_entries
- Test class: ApplyEntriesTest
- Main runner: unittest.main()

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development-ecosystem/test_ledger.py`, language: Python, lines: 20
- documented invocation: none (invoked via test runner)
- **executed:** yes
- actual command run: `python3 -m unittest`, abridged stdout: `Ran 3 tests in 0.000s\n\nOK`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (unittest exits non-zero on failure)
- for validators/gates: can it exit non-zero? yes, on test failure; does it fail on default branch? no, passes
- does the output match what the documentation claims? yes, runs 3 unit tests successfully

## Defects — required
none

## Observations
Provides a clean Python standard library unittest implementation that runs without external dependencies.

## Context cost
990 bytes (533 bytes for test file + 457 bytes for `ledger.py`), ~200 tokens.
