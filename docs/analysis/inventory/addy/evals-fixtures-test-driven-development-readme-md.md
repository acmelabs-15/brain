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
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/README.md

## Purpose — required, verbatim
> "Utility for splitting an amount of money among `n` participants without losing or inventing cents. Amounts are integer cents throughout; the library never touches floating point." — evals/fixtures/test-driven-development/README.md:3-5

## Design intent — required
Provides the specification and invariant contract for the `split-payment` fixture used in behavioral evaluation of the `test-driven-development` skill. It defines the required API (`splitCents(totalCents, n)`) and establishes two invariants: Exactness (conservation of money, sum of shares equals `totalCents`) and Fairness (shares differ by at most one cent, with remainder distributed one cent each to earliest shares). This specification serves as the baseline requirement against which an agent must write failing reproduction tests and implement a correct fix during evals.

## Phase — required
none

## Inputs — required
- `totalCents` (non-negative integer) and `n` (positive integer) — evals/fixtures/test-driven-development/README.md:10

## Outputs — required
- Array of `n` integer cent amounts returned by `splitCents(totalCents, n)` — evals/fixtures/test-driven-development/README.md:9

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `split-payment` — evals/fixtures/test-driven-development/README.md:1 — defined here
- `splitCents` — evals/fixtures/test-driven-development/README.md:9 — defined here
- `totalCents` — evals/fixtures/test-driven-development/README.md:10 — defined here
- `Exactness` — evals/fixtures/test-driven-development/README.md:16 — defined here
- `Fairness` — evals/fixtures/test-driven-development/README.md:18 — defined here

## Structure
- # split-payment — evals/fixtures/test-driven-development/README.md:1
- ## API — evals/fixtures/test-driven-development/README.md:7
- ## Invariants — evals/fixtures/test-driven-development/README.md:12
- ## Tests — evals/fixtures/test-driven-development/README.md:24

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines two explicit mathematical invariants for integer monetary partitioning: Exactness (conservation of money where shares sum to `totalCents`) and Fairness (maximum 1 cent difference across shares with remainder cents distributed one cent each to earliest shares). Serves as the ground-truth specification against which `src/split.js` is deliberately flawed and `test/split.test.js` is under-tested.

## Context cost
787 bytes, ~197 tokens.
