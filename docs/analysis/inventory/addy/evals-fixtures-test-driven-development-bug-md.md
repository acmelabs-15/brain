---
package: addy
path: evals/fixtures/test-driven-development/BUG.md
type: doc
bytes: 394
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/BUG.md, sha256: d2ec9665dfe84bdd68c14b2226075351d650672c6a0b7cac7efe7dd8a130f112}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development/BUG.md

## Purpose — required, verbatim
> "From finance reconciliation (ticket FIN-482):" — evals/fixtures/test-driven-development/BUG.md:3
(no explicit purpose statement)

## Design intent — required
Bug report fixture for `test-driven-development` evaluation cases 1 and 2 (`evals/cases/test-driven-development.json`). Reports a rounding calculation defect where splitting 10,000 cents into 3 shares truncates fractional cents to produce `[3333, 3333, 3333]` (summing to 9999 cents, one cent short of $100.00). Tests whether an agent writes a failing test reproducing this exact lost-cent condition before editing source code, and verifies that the fix correctly distributes remainder cents across earlier shares rather than dropping remainder cents or dumping them into an arbitrary share.

## Phase — required
none

## Inputs — required
Read by eval runners and agents during TDD bug fixing evaluations.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Bug report` — evals/fixtures/test-driven-development/BUG.md:1 — defined here
- `splitCents` — evals/fixtures/test-driven-development/BUG.md:9 — used here
- `reconciliation` — evals/fixtures/test-driven-development/BUG.md:6 — used here

## Structure
- `# Bug report: cents lost on three-way splits` — evals/fixtures/test-driven-development/BUG.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides concrete reproduction case: "Reproduces with `splitCents(10000, 3)`: expected `[3334, 3333, 3333]`" — evals/fixtures/test-driven-development/BUG.md:9.

## Context cost
394 bytes, ~85 tokens.
