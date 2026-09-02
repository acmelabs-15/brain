---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/ledger.py
type: file
bytes: 457
unit: inv-addy-2
---

# evals/fixtures/test-driven-development-ecosystem/ledger.py

## Purpose — required, verbatim
> """Simple in-memory ledger utilities.""" — evals/fixtures/test-driven-development-ecosystem/ledger.py:1

## Design intent — required
Provides a minimal Python implementation of an in-memory balance ledger function (`apply_entries`) for evaluating multi-language ecosystem support in the `test-driven-development` eval. It demonstrates basic TDD starting logic (supporting `"credit"` entries and raising `ValueError` on unknown transaction kinds) that the agent is expected to extend using test-driven development in Python.

## Phase — required
`addy:BUILD`

## Inputs — required
- `balance`: Initial numeric balance — evals/fixtures/test-driven-development-ecosystem/ledger.py:4
- `entries`: Iterable of `(kind, amount)` tuples — evals/fixtures/test-driven-development-ecosystem/ledger.py:4,10

## Outputs — required
- Returns updated numeric balance after applying credit amounts — evals/fixtures/test-driven-development-ecosystem/ledger.py:15
- Raises `ValueError(f"unsupported entry kind: {kind}")` on non-credit entries — evals/fixtures/test-driven-development-ecosystem/ledger.py:14

## Invokes — required
none

## Invoked by — required
- file `evals/fixtures/test-driven-development-ecosystem/test_ledger.py` — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3
- config `evals/cases/test-driven-development.json` — evals/cases/test-driven-development.json:71
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `apply_entries` — evals/fixtures/test-driven-development-ecosystem/ledger.py:4 — defined here
- `credit` — evals/fixtures/test-driven-development-ecosystem/ledger.py:7,11 — used here
- `ValueError` — evals/fixtures/test-driven-development-ecosystem/ledger.py:8,14 — used here

## Structure
- Module docstring — line 1
- `apply_entries(balance, entries)` — line 4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates that the TDD evaluation framework in Addy's skill suite tests multi-language agility (Python standard library alongside JavaScript/TypeScript).

## Context cost
457 bytes (~114 tokens). Total fixture context cost with `README.md` (131 bytes) and `test_ledger.py` (533 bytes) is 1,121 bytes (~280 tokens).
