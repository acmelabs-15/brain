---
package: rjm
name: _status_prose
slug: status-prose
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _status_prose

## Definition — verbatim
(used, not defined)

> "def _status_prose(body: str) -> str | None:" — scripts/validation/check_adr_lifecycle.py:528

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 528 | defined here | Helper function extracting the first non-blank line of an ADR's prose status section or inline status label. |

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
`_status_prose` is a Python helper function in check_adr_lifecycle.py extracting prose status text rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
