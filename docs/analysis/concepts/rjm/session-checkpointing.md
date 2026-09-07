---
package: rjm
name: Session Checkpointing
slug: session-checkpointing
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session Checkpointing

## Definition — verbatim
> "8. **Session Checkpointing**: Enable pause/resume with automatic state persistence" — .agents/analysis/claude-flow-architecture-analysis.md:137

## Also called — verbatim
> "Session checkpointing enables pause/resume (Issue #174)" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:74

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 137 | defined here | Recommended as a high-value capability enabling agent workflows to pause and resume via automatic state persistence. |
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 74 | used here | Cited as a primary operational benefit of lifecycle hooks automation enabling interrupted session resumption. |

## Consumes
In-flight agent task state, context scratchpad, and execution history.

## Produces
Serialized checkpoint artifacts capturing active state for subsequent session resumption.

## When applied
Triggered periodically or at major phase transitions to protect against unplanned interruptions or context compaction.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A persistence technique enabling long-running agent workflows to snapshot execution state, active plans, and working context to disk, permitting interrupted sessions to resume without repeating completed work.
