---
package: rjm
name: Allocation-Free Patterns
slug: allocation-free-patterns
kind: reference
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

# Allocation-Free Patterns

## Definition — verbatim
> "## Allocation-Free Patterns" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 12 | defined here | Section cataloging idiomatic zero-allocation .NET constructs such as Span, ArrayPool, and ValueTask. |

## Consumes
Performance-critical source code, hot-path routines, and memory consumption requirements in .NET systems.

## Produces
Architectural patterns and idioms that eliminate heap allocation overhead without sacrificing testability or maintainability.

## When applied
Applied when reviewing and scoring high-throughput or memory-sensitive .NET routines during code quality assessment.

## Sub-concepts
- span-and-memory
- arraypool-for-buffer-reuse
- valuetask-for-hot-paths

## Part of
code-qualities-assessment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Allocation-Free Patterns identifies standard .NET techniques that avoid heap allocations on hot paths. It provides scoring calibration anchors ensuring that evaluators recognize zero-allocation idioms as high-quality implementations rather than penalizing them for non-standard abstraction patterns.
