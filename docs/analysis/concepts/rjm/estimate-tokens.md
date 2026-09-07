---
package: rjm
name: _estimate_tokens
slug: estimate-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _estimate_tokens

## Definition — verbatim
(used, not defined)

> "def _estimate_tokens(text: str) -> int:" — scripts/eval/_eval_api_adapter.py:498

## Also called — verbatim
- `estimate_tokens` — scripts/skill_description_budget.py:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_api_adapter.py | 498 | defined here | Internal function identifier calculating character-based token count approximations for request envelopes. |
| scripts/skill_description_budget.py | 43 | defined here | Utility function identifier estimating token consumption from character lengths in skill manifests. |

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
defects: missing-path

## Design notes
`_estimate_tokens` is a utility function identifier implementing heuristic character-to-token count approximations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
