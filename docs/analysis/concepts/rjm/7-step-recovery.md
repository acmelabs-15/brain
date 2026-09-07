---
package: rjm
name: 7-Step Recovery
slug: 7-step-recovery
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

# 7-Step Recovery

## Definition — verbatim
> "1. **ASSESS**: Is the approach fundamentally flawed? If yes, stop and re-plan before touching code." — .claude/agents/orchestrator.md:243

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 241 | defined here | Defines the structured 7-step sequence (Assess, Cleanup, Revert, Verify, Document, Implement, Resume) for recovering from errors. |
| src/claude/orchestrator.md | 241 | defined here | Defines the structured 7-step sequence (Assess, Cleanup, Revert, Verify, Document, Implement, Resume) for recovering from errors. |
| templates/agents/orchestrator.shared.md | 251 | defined here | Defines the structured 7-step sequence (Assess, Cleanup, Revert, Verify, Document, Implement, Resume) for recovering from errors. |

## Consumes
Flawed approach identification, dirty git state, temporary scratch files.

## Produces
Clean working tree, documented failure pattern in feedback log / Serena, corrected implementation plan.

## When applied
Executed during anti-drift remediation or after a major implementation error or flawed direction.

## Sub-concepts
none

## Part of
anti-drift-protocol

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The 7-Step Recovery protocol prevents thrashing and debt accumulation during unexpected failures. By enforcing a rigorous sequence—assess, cleanup scratch artifacts, revert to clean git state, verify clean status, document the failed pattern in persistent memory, implement the researched alternative, and resume—it ensures regressions are systematically dismantled before new work begins.
