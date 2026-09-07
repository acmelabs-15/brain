---
package: rjm
name: Consolidation
slug: consolidation
kind: technique
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

# Consolidation

## Definition — verbatim
> "1. **Consolidation**: Merge related memories into fewer, larger files (reduce `list_memories` cost)" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 32 | used here | Formulated as an optimization strategy merging related memories to reduce list_memories call overhead. |

## Consumes
Multiple related atomic memory files or skill definitions.

## Produces
Merged domain-level memory files with reduced file counts.

## When applied
Considered when the number of individual memory files grows large enough to cause high listing discovery costs.

## Sub-concepts
flat-consolidation

## Part of
tiered-index-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Consolidation is an optimization technique that groups related knowledge items into fewer aggregated documents. While it reduces file discovery and listing overhead, unchecked consolidation leads to token waste when an agent only requires a single focused skill.
