---
package: addy
path: evals/fixtures/test-driven-development/test/split.test.js
type: file
bytes: 398
unit: inv-addy-2
---

# evals/fixtures/test-driven-development/test/split.test.js

## Purpose — required, verbatim
> "test('splits an evenly divisible total into equal shares', () => {\n  assert.deepEqual(splitCents(10000, 4), [2500, 2500, 2500, 2500]);\n});\n\ntest('a single participant receives the whole total', () => {\n  assert.deepEqual(splitCents(500, 1), [500]);\n});" — evals/fixtures/test-driven-development/test/split.test.js:7-13 (no explicit purpose statement)

## Design intent — required
Provides the initial passing unit test suite for the `split-payment` fixture project in `test-driven-development` evals (eval id: 1 and id: 2). It exercises only clean, evenly divisible numbers and single-participant cases, leaving remainder distribution unexercised so that the evaluated agent must write a failing test first to capture the bug described in `BUG.md`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Imports `splitCents` from `../src/split` (`evals/fixtures/test-driven-development/src/split.js:5`).

## Outputs — required
- Test execution report via Node test runner (`node:test`).

## Invokes — required
- file `evals/fixtures/test-driven-development/src/split.js` — evals/fixtures/test-driven-development/test/split.test.js:5

## Invoked by — required
- config `evals/fixtures/test-driven-development/package.json` — evals/fixtures/test-driven-development/package.json:7
- config `evals/cases/test-driven-development.json` — evals/cases/test-driven-development.json:34-36, 48-50
- script `scripts/run-evals.js` — scripts/run-evals.js:389-398

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
