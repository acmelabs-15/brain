---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/ledger.py
type: file
bytes: 457
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/ledger.py, sha256: ce6c0ab49c7297b86934e138c18425e52592fe3d0c31cb0048ce7c6cd159e106}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development-ecosystem/ledger.py

## Purpose — required, verbatim
> "Simple in-memory ledger utilities." — evals/fixtures/test-driven-development-ecosystem/ledger.py:1

## Design intent — required
Implementation module fixture for the multi-ecosystem evaluation of `test-driven-development` (`evals/cases/test-driven-development.json` eval id 3). Implements a minimal Python in-memory ledger function `apply_entries` that supports only `"credit"` transactions and rejects any other entry kind with a `ValueError`. Tests whether an agent identifies Python as the repository stack, uses native Python tooling (`unittest`), and practices test-first development by writing failing tests for new `"debit"` transactions before implementing them.

## Phase — required
none

## Inputs — required
Consumes `balance` and `entries` (tuples of kind and amount) — evals/fixtures/test-driven-development-ecosystem/ledger.py:4.

## Outputs — required
Returns updated `balance`, or raises `ValueError` on unsupported entry kinds — evals/fixtures/test-driven-development-ecosystem/ledger.py:14-15.

## Invokes — required
none

## Invoked by — required
- file ledger — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3

## Concepts named — required, verbatim
- `apply_entries` — evals/fixtures/test-driven-development-ecosystem/ledger.py:4 — defined here
- `credit` — evals/fixtures/test-driven-development-ecosystem/ledger.py:7 — used here
- `ValueError` — evals/fixtures/test-driven-development-ecosystem/ledger.py:8 — used here

## Structure
- Module docstring: Simple in-memory ledger utilities
- Function definition: apply_entries

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clean, zero-dependency Python implementation that strictly limits supported operations to credits, deliberately leaving debits unimplemented as a TDD exercise.

## Context cost
457 bytes, ~95 tokens.
