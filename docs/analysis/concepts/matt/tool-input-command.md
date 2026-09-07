---
package: matt
name: tool_input.command
slug: tool-input-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh, sha256: 234922b83c0a1737ee7300806c21ac0f389b07aaeb65c2d71ccedafbc5e1ea4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tool_input.command

## Definition — verbatim
(used, not defined)

> "tool_input.command" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh | 4 | used here | JSON object path accessed via jq to extract the command string from Claude tool input payload. |

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
A JSON payload property path used by Claude Code tool use events to supply executed Bash commands to hooks, rather than a software development lifecycle concept.
