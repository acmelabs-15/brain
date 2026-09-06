---
package: addy
name: good enough to ship
slug: good-enough-to-ship
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# good enough to ship

## Definition — verbatim
> "defines what \"good enough to ship\" means, before anyone argues about it in a pull request." — skills/constraint-driven-development/SKILL.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 16 | defined here | Contrast statement establishing constraint-driven development as the definition of shipping readiness |

## Consumes
Specifications, test suites, and project quality constraint definitions.

## Produces
An agreed objective threshold for code readiness prior to pull request review.

## When applied
Defined prior to feature implementation and continuously verified before merging and releasing.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
The core quality threshold philosophy of constraint-driven development. Rather than debating standards during code review, constraint-driven development defines measurable, non-negotiable criteria (diff coverage, performance budgets, zero lint errors) upfront so that shipping readiness is objectively evaluated by automated tools.
