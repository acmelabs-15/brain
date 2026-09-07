---
package: rjm
name: RUN_ID
slug: run-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RUN_ID

## Definition — verbatim
(used, not defined)

> "RUN_ID                 - Current workflow run ID" — .github/scripts/generate_spec_report.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 14 | used here | Environment variable documented in script docstring providing current workflow run ID. |

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
defects: orphan, missing-path

## Design notes
`RUN_ID` is a GitHub Actions workflow execution identifier environment variable used for telemetry and reporting links rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
