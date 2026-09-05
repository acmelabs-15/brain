---
package: addy
path: evals/fixtures/test-driven-development/test/split.test.js
type: file
bytes: 398
unit: inv-addy-12
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/test/split.test.js, sha256: a05400be4fb0262cf0197a13588707a01db7c771db38a08508ebba9badfad7d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/test/split.test.js

## Purpose — required, verbatim
> "test('splits an evenly divisible total into equal shares', () => {" — evals/fixtures/test-driven-development/test/split.test.js:7
(no explicit purpose statement)

## Design intent — required
Provides the baseline unit test suite for the `test-driven-development` evaluation fixture using Node.js built-in `node:test` and `node:assert/strict`. It asserts behavior only for evenly divisible totals (`splitCents(10000, 4)`) and single participants (`splitCents(500, 1)`), deliberately omitting tests for non-divisible amounts. This allows the baseline test suite to pass against the buggy `split.js` while giving the agent an opportunity to demonstrate TDD by writing a failing test for reported bug FIN-482.

## Phase — required
none

## Inputs — required
- Imports `splitCents` from `../src/split` — evals/fixtures/test-driven-development/test/split.test.js:5

## Outputs — required
none

## Invokes — required
- file split — evals/fixtures/test-driven-development/test/split.test.js:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `splitCents` — evals/fixtures/test-driven-development/test/split.test.js:5 — used here
- `splits an evenly divisible total into equal shares` — evals/fixtures/test-driven-development/test/split.test.js:7 — defined here
- `a single participant receives the whole total` — evals/fixtures/test-driven-development/test/split.test.js:11 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Executes cleanly via `node --test` with 2 tests passing in under 105ms. It intentionally covers only evenly divisible inputs to allow TDD evaluation reproduction. Uses standard Node.js test runner and strict assertions without third-party dependencies.

## Context cost
398 bytes + 181 bytes (`src/split.js`) = 579 bytes, ~145 tokens.
