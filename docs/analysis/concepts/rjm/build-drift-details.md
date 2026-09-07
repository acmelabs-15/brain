---
package: rjm
name: build_drift_details
slug: build-drift-details
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_drift_results.py, sha256: 7e775d8af6a72e3232c10ec44be4478940d8c85900fe7a39472b1b9c80ef228a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_drift_details

## Definition — verbatim
(used, not defined)

> "def build_drift_details(results: object) -> tuple[str, int]:" — scripts/ci/parse_drift_results.py:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_drift_results.py | 140 | defined here | Function building a markdown summary and counting agents with drift from drift report data. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`build_drift_details` is a Python utility function in `parse_drift_results.py` formatting drift reporting JSON into markdown rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
