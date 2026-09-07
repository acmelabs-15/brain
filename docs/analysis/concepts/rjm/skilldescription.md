---
package: rjm
name: SkillDescription
slug: skilldescription
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SkillDescription

## Definition — verbatim
(used, not defined)

> "class SkillDescription:" — scripts/skill_description_budget.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_description_budget.py | 75 | defined here | Frozen dataclass holding a skill name, character count, and calculated token estimate. |

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
`SkillDescription` is a Python dataclass identifier encapsulating description length measurements in budgeting scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
