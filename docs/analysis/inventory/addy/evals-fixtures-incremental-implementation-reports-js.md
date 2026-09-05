---
package: addy
path: evals/fixtures/incremental-implementation/reports.js
type: file
bytes: 145
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation/reports.js, sha256: ed12bb1a30d213047df1f353e71e679598b8dac175f713e104cf19ee36cc35ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation/reports.js

## Purpose — required, verbatim
> "function visibleReports(reports) {" — evals/fixtures/incremental-implementation/reports.js:3
(no explicit purpose statement)

## Design intent — required
Provides baseline report filtering logic (`visibleReports`) excluding archived reports. Serves as the existing production code fixture for the `incremental-implementation` evaluation, ensuring existing behavior remains unchanged while adding CSV export functionality.

## Phase — required
none

## Inputs — required
Array `reports` of report objects having an `archived` boolean property (line 3–4).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- file visibleReports — evals/fixtures/incremental-implementation/reports.test.js:5
- config incremental-implementation — evals/cases/incremental-implementation.json:35

## Concepts named — required, verbatim
- `visibleReports` — evals/fixtures/incremental-implementation/reports.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal utility function exporting `visibleReports` using CommonJS syntax.

## Context cost
145 bytes, ~36 tokens.
