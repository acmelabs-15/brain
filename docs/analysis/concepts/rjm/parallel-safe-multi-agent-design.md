---
package: rjm
name: Parallel-Safe Multi-Agent Design
slug: parallel-safe-multi-agent-design
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Parallel-Safe Multi-Agent Design

## Definition — verbatim
> "ADR-009: Parallel-Safe Multi-Agent Design" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 12 | defined here | Architectural decision title establishing safe parallel multi-agent dispatch, aggregation, and consensus. |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 40 | used here | Cited to clarify that ADR-009 specified consensus and parallel dispatch rather than an unenforced 4-tier hierarchy. |

## Consumes
Independent task specifications and concurrent agent outputs.

## Produces
Parallel dispatch orchestration, merged multi-agent outputs, voting consensus decisions, and conflict escalation paths.

## When applied
Applied whenever multiple specialist agents are dispatched concurrently to analyze, critique, or implement tasks.

## Sub-concepts
parallel-dispatch, aggregation-strategies, consensus-protocols, coordination-modes, merge, vote, escalate

## Part of
ai-agents multi-agent architecture

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs). Operationalized in `scripts/workflow/parallel.py`.

## Design notes
An architectural coordination pattern that enables concurrent agent execution while providing formal aggregation strategies and consensus protocols to resolve conflicting outputs safely.
