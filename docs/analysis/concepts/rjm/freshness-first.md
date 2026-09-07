---
package: rjm
name: Freshness First
slug: freshness-first
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

# Freshness First

## Definition — verbatim
> "If not using tools NOW, working with stale data" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 67 | defined here | Defined as an orchestrator reliability principle mandating active tool inspection over stale assumptions. |

## Consumes
Current repository state, file contents, and environmental information.

## Produces
Verified, real-time context derived from live tool execution rather than memory caches or stale conversation history.

## When applied
Applied whenever an agent reasons about repository files, system configurations, or dependency states.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
An operational reliability principle instructing agents to actively inspect repository files using real-time tool calls rather than assuming state or relying on memory. In rjm's orchestration design, relying on unverified memory or conversation history leads directly to hallucinations and drift.
