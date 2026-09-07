---
package: rjm
name: PipelineIndex
slug: pipelineindex
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PipelineIndex

## Definition — verbatim
(used, not defined)

> "class PipelineIndex:" — scripts/validation/check_agent_skill_discriminator.py:332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 332 | defined here | Dataclass storing mappings of slash commands to their invoked agents and skills. |

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
PipelineIndex is a Python dataclass identifier storing command-file agent and skill invocations, classified as name-only per D-023.
