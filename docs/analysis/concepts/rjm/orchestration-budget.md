---
package: rjm
name: Orchestration Budget
slug: orchestration-budget
kind: pattern
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

# Orchestration Budget

## Definition — verbatim
> "Two axes, not one. The delegation cap below bounds how *many* agents a task spends." — .claude/agents/orchestrator.md:317

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 315 | defined here | Establishes total delegation caps and concurrent wave limits to constrain agent sprawl and context bloat. |
| src/claude/orchestrator.md | 315 | defined here | Establishes total delegation caps and concurrent wave limits to constrain agent sprawl and context bloat. |
| templates/agents/orchestrator.shared.md | 325 | defined here | Establishes total delegation caps and concurrent wave limits to constrain agent sprawl and context bloat. |

## Consumes
Delegation count tracking, wave concurrency demands, agent task definitions.

## Produces
Bounded agent dispatch waves, early synthesis on budget exhaustion.

## When applied
Enforced continuously during subagent delegation and wave planning.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Orchestration Budget manages coordination complexity along two dimensions: total agent delegation volume (capped at 15 per task) and concurrent wave size (capped at 4). This prevents runaway subagent chains, reduces un-folded return holding costs, and avoids write conflicts across parallel agents.
