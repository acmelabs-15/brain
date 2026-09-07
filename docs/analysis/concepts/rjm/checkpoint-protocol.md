---
package: rjm
name: Checkpoint protocol
slug: checkpoint-protocol
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Checkpoint protocol

## Definition — verbatim
> "**Checkpoint protocol** (runs on every atomic unit, never on a self-assessed trigger):" — .claude/agents/implementer.md:886

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 886 | defines | Defines the atomic unit commit and progress tracking protocol for implementers. |
| .claude/agents/orchestrator.md | 292 | defines | Defines wave-based synthesis checkpoints between routing waves for orchestrators. |
| src/claude/orchestrator.md | 292 | defines | Source implementation of orchestrator wave-based fold-in and progress checkpointing. |
| templates/agents/implementer.shared.md | 856 | defines | Shared template specification for atomic commit checkpointing. |
| templates/agents/orchestrator.shared.md | 302 | defines | Shared template rules for orchestrator wave checkpointing. |

## Consumes
Verified atomic code units or returned subagent delegation responses.

## Produces
Incremental git commits and synchronized task tracker / issue handoff updates.

## When applied
Triggered on every verified atomic change in implementers, and between routing waves in orchestrators.

## Sub-concepts
none

## Part of
context-budget-management

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, cross-file-contradiction

## Design notes
Translates context budget management into concrete execution rules. For implementers, it requires committing the smallest verified unit immediately so progress survives compaction; for orchestrators, it requires folding subagent returns into synthesis incrementally rather than waiting for an entire wave to complete.
