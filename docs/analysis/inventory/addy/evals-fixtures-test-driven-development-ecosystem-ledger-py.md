---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/ledger.py
type: file
bytes: 457
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/ledger.py, sha256: ce6c0ab49c7297b86934e138c18425e52592fe3d0c31cb0048ce7c6cd159e106}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development-ecosystem/ledger.py

## Purpose — required, verbatim
> """Simple in-memory ledger utilities.""" — evals/fixtures/test-driven-development-ecosystem/ledger.py:1

## Design intent — required
Provides a minimal Python implementation of an in-memory balance ledger function (`apply_entries`) for evaluating multi-language ecosystem support in the `test-driven-development` eval. It demonstrates basic TDD starting logic (supporting `"credit"` entries and raising `ValueError` on unknown transaction kinds) that the agent is expected to extend using test-driven development in Python.

## Phase — required
`addy:BUILD`

## Inputs — required
- `balance`: Initial numeric balance (evals/fixtures/test-driven-development-ecosystem/ledger.py:4)
- `entries`: Iterable of `(kind, amount)` tuples (evals/fixtures/test-driven-development-ecosystem/ledger.py:4,10)

## Outputs — required
- Returns updated numeric balance after applying credit amounts (evals/fixtures/test-driven-development-ecosystem/ledger.py:15)
- Raises `ValueError(f"unsupported entry kind: {kind}")` on non-credit entries (evals/fixtures/test-driven-development-ecosystem/ledger.py:14)

## Invokes — required
none

## Invoked by — required
orphan

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
