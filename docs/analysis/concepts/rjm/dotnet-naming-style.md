---
package: rjm
name: dotnet_naming_style
slug: dotnet-naming-style
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dotnet_naming_style

## Definition — verbatim
(used, not defined)

> "dotnet_naming_style.async_suffix_style.required_suffix = Async" — .claude/skills/style-enforcement/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/SKILL.md | 84 | used here | Example .editorconfig naming style configuration property prefix requiring Async suffixes. |

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
dotnet_naming_style is an EditorConfig property key prefix used to configure .NET naming styles rather than a lifecycle concept.
