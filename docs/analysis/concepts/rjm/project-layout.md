---
package: rjm
name: Project Layout
slug: project-layout
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

# Project Layout

## Definition — verbatim
> "## Project Layout" — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md | 50 | defined here | Defines top-level repository directories and per-component directory layout structure for .NET monorepos. |

## Consumes
Monorepo repository directory structure.

## Produces
Standardized directory organization across components (`base/`, `build/`, `docs/`, `$/COMPONENT`).

## When applied
When structuring new repositories or adding components to a .NET monorepo.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Project Layout establishes standardized directory hierarchies for top-level shared code and per-component boundaries within .NET monorepos, facilitating automated navigation by tooling and agents.
