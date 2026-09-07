---
package: rjm
name: pairs
slug: pairs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pairs

## Definition — verbatim
(used, not defined)

> "pairs" — scripts/eval/examples/example-overlap-pairs.json:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/example-overlap-pairs.json | 3 | defined here | Top-level JSON key listing candidate skill pairs evaluated for functional overlap. |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 3 | defined here | Top-level JSON key listing candidate skill pairs evaluated under Issue #1949. |
| scripts/validation/check_shipped_skill_routes.py | 222 | defined here | Dictionary constant mapping opening delimiters to their closing counterparts for cell unwrapping. |

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
defects: orphan

## Design notes
pairs is a variable identifier and JSON key used in eval fixtures and route parsing rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
