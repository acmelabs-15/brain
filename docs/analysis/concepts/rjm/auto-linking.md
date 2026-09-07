---
package: rjm
name: Auto-linking
slug: auto-linking
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

# Auto-linking

## Definition — verbatim
> "Auto-linking: Cosine similarity ≥0.7 triggers bidirectional links to top 3-5 matches" — .agents/architecture/ADR-007-memory-first-architecture.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 52 | used here | Highlighted as Forgetful's mechanism for establishing bidirectional links based on semantic similarity. |

## Consumes
Vector embeddings of existing memory notes and candidate memory entries.

## Produces
Bidirectional associative links connecting semantically related memory nodes within the memory graph.

## When applied
When a new memory note is indexed and its cosine similarity to existing memories meets or exceeds the 0.7 threshold.

## Sub-concepts
none

## Part of
dual-graph-architecture

## Implementation status
out-of-scope

## Design notes
An automated relationship generation technique in Forgetful MCP that dynamically establishes bidirectional edges between memory nodes when cosine similarity meets or exceeds 0.7. This eliminates the burden of manual linking and allows organic associative networks to emerge across disparate agent sessions.
