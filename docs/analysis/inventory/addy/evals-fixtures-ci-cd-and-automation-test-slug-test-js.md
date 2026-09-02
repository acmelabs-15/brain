---
package: addy
path: evals/fixtures/ci-cd-and-automation/test/slug.test.js
type: file
bytes: 234
unit: inv-addy-2
---

# evals/fixtures/ci-cd-and-automation/test/slug.test.js

## Purpose — required, verbatim
> "test('slugifies a title', () => {" — evals/fixtures/ci-cd-and-automation/test/slug.test.js:7 (no explicit purpose statement)

## Design intent — required
Provides a minimal automated unit test using Node's built-in test runner (`node:test`, `node:assert/strict`) for the `slugify` utility function. Used in the CI/CD evaluation fixture repository to test that an agent configures a CI workflow that runs and verifies automated tests.

## Phase — required
none

## Inputs — required
- Imports `slugify` from `../src/slug` — `evals/fixtures/ci-cd-and-automation/test/slug.test.js:5`

## Outputs — required
- Test results reported via `node:test` runner — `evals/fixtures/ci-cd-and-automation/test/slug.test.js:7-9`

## Invokes — required
- file `evals/fixtures/ci-cd-and-automation/src/slug.js` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5

## Invoked by — required
- config `evals/fixtures/ci-cd-and-automation/package.json` — evals/fixtures/ci-cd-and-automation/package.json:6
- config `evals/cases/ci-cd-and-automation.json` — evals/cases/ci-cd-and-automation.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:394

## Concepts named — required, verbatim
- `node:assert/strict` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:3 — used here
- `node:test` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:4 — used here
- `slugify` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5 — used here

## Structure
- Strict mode and imports (lines 1-5)
- Unit test case `slugifies a title` (lines 7-9)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/ci-cd-and-automation/test/slug.test.js`, language: JavaScript (Node/Bun test), lines: 10
- documented invocation: `node --test` / `npm test` (`evals/fixtures/ci-cd-and-automation/package.json:6`)
- **executed:** yes
- actual command run: `node test/slug.test.js` (in `sources/addy/evals/fixtures/ci-cd-and-automation`)
- actual exit code: `0`, stdout: `✔ slugifies a title (0.48225ms)`
- documented exit codes: none vs actual exit paths: code 0 on test pass
- does the output match what the documentation claims?: yes, passes assertion `slugify('Hello World') === 'hello-world'`

## Defects — required
none

## Observations
Uses standard Node.js built-in `node:test` and `node:assert/strict`, requiring no external npm dependencies.

## Context cost
234 bytes (approx. 59 tokens). Plus imported `slug.js` (93 bytes) = 327 bytes (~82 tokens).
