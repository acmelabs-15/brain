---
package: rjm
name: ValueTask for Hot Paths
slug: valuetask-for-hot-paths
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

# ValueTask for Hot Paths

## Definition — verbatim
> "### ValueTask for Hot Paths" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 55 | defined here | Demonstrates using ValueTask to avoid Task heap allocations when async results are frequently returned synchronously from cache. |

## Consumes
Asynchronous method declarations that frequently return pre-computed or cached values synchronously.

## Produces
Stack-allocated asynchronous returns via ValueTask structs, bypassing Task heap allocations.

## When applied
Applied on hot asynchronous code paths where cache hits or pre-existing values allow immediate synchronous return.

## Sub-concepts
none

## Part of
allocation-free-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Standard `Task<T>` forces an object allocation on the heap even when results complete synchronously. Using `ValueTask<T>` eliminates this overhead for hot paths like in-memory cache lookups, scoring 9/10 in both coupling and testability by cleanly abstracting fast synchronous completion from asynchronous storage fallbacks.
