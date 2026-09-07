---
package: rjm
name: Context Budget Management
slug: context-budget-management
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Context Budget Management

## Definition — verbatim
> "Your context window is finite, and you cannot see how much of it is left. Both halves matter. Commit as you go: a partial, tested, committed change survives an interrupted session, and a complete, uncommitted one dies with it." — .claude/agents/implementer.md:882

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 880 | defines | Section establishing rules for managing finite context through atomic commits and objective handoff triggers. |
| .claude/agents/orchestrator.md | 280 | defines | Orchestrator rules distinguishing token cost from attention pollution and managing worker transcripts. |
| .claude/skills/analyze/SKILL.md | 72 | applies | Reference link to context flood prevention, think-in-code, and session continuity hooks. |
| src/claude/orchestrator.md | 280 | defines | Source definition of orchestrator context budgeting and orientation duplication controls. |
| templates/agents/implementer.shared.md | 850 | defines | Shared template specification for implementer context persistence and incremental progress. |
| templates/agents/orchestrator.shared.md | 290 | defines | Shared template rules for orchestrator context management and worker isolation. |

## Consumes
Context window allocations, agent transcript exchanges, and session state.

## Produces
Compacted handoffs, persistent external issue notes, and clean session boundaries.

## When applied
Continuously applied during agent orchestration, multi-worker delegation, and implementation execution.

## Sub-concepts
checkpoint-protocol

## Part of
orchestrator, implementer

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, cross-file-contradiction

## Design notes
Manages the finite cognitive and capacity boundaries of LLM context windows. It addresses both capacity limits and attention degradation by mandating external state persistence (committing early, updating issue handoffs) and prohibiting fabricated self-estimates of remaining context tokens.
