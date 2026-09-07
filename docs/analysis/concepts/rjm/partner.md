---
package: rjm
name: Partner
slug: partner
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Partner

## Definition — verbatim
> "| **Partner** | Shared value creation (rev share, co-development). Strategic alliance benefits beyond technology. Neither build nor buy individually compelling. |" — .claude/skills/buy-vs-build-framework/SKILL.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 15 | defined here | Sourcing decision matrix output option for collaborative joint ventures or co-development alliances. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 225 | defined here | Option element in specification detailing criteria for strategic partnerships and co-development. |
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 123 | used here | Alternative option key in score_decision.py evaluating shared value creation models. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 185 | defined here | Decision criteria table entry specifying conditions for joint development or strategic alliances. |

## Consumes
Shared business objectives, partner capabilities, alliance agreements, and integration models.

## Produces
Partnership framework, co-development roadmap, and revenue/value-sharing architecture.

## When applied
When shared value creation exists, neither building nor buying is individually compelling, and strategic alliances provide mutual advantage.

## Sub-concepts
co-development

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-doc

## Design notes
A strategic sourcing alternative in rjm's buy-vs-build framework that bridges building and buying. Partnering is selected when technical or business synergy enables mutual value creation (such as revenue sharing or joint co-development) that neither internal construction nor standard vendor purchase can achieve alone.
