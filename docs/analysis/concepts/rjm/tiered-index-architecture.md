---
package: rjm
name: Tiered Index Architecture
slug: tiered-index-architecture
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tiered Index Architecture

## Definition — verbatim
> "### Option 3: Tiered Index Architecture (CHOSEN)" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 73 | defined here | Selected as the primary memory index architecture establishing a 3-level hierarchy. |

## Consumes
Top-level domain mappings, domain keyword tables, and atomic skill files.

## Produces
Hierarchical routing structure delivering 81.6% token savings for memory lookups.

## When applied
Applied for organizing, indexing, and querying all learned skills in Serena memory.

## Sub-concepts
activation-vocabulary, pure-lookup-table-format, progressive-refinement

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Tiered index architecture is rjm's primary solution for scalable memory retrieval without vector embeddings. By organizing discovery into Level 0 domain routing, Level 1 keyword tables, and Level 2 atomic content, it maximizes both token efficiency and retrieval precision.
