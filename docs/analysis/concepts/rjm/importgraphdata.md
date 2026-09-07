---
package: rjm
name: ImportGraphData
slug: importgraphdata
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ImportGraphData

## Definition — verbatim
(used, not defined)

> "class ImportGraphData:" — scripts/test_selection/import_graph.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 35 | defined here | Dataclass definition encapsulating the forward import graph and wildcard dependent module set. |

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
`ImportGraphData` is a Python dataclass identifier in `scripts/test_selection/import_graph.py` encapsulating forward graph mappings and dynamic import dependents rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
