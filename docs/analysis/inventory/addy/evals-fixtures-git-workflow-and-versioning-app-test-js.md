---
package: addy
path: evals/fixtures/git-workflow-and-versioning/app.test.js
type: file
bytes: 228
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/app.test.js, sha256: 28c9dec73e578a6cf28ab39cdb31f33d0734d28413a3f419ba1b51578867f7ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/app.test.js

## Purpose — required, verbatim
> "test('totals item prices', () => {" — evals/fixtures/git-workflow-and-versioning/app.test.js:7
(no explicit purpose statement)

## Design intent — required
Provides an automated unit test for the baseline `total` function in the `git-workflow-and-versioning` fixture, asserting that passing items with prices 1 and 2 produces 3. Serves as the regression check to verify whether commits keep tests passing during incremental git workflow operations.

## Phase — required
none

## Inputs — required
Loads `evals/fixtures/git-workflow-and-versioning/app.js` via `require('./app')` (line 5).

## Outputs — required
none

## Invokes — required
- file total — evals/fixtures/git-workflow-and-versioning/app.js:3

## Invoked by — required
- config git-workflow-and-versioning — evals/cases/git-workflow-and-versioning.json:38

## Concepts named — required, verbatim
- `total` — evals/fixtures/git-workflow-and-versioning/app.test.js:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · evals/fixtures/git-workflow-and-versioning/app.test.js:3 · uses CommonJS require with node:test without a local package.json specifying CommonJS mode, which fails under ES module package environments.

## Observations
10-line test script using `node:test` and `node:assert/strict` testing `total([{ price: 1 }, { price: 2 }]) === 3`.

## Context cost
357 bytes (228 bytes test + 129 bytes app.js), ~90 tokens.
