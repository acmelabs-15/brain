---
package: rjm
name: _get_included_nodes
slug: get-included-nodes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _get_included_nodes

## Definition — verbatim
(used, not defined)

> "def _get_included_nodes(" — scripts/traceability/show_traceability_graph.py:251

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/show_traceability_graph.py | 251 | defined here | Internal filtering helper determining the subset of graph nodes to include based on root ID and max depth. |

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
An internal helper function in `show_traceability_graph.py` resolving active nodes for filtered graph visualizations, classified as `name-only` per D-023.
