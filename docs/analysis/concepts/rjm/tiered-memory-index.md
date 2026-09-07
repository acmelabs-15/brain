---
package: rjm
name: Tiered Memory Index
slug: tiered-memory-index
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tiered Memory Index

## Definition — verbatim
> "ADR-017 (Tiered Memory Index) optimizes Serena's lexical approach." — .agents/architecture/ADR-037-memory-router-architecture.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-037-memory-router-architecture.md | 31 | used here | Identifies Tiered Memory Index (ADR-017) as optimizing Serena's lexical search integrated into Memory Router. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 65 | used here | Positions context-corpus design alongside ADR-017 Tiered Memory Index as core architectural commitments. |

## Consumes
Serena atomic memory entries, domain classifications, and keyword index files.

## Produces
Hierarchical multi-level index optimizing lexical retrieval speed and token economy.

## When applied
Applied when indexing and searching knowledge items within Serena memory.

## Sub-concepts
none

## Part of
memory-router-architecture

## Implementation status
defects: doc-drift, missing-path

## Design notes
A hierarchical indexing pattern organizing memory discovery into tiered levels (domain routing, keyword tables, atomic entries). It optimizes lexical retrieval in Serena memory by avoiding full-text scans and eliminating the need for expensive vector embeddings.
