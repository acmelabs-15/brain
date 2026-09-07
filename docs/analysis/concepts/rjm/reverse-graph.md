---
package: rjm
name: reverse_graph
slug: reverse-graph
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# reverse_graph

## Definition — verbatim
(used, not defined)

> "def reverse_graph(graph: dict[str, frozenset[str]]) -> dict[str, set[str]]:" — scripts/test_selection/import_graph.py:325

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 325 | defined here | Function inverting the forward import graph so imported target modules map to their importer dependents. |

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
`reverse_graph` is a Python function identifier in `scripts/test_selection/import_graph.py` inverting directed import graph edges rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
