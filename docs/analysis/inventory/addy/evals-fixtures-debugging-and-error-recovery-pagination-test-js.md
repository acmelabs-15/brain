---
package: addy
path: evals/fixtures/debugging-and-error-recovery/pagination.test.js
type: file
bytes: 290
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.test.js, sha256: d6a38c2c616961536b53fbebc3c7d9d46ad4311d382b3123a2700277f9bbc1ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/debugging-and-error-recovery/pagination.test.js

## Purpose — required, verbatim
> "test('returns the second page for a one-based page number', () => {" — evals/fixtures/debugging-and-error-recovery/pagination.test.js:7
(no explicit purpose statement)

## Design intent — required
Provides an automated test case using `node:test` and `node:assert/strict` that fails against `pagination.js`. It asserts that `paginate(['a', 'b', 'c', 'd', 'e'], 2, 2)` should return `['c', 'd']`. Because `pagination.js` calculates `2 * 2 = 4`, it returns `['e']`, producing an assertion failure. This fixture verifies whether an agent reproduces the bug before attempting fixes.

## Phase — required
none

## Inputs — required
Imports `paginate` from `./pagination` (evals/fixtures/debugging-and-error-recovery/pagination.test.js:5).

## Outputs — required
none

## Invokes — required
- file paginate — evals/fixtures/debugging-and-error-recovery/pagination.js:3

## Invoked by — required
- config debugging-and-error-recovery — evals/cases/debugging-and-error-recovery.json:35

## Concepts named — required, verbatim
- `test` — evals/fixtures/debugging-and-error-recovery/pagination.test.js:4 — used here
- `paginate` — evals/fixtures/debugging-and-error-recovery/pagination.test.js:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Failing unit test designed to test agent discipline in reproducing bugs before modifying implementation code.

## Context cost
290 bytes, plus `pagination.js` (172 bytes), total 462 bytes, ~116 tokens.
