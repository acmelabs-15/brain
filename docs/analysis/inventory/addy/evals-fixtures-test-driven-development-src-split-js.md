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
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development/src/split.js

## Purpose — required, verbatim
> "function splitCents(totalCents, n) {" — evals/fixtures/test-driven-development/src/split.js:3
(no explicit purpose statement)

## Design intent — required
Implementation of the `splitCents` function for the `test-driven-development` eval fixture. It represents the buggy baseline implementation before a developer or agent applies TDD to fix a reconciliation issue. Specifically, it computes `share = Math.floor(totalCents / n)` and creates `n` identical shares, failing to distribute the remainder cents when `totalCents % n !== 0` and violating both the Exactness and Fairness invariants specified in the fixture's README.md. Without this file, the fixture would lack the defective source code needed to test an agent's ability to reproduce a bug with a failing test and implement a correct fix.

## Phase — required
addy:Build

## Inputs — required
`totalCents` (integer total amount in cents) and `n` (positive integer number of shares/participants).

## Outputs — required
Returns an array of `n` integer cent amounts (`Array.from({ length: n }, () => share)`), exported as `{ splitCents }`.

## Invokes — required
none

## Invoked by — required
- file ../src/split — evals/fixtures/test-driven-development/test/split.test.js:5

## Concepts named — required, verbatim
- `splitCents` — evals/fixtures/test-driven-development/src/split.js:3 — defined here
- `share` — evals/fixtures/test-driven-development/src/split.js:4 — defined here
- `Math.floor` — evals/fixtures/test-driven-development/src/split.js:4 — used here
- `Array.from` — evals/fixtures/test-driven-development/src/split.js:5 — used here

## Structure
none (code file; no section headings)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/src/split.js`, language: JavaScript (Node.js CommonJS), lines: 9
- documented invocation: none (library module exported via module.exports; invoked by test suite or require)
- **executed:** yes
- actual command run: `node -e 'const { splitCents } = require("./sources/addy/evals/fixtures/test-driven-development/src/split.js"); console.log(JSON.stringify(splitCents(100, 7)));'`, stdout: `[14,14,14,14,14,14,14]`, **actual exit code**: 0
- documented exit codes: none (module exports a function; no process.exit calls)
- for validators/gates: none (utility module; not a validator or gate)
- does the output match what the documentation claims: no (fails README.md fairness invariant splitCents(100, 7) === [15, 15, 14, 14, 14, 14, 14] by losing 2 remainder cents, producing [14, 14, 14, 14, 14, 14, 14])

## Defects — required
- script-bug · evals/fixtures/test-driven-development/src/split.js:4 — `Math.floor(totalCents / n)` truncates remainder cents when `totalCents` is not evenly divisible by `n`, losing cents and violating invariants from README.md.

## Observations
This file is intentionally defective as part of the `test-driven-development` eval fixture: it passes existing basic tests in `test/split.test.js` (which only check evenly divisible totals or `n=1`), but fails on any remainder case, setting up the red-green-refactor exercise described in `evals/README.md:59-69` and `BUG.md`.

## Context cost
181 bytes. Approximately 40 tokens.
