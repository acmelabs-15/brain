---
package: addy
path: evals/fixtures/test-driven-development/src/split.js
type: file
bytes: 181
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/test-driven-development/src/split.js, sha256: 5623b253e7904d759750cd0f6b5bef5f994e663b05b2d78ce3d1d5fce07adf41}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/src/split.js

## Purpose — required, verbatim
> "'use strict';" — evals/fixtures/test-driven-development/src/split.js:1 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Implements the initial defective implementation of `splitCents` in the `split-payment` fixture project. It computes `share = Math.floor(totalCents / n)` and creates an array filled uniformly with `share`, failing to distribute remainder cents (`totalCents % n`), providing the code target for the red-green-refactor TDD workflow during evaluations.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Arguments to `splitCents(totalCents, n)`:
  - `totalCents`: non-negative integer amount in cents
  - `n`: positive integer count of participants

## Outputs — required
- Exported CommonJS function `splitCents(totalCents, n)` returning an array of integer cent allocations.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `splitCents` — evals/fixtures/test-driven-development/src/split.js:3 — defined here

## Structure
- `function splitCents(totalCents, n)` — line 3
- `module.exports = { splitCents }` — line 8

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/src/split.js`, language: JavaScript (CommonJS), lines: 9
- documented invocation: none (imported by `test/split.test.js`)
- **executed:** yes
- actual command run: `node -e "const { splitCents } = require('./src/split'); console.log(splitCents(10000, 3));"` (in `sources/addy/evals/fixtures/test-driven-development`)
- abridged stdout: `[ 3333, 3333, 3333 ]`
- **actual exit code:** `0`
- documented exit codes vs actual: none documented; returns array of integers.
- for validators/gates: not a validator or gate.
- does output match documentation: Yes, cleanly reproduces the remainder omission described in `BUG.md`.

## Defects — required
none

## Observations
The implementation discards `totalCents % n` remainder cents completely by filling every element with `Math.floor(totalCents / n)`.

## Context cost
181 bytes (~50 tokens) file size. Loaded as part of `evals/fixtures/test-driven-development/` (1,949 bytes total, ~490 tokens).
