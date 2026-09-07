---
package: rjm
name: _default_transport_factory
slug: default-transport-factory
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

# _default_transport_factory

## Definition — verbatim
(used, not defined)

> "def _default_transport_factory(seed: int | None = None) -> Transport:" — scripts/eval/_eval_api_adapter.py:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_api_adapter.py | 224 | defined here | Factory function identifier creating the production Transport callable instance based on EVAL_PROVIDER. |

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
`_default_transport_factory` is an internal factory function identifier resolving and instantiating the active provider transport based on EVAL_PROVIDER rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
