---
package: rjm
name: Agent Capability Matrix
slug: agent-capability-matrix
kind: reference
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

# Agent Capability Matrix

## Definition — verbatim
> "This matrix routes work to an agent by capability; it does not set models." — .claude/agents/orchestrator.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 76 | defined here | Defines the mapping table specifying which specialized agent role to use or avoid for specific tasks. |
| src/claude/orchestrator.md | 76 | defined here | Defines the mapping table specifying which specialized agent role to use or avoid for specific tasks. |
| templates/agents/orchestrator.shared.md | 87 | defined here | Defines the mapping table specifying which specialized agent role to use or avoid for specific tasks. |

## Consumes
Triage classification, task complexity analysis, and identified problem domains.

## Produces
Target agent role selections matching the capabilities required for the subtask.

## When applied
Consulted during routing decisions when delegating tasks across specialized agents.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Agent Capability Matrix decouples agent delegation from model tier selection. By categorizing 22 specialized agent roles by what they should be used for and when they should be avoided, it prevents mismatched delegations and ensures that task requirements are routed to agents equipped with suitable domain tools and behavioral constraints.
