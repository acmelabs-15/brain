---
package: matt
name: Claude Handoff
slug: claude-handoff
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
  - {path: skills/in-progress/claude-handoff/agents/openai.yaml, sha256: 2308a672978864633286fb9f0792b08657e501426b3f7883fc418d5d2eac5eb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Handoff

## Definition — verbatim
> "Hand the current conversation off to a fresh background agent that picks up the work immediately." — skills/in-progress/claude-handoff/SKILL.md:3

## Also called — verbatim
`claude-handoff` — skills/in-progress/claude-handoff/SKILL.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/claude-handoff/agents/openai.yaml | 2 | defined here | Declares the OpenAI Codex agent interface display name as "Claude Handoff". |
| skills/in-progress/claude-handoff/SKILL.md | 2 | defined here | Skill frontmatter declaring claude-handoff as an experimental background agent delegation skill. |
| skills/in-progress/README.md | 15 | used here | Catalog summary describing claude-handoff as handing off to a background agent via claude --bg. |

## Consumes
The active conversation context, recent decisions, and optional user arguments specifying the focus of the next session.

## Produces
A spawned background agent process launched via `claude --bg` seeded with a synthesized handoff summary prompt.

## When applied
When a developer wishes to hand off the current conversation to an autonomous background agent that begins execution immediately in the current working directory.

## Sub-concepts
handoff-summary

## Part of
in-progress

## Implementation status
clean

## Design notes
An experimental background delegation skill in `skills/in-progress/` that adapts the handoff concept for immediate execution. Rather than writing a static markdown document to an OS temporary directory for manual resumption, `Claude Handoff` directly spawns a detached background agent process via `claude --bg`, passing the handoff summary directly into the agent's prompt to achieve immediate asynchronous continuation.
