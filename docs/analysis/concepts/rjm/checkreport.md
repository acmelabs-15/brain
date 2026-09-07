---
package: rjm
name: CheckReport
slug: checkreport
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CheckReport

## Definition — verbatim
(used, not defined)

> "class CheckReport:" — scripts/validation/check_model_pins.py:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_model_pins.py | 105 | defined here | Dataclass tracking hard policy violations versus grandfathered backlog entries during model pin validation. |

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
`CheckReport` is a Python dataclass identifier in `check_model_pins.py` accumulating script execution findings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
