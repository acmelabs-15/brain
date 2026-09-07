---
package: rjm
name: _OpenAIProviderTransport
slug: openaiprovidertransport
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

# _OpenAIProviderTransport

## Definition — verbatim
(used, not defined)

> "class _OpenAIProviderTransport:" — scripts/eval/_eval_api_adapter.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_api_adapter.py | 177 | defined here | Transport adapter class identifier wrapping OpenAI provider completions into the Transport callable protocol. |

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
`_OpenAIProviderTransport` is an internal wrapper class identifier adapting OpenAI provider client calls to the Transport callable seam rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
