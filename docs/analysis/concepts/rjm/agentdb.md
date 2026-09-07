---
package: rjm
name: AgentDB
slug: agentdb
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AgentDB

## Definition — verbatim
(used, not defined)

> "AgentDB vector database (HNSW indexing)" — .agents/analysis/claude-flow-architecture-analysis.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 14 | defined here | Named as the high-speed vector database component enabling 96-164x faster semantic search. |
| .agents/architecture/ADR-007-memory-first-architecture.md | 41 | used here | Listed as the tier-one primary vector storage component in claude-flow's 4-tier memory architecture. |

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
defects: internal-contradiction, missing-path

## Design notes
A proprietary vector database component of ruvnet/claude-flow analyzed as an external reference system rather than an agent lifecycle concept.
