---
package: matt
name: hooks.PreToolUse
slug: hooks-pretooluse
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/SKILL.md, sha256: 69b291d655626a01602b998a1836fcb93c058ede68dfafddfd71e87f17074764}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hooks.PreToolUse

## Definition — verbatim
(used, not defined)

> "If the settings file already exists, merge the hook into the existing `hooks.PreToolUse` array. Don't overwrite other settings." — skills/misc/git-guardrails-claude-code/SKILL.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/SKILL.md | 81 | used here | Specifies the JSON configuration path where PreToolUse hooks are merged into settings.json. |

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
A configuration object key path in Claude Code's settings.json schema, classified as name-only because it is a JSON property identifier rather than a development lifecycle concept.
