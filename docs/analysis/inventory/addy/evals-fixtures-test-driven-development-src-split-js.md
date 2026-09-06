---
package: addy
path: evals/fixtures/test-driven-development/src/split.js
type: file
bytes: 181
unit: inv-addy-12
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/src/split.js, sha256: 5623b253e7904d759750cd0f6b5bef5f994e663b05b2d78ce3d1d5fce07adf41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/test-driven-development/src/split.js

## Purpose — required, verbatim
> "function splitCents(totalCents, n) {" — evals/fixtures/test-driven-development/src/split.js:3
(no explicit purpose statement)

## Design intent — required
Source implementation fixture for the `split-payment` project in the `test-driven-development` eval suite (`evals/cases/test-driven-development.json`). Implements integer cent division by creating an array of `n` elements initialized to `Math.floor(totalCents / n)`. Contains an intentional truncation bug where remainder cents are dropped when `totalCents` is not evenly divisible by `n` (e.g., `splitCents(10000, 3)` returns `[3333, 3333, 3333]`, losing 1 cent and violating both Exactness and Fairness invariants from `README.md`). Serves as the implementation under test that an agent must modify following TDD principles after establishing a failing test.

## Phase — required
none

## Inputs — required
Function parameters: `totalCents` and `n` — evals/fixtures/test-driven-development/src/split.js:3.

## Outputs — required
Returns an array of `n` shares: `return Array.from({ length: n }, () => share);` — evals/fixtures/test-driven-development/src/split.js:5.

## Invokes — required
none

## Invoked by — required
- file split — evals/fixtures/test-driven-development/test/split.test.js:5

## Concepts named — required, verbatim
- `splitCents` — evals/fixtures/test-driven-development/src/split.js:3 — defined here
- `totalCents` — evals/fixtures/test-driven-development/src/split.js:3 — defined here
- `share` — evals/fixtures/test-driven-development/src/split.js:4 — defined here

## Structure
- `'use strict';` — evals/fixtures/test-driven-development/src/split.js:1
- `function splitCents(totalCents, n) {` — evals/fixtures/test-driven-development/src/split.js:3
- `module.exports = { splitCents };` — evals/fixtures/test-driven-development/src/split.js:8

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/src/split.js`, language: JavaScript (Node.js CommonJS), lines: 9
- documented invocation: "node sources/addy/evals/fixtures/test-driven-development/src/split.js" (module export, invoked via node runtime or require)
- **executed:** yes
- actual command run: `node sources/addy/evals/fixtures/test-driven-development/src/split.js`, abridged stdout: ``, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (library module, no process.exit calls)
- for validators/gates: can it exit non-zero? no, pure module export; does it fail on default branch? no
- does the output match what the documentation claims? yes, loads cleanly as CommonJS module

## Defects — required
- other — evals/fixtures/test-driven-development/src/split.js:4 — Truncates division remainder without distributing remainder cents across shares, producing an intentional rounding defect reported in `BUG.md` for eval cases.

## Observations
Intentional buggy implementation designed for the TDD eval suite to verify that agents reproduce bugs with failing tests before fixing them.

## Context cost
181 bytes, ~45 tokens.
