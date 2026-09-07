---
package: rjm
name: Multi-stage retrieval
slug: multi-stage-retrieval
kind: technique
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

# Multi-stage retrieval

## Definition — verbatim
> "Multi-stage retrieval: Dense search → Sparse search → RRF fusion → Cross-encoder reranking" — .agents/architecture/ADR-007-memory-first-architecture.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 54 | used here | Specifies Forgetful's hybrid information retrieval pipeline combining dense, sparse, fusion, and reranking stages. |

## Consumes
Agent search queries, dense vector indexes, sparse lexical indexes, and ranking models.

## Produces
A prioritized, reranked subset of the top relevant memory items constrained by token budget.

## When applied
When an agent queries the memory subsystem for relevant prior learnings and context before beginning execution.

## Sub-concepts
none

## Part of
forgetful

## Implementation status
out-of-scope

## Design notes
A four-stage information retrieval technique utilized by Forgetful MCP combining dense vector search and sparse keyword search with Reciprocal Rank Fusion (RRF) and cross-encoder reranking. This pipeline maximizes retrieval precision and recall over raw keyword or vector-only queries while respecting context window token limits.
