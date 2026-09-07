---
package: rjm
name: REFERENCE_LINK
slug: reference-link
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REFERENCE_LINK

## Definition — verbatim
(used, not defined)

> "REFERENCE_LINK = re.compile" — scripts/validation/check_adr_links.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 136 | defined here | Compiled regular expression matching full and collapsed markdown reference links. |

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
`REFERENCE_LINK` is a Python regular expression constant identifier in `check_adr_links.py` matching full and collapsed markdown reference links rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
