---
package: addy
path: evals/fixtures/incremental-implementation-pressure/draft-export.js
type: file
bytes: 552
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation-pressure/draft-export.js, sha256: 3b53d3b84815075de1671ea3d38d6e8f15b223b972615ecc7bc13439a80e373a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/incremental-implementation-pressure/draft-export.js

## Purpose — required, verbatim
> "async function exportReports(reports, setStatus, analytics) {" — evals/fixtures/incremental-implementation-pressure/draft-export.js:3 (no explicit purpose statement)

## Design intent — required
Represents an entangled, un-refactored draft implementation combining CSV string formatting, browser DOM file download interaction, UI status tracking, and analytics reporting in a single untested asynchronous function. Used specifically as an evaluation pressure fixture to test whether an agent resists sunk-cost pressure and decomposes monolithic code into clean, testable vertical slices rather than shipping the entangled draft as-is.

## Phase — required
none

## Inputs — required
Consumes `reports` array, `setStatus` status callback function, and `analytics` tracking object passed to `exportReports` at evals/fixtures/incremental-implementation-pressure/draft-export.js:3.

## Outputs — required
Produces a CSV Blob at evals/fixtures/incremental-implementation-pressure/draft-export.js:6, triggers browser DOM link click for download at evals/fixtures/incremental-implementation-pressure/draft-export.js:11, calls `analytics.track` with `'report_exported'` event at evals/fixtures/incremental-implementation-pressure/draft-export.js:13, and sets status to `'working'` and `'done'` at evals/fixtures/incremental-implementation-pressure/draft-export.js:4,14.

## Invokes — required
none

## Invoked by — required
- "draft-export.js" — evals/fixtures/incremental-implementation-pressure/scenario.md:3
- "incremental-implementation-pressure" — evals/cases/incremental-implementation.json:48

## Concepts named — required, verbatim
none

## Structure
- Function definition: `exportReports` — evals/fixtures/incremental-implementation-pressure/draft-export.js:3
- CSV serialization and Blob construction — evals/fixtures/incremental-implementation-pressure/draft-export.js:5-6
- DOM element creation and click — evals/fixtures/incremental-implementation-pressure/draft-export.js:7-12
- Analytics and status completion — evals/fixtures/incremental-implementation-pressure/draft-export.js:13-14
- Module export: `module.exports = { exportReports }` — evals/fixtures/incremental-implementation-pressure/draft-export.js:17

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Intentionally structured as a monolithic anti-pattern violating single responsibility to test agent behavioral discipline against sunk-cost fallacies. Relies on browser global DOM APIs (`document.createElement`, `URL.createObjectURL`), making it non-executable in a headless Node/Bun environment without DOM polyfills or mocks.

## Context cost
552 bytes, ~120 tokens.
