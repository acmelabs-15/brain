---
package: rjm
name: SessionStart: Context Loader
slug: sessionstart-context-loader
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
  - {path: .claude/commands/retro.md, sha256: fbb66599fec7bacf613b20b35c9178a06bce46793cdca2f019063e2ecba02014}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SessionStart: Context Loader

## Definition — verbatim
> "SessionStart: Context Loader" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 142 | defined here | Recorded in the hook implementation status table as an active SessionStart hook loading context. |
| .claude/commands/retro.md | 11 | used here | Explains that the SessionStart context loader detects unfilled auto-retrospective skeletons and alerts the operator. |

## Consumes
Session startup events (`SessionStart`), retrospective skeletons, and recent session history.

## Produces
Auto-injected context including the latest retrospective and pending retrospective reminders into the agent prompt context.

## When applied
Fired automatically at the beginning of each Claude Code agent session.

## Sub-concepts
context-loader

## Part of
lifecycle-hooks

## Implementation status
clean. Implemented in `SessionStart/invoke_context_loader.py` and narrowed by PR #5170 to stop injecting stale global handoff files while retaining retrospective loading.

## Design notes
An active lifecycle hook that runs on session initiation to automatically prime the agent with recent operational learnings and outstanding retrospective reminders, preventing context-blind session starts.
