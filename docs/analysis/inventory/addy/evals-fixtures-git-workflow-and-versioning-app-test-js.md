---
package: addy
path: evals/fixtures/git-workflow-and-versioning/app.test.js
type: file
bytes: 228
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/app.test.js, sha256: 28c9dec73e578a6cf28ab39cdb31f33d0734d28413a3f419ba1b51578867f7ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/app.test.js

## Purpose — required, verbatim
> "test('totals item prices', () => {" — evals/fixtures/git-workflow-and-versioning/app.test.js:7 (no explicit purpose statement)

## Design intent — required
Provides unit test coverage for `app.js` using Node.js built-in `node:test` and `node:assert/strict`. Serves as an automated test harness within the `git-workflow-and-versioning` eval fixture to verify that modifications to the application code maintain working state and pass tests during commit restructuring. Without this test file, the eval would have no objective verification mechanism to confirm that intermediate git commits remain green.

## Phase — required
none

## Inputs — required
Requires `node:assert/strict` at evals/fixtures/git-workflow-and-versioning/app.test.js:3, `node:test` at evals/fixtures/git-workflow-and-versioning/app.test.js:4, and `./app` at evals/fixtures/git-workflow-and-versioning/app.test.js:5.

## Outputs — required
Test assertion verifying that `total([{ price: 1 }, { price: 2 }])` equals `3` at evals/fixtures/git-workflow-and-versioning/app.test.js:8.

## Invokes — required
- file ./app — evals/fixtures/git-workflow-and-versioning/app.test.js:5

## Invoked by — required
"git-workflow-and-versioning" — evals/cases/git-workflow-and-versioning.json:38

## Concepts named — required, verbatim
none

## Structure
- Test framework imports — evals/fixtures/git-workflow-and-versioning/app.test.js:3-4
- Subject under test import: "const { total } = require('./app');" — evals/fixtures/git-workflow-and-versioning/app.test.js:5
- Test case: "test('totals item prices', () => {" — evals/fixtures/git-workflow-and-versioning/app.test.js:7

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/git-workflow-and-versioning/app.test.js, language: JavaScript, lines: 10
- documented invocation: none (run via test runner)
- **executed:** yes
- actual command run: `bun test --cwd sources/addy/evals/fixtures/git-workflow-and-versioning`
- stdout: `1 pass, 0 fail`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, unit test passes cleanly

## Defects — required
none

## Observations
Uses Node.js standard built-ins (`node:assert/strict`, `node:test`) requiring no external npm dependencies. Runs cleanly under Bun's test runner.

## Context cost
228 bytes, ~50 tokens.
