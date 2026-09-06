---
package: addy
path: evals/fixtures/ci-cd-and-automation/test/slug.test.js
type: file
bytes: 234
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/test/slug.test.js, sha256: 37a5f448038860ec9e0a5028e664588873954489a4665802c2d894a1c9bbc118}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/test/slug.test.js

## Purpose — required, verbatim
> "test('slugifies a title', () => {" — evals/fixtures/ci-cd-and-automation/test/slug.test.js:7

(no explicit purpose statement)

## Design intent — required
Unit test module verifying that `slugify('Hello World')` returns `'hello-world'`. Serves as the automated test verification target (`node --test`) for the `ci-cd-and-automation` eval fixture project, providing a passing test case that a synthesized CI pipeline must execute and validate.

## Phase — required
none

## Inputs — required
Imports `assert` from `node:assert/strict`, `test` from `node:test`, and `slugify` from `../src/slug` at evals/fixtures/ci-cd-and-automation/test/slug.test.js:3-5.

## Outputs — required
Reports test results to standard Node test runner reporter at evals/fixtures/ci-cd-and-automation/test/slug.test.js:8.

## Invokes — required
- file ../src/slug — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5

## Invoked by — required
- "node --test" — evals/fixtures/ci-cd-and-automation/package.json:6
- "ci-cd-and-automation" — evals/cases/ci-cd-and-automation.json:35

## Concepts named — required, verbatim
- `slugifies a title` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:7 — defined here

## Structure
- Module imports (`node:assert/strict`, `node:test`, `../src/slug`) — evals/fixtures/ci-cd-and-automation/test/slug.test.js:3-5
- Test definition: `slugifies a title` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:7-9

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/ci-cd-and-automation/test/slug.test.js, language: JavaScript (Node.js test runner), lines: 10
- documented invocation: `node --test` (evals/fixtures/ci-cd-and-automation/package.json:6)
- **executed:** yes
- actual command run: `node --test test/slug.test.js` (cwd: `sources/addy/evals/fixtures/ci-cd-and-automation`)
- actual stdout: `✔ slugifies a title (0.492ms)\nℹ tests 1\nℹ suites 0\nℹ pass 1\nℹ fail 0`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: exits 0 on passing assertion, 1 on assertion error
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, executes assertion and exits 0

## Defects — required
none

## Observations
Uses Node 18+ built-in test runner (`node:test`) and strict assert (`node:assert/strict`), avoiding any third-party testing dependencies like Jest or Mocha.

## Context cost
234 bytes, ~60 tokens. Imports `src/slug.js` (93 bytes).
