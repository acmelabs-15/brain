---
package: rjm
name: build_plan
slug: build-plan
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

# build_plan

## Definition — verbatim
(used, not defined)

> "def build_plan(fixtures: list[dict[str, Any]], repo_root: Path) -> list[dict[str, Any]]:" — scripts/eval/eval_skill_router.py:371

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_skill_router.py | 371 | defined here | Function pre-resolving paths and prompt structures across all fixtures for dry-run and live eval. |

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
A Python execution planning function in `eval_skill_router.py` validating fixtures and assembling prompt payloads across both evaluation arms, classified as name-only per D-023.
