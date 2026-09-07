---
package: rjm
name: measure_skill
slug: measure-skill
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# measure_skill

## Definition — verbatim
(used, not defined)

> "def measure_skill(skill_md: Path) -> SkillDescription | None:" — scripts/skill_description_budget.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_description_budget.py | 86 | defined here | Reads a SKILL.md file, extracts description frontmatter, and returns a SkillDescription record. |

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
defects: missing-path

## Design notes
`measure_skill` is an internal Python helper function extracting frontmatter description length from skill files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
