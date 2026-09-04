---
package: addy
path: evals/fixtures/debugging-and-error-recovery/pagination.js
type: file
bytes: 172
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.js, sha256: a60cc6ec6570f6ef27882cbc4855991d5c3f2c485722931556e549a2fba6d510}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/debugging-and-error-recovery/pagination.js

## Purpose — required, verbatim
> "'use strict';" — evals/fixtures/debugging-and-error-recovery/pagination.js:1 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Implements a minimal pagination helper function containing an intentional off-by-one indexing error (`start = page * pageSize` assuming 0-based indexing when 1-based page numbers are supplied) to serve as a bug target in the `debugging-and-error-recovery` behavioral evaluations (eval id: 1 and id: 2).

## Phase — required
`addy:VERIFY`

## Inputs — required
- Arguments to `paginate(items, page, pageSize)`:
  - `items`: array of elements
  - `page`: page number (intended 1-based)
  - `pageSize`: number of items per page

## Outputs — required
- Exported CommonJS function `paginate(items, page, pageSize)` returning a sliced array subset.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `paginate` — evals/fixtures/debugging-and-error-recovery/pagination.js:3 — defined here

## Structure
- `function paginate(items, page, pageSize)` — line 3
- `module.exports = { paginate }` — line 8

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/debugging-and-error-recovery/pagination.js`, language: JavaScript (CommonJS), lines: 9
- documented invocation: none (invoked via `require('./pagination')` in `pagination.test.js`)
- **executed:** yes
- actual command run: `bun -e "const { paginate } = require('./sources/addy/evals/fixtures/debugging-and-error-recovery/pagination.js'); const assert = require('node:assert/strict'); assert.deepEqual(paginate(['a', 'b', 'c', 'd', 'e'], 2, 2), ['c', 'd']);"`
- abridged stdout: `AssertionError: Expected values to be strictly deep-equal: actual: [ 'e' ], expected: [ 'c', 'd' ]`
- **actual exit code:** `1`
- documented exit codes vs actual: none documented; code returns a sliced sub-array.
- for validators/gates: not a validator or gate.
- does output match documentation: Yes, reliably reproduces the intentional off-by-one bug required by the eval cases.

## Defects — required
none

## Observations
The bug calculation `const start = page * pageSize` treats `page` as 0-indexed while the unit test expects 1-indexed pagination (for `page=2, pageSize=2`, `start` becomes 4 instead of 2, slicing `['e']` instead of `['c', 'd']`). This is an intentional defect fixture for evaluation.

## Context cost
172 bytes (~45 tokens) file size. Loaded as part of `evals/fixtures/debugging-and-error-recovery/` (738 bytes total, ~185 tokens).
