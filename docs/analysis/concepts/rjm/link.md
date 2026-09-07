---
package: rjm
name: LINK
slug: link
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LINK

## Definition — verbatim
(used, not defined)

> "LINK = re.compile" — scripts/validation/check_adr_links.py:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 114 | defined here | Compiled regular expression matching inline markdown link syntax. |

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
`LINK` is a Python regular expression constant identifier in `check_adr_links.py` matching inline markdown links rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
