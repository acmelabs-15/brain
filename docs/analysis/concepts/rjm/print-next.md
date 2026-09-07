---
package: rjm
name: --print-next
slug: print-next
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# --print-next

## Definition — verbatim
(used, not defined)

> "--print-next            print the next free ADR number and exit 0" — scripts/validation/check_adr_uniqueness.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 25 | defined here | CLI helper option that prints the next available integer ADR number and exits. |

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
`--print-next` is a CLI option flag in `check_adr_uniqueness.py` outputting the next sequential ADR number rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
