---
package: rjm
name: ArrayPool for Buffer Reuse
slug: arraypool-for-buffer-reuse
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

# ArrayPool for Buffer Reuse

## Definition — verbatim
> "### ArrayPool for Buffer Reuse" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 38 | defined here | Illustrates renting buffers via ArrayPool.Shared with try/finally return semantics (8/10 encapsulation, 9/10 non-redundancy). |

## Consumes
I/O streams, binary message parsing, or transient byte buffers in high-throughput workloads.

## Produces
Rented buffer allocations returned reliably to a shared pool, avoiding repeated heap allocations.

## When applied
Applied when reading streams or processing byte buffers repeatedly in latency-critical paths.

## Sub-concepts
none

## Part of
allocation-free-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
ArrayPool buffer reuse eliminates repeated `new byte[]` allocations by renting pre-allocated arrays from `ArrayPool<T>.Shared`. The reference highlights the trade-off between shared global state (encapsulation 8/10) and heap efficiency (non-redundancy 9/10), establishing that disciplined local lifecycle management makes this shared pattern exemplary.
