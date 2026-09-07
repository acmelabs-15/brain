---
package: rjm
name: Layer for its own sake
slug: layer-for-its-own-sake
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Layer for its own sake

## Definition — verbatim
> "a pass-through class whose only job is to call the next layer. If it never varies and never gets tested in isolation, delete it." — .claude/skills/software-engineering-library/references/clean-architecture.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 151 | defined here | Architectural anti-pattern defined in review guidance discouraging redundant pass-through layers that add no business behavior. |

## Consumes
Class and layer definitions, call hierarchies, test suites.

## Produces
Over-engineering finding and layer simplification or deletion recommendation.

## When applied
When an intermediate class or architectural layer acts solely as a pass-through forwarding calls without transforming data or enforcing rules.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Layer for its own sake identifies premature abstraction and pattern stacking where pass-through wrappers are introduced without adding behavior, variation, or independent testability. In rjm, architecture must remain minimal: every layer must earn its keep, and redundant intermediate shims should be excised to reduce maintenance overhead.
