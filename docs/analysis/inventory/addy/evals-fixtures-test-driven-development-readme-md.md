---
package: addy
path: evals/fixtures/test-driven-development/README.md
type: doc
bytes: 787
unit: inv-addy-12
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/README.md, sha256: f7ce058b1d7dd375235d7e917572e72ffefb1493fd39cb3b39039cb2a29b3567}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/test-driven-development/README.md

## Purpose — required, verbatim
> "Utility for splitting an amount of money among `n` participants without" — evals/fixtures/test-driven-development/README.md:3
(no explicit purpose statement)

## Design intent — required
Documentation fixture for the `split-payment` fixture project used in the `test-driven-development` evaluation suite (`evals/cases/test-driven-development.json`). Specifies the API contract (`splitCents(totalCents, n)`), the mathematical invariants (Exactness: shares sum to totalCents; Fairness: shares differ by at most one cent with remainder distributed to earliest shares), and the test execution command (`npm test`). Serves as the specification against which an agent evaluates whether `src/split.js` fulfills its contract and determines whether bug fixes satisfy both exactness and fairness invariants.

## Phase — required
none

## Inputs — required
Consumed by evaluation runners and agents executing the `test-driven-development` eval cases.

## Outputs — required
Specification of API requirements and behavior invariants for `split-payment`.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `split-payment` — evals/fixtures/test-driven-development/README.md:1 — defined here
- `splitCents` — evals/fixtures/test-driven-development/README.md:9 — defined here
- `totalCents` — evals/fixtures/test-driven-development/README.md:10 — used here
- `Exactness` — evals/fixtures/test-driven-development/README.md:16 — defined here
- `Fairness` — evals/fixtures/test-driven-development/README.md:18 — defined here
- `npm test` — evals/fixtures/test-driven-development/README.md:27 — used here

## Structure
- `# split-payment` — evals/fixtures/test-driven-development/README.md:1
- `## API` — evals/fixtures/test-driven-development/README.md:7
- `## Invariants` — evals/fixtures/test-driven-development/README.md:12
- `## Tests` — evals/fixtures/test-driven-development/README.md:24

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/package.json` (documented in README.md), language: bash / npm script, lines: 1
- documented invocation: "npm test" — evals/fixtures/test-driven-development/README.md:27
- **executed:** yes
- actual command run: `npm --prefix sources/addy/evals/fixtures/test-driven-development test`, abridged stdout: `✔ splits an evenly divisible total into equal shares (1.997542ms)\n✔ a single participant receives the whole total (0.079209ms)\nℹ tests 2\nℹ suites 0\nℹ pass 2\nℹ fail 0`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: exits 0 when tests pass, non-zero on test assertion failure
- for validators/gates: can it exit non-zero? yes, on test failure; does it fail on default branch? no, passes
- does the output match what the documentation claims? yes, runs the test suite

## Defects — required
none

## Observations
The README defines the exact requirements that `src/split.js` fails to meet for non-divisible totals: "Every result must satisfy both invariants, for every input:" — evals/fixtures/test-driven-development/README.md:14.

## Context cost
787 bytes, ~180 tokens.
