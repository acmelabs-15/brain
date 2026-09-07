---
package: rjm
name: ERR_TOTAL_TIMEOUT
slug: err-total-timeout
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_api_adapter_constants.py, sha256: 29edd1bc99b62d752081d3ffb9b94a763e51af432e78869646c9e5831a769aa2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ERR_TOTAL_TIMEOUT

## Definition — verbatim
(used, not defined)

> "ERR_TOTAL_TIMEOUT: str = "timeout_total"" — scripts/eval/_eval_api_adapter_constants.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_api_adapter_constants.py | 16 | defined here | Constant identifier defining the error category string when cumulative request attempts exceed total timeout budget. |

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
`ERR_TOTAL_TIMEOUT` is a string constant identifier indicating that an evaluation call exceeded its overall retry deadline rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
