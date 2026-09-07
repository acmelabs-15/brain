---
package: rjm
name: Coordination modes
slug: coordination-modes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Coordination modes

## Definition — verbatim
> "Coordination modes**: Start with Hierarchical (orchestrator-led), evolve to Mesh" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 47 | defined here | Architectural decision establishing Hierarchical mode with planned evolution to Mesh mode. |

## Consumes
Workflow complexity requirements and agent network topologies.

## Produces
Defined communication and execution structures (Hierarchical, Mesh).

## When applied
Applied when architecting multi-agent execution topologies, determining whether control is centralized under an orchestrator or distributed peer-to-peer.

## Sub-concepts
none

## Part of
parallel-safe-multi-agent-design

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs). Hierarchical mode implemented in scripts/workflow/parallel.py; Mesh mode deferred.

## Design notes
Structural topologies defining how multiple agents communicate, delegate, and aggregate findings. ADR-009 commits ai-agents to starting with a Hierarchical mode (where the orchestrator acts as the sole dispatcher and aggregator) before potentially evolving toward Mesh topologies, ensuring tight control and observability over agent interactions.
