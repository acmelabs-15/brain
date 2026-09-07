---
package: rjm
name: MAX_RETRIES
slug: max-retries
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

# MAX_RETRIES

## Definition — verbatim
(used, not defined)

> "max_retries = _get_config_int(\"MAX_RETRIES\", _DEFAULT_MAX_RETRIES)" — scripts/ai_review_common/retry.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/retry.py | 48 | used here | Read as environment variable name to configure retry attempts for invoke_with_retry. |

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
An environment variable name identifier (MAX_RETRIES) specifying the maximum number of retry attempts for resilient execution rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
