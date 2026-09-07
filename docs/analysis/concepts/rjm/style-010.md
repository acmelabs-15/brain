---
package: rjm
name: STYLE-010
slug: style-010
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
  - {path: .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md, sha256: 3b2ca37580d82af070bb89f7afeba53b0d1890f1652f9d0cf14ddd4e7b1f6106}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STYLE-010

## Definition — verbatim
> "Rule: STYLE-010" — .claude/skills/style-enforcement/SKILL.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md | 108 | used here | Cited in integration table as mapping instance and static field prefix conventions. |
| .claude/skills/style-enforcement/scripts/check_style.py | 411 | defined here | Implemented in check_csharp_async_naming to flag async methods lacking Async suffix. |
| .claude/skills/style-enforcement/SKILL.md | 146 | defined here | Defined as warning-level rule detecting async method naming convention violations in C#. |

## Consumes
C# source files (`.cs`) and `.editorconfig` naming rules.

## Produces
Style violation diagnostics for asynchronous C# methods lacking the `Async` suffix.

## When applied
During file scanning in style-enforcement execution or pre-submission gates in the build phase.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: cross-file-contradiction

## Design notes
STYLE-010 is a style enforcement gate rule ensuring asynchronous C# methods adhere to the standard Async suffix naming convention to maintain code clarity and API consistency.
