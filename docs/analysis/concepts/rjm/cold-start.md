---
package: rjm
name: Cold start
slug: cold-start
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

# Cold start

## Definition — verbatim
> "| **Cold start** | Memory-index not cached | Accept 27.6% savings vs 82% |" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 204 | defined here | Defined in the failure modes table as the condition where the top-level memory index is not yet cached. |

## Consumes
Initial agent session invocation without pre-cached memory indices.

## Produces
Reduced token savings (27.6% instead of 81.6%) on the initial retrieval.

## When applied
Occurs on the first memory retrieval in an agent session before index caching takes effect.

## Sub-concepts
none

## Part of
tiered-index-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Cold start is the degraded token-efficiency state encountered when an agent must load the Level 0 top index into context for the first time before session caching amortizes the cost.
