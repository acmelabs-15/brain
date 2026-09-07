---
package: rjm
name: Task(subagent_type="<name>")
slug: task-subagent-type-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Task(subagent_type="<name>")

## Definition — verbatim
(used, not defined)

> "Task(subagent_type=\"<name>\")" — scripts/validation/check_agent_skill_discriminator.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 15 | used here | Pattern cited as discriminator criterion c1 representing slash-command subagent invocation. |

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
Task(subagent_type="<name>") is an invocation syntax pattern used to dispatch subagents within slash commands, classified as name-only per D-023.
