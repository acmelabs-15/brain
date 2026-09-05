---
package: addy
path: evals/fixtures/incremental-implementation/reports.test.js
type: file
bytes: 325
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation/reports.test.js, sha256: eedc6d2594d9a5d82b2bccd412dc3ba629c535c9510c162cdeabe3454c632aa8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation/reports.test.js

## Purpose — required, verbatim
> "test('hides archived reports', () => {" — evals/fixtures/incremental-implementation/reports.test.js:7
(no explicit purpose statement)

## Design intent — required
Verifies that `visibleReports` properly filters out archived reports. Serves as regression test coverage in the `incremental-implementation` fixture, ensuring that incremental extensions to reports do not break existing behavior.

## Phase — required
none

## Inputs — required
Imports `visibleReports` from `./reports` (line 5).

## Outputs — required
none

## Invokes — required
- file visibleReports — evals/fixtures/incremental-implementation/reports.js:3

## Invoked by — required
- config incremental-implementation — evals/cases/incremental-implementation.json:35

## Concepts named — required, verbatim
- `visibleReports` — evals/fixtures/incremental-implementation/reports.test.js:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · evals/fixtures/incremental-implementation/reports.test.js:3 · CommonJS require syntax for node:test fails execution in Node when parent directory lacks a commonjs package.json.

## Observations
Provides an automated baseline regression test for report filtering.

## Context cost
470 bytes (325 bytes test + 145 bytes reports.js), ~118 tokens.
