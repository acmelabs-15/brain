---
package: rjm
name: _check_prose
slug: check-prose
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _check_prose

## Definition — verbatim
(used, not defined)

> "def _check_prose(record: Record) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:604

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 604 | defined here | Validation function checking that prose status sections match frontmatter status values when both are present. |

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
`_check_prose` is a Python validation function in check_adr_lifecycle.py verifying agreement between prose and frontmatter rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
