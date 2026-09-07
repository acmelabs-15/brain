---
package: rjm
name: ADR_ANYWHERE
slug: adr-anywhere
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ADR_ANYWHERE

## Definition — verbatim
(used, not defined)

> "ADR_ANYWHERE = re.compile(r\"ADR-\d+[^\s)]*\.md\", re.IGNORECASE)" — scripts/validation/check_adr_links.py:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 139 | defined here | Regular expression detecting embedded ADR filenames in link destinations to flag malformed syntax. |

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
`ADR_ANYWHERE` is a Python regular expression constant identifier in `check_adr_links.py` detecting embedded ADR filenames in malformed destinations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
