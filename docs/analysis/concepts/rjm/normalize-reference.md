---
package: rjm
name: _normalize_reference
slug: normalize-reference
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _normalize_reference

## Definition — verbatim
(used, not defined)

> "def _normalize_reference(value: object) -> int | None:" — scripts/validation/check_adr_lifecycle.py:448

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 448 | defined here | Helper function extracting an integer ADR number from a frontmatter reference value, returning None when unparseable. |

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
`_normalize_reference` is a Python helper function in check_adr_lifecycle.py extracting ADR integer numbers from frontmatter values rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
