---
package: addy
path: evals/fixtures/debugging-and-error-recovery/pagination.test.js
type: file
bytes: 290
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.test.js, sha256: d6a38c2c616961536b53fbebc3c7d9d46ad4311d382b3123a2700277f9bbc1ca}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/debugging-and-error-recovery/pagination.test.js

## Purpose — required, verbatim
> "test('returns the second page for a one-based page number', () => {" — evals/fixtures/debugging-and-error-recovery/pagination.test.js:7 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides a failing automated test case using Node's built-in `node:test` runner to reproduce the off-by-one bug in `pagination.js`. It serves as the baseline reproduction test for the `debugging-and-error-recovery` eval suite, ensuring the evaluated model runs tests to confirm failure before attempting fixes.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Imports `paginate` from `./pagination` (`evals/fixtures/debugging-and-error-recovery/pagination.js:5`).

## Outputs — required
- Test execution results via `node:test` reporting assertion status and failure stack trace.

## Invokes — required
- file ./pagination — evals/fixtures/debugging-and-error-recovery/pagination.test.js:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `one-based page number` — evals/fixtures/debugging-and-error-recovery/pagination.test.js:7 — used here

## Structure
- `require('node:assert/strict')` — line 3
- `require('node:test')` — line 4
- `require('./pagination')` — line 5
- `test('returns the second page for a one-based page number', ...)` — line 7

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/debugging-and-error-recovery/pagination.test.js`, language: JavaScript (Node.js test runner), lines: 10
- documented invocation: `node --test` (standard `node:test` invocation)
- **executed:** yes
- actual command run: `bun -e "const { paginate } = require('./sources/addy/evals/fixtures/debugging-and-error-recovery/pagination.js'); const assert = require('node:assert/strict'); assert.deepEqual(paginate(['a', 'b', 'c', 'd', 'e'], 2, 2), ['c', 'd']);"`
- abridged stdout: `AssertionError: Expected values to be strictly deep-equal: actual: [ 'e' ], expected: [ 'c', 'd' ]`
- **actual exit code:** `1`
- documented exit codes vs actual: test execution throws unhandled AssertionError, terminating process with exit code 1.
- for validators/gates: fails against the initial fixture state as intended.
- does output match documentation: Yes, reproduces the test failure verifying 1-based page indexing expectations.

## Defects — required
none

## Observations
The test specifies that for `items = ['a', 'b', 'c', 'd', 'e']`, page 2 with page size 2 should return `['c', 'd']`, establishing the contract that `page` is 1-indexed.

## Context cost
290 bytes (~75 tokens) file size. Total fixture context with `pagination.js` (172 bytes) and `time-pressure.md` (276 bytes) is 738 bytes (~185 tokens).
