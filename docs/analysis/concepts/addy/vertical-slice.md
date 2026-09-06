---
package: addy
name: vertical slice
slug: vertical-slice
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# vertical slice

## Definition — verbatim
> "Treat each phase as a thin vertical slice — see the `incremental-implementation` skill." — skills/deprecation-and-migration/SKILL.md:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 183 | used here | Recommends structuring each phase of database migration as an independently deployable vertical slice. |

## Consumes
Complex multi-step system migrations, features, or architectural enhancements.

## Produces
Small, end-to-end, independently testable and deployable units of operational progress.

## When applied
Applied when decomposing complex migrations or feature implementations into reversible, verifiable increments.

## Sub-concepts
none

## Part of
deprecation-and-migration, incremental-implementation

## Implementation status
clean

## Design notes
An incremental engineering discipline organizing software modifications as thin, end-to-end vertical slices spanning UI, business logic, and persistence layers. In migrations, treating each step (expand, dual-write, read cutover, contract) as a vertical slice makes every stage independently deployable, verifiable, and reversible.
