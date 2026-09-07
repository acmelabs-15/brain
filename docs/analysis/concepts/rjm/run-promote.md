---
package: rjm
name: run_promote
slug: run-promote
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_promote

## Definition — verbatim
(used, not defined)

> "def run_promote(data: dict[str, Any], now: int) -> list[str]:" — scripts/skillbook.py:281

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 281 | defined here | Iterates through all policies in the registry, triggering promotion evaluations and tracking changed policy IDs. |

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
run_promote is a Python function identifier running batch promotion over registry policies rather than an SDLC lifecycle concept, classified as name-only per D-023.
