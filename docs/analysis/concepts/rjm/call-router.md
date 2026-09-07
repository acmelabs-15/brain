---
package: rjm
name: call_router
slug: call-router
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# call_router

## Definition — verbatim
(used, not defined)

> "def call_router(api_key: str, prompt: str) -> str:" — scripts/eval/eval_skill_router.py:339

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_skill_router.py | 339 | defined here | Transport function dispatching prompt queries to the Anthropic Messages API. |

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
defects: doc-drift, orphan

## Design notes
A Python API transport wrapper in `eval_skill_router.py` invoking Claude models via `call_api` with zero temperature for deterministic routing, classified as name-only per D-023.
