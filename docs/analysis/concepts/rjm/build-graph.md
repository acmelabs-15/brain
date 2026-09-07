---
package: rjm
name: build_graph
slug: build-graph
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_graph

## Definition — verbatim
(used, not defined)

> "def build_graph(repo_root: Path) -> dict[str, frozenset[str]]:" — scripts/test_selection/import_graph.py:229

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 229 | defined here | Compatibility wrapper returning only the forward import graph dictionary. |
| scripts/traceability/show_traceability_graph.py | 33 | defined here | Function constructing a traceability graph dictionary connecting requirements, designs, and tasks. |
| scripts/validation/check_adr_lifecycle.py | 718 | defined here | Internal function resolving ADR supersedes and superseded-by relationships into a directed graph. |

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
clean · defects: other

## Design notes
`build_graph` is a Python function identifier across test selection, traceability, and ADR validation scripts for constructing in-memory graph data structures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
