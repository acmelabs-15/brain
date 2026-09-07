---
package: rjm
name: _probe_api_serving
slug: probe-api-serving
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/rate_limit.py, sha256: 5d4b36bbf056d64c5d45e9f783b33042a8cc0d6475888bb4b9c0f8218a39ef00}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _probe_api_serving

## Definition — verbatim
(used, not defined)

> "def _probe_api_serving(probe_graphql: bool = True) -> str:" — scripts/github_core/rate_limit.py:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/rate_limit.py | 122 | defined here | Helper function returning the first observed refusal across probed REST and GraphQL transports. |

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
An internal helper function in `rate_limit.py` testing whether GitHub REST and GraphQL APIs are actively serving requests rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
