---
package: rjm
name: find_tension
slug: find-tension
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_tension

## Definition — verbatim
(used, not defined)

> "def find_tension(data: dict[str, Any], tension_id: str) -> dict[str, Any] | None:" — scripts/skillbook.py:298

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 298 | defined here | Searches tensions registry collection for a tension record matching a given identifier string. |

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
defects: doc-drift

## Design notes
find_tension is a Python utility function identifier locating tension entries by id rather than an SDLC lifecycle concept, classified as name-only per D-023.
