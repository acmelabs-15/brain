---
package: rjm
name: SDK-Style Projects
slug: sdk-style-projects
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md, sha256: 3b2ca37580d82af070bb89f7afeba53b0d1890f1652f9d0cf14ddd4e7b1f6106}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SDK-Style Projects

## Definition — verbatim
> "Modern .NET project format. Required for .NET Core/5+, also supports .NET Framework." — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md | 68 | defined here | Defined as modern project format required for .NET Core/5+ with migration instructions. |

## Consumes
.NET project files (`.csproj`).

## Produces
Simplified project definitions leveraging implicit items and MSBuild SDK targets.

## When applied
When creating new .NET projects or modernizing legacy .NET Framework projects.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
SDK-Style Projects represents Microsoft's streamlined project file format that eliminates boilerplate XML and manual source file inclusions, facilitating consistent project configuration.
