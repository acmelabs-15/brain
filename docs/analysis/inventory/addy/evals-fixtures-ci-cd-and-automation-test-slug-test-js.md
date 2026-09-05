---
package: addy
path: evals/fixtures/ci-cd-and-automation/test/slug.test.js
type: file
bytes: 234
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/test/slug.test.js, sha256: 37a5f448038860ec9e0a5028e664588873954489a4665802c2d894a1c9bbc118}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/test/slug.test.js

## Purpose — required, verbatim
> "test('slugifies a title', () => {" — evals/fixtures/ci-cd-and-automation/test/slug.test.js:7
(no explicit purpose statement)

## Design intent — required
Provides a unit test suite for the `ci-cd-and-automation` test fixture using Node.js built-in `node:test` and `node:assert/strict`. It validates that `slugify('Hello World')` returns `'hello-world'`, establishing an executable verification suite that CI workflows can run to prove test runner functionality.

## Phase — required
none

## Inputs — required
Imports `slugify` from `../src/slug` (line 5).

## Outputs — required
none

## Invokes — required
- file slug — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5

## Invoked by — required
orphan (discovered and executed dynamically by `node --test` declared in `evals/fixtures/ci-cd-and-automation/package.json:6`)

## Concepts named — required, verbatim
- `slugify` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5 — used here
- `slugifies a title` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:7 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Executes cleanly via `node --test` with 1 test suite passing in under 1ms, requiring no external assertion libraries.

## Context cost
234 bytes + 93 bytes (`src/slug.js`) = 327 bytes, ~82 tokens.
