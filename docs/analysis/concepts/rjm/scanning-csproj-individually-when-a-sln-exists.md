---
package: rjm
name: Scanning .csproj individually when a .sln exists
slug: scanning-csproj-individually-when-a-sln-exists
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scanning .csproj individually when a .sln exists

## Definition — verbatim
> "- **Scanning .csproj individually when a .sln exists.** The solution resolves" — .claude/agents/dependency-auditor.md:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 142 | defined here | Anti-pattern definition explaining that solution files must be scanned to resolve transitive dependencies. |

## Consumes
Repository .NET project layout containing both .sln and .csproj files.

## Produces
Correct invocation of `dotnet list package` targeting the solution file rather than individual project files.

## When applied
During ecosystem detection and scanning in .NET codebases.

## Sub-concepts
none

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
An anti-pattern documented in rjm's dependency auditor. Scanning individual project files when a solution file exists causes transitive dependency resolution differences, leading the scanner to miss vulnerabilities resolved only at the solution boundary.
