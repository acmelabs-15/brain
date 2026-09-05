---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/test_ledger.py
type: file
bytes: 533
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/test_ledger.py, sha256: e6b0a010a846f2a21af829bc6b99f5f92d50608c7539c5176f40a86848c78dbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development-ecosystem/test_ledger.py

## Purpose — required, verbatim
> "class ApplyEntriesTest(unittest.TestCase):" — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:6
(no explicit purpose statement)

## Design intent — required
Provides the unit test suite for the Python ledger fixture using the standard library `unittest` framework. It verifies single credit application, sequential multi-credit application, and rejection of unknown entry kinds with `ValueError`. This serves as the starting baseline for the test-driven development evaluation task (eval id 3 in `evals/cases/test-driven-development.json`).

## Phase — required
none

## Inputs — required
- `evals/fixtures/test-driven-development-ecosystem/ledger.py` via `from ledger import apply_entries` (evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3)

## Outputs — required
- Test assertions via `self.assertEqual` (evals/fixtures/test-driven-development-ecosystem/test_ledger.py:8)

## Invokes — required
- file ledger — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3

## Invoked by — required
- config test-driven-development-ecosystem — evals/cases/test-driven-development.json:62

## Concepts named — required, verbatim
- `unittest` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:1 — used here
- `ApplyEntriesTest` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:6 — defined here
- `apply_entries` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Runs cleanly via `python3 -m unittest` with 3 passing tests and exit code 0.

## Context cost
533 bytes (~133 tokens). Loads `ledger.py` (457 bytes). Total: 990 bytes (~247 tokens).
