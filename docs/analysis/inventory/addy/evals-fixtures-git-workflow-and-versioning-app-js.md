---
package: addy
path: evals/fixtures/git-workflow-and-versioning/app.js
type: file
bytes: 129
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/app.js, sha256: 7b3e1eaff08d25c39557d329089eb6667164853747f60acbfd8379a30803369f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/app.js

## Purpose — required, verbatim
> "function total(items) {" — evals/fixtures/git-workflow-and-versioning/app.js:3
(no explicit purpose statement)

## Design intent — required
Provides a minimal calculation function (`total`) summing item prices in an array of objects. It acts as the application baseline codebase for the `git-workflow-and-versioning` evaluation fixture, against which git workflow operations (such as separating commits for refactors, bug fixes, or feature additions) are tested.

## Phase — required
none

## Inputs — required
Array `items` passed to `total(items)` where each element is expected to have a numeric `price` property (line 3–4).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- file app — evals/fixtures/git-workflow-and-versioning/app.test.js:5
- config git-workflow-and-versioning — evals/cases/git-workflow-and-versioning.json:38

## Concepts named — required, verbatim
- `total` — evals/fixtures/git-workflow-and-versioning/app.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · evals/fixtures/git-workflow-and-versioning/app.js:7 · exports via CommonJS module.exports without an explicit package.json configuring type: commonjs, causing module resolution failure when required in an ES module package context.

## Observations
Baseline application file consisting of an 8-line JavaScript function summing object prices via `Array.prototype.reduce`.

## Context cost
129 bytes, ~32 tokens.
