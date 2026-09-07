---
package: matt
name: Worth exploring
slug: worth-exploring
kind: gate
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Worth exploring

## Definition — verbatim
> "| `Worth exploring` | Plausible deepening, but the payoff depends on where the code is going next. |" — docs/engineering/improve-codebase-architecture.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 43 | defined here | Defines the Worth exploring badge for plausible module deepenings whose payoff depends on future trajectory. |
| external/improve-codebase-architecture.md | 44 | defined here | Explains the Worth exploring badge criteria in candidate reviews. |

## Consumes
An evaluated architectural deepening candidate.

## Produces
A moderate-confidence classification where refactoring value is contingent on planned feature directions.

## When applied
Awarded to candidates in improve-codebase-architecture where structural benefits are conditional on near-term roadmap changes.

## Sub-concepts
none

## Part of
deepening-opportunities

## Implementation status
clean

## Design notes
Worth exploring denotes a secondary tier of architectural candidates whose value proposition is contingent on upcoming roadmap work. It prevents premature abstraction by advising developers to tackle these refactorings only if adjacent code is slated for active changes.
