---
package: rjm
name: build_graph
slug: build-graph
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/import_graph.py, sha256: 67f96c39ec954d4380d904f09f4d6a77168f8f7b443f9a7c5a0742c752752d5b}
  - {path: scripts/traceability/show_traceability_graph.py, sha256: e9b88963e496c97a549a3156d97c00b7aed0f63b8317ba49cb10edf1ccc3b3cb}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
