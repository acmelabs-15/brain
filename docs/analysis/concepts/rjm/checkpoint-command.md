---
package: rjm
name: Checkpoint Command
slug: checkpoint-command
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Checkpoint Command

## Definition — verbatim
> "# Checkpoint Command" — .claude/commands/checkpoint.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 7 | defined here | Defined as the slash command capturing durable, timestamped state snapshots during development sessions. |

## Consumes
Current conversation history, git working tree state, and active session objective.

## Produces
A timestamped, secret-redacted markdown snapshot in `.agents/checkpoints/` linked to the active session log.

## When applied
Mid-session before risky modifications, at working block boundaries, or when saving progress.

## Sub-concepts
filename-slug, collision-loop, redact-secrets, validate-first

## Part of
session-lifecycle

## Implementation status
clean

## Design notes
Checkpoint Command implements a durable mid-session state capture protocol, saving progress, decisions, open questions, and next actions to a human-readable file while updating the machine-readable session log. In rjm's architecture, this ensures continuity across agent crashes or context window truncation without losing the chain of reasoning.
