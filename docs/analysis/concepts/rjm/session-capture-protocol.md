---
package: rjm
name: Session Capture Protocol
slug: session-capture-protocol
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

# Session Capture Protocol

## Definition — verbatim
> "When updating continuity state, capture behavioral signal, not background" — .claude/agents/orchestrator.md:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 255 | defined here | Defines rules for capturing high-signal behavioral decisions and filtering out routine operational noise. |
| src/claude/orchestrator.md | 255 | defined here | Defines rules for capturing high-signal behavioral decisions and filtering out routine operational noise. |
| templates/agents/orchestrator.shared.md | 265 | defined here | Defines rules for capturing high-signal behavioral decisions and filtering out routine operational noise. |

## Consumes
Session events, architectural decisions, blocker experiences, state modifications.

## Produces
High-signal per-issue handoff entries and durable Serena memory entries.

## When applied
Applied when recording continuity state and documenting session outcomes.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Session Capture Protocol separates high-value behavioral signal (decisions, blockers, state transitions) from operational noise (routine tool calls, lint checks, rejected attempts). This ensures downstream agents inherit dense, actionable context without wasting token budgets on reconstructible trivia.
