---
package: addy
name: RECONCILE
slug: reconcile
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

# RECONCILE

## Definition — verbatim
> "- [ ] Step 4: RECONCILE — classified every finding against the artifact text" — skills/doubt-driven-development/SKILL.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 1 | defined here | Named as the fourth stage of the doubt cycle for classifying review findings. |
| skills/doubt-driven-development/SKILL.md | 58 | defined here | Defined in the checklist as classifying every finding against the artifact text. |

## Consumes
Reviewer findings, original artifact, and authoritative contract.

## Produces
Triaged findings classified into Actionable, Valid trade-off, or Noise.

## When applied
> "After the single-model review in Step 3 above, but before RECONCILE" — skills/doubt-driven-development/SKILL.md:120

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The fourth step of Doubt-Driven Development, rigorously vetting the adversarial findings against the ground truth artifact and contract. It prevents agents from either reflexively conceding to spurious complaints or dismissing valid edge cases as noise.
