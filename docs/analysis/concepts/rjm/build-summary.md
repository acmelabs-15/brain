---
package: rjm
name: build_summary
slug: build-summary
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
  - {path: scripts/ci/drift_write_summary.py, sha256: 2f1c81b0c3802b7e47ef4e4aa76a1664ec5d97998c4382e31001515c9703317c}
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_summary

## Definition — verbatim
(used, not defined)

> "def build_summary(drift_detected: str) -> str:" — scripts/ci/drift_write_summary.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_write_summary.py | 24 | defined here | Function generating markdown summary for artifact scanner findings. |
| scripts/ci/codeql_integration_summary.py | 52 | defined here | Function generating markdown summary for CodeQL integration status. |
| scripts/ci/drift_write_summary.py | 24 | defined here | Function generating markdown summary for drift detection status. |
| scripts/validate_session_json.py | 1591 | defined here | Function compiling session validation results into a summary dictionary. |

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
`build_summary` is a Python function identifier implemented across multiple CI and validation scripts to format execution summaries rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
