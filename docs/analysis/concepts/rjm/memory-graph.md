---
package: rjm
name: Memory graph
slug: memory-graph
kind: artifact
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

# Memory graph

## Definition — verbatim
(used, not defined)

> "Memory graph (concepts)" — .agents/architecture/ADR-007-memory-first-architecture.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 51 | used here | Named as the conceptual component of Forgetful's dual graph architecture. |

## Consumes
Conceptual notes, learned behaviors, and semantic associations.

## Produces
An interconnected network of abstract memory nodes linked by cosine similarity.

## When applied
When querying or linking abstract concepts and operational lessons within the vector memory tier.

## Sub-concepts
none

## Part of
dual-graph-architecture

## Implementation status
out-of-scope

## Design notes
The conceptual subgraph within Forgetful MCP that organizes abstract learnings, principles, and cognitive patterns. By isolating concepts from physical entities, it enables pure conceptual search and association without noise from concrete code artifacts.
