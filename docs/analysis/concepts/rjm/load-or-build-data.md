---
package: rjm
name: load_or_build_data
slug: load-or-build-data
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_or_build_data

## Definition — verbatim
(used, not defined)

> "def load_or_build_data(" — scripts/test_selection/import_graph.py:292

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 292 | defined here | Function returning import graph data from cache if fresh, or rebuilding and persisting the cache. |

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
`load_or_build_data` is a Python function identifier in `scripts/test_selection/import_graph.py` implementing cache retrieval with fallback generation for import graphs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
