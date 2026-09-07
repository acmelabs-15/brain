---
package: rjm
name: consensus mechanisms
slug: consensus-mechanisms
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# consensus mechanisms

## Definition — verbatim
> "**Multi-agent coordination MUST include consensus mechanisms for conflict resolution.**" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:40

## Also called — verbatim
> "5. **Consensus Mechanisms**: Add voting/decision protocols for multi-agent conflicts" — .agents/analysis/claude-flow-architecture-analysis.md:134

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 13 | defined here | Cites consensus mechanisms as an integral component of swarm multi-agent conflict resolution. |
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 40 | defined here | Establishes the architectural decision mandating consensus mechanisms for resolving conflicts between parallel agents. |

## Consumes
Divergent proposals, conflicting review verdicts, or competing agent recommendations.

## Produces
Deterministic consensus decisions, merged plans, or tie-break verdicts.

## When applied
Applied when multiple agents executing concurrently propose conflicting changes or require collective agreement before committing state.

## Sub-concepts
none

## Part of
parallel-safe-multi-agent-design

## Implementation status
defects: doc-drift, missing-path

## Design notes
Formal voting and agreement protocols (including majority voting, weighted roles, and quorum requirements) that resolve disagreements among parallel-executing agents without deadlocks or uncoordinated overwrites.
