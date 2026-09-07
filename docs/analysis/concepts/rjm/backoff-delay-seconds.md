---
package: rjm
name: _backoff_delay_seconds
slug: backoff-delay-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _backoff_delay_seconds

## Definition — verbatim
(used, not defined)

> "def _backoff_delay_seconds(attempt: int) -> float:" — scripts/eval/_eval_api_adapter.py:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_api_adapter.py | 138 | defined here | Internal calculation function identifier computing exponential backoff delay with full jitter for attempt count. |

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
`_backoff_delay_seconds` is an internal calculation function identifier computing exponential backoff with full jitter for API retries rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
