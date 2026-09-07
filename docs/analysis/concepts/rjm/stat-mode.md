---
package: rjm
name: _stat_mode
slug: stat-mode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _stat_mode

## Definition — verbatim
(used, not defined)

> "def _stat_mode(path: Path) -> int | None:" — scripts/validation/check_shipped_skill_routes.py:330

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 330 | defined here | Returns path st_mode or None for absent paths, implementing fail-closed stat policy for route validation. |

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
A private filesystem stat helper function in `scripts/validation/check_shipped_skill_routes.py` implementing fail-closed stat inspection, classified as `name-only` per D-023.
