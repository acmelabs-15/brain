---
package: rjm
name: _DEFAULT_RETRY_DELAY
slug: default-retry-delay
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/retry.py, sha256: 946e205f020fd5dd595bc19053d4b90dc344df5f8b1ea99571f072d5705eacf1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _DEFAULT_RETRY_DELAY

## Definition — verbatim
(used, not defined)

> "_DEFAULT_RETRY_DELAY = 30" — scripts/ai_review_common/retry.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/retry.py | 21 | defined here | Defines default initial backoff delay of 30 seconds for invoke_with_retry. |

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
A Python module constant identifier (_DEFAULT_RETRY_DELAY) configuring default initial retry backoff duration in seconds rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
