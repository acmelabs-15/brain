---
package: rjm
name: build_graph_data
slug: build-graph-data
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_graph_data

## Definition — verbatim
(used, not defined)

> "def build_graph_data(repo_root: Path) -> ImportGraphData:" — scripts/test_selection/import_graph.py:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 192 | defined here | Function constructing the full in-repo AST import dependency graph and identifying wildcard dependents. |

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
`build_graph_data` is a Python function identifier in `scripts/test_selection/import_graph.py` parsing repository ASTs to build import dependency graph structures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
