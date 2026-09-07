---
package: rjm
name: Discriminator
slug: discriminator
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
---

# Discriminator

## Definition — verbatim
> "Discriminator (locked by the #2003 audit; canonical source:" — scripts/validation/check_agent_skill_discriminator.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 8 | defined here | Multi-criteria classification rubric gating agent creation against accumulating skill-shape debt. |

## Consumes
Agent markdown definitions and slash command invocation references.

## Produces
Scoring breakdown and gate verdict determining whether an agent must be implemented as a skill.

## When applied
Evaluated during CI and pre-PR checks whenever new or modified agent definitions are submitted.

## Sub-concepts
the-3-pipeline-rule
c2-threshold
pipeline-rule-limit

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
The Discriminator provides a mechanical classification gate that evaluates agents on invocation pattern, structured content density, and sibling pipelines to prevent creating agents where skills are appropriate.
