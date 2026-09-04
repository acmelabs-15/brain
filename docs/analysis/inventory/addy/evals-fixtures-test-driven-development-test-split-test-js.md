---
package: addy
path: evals/fixtures/test-driven-development/test/split.test.js
type: file
bytes: 398
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/test-driven-development/test/split.test.js, sha256: a05400be4fb0262cf0197a13588707a01db7c771db38a08508ebba9badfad7d2}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/test/split.test.js

## Purpose — required, verbatim
> "test('splits an evenly divisible total into equal shares', () => {" — evals/fixtures/test-driven-development/test/split.test.js:7 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides the initial passing unit test suite for the `split-payment` fixture project in `test-driven-development` evals (eval id: 1 and id: 2). It exercises only clean, evenly divisible numbers and single-participant cases, leaving remainder distribution unexercised so that the evaluated agent must write a failing test first to capture the bug described in `BUG.md`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Imports `splitCents` from `../src/split` (`evals/fixtures/test-driven-development/src/split.js:5`).

## Outputs — required
- Test execution report via Node test runner (`node:test`).

## Invokes — required
- file ../src/split — evals/fixtures/test-driven-development/test/split.test.js:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `splitCents` — evals/fixtures/test-driven-development/test/split.test.js:5 — used here

## Structure
- `require statements` — lines 3-5
- `test('splits an evenly divisible total into equal shares', ...)` — line 7
- `test('a single participant receives the whole total', ...)` — line 11

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/test/split.test.js`, language: JavaScript (Node.js test runner), lines: 14
- documented invocation: `npm test` (via `package.json:7`)
- **executed:** yes
- actual command run: `npm test` (in `sources/addy/evals/fixtures/test-driven-development`)
- abridged stdout: `✔ splits an evenly divisible total into equal shares (1.759916ms)\n✔ a single participant receives the whole total (0.076458ms)\nℹ tests 2\nℹ suites 0\nℹ pass 2\nℹ fail 0`
- **actual exit code:** `0`
- documented exit codes vs actual: `npm test` runs `node --test` and exits 0 on success.
- for validators/gates: passes on initial fixture state because only evenly divisible cases are tested.
- does output match documentation: Yes, runs 2 tests with zero failures.

## Defects — required
none

## Observations
The existing tests provide the green baseline for the initial project state. The TDD eval tests whether the agent writes a failing test case for remainder handling before modifying `src/split.js`.

## Context cost
398 bytes (~100 tokens) file size. Total fixture context for `evals/fixtures/test-driven-development/` is 1,949 bytes (~490 tokens).
