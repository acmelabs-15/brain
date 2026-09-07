---
package: rjm
name: _present
slug: present
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _present

## Definition — verbatim
(used, not defined)

> "def _present(path: Path, *, directory: bool) -> bool:" — scripts/validation/check_shipped_skill_routes.py:354

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 354 | defined here | Checks whether a required path exists and matches expected filesystem entry kind. |

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
A private filesystem validation helper in `scripts/validation/check_shipped_skill_routes.py` asserting expected entry types, classified as `name-only` per D-023.
