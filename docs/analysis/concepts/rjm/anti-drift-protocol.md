---
package: rjm
name: Anti-Drift Protocol
slug: anti-drift-protocol
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

# Anti-Drift Protocol

## Definition — verbatim
> "Use when drift is detected: wrong approach, lost context after compaction, experimental changes that did not land, or the user flags divergence from intent." — .claude/agents/orchestrator.md:239

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 237 | defined here | Defines the detection triggers and operational guidelines for remediating agent divergence. |
| src/claude/orchestrator.md | 237 | defined here | Defines the detection triggers and operational guidelines for remediating agent divergence. |
| templates/agents/orchestrator.shared.md | 247 | defined here | Defines the detection triggers and operational guidelines for remediating agent divergence. |

## Consumes
Drift detection signals, user feedback, post-compaction context discrepancies, failed experiments.

## Produces
Alignment restoration, corrected trajectory, invocation of recovery steps.

## When applied
Invoked when the agent detects lost context, flawed assumptions, or user-flagged divergence.

## Sub-concepts
7-step-recovery

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Anti-Drift Protocol provides explicit operational instructions for halting execution when an agent wanders off intent. Rather than compounding errors with speculative fixes, it mandates recognizing drift symptoms early and triggering structured recovery before resuming task routing.
