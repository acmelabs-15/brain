---
package: rjm
name: dotnet_naming_rule
slug: dotnet-naming-rule
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

# dotnet_naming_rule

## Definition — verbatim
(used, not defined)

> "dotnet_naming_rule.async_methods_should_end_with_async.symbols = async_methods" — .claude/skills/style-enforcement/SKILL.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/SKILL.md | 80 | used here | Example .editorconfig naming rule configuration property prefix for C# async methods. |

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
dotnet_naming_rule is an EditorConfig property key prefix used to define .NET naming rules rather than a lifecycle concept.
