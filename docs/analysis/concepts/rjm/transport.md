---
package: rjm
name: Transport
slug: transport
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
  - {path: scripts/eval/_providers.py, sha256: 2b5fd7d1b39ad5792826f1c4d8ca4f17f8aa5a0fdc07213df29167eba2ee2f5d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Transport

## Definition — verbatim
(used, not defined)

> "Transport = Callable[[str, str, str], str]" — scripts/eval/_eval_api_adapter.py:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_api_adapter.py | 168 | defined here | Defines the callable type alias for turning prompt, model, and system arguments into assistant text. |
| scripts/eval/_providers.py | 3 | used here | References the Transport seam defined by DESIGN-004 §5.4 for multi-provider evaluation execution. |

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
defects: doc-drift

## Design notes
`Transport` is a Python type alias identifier defining the callable interface for executing model API requests across providers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
