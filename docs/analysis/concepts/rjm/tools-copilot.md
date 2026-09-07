---
package: rjm
name: tools_copilot
slug: tools-copilot
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tools_copilot

## Definition — verbatim
(used, not defined)

> "tools_copilot:" — CONTRIBUTING.md:232

## Also called — verbatim
> "- `tools_copilot`: Tools available in Copilot CLI" — CONTRIBUTING.md:262

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 232 | defined here | Frontmatter key declaring tool assignments for compilation targeting Copilot CLI. |

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
`tools_copilot` is a YAML frontmatter property identifier declaring platform-specific tools for the GitHub Copilot CLI environment, classified as `kind: name-only` per D-023.
