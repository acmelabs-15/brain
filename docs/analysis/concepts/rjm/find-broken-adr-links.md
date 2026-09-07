---
package: rjm
name: find_broken_adr_links
slug: find-broken-adr-links
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_broken_adr_links

## Definition — verbatim
(used, not defined)

> "def find_broken_adr_links(" — scripts/validation/check_adr_links.py:838

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 838 | defined here | Core scanning function returning all non-exempt, non-baselined ADR link findings across tracked markdown files. |

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
`find_broken_adr_links` is a Python function identifier in `check_adr_links.py` executing repository-wide ADR link validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
