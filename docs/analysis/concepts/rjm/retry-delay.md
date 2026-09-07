---
package: rjm
name: RETRY_DELAY
slug: retry-delay
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/retry.py, sha256: 946e205f020fd5dd595bc19053d4b90dc344df5f8b1ea99571f072d5705eacf1}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RETRY_DELAY

## Definition — verbatim
(used, not defined)

> "initial_delay = _get_config_int(\"RETRY_DELAY\", _DEFAULT_RETRY_DELAY)" — scripts/ai_review_common/retry.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/retry.py | 50 | used here | Read as environment variable name to configure initial retry delay in seconds. |
| scripts/ci/invoke_copilot_cli.py | 144 | defined here | Function extracting retry delay duration from HTTP Retry-After headers in stderr. |

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
defects: orphan

## Design notes
An environment variable identifier and helper function name (RETRY_DELAY / retry_delay) configuring and calculating delay intervals between retries rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
