---
package: rjm
name: Pre-Close Sequence
slug: pre-close-sequence
kind: checklist
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

# Pre-Close Sequence

## Definition — verbatim
> "1. Verify all delegations have returned or been explicitly abandoned." — .claude/agents/orchestrator.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 219 | defined here | Defines the 6-step checklist required to cleanly terminate an orchestration session. |
| src/claude/orchestrator.md | 219 | defined here | Defines the 6-step checklist required to cleanly terminate an orchestration session. |
| templates/agents/orchestrator.shared.md | 230 | defined here | Defines the checklist required to cleanly terminate an orchestration session. |

## Consumes
Active delegation statuses, synthesis findings, delegation count, per-issue handoff template.

## Produces
Completed handoff document, stored Serena memory findings, validated exit state.

## When applied
Executed during the completion gate prior to terminating an orchestrator session.

## Sub-concepts
none

## Part of
completion-gate

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Pre-Close Sequence provides an ordered operational checklist for exiting an orchestration session. By enforcing checks on outstanding delegations, synthesis completeness, delegation budget adherence, and mandatory per-issue handoff writing, it ensures that no task remains half-finished and no session knowledge is lost.
