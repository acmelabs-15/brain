---
package: rjm
name: Handoff Contract
slug: handoff-contract
kind: template
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

# Handoff Contract

## Definition — verbatim
> "Every delegation includes:" — .claude/agents/orchestrator.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 139 | defined here | Defines the mandatory schema and fields required for every agent delegation block. |
| src/claude/orchestrator.md | 139 | defined here | Defines the mandatory schema and fields required for every agent delegation block. |
| templates/agents/orchestrator.shared.md | 150 | defined here | Defines the mandatory schema and fields required for every agent delegation block. |

## Consumes
Target agent role, atomic task definition, background context, output requirements, and constraints.

## Produces
A structured delegation block containing DELEGATE TO, TASK, CONTEXT, EXPECTED OUTPUT, SUCCESS CRITERIA, CONSTRAINTS, and optional TIMEBOX.

## When applied
Mandatory for every delegation dispatched by the orchestrator to a specialized agent.

## Sub-concepts
analyst-evidence-handoff

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Handoff Contract enforces explicit boundary definitions between orchestrators and subagents. By prohibiting "blind" delegations and requiring structured inputs, success criteria, and output format specifications, it ensures subagents have sufficient context while preventing ambiguous, unstructured returns that cannot be synthesized.
