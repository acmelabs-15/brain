---
package: rjm
name: _check_identity
slug: check-identity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _check_identity

## Definition — verbatim
(used, not defined)

> "def _check_identity(record: Record) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:477

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 477 | defined here | Validation function checking that ADR frontmatter ID matches the filename and that status belongs to the lifecycle enum. |

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
`_check_identity` is a Python validation function in check_adr_lifecycle.py verifying ADR ID and status enum rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
