---
package: rjm
name: list_available_models
slug: list-available-models
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# list_available_models

## Definition — verbatim
(used, not defined)

> "def list_available_models(api_key: str, *, timeout: int = 30) -> list[str]:" — scripts/eval/_anthropic_api.py:295

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 295 | defined here | Function querying provider API to enumerate models accessible with the provided credentials. |

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
list_available_models is a Python utility function identifier retrieving accessible model identifiers from provider APIs rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
