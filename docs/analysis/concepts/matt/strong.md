---
package: matt
name: Strong
slug: strong
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

# Strong

## Definition — verbatim
> "| `Strong` | The deletion test passes clearly and the friction is real. Take these seriously. |" — docs/engineering/improve-codebase-architecture.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 42 | defined here | Defines the Strong badge for architectural candidates where deletion tests pass and friction is acute. |
| external/improve-codebase-architecture.md | 44 | defined here | Explains the Strong badge criteria in the candidate evaluation table. |

## Consumes
An evaluated architectural deepening candidate.

## Produces
A high-confidence classification indicating substantial payoff and real developer friction.

## When applied
Awarded during improve-codebase-architecture survey analysis when the deletion test passes unequivocally.

## Sub-concepts
none

## Part of
deepening-opportunities

## Implementation status
clean

## Design notes
Strong is the highest confidence badge awarded to deepening candidates in improve-codebase-architecture reports. It signals to the developer that a proposed refactor addresses genuine friction and unambiguously concentrates complexity, making it an urgent priority.
