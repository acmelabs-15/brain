---
package: rjm
name: Consensus protocols
slug: consensus-protocols
kind: technique
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

# Consensus protocols

## Definition — verbatim
> "Consensus protocols**: Defined process for resolving agent disagreements" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 46 | defined here | Architectural decision establishing defined processes for resolving agent disagreements. |

## Consumes
Specialist agent positions, confidence scores, and conflict classifications.

## Produces
Resolved consensus outcomes, voting verdicts, and escalation triggers.

## When applied
Applied whenever concurrent or reviewing agents produce conflicting evaluations on shared artifacts.

## Sub-concepts
vote, escalate

## Part of
parallel-safe-multi-agent-design

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs). Implemented in scripts/consensus/algorithms.py.

## Design notes
Formal decision rules specifying how divergent specialist agent evaluations are evaluated and synthesized into a single authoritative verdict. In ai-agents, consensus protocols replace ad-hoc human mediation with systematic majority, weighted, quorum, or escalation workflows, preventing deadlocks when agents disagree on architecture, security, or implementation details.
