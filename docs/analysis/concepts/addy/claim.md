---
package: addy
name: CLAIM
slug: claim
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CLAIM

## Definition — verbatim
> "- [ ] Step 1: CLAIM — wrote the claim + why-it-matters" — skills/doubt-driven-development/SKILL.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 1 | defined here | Introduced as the initial step in the 5-stage doubt cycle. |
| skills/doubt-driven-development/SKILL.md | 55 | defined here | Defined in the doubt cycle checklist as formulating the claim and explaining why it matters. |

## Consumes
A technical decision, assertion, or design hypothesis requiring verification.

## Produces
A concise 2-3 line statement of the decision and why getting it wrong matters.

## When applied
> "Use when correctness matters more than speed, when working in unfamiliar code, when stakes are high" — skills/doubt-driven-development/SKILL.md:3

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The first step of Doubt-Driven Development, requiring the authoring agent to explicitly formulate what decision was made and why it matters before submitting it to adversarial review. Without this step, reviews lack concrete focus and fail to probe critical assumptions.
