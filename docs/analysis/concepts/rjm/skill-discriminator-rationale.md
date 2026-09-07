---
package: rjm
name: [skill-discriminator: <rationale>]
slug: skill-discriminator-rationale
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# [skill-discriminator: <rationale>]

## Definition — verbatim
(used, not defined)

> "The PR description carries the token ``[skill-discriminator: <rationale>]``" — scripts/validation/check_agent_skill_discriminator.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 31 | defined here | Token specification permitting PR authors to override discriminator failures with an explicit rationale. |

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
[skill-discriminator: <rationale>] is a PR description override token syntax used to exempt skill-shaped agents, classified as name-only per D-023.
