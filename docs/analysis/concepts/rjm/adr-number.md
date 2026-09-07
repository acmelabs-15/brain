---
package: rjm
name: adr_number
slug: adr-number
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# adr_number

## Definition — verbatim
(used, not defined)

> "def adr_number(value: str) -> int | None:" — scripts/validation/check_adr_links.py:447

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 447 | defined here | Helper function parsing the numeric ADR identifier from an ADR filename. |

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
`adr_number` is a Python helper function identifier in `check_adr_links.py` extracting integer numbers from ADR filenames rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
