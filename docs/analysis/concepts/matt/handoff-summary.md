---
package: matt
name: handoff summary
slug: handoff-summary
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# handoff summary

## Definition — verbatim
> "Write a handoff summary of the current conversation so a fresh agent can continue the work." — skills/in-progress/claude-handoff/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/claude-handoff/SKILL.md | 8 | defined here | Synthesized prompt text passed directly into the background agent invocation command. |

## Consumes
The active conversation history, recent decisions, artifact links, and optional user arguments specifying the next session's focus.

## Produces
An ephemeral prompt string containing a "suggested skills" section and artifact pointers, with sensitive credentials and duplicated repo content redacted.

## When applied
Synthesized during `claude-handoff` execution to seed the spawned background agent's initial prompt.

## Sub-concepts
suggested-skills

## Part of
claude-handoff

## Implementation status
clean

## Design notes
In the experimental `claude-handoff` skill, a handoff summary is an ephemeral conversational synthesis artifact passed directly as a command-line argument to seed a fresh background agent. Unlike traditional disk-persisted handoff documents, the handoff summary avoids filesystem state by transferring essential context and suggested next skills directly into the child process's launch prompt.
