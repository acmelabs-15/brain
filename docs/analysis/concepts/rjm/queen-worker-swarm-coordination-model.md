---
package: rjm
name: Queen-worker swarm coordination model
slug: queen-worker-swarm-coordination-model
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

# Queen-worker swarm coordination model

## Definition — verbatim
(used, not defined)

> "Queen-worker swarm coordination model" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 36 | used here | Cited from claude-flow research as a primary multi-agent swarm coordination pattern. |

## Consumes
System task decompositions and multi-agent execution graphs.

## Produces
Coordinated agent swarms operating under central orchestrator control.

## When applied
Applied when organizing complex workflows where a central coordinator delegates subtasks to specialized worker agents and synthesizes their results.

## Sub-concepts
none

## Part of
parallel-safe-multi-agent-design

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs). Operationalized in scripts/workflow/parallel.py.

## Design notes
A centralized multi-agent coordination pattern adapted from claude-flow research where a central coordinator (the orchestrator) manages and aggregates the concurrent execution of specialized worker agents. In ai-agents, this model provides structured oversight, task partitioning, and deterministic aggregation, avoiding the unpredictable interactions and state divergence of uncoordinated peer-to-peer swarms.
