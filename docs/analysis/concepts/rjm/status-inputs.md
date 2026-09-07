---
package: rjm
name: _status_inputs
slug: status-inputs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _status_inputs

## Definition — verbatim
(used, not defined)

> "def _status_inputs() -> dict[str, str]:" — scripts/ci/build_pr_validation_report.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 27 | defined here | Internal helper function parsing PR validation status environment variables into a structured dictionary. |

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
`_status_inputs` is a private Python helper function extracting environment variables in `build_pr_validation_report.py` rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
