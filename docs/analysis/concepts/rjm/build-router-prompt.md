---
package: rjm
name: build_router_prompt
slug: build-router-prompt
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

# build_router_prompt

## Definition — verbatim
(used, not defined)

> "def build_router_prompt(query: str, candidates: list[str], descriptions: dict[str, str]) -> str:" — scripts/eval/eval_skill_router.py:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_skill_router.py | 272 | defined here | Function constructing the evaluation prompt presenting candidates and queries to the router. |

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
A Python prompt construction function in `eval_skill_router.py` assembling candidate descriptions and user requests into standardized router prompts, classified as name-only per D-023.
