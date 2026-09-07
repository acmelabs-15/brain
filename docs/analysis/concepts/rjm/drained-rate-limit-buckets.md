---
package: rjm
name: drained_rate_limit_buckets
slug: drained-rate-limit-buckets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# drained_rate_limit_buckets

## Definition — verbatim
(used, not defined)

> "def drained_rate_limit_buckets() -> list[str]:" — scripts/github_core/api.py:512

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 512 | defined here | Function inspecting rate limit resource payloads to identify exhausted API buckets. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`drained_rate_limit_buckets` is a Python helper function identifier inspecting GitHub quota payloads for exhausted buckets rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
