---
package: rjm
name: contexts_are_incomplete
slug: contexts-are-incomplete
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# contexts_are_incomplete

## Definition — verbatim
(used, not defined)

> "def contexts_are_incomplete(contexts: dict[str, Any]) -> bool:" — scripts/pr_maintenance_rollup.py:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 149 | defined here | Predicate checking if GraphQL reported more status check contexts than were fetched. |

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
`contexts_are_incomplete` is a Python predicate function identifier determining if status check pagination was truncated or incomplete rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
