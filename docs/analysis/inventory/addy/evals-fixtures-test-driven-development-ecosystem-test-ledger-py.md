---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/test_ledger.py
type: file
bytes: 533
unit: inv-addy-2
---

# evals/fixtures/test-driven-development-ecosystem/test_ledger.py

## Purpose — required, verbatim
> "class ApplyEntriesTest(unittest.TestCase):\n    def test_applies_a_single_credit(self):\n        self.assertEqual(apply_entries(100, [(\"credit\", 25)]), 125)" — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:6-8 (no explicit purpose statement)

## Design intent — required
Provides the baseline regression unit test suite for `ledger.py` using Python's standard `unittest` module. It verifies single credit addition, sequential credit applications, and error rejection for unsupported entry kinds, providing the starting test scaffold for TDD feature development in Python.

## Phase — required
`addy:TEST`

## Inputs — required
- Imports `apply_entries` from `ledger` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3

## Outputs — required
- Reports unit test results to standard output/error via `unittest.main()` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:19

## Invokes — required
- file `evals/fixtures/test-driven-development-ecosystem/ledger.py` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3

## Invoked by — required
- doc `evals/fixtures/test-driven-development-ecosystem/README.md` — evals/fixtures/test-driven-development-ecosystem/README.md:8
- config `evals/cases/test-driven-development.json` — evals/cases/test-driven-development.json:71
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `unittest` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:1 — used here
- `apply_entries` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3 — used here
- `ApplyEntriesTest` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:6 — defined here
- `ValueError` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:14 — used here

## Structure
- `ApplyEntriesTest(unittest.TestCase)` — line 6
  - `test_applies_a_single_credit` — line 7
  - `test_applies_multiple_credits_in_order` — line 10
  - `test_rejects_unknown_entry_kinds` — line 13
- Main guard `unittest.main()` — line 18

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development-ecosystem/test_ledger.py`, language: Python 3, lines: 20
- documented invocation: `python3 -m unittest` (`README.md:8`) or `python3 test_ledger.py` (`test_ledger.py:19`)
- **executed:** yes
- actual command run: `python3 -m unittest`, actual exit code: `0`
- stdout:
  ```
  ...
  ----------------------------------------------------------------------
  Ran 3 tests in 0.000s

  OK
  ```
- documented exit codes vs. actual exit paths: `unittest.main()` exits 0 on all tests passing, exits 1 on failure.
- for validators/gates: N/A
- does output match documentation: Yes, runs 3 tests with exit code 0 and OK status.

## Defects — required
none

## Observations
Standard library test file with zero external dependencies.

## Context cost
533 bytes (~133 tokens). Total fixture cost with `ledger.py` and `README.md` is 1,121 bytes (~280 tokens).
