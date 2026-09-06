---
package: addy
path: evals/fixtures/test-driven-development/test/split.test.js
type: file
bytes: 398
unit: inv-addy-12
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/test/split.test.js, sha256: a05400be4fb0262cf0197a13588707a01db7c771db38a08508ebba9badfad7d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/test-driven-development/test/split.test.js

## Purpose — required, verbatim
> "test('splits an evenly divisible total into equal shares', () => {" — evals/fixtures/test-driven-development/test/split.test.js:7
(no explicit purpose statement)

## Design intent — required
Test suite fixture for `split-payment` in the `test-driven-development` evaluation suite (`evals/cases/test-driven-development.json`). Defines two baseline unit tests using Node.js's built-in test runner (`node:test`) and assertion library (`node:assert/strict`). Intentionally tests only evenly divisible splits (`10000 / 4` and `500 / 1`), allowing the buggy `src/split.js` to pass while leaving remainder distribution and fairness invariants unexercised. Designed to verify whether an AI agent practicing TDD adds a failing test for the lost-cent defect reported in `BUG.md` and covers the fairness invariant before modifying production code.

## Phase — required
none

## Inputs — required
Imports `splitCents` from `../src/split` — evals/fixtures/test-driven-development/test/split.test.js:5.

## Outputs — required
Test assertion results printed to stdout/stderr via `node:test`.

## Invokes — required
- file ../src/split — evals/fixtures/test-driven-development/test/split.test.js:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `node:assert/strict` — evals/fixtures/test-driven-development/test/split.test.js:3 — used here
- `node:test` — evals/fixtures/test-driven-development/test/split.test.js:4 — used here
- `splitCents` — evals/fixtures/test-driven-development/test/split.test.js:5 — used here

## Structure
- `'use strict';` — evals/fixtures/test-driven-development/test/split.test.js:1
- `const assert = require('node:assert/strict');` — evals/fixtures/test-driven-development/test/split.test.js:3
- `test('splits an evenly divisible total into equal shares', () => {` — evals/fixtures/test-driven-development/test/split.test.js:7
- `test('a single participant receives the whole total', () => {` — evals/fixtures/test-driven-development/test/split.test.js:11

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/test/split.test.js`, language: JavaScript (Node.js test runner), lines: 14
- documented invocation: "node --test" (invoked via `npm test` or `node --test`)
- **executed:** yes
- actual command run: `node --test sources/addy/evals/fixtures/test-driven-development/test/split.test.js`, abridged stdout: `✔ splits an evenly divisible total into equal shares (0.802958ms)\n✔ a single participant receives the whole total (0.082917ms)\nℹ tests 2\nℹ suites 0\nℹ pass 2\nℹ fail 0\nℹ cancelled 0\nℹ skipped 0\nℹ todo 0\nℹ duration_ms 78.976541`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: exits 0 when tests pass, exits 1 on test assertion failure
- for validators/gates: can it exit non-zero? yes, on assertion failure; does it fail on default branch? no, passes 2 of 2 tests
- does the output match what the documentation claims? yes, runs node native test runner

## Defects — required
none

## Observations
Under-specifies behavior by design: does not test non-evenly-divisible inputs, providing the initial baseline for TDD evaluations where the agent must demonstrate writing a failing test before fixing `split.js`.

## Context cost
398 bytes, ~95 tokens.
