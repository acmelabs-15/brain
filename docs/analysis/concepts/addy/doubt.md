---
package: addy
name: DOUBT
slug: doubt
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

# DOUBT

## Definition — verbatim
> "- [ ] Step 3: DOUBT — invoked fresh-context reviewer with adversarial prompt" — skills/doubt-driven-development/SKILL.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 1 | defined here | Named as the core adversarial verification step of the doubt cycle. |
| skills/doubt-driven-development/SKILL.md | 57 | defined here | Defined in the doubt cycle checklist as invoking a fresh-context reviewer with an adversarial prompt. |

## Consumes
Isolated artifact, contract, and adversarial prompt instructions.

## Produces
Issues-only findings list surfacing hidden flaws, edge case failures, and contract breaches.

## When applied
> "### Step 3: DOUBT — Invoke the fresh-context reviewer" — skills/doubt-driven-development/SKILL.md:85

## Sub-concepts
cross-model-escalation

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The central adversarial examination step of Doubt-Driven Development, invoking an unpolluted subagent or persona instructed to find flaws rather than offer balanced praise. This breaks confirmation bias that naturally occurs when an authoring model verifies its own work.
