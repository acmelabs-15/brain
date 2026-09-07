---
package: rjm
name: Skill(skill="<name>")
slug: skill-skill-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Skill(skill="<name>")

## Definition — verbatim
(used, not defined)

> "Skill(skill=\"<name>\")" — scripts/validation/check_agent_skill_discriminator.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 21 | used here | Pattern cited in criterion c3 representing sibling skill invocations in slash-command pipelines. |

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
defects: missing-path, other

## Design notes
Skill(skill="<name>") is an invocation syntax pattern representing skill loading within slash commands, classified as name-only per D-023.
