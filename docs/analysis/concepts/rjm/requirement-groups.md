---
package: rjm
name: _requirement_groups
slug: requirement-groups
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _requirement_groups

## Definition — verbatim
(used, not defined)

> "def _requirement_groups(table: object) -> list[list[str]]:" — scripts/validation/check_ci_dependency_pins.py:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 147 | defined here | Helper function returning requirement lists held by a table of named groups. |

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
An internal Python helper function identifier in `check_ci_dependency_pins.py` that extracts requirement lists from group tables, classified as `name-only` per D-023.
