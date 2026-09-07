---
package: rjm
name: Memory Router Architecture
slug: memory-router-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Router Architecture

## Definition — verbatim
> "# ADR-037: Memory Router Architecture" — .agents/architecture/ADR-037-memory-router-architecture.md:12

## Also called — verbatim
`Memory Router` — .agents/architecture/ADR-037-memory-router-architecture.md:48

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-037-memory-router-architecture.md | 12 | defined here | Architectural decision record defining the unified memory routing gateway across Serena and Forgetful. |

## Consumes
Multiple heterogeneous memory storage engines (Serena semantic/lexical memory, Forgetful vector memory).

## Produces
A unified architectural layer and facade providing standardized search and retrieval contracts.

## When applied
Applied across the repository to decouple agents from low-level memory store implementations.

## Sub-concepts
memory-router, tiered-memory-index

## Part of
memory-first-architecture

## Implementation status
defects: doc-drift, missing-path

## Design notes
The architectural pattern established in ADR-037 establishing a centralized abstraction layer over disparate persistent memory systems. It insulates agent prompts from backend memory API changes while standardizing search, retrieval, and fallback semantics.
