---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/ledger.py
type: file
bytes: 457
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/ledger.py, sha256: ce6c0ab49c7297b86934e138c18425e52592fe3d0c31cb0048ce7c6cd159e106}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development-ecosystem/ledger.py

## Purpose — required, verbatim
> "Simple in-memory ledger utilities." — evals/fixtures/test-driven-development-ecosystem/ledger.py:1

## Design intent — required
Provides a Python implementation module fixture for evaluating ecosystem versatility in the `test-driven-development` skill. It implements a basic `apply_entries` function handling only `"credit"` transactions and raising `ValueError` on unsupported kinds. It serves as the code under test for eval case 3 in `evals/cases/test-driven-development.json`, where an agent is tasked with implementing `"debit"` transactions test-first within a non-JavaScript/Python unittest ecosystem.

## Phase — required
none

## Inputs — required
- `balance` (numeric, starting balance) — evals/fixtures/test-driven-development-ecosystem/ledger.py:4
- `entries` (iterable of `(kind, amount)` tuples) — evals/fixtures/test-driven-development-ecosystem/ledger.py:4

## Outputs — required
- Numeric updated balance — evals/fixtures/test-driven-development-ecosystem/ledger.py:15

## Invokes — required
none

## Invoked by — required
- file ledger — evals/fixtures/test-driven-development-ecosystem/test_ledger.py:3
- config test-driven-development-ecosystem — evals/cases/test-driven-development.json:62

## Concepts named — required, verbatim
- `apply_entries` — evals/fixtures/test-driven-development-ecosystem/ledger.py:4 — defined here
- `credit` — evals/fixtures/test-driven-development-ecosystem/ledger.py:7 — used here
- `ValueError` — evals/fixtures/test-driven-development-ecosystem/ledger.py:8 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Pure Python standard library implementation with no external dependencies. Raises `ValueError` for non-credit entries at line 14.

## Context cost
457 bytes, ~114 tokens.
