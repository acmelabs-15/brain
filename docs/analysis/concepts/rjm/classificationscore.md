---
package: rjm
name: ClassificationScore
slug: classificationscore
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ClassificationScore

## Definition — verbatim
(used, not defined)

> "class ClassificationScore:" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 69 | defined here | Dataclass holding numeric scoring data for skill placement classification. |

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
ClassificationScore is a Python dataclass identifier in analyze_skill_placement.py storing numerical scores for placement classification rather than an operational lifecycle concept, classified as name-only per D-023.
