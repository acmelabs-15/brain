---
package: rjm
name: Reliability Principles
slug: reliability-principles
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reliability Principles

## Definition — verbatim
(used, not defined)

> "## Reliability Principles" — .claude/agents/orchestrator.md:308

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 40 | defined here | Documented as an orchestrator prompt addition incorporating principles like Delegation > Memory, Freshness First, and Plan Before Execute. |
| .claude/agents/orchestrator.md | 308 | defined here | Establishes the core orchestrator operating principles: idempotent delegations, explicit handoffs, graceful degradation, and observability. |
| src/claude/orchestrator.md | 308 | defined here | Exact mirror of the orchestrator reliability principles in canonical source tree. |
| templates/agents/orchestrator.shared.md | 318 | defined here | Mirrors the four reliability principles across shared orchestrator agent prompt templates. |

## Consumes
Agent handoff contracts, delegation commands, error fallback routes, and orchestration logs.

## Produces
Fault-tolerant multi-agent execution, idempotent task delegations, and observable routing traces.

## When applied
Governs orchestrator behavior during task decomposition, agent delegation, error recovery, and result synthesis.

## Sub-concepts
none

## Part of
orchestrator-behavior

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); missing-path, doc-drift (.claude/agents/orchestrator.md:148); missing-path, doc-drift, cross-file-contradiction (templates/agents/orchestrator.shared.md:161)

## Design notes
`Reliability Principles` codifies essential operational invariants for autonomous agent coordination—such as ensuring delegations are safe to re-execute and that context does not silently decay across agent boundaries.
