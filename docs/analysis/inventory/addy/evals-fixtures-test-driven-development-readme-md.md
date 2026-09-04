---
package: addy
path: evals/fixtures/test-driven-development/README.md
type: doc
bytes: 787
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/test-driven-development/README.md, sha256: f7ce058b1d7dd375235d7e917572e72ffefb1493fd39cb3b39039cb2a29b3567}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/README.md

## Purpose — required, verbatim
> "Utility for splitting an amount of money among `n` participants without" — evals/fixtures/test-driven-development/README.md:3 (no explicit purpose statement)

## Design intent — required
Documents the domain requirements, function signatures, and invariant rules (`Exactness` and `Fairness`) for the `split-payment` fixture project. It defines the formal specification that an agent applying TDD must satisfy, specifically requiring that remainder cents are distributed one each across earliest shares (e.g. `splitCents(100, 7) = [15, 15, 14, 14, 14, 14, 14]`) rather than dumped onto a single element.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Consumed by developers/agents working on the fixture project in `test-driven-development` evals (eval id: 1 and id: 2 in `evals/cases/test-driven-development.json`).

## Outputs — required
- none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `split-payment` — evals/fixtures/test-driven-development/README.md:1 — defined here
- `integer cents` — evals/fixtures/test-driven-development/README.md:4 — used here
- `floating point` — evals/fixtures/test-driven-development/README.md:5 — used here
- `splitCents` — evals/fixtures/test-driven-development/README.md:9 — defined here
- `Invariants` — evals/fixtures/test-driven-development/README.md:12 — used here
- `Exactness` — evals/fixtures/test-driven-development/README.md:16 — defined here
- `Fairness` — evals/fixtures/test-driven-development/README.md:18 — defined here
- `npm test` — evals/fixtures/test-driven-development/README.md:27 — used here

## Structure
- `# split-payment` — line 1
- `## API` — line 7
- `## Invariants` — line 12
- `## Tests` — line 24

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The documentation provides both the test command (`npm test`) and explicit examples of the fairness invariant (`splitCents(100, 7) => [15, 15, 14, 14, 14, 14, 14]`), which the eval grader uses as a benchmark expectation to distinguish a compliant TDD fix from an unprincipled quick patch.

## Context cost
787 bytes (~200 tokens) file size. Loaded as part of `evals/fixtures/test-driven-development/` (1,949 bytes total, ~490 tokens).
