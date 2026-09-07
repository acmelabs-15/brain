---
package: rjm
name: @imports
slug: imports
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# @imports

## Definition — verbatim
(used, not defined)

> "Passive context (AGENTS.md, @imports) achieves 100% pass rates versus 53-79% for skills by eliminating decision points." — .claude/skills/context-optimizer/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/SKILL.md | 15 | used here | Contrasts passive context mechanisms including `@imports` against skills regarding evaluation pass rates. |

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
defects: doc-drift, missing-path

## Design notes
`@imports` is a plural reference to Claude Code's `@import` file-inclusion syntax in markdown context rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
