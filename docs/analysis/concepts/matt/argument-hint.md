---
package: matt
name: argument-hint
slug: argument-hint
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# argument-hint

## Definition — verbatim
(used, not defined)

> "argument-hint: \"What will the next session be used for?\"" — skills/in-progress/claude-handoff/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/claude-handoff/SKILL.md | 4 | defined here | Frontmatter configuration specifying placeholder prompt text when asking the user for next-session focus arguments. |
| skills/productivity/handoff/SKILL.md | 4 | used here | Frontmatter configuration specifying placeholder prompt guidance for session focus input. |
| skills/productivity/teach/SKILL.md | 5 | used here | Frontmatter configuration specifying placeholder prompt guidance asking what topic the user wants to learn about. |

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
`argument-hint` is a Claude Code YAML frontmatter configuration attribute providing prompt guidance in the interactive CLI when user arguments are requested, classified as name-only because it is a schema identifier rather than an operational lifecycle concept.
