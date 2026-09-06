---
package: addy
name: EXTRACT
slug: extract
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

# EXTRACT

## Definition — verbatim
> "- [ ] Step 2: EXTRACT — isolated artifact + contract, stripped reasoning" — skills/doubt-driven-development/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 1 | defined here | Introduced as the second step in the doubt cycle. |
| skills/doubt-driven-development/SKILL.md | 56 | defined here | Defined in the doubt cycle checklist as isolating the artifact and contract while stripping reasoning. |

## Consumes
The candidate artifact, contract/specification, and the author's internal reasoning.

## Produces
An isolated payload containing only the artifact text and contract, withholding the author's claim.

## When applied
> "Pass ARTIFACT + CONTRACT only. Do NOT pass the CLAIM." — skills/doubt-driven-development/SKILL.md:106

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The second step of Doubt-Driven Development, deliberately stripping the author's conclusion and reasoning from the review payload. Handing a reviewer the conclusion biases it toward agreement; EXTRACT forces the reviewer to evaluate the artifact independently against the contract.
