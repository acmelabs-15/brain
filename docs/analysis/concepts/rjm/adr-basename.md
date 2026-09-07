---
package: rjm
name: ADR_BASENAME
slug: adr-basename
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ADR_BASENAME

## Definition — verbatim
(used, not defined)

> "ADR_BASENAME = re.compile(r\"^ADR-\d+.*\.md$\", re.IGNORECASE)" — scripts/validation/check_adr_links.py:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 138 | defined here | Compiled regular expression matching case-insensitive ADR markdown filename basenames. |

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
`ADR_BASENAME` is a Python regular expression constant identifier in `check_adr_links.py` matching ADR filename basenames rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
