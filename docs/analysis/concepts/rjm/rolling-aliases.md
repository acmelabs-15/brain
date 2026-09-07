---
package: rjm
name: ROLLING_ALIASES
slug: rolling-aliases
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ROLLING_ALIASES

## Definition — verbatim
(used, not defined)

> "ROLLING_ALIASES = (\"sonnet\", \"opus\", \"haiku\")" — scripts/validation/check_model_pins.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_model_pins.py | 64 | defined here | Module constant defining allowed non-versioned model tier aliases under ADR-080 governance. |

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
`ROLLING_ALIASES` is a Python module constant tuple in `check_model_pins.py` defining permitted model alias identifiers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
