---
package: rjm
name: wildcard_dependents
slug: wildcard-dependents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# wildcard_dependents

## Definition — verbatim
(used, not defined)

> "wildcard_dependents: frozenset[str]" — scripts/test_selection/import_graph.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 39 | defined here | Dataclass field in ImportGraphData holding module paths whose dynamic imports depend on every module. |

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
`wildcard_dependents` is a dataclass field identifier in `scripts/test_selection/import_graph.py` designating modules with non-literal dynamic imports rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
