---
package: rjm
name: Sequential execution
slug: sequential-execution
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

# Sequential execution

## Definition — verbatim
(used, not defined)

> "1. **Sequential execution**: Analyst → Architect → Implementer happens serially" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 26 | used here | Identified as a baseline system bottleneck where agents execute serially (Analyst → Architect → Implementer). |

## Consumes
Preceding agent execution artifacts and handoff logs.

## Produces
Serial execution logs and sequential agent handoffs.

## When applied
Applied as the baseline execution model prior to parallel multi-agent dispatch.

## Sub-concepts
none

## Part of
ai-agents coordination architecture

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs).

## Design notes
Sequential execution served as the foundational coordination pattern in early ai-agents workflows, ensuring that each specialist (Analyst, Architect, Implementer) ran in strict serial order with manual handoffs. While predictable and easy to reason about, it caused severe latency bottlenecks and lacked automated mechanisms to reconcile conflicting agent views, prompting the adoption of parallel-safe multi-agent dispatch and consensus protocols in ADR-009.
