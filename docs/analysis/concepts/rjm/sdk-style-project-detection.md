---
package: rjm
name: SDK-Style Project Detection
slug: sdk-style-project-detection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md, sha256: 0b223c840ad1051c81c6326a132fc2e72a4d804a891b97a192498b253061cf89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SDK-Style Project Detection

## Definition — verbatim
> "## SDK-Style Project Detection" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 125 | defined here | Evaluates .csproj XML structure using the Sdk attribute to detect modern vs legacy MSBuild build configurations. |

## Consumes
`.csproj` project definition files across .NET solution directories.

## Produces
Classification of project configuration as either modern SDK-style or legacy MSBuild, flagging coupling and testability risks.

## When applied
Applied when assessing .NET project structure and configuration health during quality evaluation.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Extends code quality assessment to project configuration files. By detecting whether `.csproj` files use modern SDK-style declarations (`<Project Sdk="Microsoft.NET.Sdk">`) versus legacy MSBuild boilerplate (`ToolsVersion`, `ProjectGuid`), evaluators identify migration debt that increases coupling and degrades CI testability across platforms.
