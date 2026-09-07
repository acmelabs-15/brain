---
package: rjm
name: split_destination
slug: split-destination
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# split_destination

## Definition — verbatim
(used, not defined)

> "def split_destination(raw: str) -> str:" — scripts/validation/check_adr_links.py:391

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 391 | defined here | Helper function extracting the cleaned path portion of a markdown link destination by stripping titles, angles, and anchors. |

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
`split_destination` is a Python helper function identifier in `check_adr_links.py` parsing link destination paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
