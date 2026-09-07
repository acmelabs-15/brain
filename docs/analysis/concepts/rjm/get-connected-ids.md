---
package: rjm
name: get_connected_ids
slug: get-connected-ids
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_connected_ids

## Definition — verbatim
(used, not defined)

> "def get_connected_ids(" — scripts/traceability/show_traceability_graph.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/show_traceability_graph.py | 67 | defined here | Recursive traversal function gathering connected node IDs in forward or backward direction up to a specified depth. |

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
defects: other

## Design notes
A graph traversal helper function in `show_traceability_graph.py` finding reachable spec IDs in a specified direction, classified as `name-only` per D-023.
