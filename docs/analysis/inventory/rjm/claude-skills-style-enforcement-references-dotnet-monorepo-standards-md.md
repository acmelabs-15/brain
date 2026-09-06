---
package: rjm
path: .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md
type: reference
bytes: 3566
unit: inv-rjm-175
in_scope_via: .claude/skills/style-enforcement/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md, sha256: 3b2ca37580d82af070bb89f7afeba53b0d1890f1652f9d0cf14ddd4e7b1f6106}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md

## Purpose — required, verbatim
> "Coding style, naming conventions, datetime handling, and project layout standards for .NET monorepos. Industry-aligned practices portable across projects." — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:9

## Design intent — required
Establishes standardized conventions for .NET monorepos covering coding style, symbol naming, datetime representation, directory layout, and modern SDK-style project configurations. It provides portable, industry-aligned guidelines derived from the .NET Runtime style and maps them directly to `.editorconfig` settings and `style-enforcement` rules (such as STYLE-010 for field naming and STYLE-005 for EOF newline). Without this reference, agents working in .NET codebases would lack clear guidance on modern project structures, leading to inconsistent naming (e.g., missing `s_`/`_` prefixes), unsafe datetime handling (e.g., `DateTime.Now` instead of UTC or `DateTimeOffset`), and legacy XML project files.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:421

## Concepts named — required, verbatim
- `StyleCop` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:15 — used here
- `Avoid Shipping the Org Chart` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:30 — defined here
- `DateTimeOffset` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:40 — used here
- `DateTime.UtcNow` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:45 — used here
- `Project Layout` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:50 — defined here
- `SDK-Style Projects` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:68 — defined here
- `Pre-SDK-style` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:82 — defined here
- `Detection rule` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:84 — defined here
- `upgrade-assistant` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:89 — used here
- `MSBuildSummaryFiles` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:97 — used here
- `MSBuild Binary Log Viewer` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:98 — used here
- `Style Enforcement Integration` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:102 — defined here
- `STYLE-010` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:108 — used here
- `STYLE-005` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:113 — used here

## Structure
- `# .NET Monorepo Standards` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:7
- `## Coding Style` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:11
- `## Naming Conventions` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:18
- `### Avoid Shipping the Org Chart` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:30
- `## DateTime Handling` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:38
- `## Project Layout` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:50
- `## SDK-Style Projects` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:68
- `### Migration` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:86
- `### Debugging Failed Migrations` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:93
- `## Style Enforcement Integration` — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:102

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:108 · Maps instance and static field prefix conventions to rule ID STYLE-010, but check_style.py:411 and SKILL.md:146 define STYLE-010 exclusively as an async method naming rule without field prefix validation.

## Observations
- Synthesizes modern .NET monorepo standards based on .NET Runtime coding guidelines, explicitly mapping rules to `.editorconfig` properties (`csharp_style_var_for_built_in_types`, `csharp_prefer_braces`, `dotnet_style_qualification_for_field`).
- Emphasizes architectural independence from organizational hierarchy in § Avoid Shipping the Org Chart ("Name components based on the problem they solve, not the team that owns them").
- Provides concrete migration instructions to SDK-style projects using Microsoft's `upgrade-assistant` tool and MSBuild log diagnostic tooling.

## Context cost
3566 bytes (~892 tokens). Invokes nothing additional.
