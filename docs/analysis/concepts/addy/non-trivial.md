---
package: addy
name: non-trivial
slug: non-trivial
kind: gate
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# non-trivial

## Definition — verbatim
> "A decision is **non-trivial** when at least one of these is true:" — skills/doubt-driven-development/SKILL.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 16 | defined here | Defines the five criteria that trigger the mandatory doubt-driven development review cycle. |

## Consumes
A proposed code modification, architectural choice, or invariant assertion.

## Produces
A gating determination of whether the decision requires fresh-context adversarial review before standing.

## When applied
Evaluated before committing any change or architectural decision.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The `non-trivial` gate establishes an explicit, objective standard for triggering doubt-driven review (branching logic, boundary crossing, unverified invariants, hidden context, irreversible blast radius), focusing adversarial scrutiny where bugs are costly while avoiding overhead on mechanical edits.
