---
package: rjm
path: .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md
type: reference
bytes: 4165
unit: inv-rjm-100
in_scope_via: .claude/skills/code-qualities-assessment/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md, sha256: 0b223c840ad1051c81c6326a132fc2e72a4d804a891b97a192498b253061cf89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md

## Purpose — required, verbatim
> "Allocation-free and performance-conscious patterns relevant to code quality scoring. These patterns affect testability, coupling, and encapsulation scores." — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:10

## Design intent — required
Calibrate code quality assessment specifically for high-throughput, low-allocation C#/.NET codebases. Identifies idiomatic .NET high-performance patterns—such as `Span<T>`/`ReadOnlySpan<T>` stack-based slicing, `ArrayPool<T>` shared buffer renting, and `ValueTask<T>` synchronous fast-path returns—and maps their architectural trade-offs to the 5 quality axes. Concurrently identifies anti-patterns that degrade scores (hot-loop allocations, value type boxing, string concatenation in loops) and migration debt indicators (legacy MSBuild project XML vs modern SDK-style projects). Without this reference, automated or human evaluators might penalize high-performance optimizations (such as flagging `ArrayPool.Shared` global pool access as improper encapsulation, or treating `Span` micro-optimizations as unnecessary complexity) instead of recognizing them as exemplary patterns.

## Phase — required
cross-phase

## Inputs — required
- C# source files under assessment targeting .NET Core / .NET 5+ runtime — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:18
- MSBuild project files (`.csproj`) inspected for `Sdk` attribute vs `ToolsVersion`/`ProjectGuid` legacy attributes — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:129

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc SKILL.md — .claude/skills/code-qualities-assessment/SKILL.md:446
- doc SKILL.md — .claude/skills/code-qualities-assessment/SKILL.md:456

## Concepts named — required, verbatim
- `Allocation-Free Patterns` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:12 — defined here
- `Span and Memory` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:14 — defined here
- `ArrayPool for Buffer Reuse` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:38 — defined here
- `ValueTask for Hot Paths` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:55 — defined here
- `Patterns That Reduce Quality Scores` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:72 — defined here
- `Allocation in Hot Loops` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:74 — defined here
- `Boxing Value Types` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:95 — defined here
- `String Concatenation in Loops` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:106 — defined here
- `SDK-Style Project Detection` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:125 — defined here
- `Quality Scoring Guidance` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:135 — defined here

## Structure
- `# .NET Performance Patterns for Quality Assessment` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:8
- `## Allocation-Free Patterns` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:12
- `### Span and Memory` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:14
- `### ArrayPool for Buffer Reuse` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:38
- `### ValueTask for Hot Paths` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:55
- `## Patterns That Reduce Quality Scores` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:72
- `### Allocation in Hot Loops (Non-Redundancy: 3/10)` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:74
- `### Boxing Value Types (Encapsulation: 4/10)` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:95
- `### String Concatenation in Loops (Non-Redundancy: 2/10)` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:106
- `## SDK-Style Project Detection` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:125
- `## Quality Scoring Guidance` — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:135

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:2 · Frontmatter cites source paths `wiki/concepts/Build/SDK-Style Projects.md` and `wiki/concepts/Design Principles/dotNET Monorepo Standards.md`, but neither file exists in the repository (the `wiki/` directory is entirely absent).
- missing-path · .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:5 · Frontmatter notes "Zero-Allocation Coroutines wiki page not found", acknowledging an external wiki reference that could not be located.
- doc-drift · .claude/skills/code-qualities-assessment/README.md:36 · Sibling file `README.md` omits `dotnet-performance-patterns.md` from its `## Files` tree, although `SKILL.md:446` and `SKILL.md:456` explicitly list it.

## Observations
- Features a calibration table (lines 137-145) directly correlating specific .NET performance constructs to expected 1-10 scores across the 5 quality dimensions.
- Extends maintainability assessment beyond source code to project files (`.csproj`), evaluating XML project structure (SDK-style vs legacy MSBuild XML) as a proxy for coupling and CI testability debt.
- Highlights architectural nuance where performance optimizations interact with clean code metrics: `ArrayPool` buffer reuse uses shared global state (encapsulation 8/10) to eliminate GC heap allocation thrash (non-redundancy 9/10).

## Context cost
4165 bytes (~1040 tokens). Pure standalone reference.
