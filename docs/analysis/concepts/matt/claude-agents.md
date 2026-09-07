---
package: matt
name: claude agents
slug: claude-agents
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

# claude agents

## Definition — verbatim
(used, not defined)

> "the user manages it with `claude agents`." — skills/in-progress/claude-handoff/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/claude-handoff/SKILL.md | 8 | used here | Claude Code CLI command used by human operators to inspect, monitor, and manage active background agent processes. |

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
`claude agents` is an external CLI process management command in the Claude Code toolchain used to list and supervise background tasks, classified as name-only because it is a command invocation rather than an operational lifecycle concept.
