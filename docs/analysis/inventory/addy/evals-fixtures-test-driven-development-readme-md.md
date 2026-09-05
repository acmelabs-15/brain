---
package: addy
path: evals/fixtures/test-driven-development/README.md
type: doc
bytes: 787
unit: inv-addy-12
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/README.md, sha256: f7ce058b1d7dd375235d7e917572e72ffefb1493fd39cb3b39039cb2a29b3567}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development/README.md

## Purpose — required, verbatim
> "Utility for splitting an amount of money among `n` participants without losing or inventing cents." — evals/fixtures/test-driven-development/README.md:3-4

## Design intent — required
This README serves as the project specification and invariant contract for the `split-payment` fixture used in behavioral testing of the `test-driven-development` skill. It defines the formal API (`splitCents(totalCents, n)`) and core behavioral invariants ("Exactness" and "Fairness") against which bugs (e.g., lost remainder cents reported in `BUG.md`) and candidate fixes can be objectively evaluated. Without this specification fixture, the behavioral evaluation harness would lack an authoritative source of truth for expected behavior when judging whether an agent preserves required domain invariants while resolving defects.

## Phase — required
addy:Build

## Inputs — required
`totalCents` (non-negative integer) and `n` (positive integer) as documented in `splitCents(totalCents, n)`.

## Outputs — required
Array of `n` integer cent amounts satisfying Exactness (shares sum to `totalCents`) and Fairness (no two shares differ by more than one cent; remainder distributed to earliest shares).

## Invokes — required
none

## Invoked by — required
- doc test-driven-development — evals/README.md:62

## Concepts named — required, verbatim
- `split-payment` — evals/fixtures/test-driven-development/README.md:1 — defined here
- `splitCents` — evals/fixtures/test-driven-development/README.md:9 — defined here
- `Exactness` — evals/fixtures/test-driven-development/README.md:16 — defined here
- `Fairness` — evals/fixtures/test-driven-development/README.md:18 — defined here
- `npm test` — evals/fixtures/test-driven-development/README.md:27 — used here

## Structure
- `# split-payment` — evals/fixtures/test-driven-development/README.md:1
- `## API` — evals/fixtures/test-driven-development/README.md:7
- `## Invariants` — evals/fixtures/test-driven-development/README.md:12
- `## Tests` — evals/fixtures/test-driven-development/README.md:24

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The specification provides a clear mathematical definition of fair division of integer cents without floating point arithmetic, with concrete invariants: Exactness (sum matches total) and Fairness (maximum difference of 1 cent between shares, with remainder distributed to earlier shares).

## Context cost
787 bytes. Approximately 160 tokens.
