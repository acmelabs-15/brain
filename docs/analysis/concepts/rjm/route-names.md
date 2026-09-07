---
package: rjm
name: route_names
slug: route-names
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# route_names

## Definition — verbatim
(used, not defined)

> "def route_names(text: str) -> Iterator[tuple[int, str, bool]]:" — scripts/validation/check_shipped_skill_routes.py:510

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 510 | defined here | Yields line number, route name, and legality flag for Skill routes found in table text. |

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
A generator function in `scripts/validation/check_shipped_skill_routes.py` that parses skill routes from markdown tables, classified as `name-only` per D-023.
