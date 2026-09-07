---
package: rjm
name: Queen-worker model
slug: queen-worker-model
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

# Queen-worker model

## Definition — verbatim
> "Queen-worker model with consensus mechanisms" — .agents/analysis/claude-flow-architecture-analysis.md:13

## Also called — verbatim
> "14. **Queen-Worker Model**: Implement hierarchical agent coordination" — .agents/analysis/claude-flow-architecture-analysis.md:149

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 13 | defined here | Highlights the queen-worker model as the foundational coordination structure of swarm architectures. |

## Consumes
High-level task objectives, decomposition criteria, and specialized worker agent profiles.

## Produces
Hierarchical task dispatch, concurrent worker execution, and aggregated synthesis of worker outputs.

## When applied
Applied when a central coordinator delegates independent subtasks to specialized worker agents and synthesizes results.

## Sub-concepts
none

## Part of
swarm-hive-mind-architecture

## Implementation status
clean

## Design notes
A hierarchical multi-agent coordination pattern wherein a central queen (orchestrator) directs and monitors specialized worker agents, balancing autonomous execution with centralized quality control and result synthesis.
