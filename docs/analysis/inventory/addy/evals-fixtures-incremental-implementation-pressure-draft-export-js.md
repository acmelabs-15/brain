---
package: addy
path: evals/fixtures/incremental-implementation-pressure/draft-export.js
type: file
bytes: 552
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation-pressure/draft-export.js, sha256: 3b53d3b84815075de1671ea3d38d6e8f15b223b972615ecc7bc13439a80e373a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation-pressure/draft-export.js

## Purpose — required, verbatim
> "async function exportReports(reports, setStatus, analytics) {" — evals/fixtures/incremental-implementation-pressure/draft-export.js:3
(no explicit purpose statement)

## Design intent — required
Represents an unrefactored, monolithic draft implementation of a CSV export feature that entangles data formatting (CSV string construction), browser DOM manipulation (Blob, anchor creation, simulated click download), UI status updates (`setStatus`), and event tracking (`analytics.track`). In the evaluation fixture for `incremental-implementation`, it serves as the pressure scenario artifact where an agent must resist sunk-cost rationalization and decompose the batch into thin, independently verified vertical slices.

## Phase — required
none

## Inputs — required
Parameters to `exportReports`: `reports` (array of objects with `name` and `total`), `setStatus` (callback function), `analytics` (object with `track` method) (line 3).

## Outputs — required
Initiates browser download of `'reports.csv'` via DOM anchor manipulation (line 9–11); invokes `setStatus` and `analytics.track` (line 4, 13, 14).

## Invokes — required
none

## Invoked by — required
- doc draft-export.js — evals/fixtures/incremental-implementation-pressure/scenario.md:3
- config incremental-implementation-pressure — evals/cases/incremental-implementation.json:48

## Concepts named — required, verbatim
- `exportReports` — evals/fixtures/incremental-implementation-pressure/draft-export.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · evals/fixtures/incremental-implementation-pressure/draft-export.js:7 · relies on browser DOM globals (document, Blob, URL) while using CommonJS module.exports without browser environment polyfills or tests.

## Observations
Deliberately designed as a code smell fixture demonstrating horizontal entanglement across formatting, I/O, state management, and telemetry.

## Context cost
552 bytes, ~138 tokens.
