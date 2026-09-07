---
package: rjm
name: OutcomeLiteral
slug: outcomeliteral
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OutcomeLiteral

## Definition — verbatim
(used, not defined)

> "OutcomeLiteral = Literal[\"success\", \"error\"]" — scripts/eval/_eval_agent_types.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_agent_types.py | 27 | defined here | Type alias representing the binary execution outcome of a model evaluation call. |
| scripts/eval/_eval_api_adapter.py | 45 | defined here | Type alias used to type API response adapter results. |

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
A Python typing Literal alias in evaluation modules denoting call success or error outcomes, classified as `name-only` per D-023.
