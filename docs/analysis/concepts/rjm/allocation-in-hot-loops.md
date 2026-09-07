---
package: rjm
name: Allocation in Hot Loops
slug: allocation-in-hot-loops
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

# Allocation in Hot Loops

## Definition — verbatim
> "### Allocation in Hot Loops (Non-Redundancy: 3/10)" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 74 | defined here | Documents the anti-pattern of instantiating objects per loop iteration, assigning a 3/10 non-redundancy score. |

## Consumes
Loops and iteration constructs performing repeated object instantiations.

## Produces
Diagnostic score reduction on the non-redundancy axis (3/10) with refactoring guidance to reuse instances outside loops.

## When applied
Applied when reviewing loop structures containing `new` allocations or dynamic collection initializations.

## Sub-concepts
none

## Part of
patterns-that-reduce-quality-scores

## Implementation status
defects: missing-path, doc-drift

## Design notes
Allocation in Hot Loops flags repetitive allocations inside tight iteration constructs as a severe non-redundancy violation. It penalizes this pattern with a 3/10 score and prescribes hoisting allocations outside the loop while clearing and reusing buffers across iterations to eliminate garbage collection overhead.
