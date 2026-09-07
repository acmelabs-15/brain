---
package: rjm
name: Unit
slug: unit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Unit

## Definition — verbatim
(used, not defined)

> "class Unit:" — scripts/validation/check_model_pins.py:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_model_pins.py | 94 | defined here | Frozen dataclass representing a scanned skill, agent, or command file and its frontmatter model configuration. |

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
clean

## Design notes
`Unit` is a Python dataclass identifier in `check_model_pins.py` representing a scanned file in memory rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
