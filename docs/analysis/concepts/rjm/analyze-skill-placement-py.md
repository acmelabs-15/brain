---
package: rjm
name: analyze_skill_placement.py
slug: analyze-skill-placement-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# analyze_skill_placement.py

## Definition — verbatim
(used, not defined)

> "| `analyze_skill_placement.py` | Classify content as Skill/PassiveContext/Hybrid | 0=success, 1=error |" — .claude/skills/context-optimizer/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/SKILL.md | 43 | defined here | Script catalog row documenting script purpose to classify content as Skill, PassiveContext, or Hybrid. |

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
defects: doc-drift, missing-path

## Design notes
`analyze_skill_placement.py` is a Python script file name in context-optimizer classifying content placement rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
