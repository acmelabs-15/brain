---
package: rjm
name: _marker
slug: marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _marker

## Definition — verbatim
(used, not defined)

> "def _marker(current: int, allowed: int) -> str:" — scripts/validation/check_adr_lifecycle.py:998

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 998 | defined here | Helper function returning table status labels such as RAISED, improved, or clean based on current versus allowed violation counts. |

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
`_marker` is a Python helper function generating status marker labels in validation reports rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
