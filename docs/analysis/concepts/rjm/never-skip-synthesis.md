---
package: rjm
name: Never skip synthesis
slug: never-skip-synthesis
kind: pattern
package_phase: rjm:coordinator
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

# Never skip synthesis

## Definition — verbatim
> "**Never skip synthesis.** After agents return, combine findings into a single coherent output. Raw concatenation of agent responses is failure." — .claude/agents/orchestrator.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 62 | defined here | Core orchestrator directive requiring unified combination of agent outputs rather than raw concatenation. |
| src/claude/orchestrator.md | 62 | defined here | Handoff consolidation rule mandating coherent synthesis of specialist findings. |
| templates/agents/orchestrator.shared.md | 75 | defined here | Shared template standard prohibiting uncurated pass-through of subagent outputs. |

## Consumes
Disparate specialist agent outputs, review findings, and verification logs.

## Produces
A unified, reconciled synthesis resolving contradictions and presenting a singular actionable report.

## When applied
Mandatory protocol executed whenever delegating across multiple agents before returning results to the user.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Never skip synthesis enforces that the orchestrator actively consolidates, reconciles, and synthesizes specialist agent responses into a coherent whole. It explicitly defines raw concatenation of subagent messages as failure, ensuring the end user receives integrated decisions rather than fragmented, conflicting pieces.
