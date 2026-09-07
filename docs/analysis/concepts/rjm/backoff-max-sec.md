---
package: rjm
name: BACKOFF_MAX_SEC
slug: backoff-max-sec
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

# BACKOFF_MAX_SEC

## Definition — verbatim
(used, not defined)

> "BACKOFF_MAX_SEC: float = 30.0" — scripts/eval/_eval_api_adapter_constants.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_api_adapter_constants.py | 20 | defined here | Constant identifier specifying the maximum delay cap in seconds for retry backoff sleep intervals. |

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
`BACKOFF_MAX_SEC` is a configuration constant identifier setting the upper bound on retry backoff sleep durations in evaluation API adapters rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
