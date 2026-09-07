---
package: rjm
name: Swarm/Hive-Mind Architecture
slug: swarm-hive-mind-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Swarm/Hive-Mind Architecture

## Definition — verbatim
> "1. **Swarm/Hive-Mind Architecture**: Queen-worker model with consensus mechanisms" — .agents/analysis/claude-flow-architecture-analysis.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 13 | defined here | Highlights swarm/hive-mind architecture combining queen-worker coordination and consensus mechanisms as a key differentiator. |

## Consumes
Task breakdown, agent role definitions, and consensus protocols.

## Produces
Decentralized and hierarchical multi-agent execution swarms capable of collective task completion.

## When applied
Evaluated during architectural research into high-concurrency multi-agent coordination models to overcome single-orchestrator bottlenecks.

## Sub-concepts
queen-worker-model, consensus-mechanisms

## Part of
none

## Implementation status
clean

## Design notes
A multi-agent coordination pattern identified in claude-flow research that organizes agents into coordinated swarms utilizing queen-worker hierarchies and consensus mechanisms, providing a high-performance alternative to sequential single-orchestrator execution.
