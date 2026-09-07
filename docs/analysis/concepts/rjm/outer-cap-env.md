---
package: rjm
name: _OUTER_CAP_ENV
slug: outer-cap-env
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _OUTER_CAP_ENV

## Definition — verbatim
(used, not defined)

> "_OUTER_CAP_ENV = \"PRE_PR_OUTER_CAP_SECONDS\"" — scripts/validation/check_generated_staleness.py:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 180 | defined here | Constant specifying the environment variable name carrying the outer runner timeout cap. |

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
_OUTER_CAP_ENV is a Python constant identifier for an environment variable name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
