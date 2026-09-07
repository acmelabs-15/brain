---
package: rjm
name: --print-next-padded
slug: print-next-padded
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# --print-next-padded

## Definition — verbatim
(used, not defined)

> "--print-next-padded N   same, zero-padded to N digits (default 3)" — scripts/validation/check_adr_uniqueness.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 26 | defined here | CLI helper option that prints the next available ADR number padded with leading zeros to N digits. |

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
`--print-next-padded` is a CLI option flag in `check_adr_uniqueness.py` specifying zero-padding width for ADR numbers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
