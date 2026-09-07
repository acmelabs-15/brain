---
package: rjm
name: Dual Memory Architecture
slug: dual-memory-architecture
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Dual Memory Architecture

## Definition — verbatim
> "Dual Memory Architecture (Augmented)" — .agents/architecture/ADR-007-memory-first-architecture.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 99 | defined here | Architectural heading defining the dual-system integration of canonical Serena files with local Forgetful vector search. |

## Consumes
Repository Git history, `.serena/memories/*.md` files, and local SQLite vector embeddings.

## Produces
A unified memory subsystem providing both repository-portable markdown files and local vector semantic search.

## When applied
Across all agent sessions requiring memory retrieval, learning extraction, or cross-session knowledge continuity.

## Sub-concepts
serena-memory, forgetful

## Part of
memory-first-architecture

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The core architectural pattern established in ADR-007 combining two complementary memory layers: Serena as the canonical, Git-synchronized markdown store that travels across all environments, and Forgetful MCP as a supplementary local vector database providing semantic search with graceful fallback.
