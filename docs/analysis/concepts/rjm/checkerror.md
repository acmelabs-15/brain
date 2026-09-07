---
package: rjm
name: CheckError
slug: checkerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CheckError

## Definition — verbatim
(used, not defined)

> "class CheckError(Exception):" — scripts/validation/check_shipped_skill_routes.py:308

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 308 | defined here | Custom exception class raised when validation encounters an untrustworthy condition rather than a standard finding. |

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
A Python exception class in `scripts/validation/check_shipped_skill_routes.py` representing untrustworthy validation conditions, classified as `name-only` per D-023.
