---
package: rjm
name: Routing Algorithm
slug: routing-algorithm
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Routing Algorithm

## Definition — verbatim
> "Recon the target stack (see Target Recon). Never route on an assumed stack." — .claude/agents/orchestrator.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 118 | defined here | Defines the 8-step decision procedure governing target reconnaissance, triage, delegation, and synthesis. |
| src/claude/orchestrator.md | 118 | defined here | Defines the 8-step decision procedure governing target reconnaissance, triage, delegation, and synthesis. |
| templates/agents/orchestrator.shared.md | 129 | defined here | Defines the 8-step decision procedure governing target reconnaissance, triage, delegation, and synthesis. |

## Consumes
Target stack reconnaissance data, Cynefin complexity classification, and task decomposition structure.

## Produces
Execution route determinations (direct production, sequential routing, or parallel fan-in delegation).

## When applied
Executed by the orchestrator at the start of every user task before deciding whether to produce or delegate.

## Sub-concepts
agent-capability-matrix, handoff-contract, synthesis-protocol

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Routing Algorithm provides a structured, multi-step heuristic for determining how tasks flow through specialized agents. By enforcing target reconnaissance, Cynefin classification, and fast-paths for trivial tasks before considering multi-agent delegation, it avoids unnecessary agent fan-out and ensures disciplined handoffs.
