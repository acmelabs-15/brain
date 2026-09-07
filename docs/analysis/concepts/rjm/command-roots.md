---
package: rjm
name: COMMAND_ROOTS
slug: command-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# COMMAND_ROOTS

## Definition — verbatim
(used, not defined)

> "COMMAND_ROOTS: tuple[str, ...] = (\".claude/commands/\", \"templates/commands/\")" — scripts/validation/agent_skill_discriminator_baseline.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 46 | defined here | Constant tuple defining command root directories searched for heuristic scoring. |

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
`COMMAND_ROOTS` is a constant tuple identifier in `scripts/validation/agent_skill_discriminator_baseline.py` defining command search paths for heuristic scoring rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
