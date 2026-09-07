---
package: rjm
name: bounded retry
slug: bounded-retry
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/assign_bot_reviewer.py, sha256: 16383cb10afb0de419d0af21fc4c6eae32b02146e40224606224d23cabe6f1fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# bounded retry

## Definition — verbatim
> "Request a PR review from the bot over REST, with bounded retry." — .github/scripts/assign_bot_reviewer.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/assign_bot_reviewer.py | 2 | defined here | Documented as the retry strategy for requesting bot reviews over REST to mitigate API rate limits. |

## Consumes
API requests susceptible to transient rate limiting or network refusals.

## Produces
Bounded retry attempts with backoff intervals preventing indefinite execution.

## When applied
Applied during automated CI API interactions subject to external service quotas or rate limiting.

## Sub-concepts
refusal-backoff-seconds

## Part of
none

## Implementation status
clean

## Design notes
Bounded retry is a resilience pattern in rjm CI scripts that caps retry attempts and backoff delays against external API rate limits to avoid indefinite execution hangs.
