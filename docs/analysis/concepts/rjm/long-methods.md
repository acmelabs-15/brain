---
package: rjm
name: Long methods
slug: long-methods
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Long methods

## Definition — verbatim
> "| Long methods | Mix workflow and implementation |" — .claude/skills/golden-principles/references/design-programming-by-intention.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 77 | defined here | Listed in the anti-patterns table as violating separation of concerns by mixing workflow with implementation. |

## Consumes
Procedural code blocks, oversized function bodies, and monolithic routines spanning multiple screens.

## Produces
Decomposed methods, extracted subroutines, and clean separation between high-level orchestration and low-level execution.

## When applied
Identified during code reviews, file size invariant checks, and refactoring passes when function lengths exceed comprehension thresholds.

## Sub-concepts
extract-methods

## Part of
programming-by-intention

## Implementation status
defects: missing-path

## Design notes
Long methods are an anti-pattern in rjm that signal poor cohesion and mixed levels of abstraction. When a method intermingles high-level workflow decisions with low-level algorithmic operations, readability degrades and testing becomes complex. Remediating long methods through method extraction restores clarity and makes control flow instantly understandable.
