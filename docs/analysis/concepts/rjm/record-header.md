---
package: rjm
name: _record_header
slug: record-header
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _record_header

## Definition — verbatim
(used, not defined)

> "def _record_header(body: str) -> str:" — scripts/validation/check_adr_lifecycle.py:499

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 499 | defined here | Helper function extracting the header region of an ADR body up to the first level-2 heading that is not Status. |

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
`_record_header` is a Python helper function in check_adr_lifecycle.py scoping inline status search rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
