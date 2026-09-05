---
package: addy
path: evals/fixtures/test-driven-development/src/split.js
type: file
bytes: 181
unit: inv-addy-12
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/src/split.js, sha256: 5623b253e7904d759750cd0f6b5bef5f994e663b05b2d78ce3d1d5fce07adf41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/src/split.js

## Purpose — required, verbatim
> "function splitCents(totalCents, n) {" — evals/fixtures/test-driven-development/src/split.js:3
(no explicit purpose statement)

## Design intent — required
Provides the baseline implementation module for the `test-driven-development` evaluation fixture. It implements integer division via `Math.floor(totalCents / n)` but fails to distribute remainder cents, violating the Exactness and Fairness invariants documented in `evals/fixtures/test-driven-development/README.md`. This intentional flaw serves as the bug reproduction target that an AI agent undergoing behavioral evaluation must reproduce with a failing test before fixing.

## Phase — required
none

## Inputs — required
- Arguments `totalCents` and `n` passed to `splitCents(totalCents, n)` — evals/fixtures/test-driven-development/src/split.js:3

## Outputs — required
- Array of length `n` with integer shares — evals/fixtures/test-driven-development/src/split.js:5

## Invokes — required
none

## Invoked by — required
- file split — evals/fixtures/test-driven-development/test/split.test.js:5

## Concepts named — required, verbatim
- `splitCents` — evals/fixtures/test-driven-development/src/split.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- script-bug · evals/fixtures/test-driven-development/src/split.js:4-5: Incomplete implementation drops remainder cents `totalCents % n`, violating Exactness and Fairness invariants from README.md (deliberate bug for TDD eval fixture).

## Observations
Nine-line CommonJS module exporting `{ splitCents }`. Deliberately omits remainder distribution logic so that `splitCents(10000, 3)` returns `[3333, 3333, 3333]` instead of `[3334, 3333, 3333]`.

## Context cost
181 bytes, ~45 tokens.
