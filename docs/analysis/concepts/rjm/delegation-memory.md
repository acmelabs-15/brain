---
package: rjm
name: Delegation > Memory
slug: delegation-memory
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Delegation > Memory

## Definition — verbatim
> "Passing artifacts to sub-agents is 10x more reliable than memory" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 66 | defined here | Formulated as an orchestrator reliability principle prioritizing artifact handoffs over persistent memory. |

## Consumes
Multi-agent tasks requiring context sharing across execution stages.

## Produces
Explicit artifact files and handoff documents passed between specialized agents.

## When applied
Applied during orchestrator coordination when determining how state should transfer across agent invocations.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
An orchestrator architectural principle asserting that passing structured file artifacts between subagents is dramatically more dependable than relying on memory retrieval or shared context accumulation. It establishes explicit file-based handoffs as the primary mechanism for cross-agent coordination in rjm.
