---
package: matt
name: claude --bg
slug: claude-bg
kind: name-only
package_phase: none
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

# claude --bg

## Definition — verbatim
(used, not defined)

> "launch a background agent seeded with the summary as its prompt: `claude --bg --name \"<descriptive name>\" \"<handoff summary>\"`." — skills/in-progress/claude-handoff/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/claude-handoff/SKILL.md | 8 | used here | Claude Code CLI command invocation format with background flag used to start an autonomous agent session. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`claude --bg` is an external CLI command syntax and invocation flag for Claude Code used to spawn autonomous background agent processes, classified as name-only because it is a tool invocation syntax rather than an operational lifecycle concept.
