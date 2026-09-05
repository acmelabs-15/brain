---
package: addy
path: evals/fixtures/test-driven-development/BUG.md
type: doc
bytes: 394
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/BUG.md, sha256: d2ec9665dfe84bdd68c14b2226075351d650672c6a0b7cac7efe7dd8a130f112}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/BUG.md

## Purpose — required, verbatim
> "From finance reconciliation (ticket FIN-482):" — evals/fixtures/test-driven-development/BUG.md:3
(no explicit purpose statement)

## Design intent — required
Provides a reproduction bug report fixture for evaluating bug-fixing workflows in the `test-driven-development` skill. It reports a reconciliation failure (ticket FIN-482) where `splitCents(10000, 3)` drops a remainder cent and produces an incorrect sum ($99.99 instead of $100.00). This tests whether an agent writes a failing reproduction test before altering production code, and whether it respects broader distribution invariants (earliest-shares distribution) rather than naively dumping remainders on arbitrary shares.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config BUG.md — evals/cases/test-driven-development.json:32
- config test-driven-development — evals/cases/test-driven-development.json:35

## Concepts named — required, verbatim
- `Bug report` — evals/fixtures/test-driven-development/BUG.md:1 — defined here
- `FIN-482` — evals/fixtures/test-driven-development/BUG.md:3 — used here
- `splitCents` — evals/fixtures/test-driven-development/BUG.md:9 — used here

## Structure
- `# Bug report: cents lost on three-way splits` — evals/fixtures/test-driven-development/BUG.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The bug report provides both the business impact ("Reconciliation flags every three-way invoice we processed this month" at evals/fixtures/test-driven-development/BUG.md:6-7) and the exact technical reproduction vector (`splitCents(10000, 3)` at evals/fixtures/test-driven-development/BUG.md:9).

## Context cost
394 bytes, ~98 tokens.
