---
package: rjm
name: Event-Driven TODO Review
slug: event-driven-todo-review
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

# Event-Driven TODO Review

## Definition — verbatim
> "Apply Context Maintenance after phase completion, major transitions, interruptions, and before asking the user anything." — .claude/agents/orchestrator.md:253

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 251 | defined here | Directs periodic synchronization of the task tracker and plan at key lifecycle events. |
| src/claude/orchestrator.md | 251 | defined here | Directs periodic synchronization of the task tracker and plan at key lifecycle events. |
| templates/agents/orchestrator.shared.md | 261 | defined here | Directs periodic synchronization of the task tracker and plan at key lifecycle events. |

## Consumes
Lifecycle milestone events, phase transitions, user interruptions, plan state.

## Produces
Synchronized plan and TODO tracker reflecting actual progress and next actions.

## When applied
Triggered on phase completion, major transitions, interruptions, or prior to user questions.

## Sub-concepts
none

## Part of
context-maintenance

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
Event-Driven TODO Review establishes explicit trigger points for updating task tracking state. By mandating that the plan and TODO list be brought into alignment immediately upon state-changing events rather than continuously or after drift has already occurred, it keeps coordination artifacts accurate and reliable.
