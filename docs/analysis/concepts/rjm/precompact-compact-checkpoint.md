---
package: rjm
name: PreCompact: Compact Checkpoint
slug: precompact-compact-checkpoint
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PreCompact: Compact Checkpoint

## Definition — verbatim
> "PreCompact: Compact Checkpoint" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 143 | defined here | Recorded in the status table as an active PreCompact hook saving state prior to context compaction. |

## Consumes
PreCompact lifecycle event triggered by Claude Code before context window truncation.

## Produces
Serialized work-in-progress snapshots enabling continuity across context compaction events.

## When applied
Triggered immediately prior to context window compaction.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
clean. Implemented in `PreCompact/invoke_compact_checkpoint.py` and active in the hook ledger; payload trimmed by Issue #3273 for efficiency.

## Design notes
A defensive state preservation hook designed to safeguard critical ephemeral agent state and in-flight objectives before the harness compacts the conversational context.
