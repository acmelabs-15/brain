---
package: rjm
name: LINK_DEFINITION
slug: link-definition
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LINK_DEFINITION

## Definition — verbatim
(used, not defined)

> "LINK_DEFINITION = re.compile" — scripts/validation/check_adr_links.py:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 135 | defined here | Compiled regular expression matching CommonMark link reference definitions. |

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
`LINK_DEFINITION` is a Python regular expression constant identifier in `check_adr_links.py` matching markdown link reference definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
