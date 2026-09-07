---
package: rjm
name: Span and Memory
slug: span-and-memory
kind: pattern
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

# Span and Memory

## Definition — verbatim
> "### Span and Memory" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 14 | defined here | Recommends Span and ReadOnlySpan for stack-based, zero-allocation slicing, achieving 10/10 testability and coupling. |

## Consumes
Buffer manipulation, string parsing routines, or contiguous memory access requirements.

## Produces
Stack-based, zero-allocation slicing implementations eliminating heap allocation during data parsing.

## When applied
Applied when implementing or auditing high-throughput string or buffer parsing in .NET codebases.

## Sub-concepts
none

## Part of
allocation-free-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
`Span<T>` and `ReadOnlySpan<T>` provide type-safe, contiguous memory slicing directly on the stack. In rjm's quality scoring guidance, Span-based parsing functions receive perfect 10/10 marks in both Testability (pure, side-effect-free logic) and Coupling (no dependencies), proving that memory-conscious design reinforces clean architectural qualities.
