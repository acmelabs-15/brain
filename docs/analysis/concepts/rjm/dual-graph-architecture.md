---
package: rjm
name: Dual graph architecture
slug: dual-graph-architecture
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Dual graph architecture

## Definition — verbatim
> "Dual graph architecture: Memory graph (concepts) + Entity graph (real-world objects)" — .agents/architecture/ADR-007-memory-first-architecture.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 51 | used here | Described as Forgetful MCP's foundational knowledge organization structure. |

## Consumes
Conceptual observations, learnings, and real-world system entities.

## Produces
Two linked knowledge graphs separating abstract concepts from concrete entities.

## When applied
When indexing and traversing complex semantic networks in the local vector memory layer.

## Sub-concepts
memory-graph, entity-graph

## Part of
forgetful

## Implementation status
out-of-scope

## Design notes
An architectural division within Forgetful MCP that maintains two distinct but interconnected graph networks: one representing abstract memories and conceptual lessons, and another representing concrete entities and real-world objects. This prevents semantic conflation between ideas and physical artifacts.
