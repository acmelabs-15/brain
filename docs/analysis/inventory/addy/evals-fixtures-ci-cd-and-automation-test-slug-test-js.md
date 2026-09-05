---
package: addy
path: evals/fixtures/ci-cd-and-automation/test/slug.test.js
type: file
bytes: 234
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/test/slug.test.js, sha256: 37a5f448038860ec9e0a5028e664588873954489a4665802c2d894a1c9bbc118}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/test/slug.test.js

## Purpose — required, verbatim
> "slugifies a title" — evals/fixtures/ci-cd-and-automation/test/slug.test.js:7
(no explicit purpose statement)

## Design intent — required
Provides the automated test suite for the `ci-cd-and-automation` project fixture. Written with Node's native `node:test` and `node:assert/strict` modules, it asserts that `slugify('Hello World')` produces `'hello-world'`, serving as the automated test verification gate in CI pipeline evaluation.

## Phase — required
addy:Ship

## Inputs — required
Imports and tests `slugify` from `../src/slug`.

## Outputs — required
Test results reported to console; exits 0 on success or 1 on assertion failure.

## Invokes — required
- file slugify — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `slugify` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/ci-cd-and-automation/test/slug.test.js`, language: JavaScript (Node.js test runner), lines: 10
- documented invocation: none documented; run via `node --test` or `npm test`
- **executed:** yes
- actual command run: `node --test`, abridged stdout: `✔ slugifies a title\nℹ pass 1`, **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths: exits 0 when tests pass, exits 1 on assertion failure
- for validators/gates: serves as the test quality gate in the evaluation CI pipeline
- does the output match what the documentation claims? Yes, asserts string transformation behavior.

## Defects — required
none

## Observations
Employs standard built-in `node:test` framework avoiding external npm test dependencies.

## Context cost
234 bytes (~59 tokens). Loads `../src/slug` (93 bytes), totaling 327 bytes (~82 tokens).
