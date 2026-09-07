---
package: rjm
name: Hierarchical Mode
slug: hierarchical-mode
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

# Hierarchical Mode

## Definition — verbatim
> "Consensus Protocol (Hierarchical Mode)" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 94 | defines | Defines the hierarchical mode consensus protocol for orchestrator-led parallel agent coordination. |

## Consumes
Independent task specifications dispatched by an orchestrator and concurrent agent outputs.

## Produces
Merged non-conflicting artifacts, weighted voting decisions, or escalated conflict packages routed to high-level-advisor.

## When applied
Applied when coordinating multiple concurrent agents in parallel-safe workflows under an orchestrator-led hierarchy.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
An orchestrator-led multi-agent coordination pattern where a central orchestrator dispatches tasks to parallel worker agents, aggregates their independent results, and resolves disagreements using a structured protocol (merge non-conflicts, weighted vote on soft conflicts, or escalation to high-level-advisor). Without it, multi-agent workflows either remain constrained to slow serial execution or risk chaotic, unresolved contradictions.
