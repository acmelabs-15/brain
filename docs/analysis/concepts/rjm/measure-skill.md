---
package: rjm
name: measure_skill
slug: measure-skill
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
