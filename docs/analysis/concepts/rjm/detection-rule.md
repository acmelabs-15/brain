---
package: rjm
name: Detection rule
slug: detection-rule
kind: technique
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

# Detection rule

## Definition — verbatim
> "**Detection rule**: `Sdk` attribute present = SDK-style. Absence + verbose XML = legacy." — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md | 84 | defined here | Heuristic rule for distinguishing SDK-style from legacy pre-SDK-style project files. |

## Consumes
.NET project file content (`.csproj`).

## Produces
Classification of project format (SDK-style vs legacy).

## When applied
When inspecting project files during migration or style verification.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Detection rule provides a deterministic syntactic heuristic for classifying .NET project files based on the presence or absence of the `Sdk` XML attribute.
