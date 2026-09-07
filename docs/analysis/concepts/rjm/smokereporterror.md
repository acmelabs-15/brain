---
package: rjm
name: SmokeReportError
slug: smokereporterror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/assert_smoke_ran.py, sha256: 55d08814bfbf5f490cd6ea9a8d5641962d449b25b6f619c700b7ff8fbac6e2af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SmokeReportError

## Definition — verbatim
(used, not defined)

> "class SmokeReportError(Exception):" — scripts/validation/assert_smoke_ran.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_smoke_ran.py | 49 | defined here | Exception class raised when a JUnit smoke report cannot be read or parsed. |

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
`SmokeReportError` is a custom Python exception class raised when a JUnit XML smoke test report cannot be found or parsed rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
