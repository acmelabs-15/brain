---
package: rjm
name: buy-vs-build-framework
slug: buy-vs-build-framework
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
  - {path: .claude/skills/business-strategy/references/obviously-awesome.md, sha256: 815282fc06999fe8b3fde92377581c77e9a167bc4e3476ea6bd50f5e7c997656}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# buy-vs-build-framework

## Definition — verbatim
> "Strategic framework for evaluating build, buy, partner, or defer decisions with four-phase process, tiered TCO analysis, and integration with decision quality tools." — .claude/skills/buy-vs-build-framework/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 60 | used here | Routing destination for new capability ideas outside established research programs. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 58 | used here | Decision mapping directing strategic build/buy/defer inquiries to buy-vs-build-framework. |
| .claude/skills/business-strategy/references/monetizing-innovation.md | 17 | used here | Routing note referring build/buy decisions to buy-vs-build-framework before pricing strategy. |
| .claude/skills/business-strategy/references/obviously-awesome.md | 28 | used here | Guidance referring capability creation decisions to buy-vs-build-framework before positioning. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 1 | defined here | Deep analysis document establishing core-versus-context and strategic analysis models. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 4 | defined here | Skill specification defining architectural requirements and components for buy-vs-build evaluation. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 2 | defined here | Skill frontmatter defining the four-phase build/buy/partner/defer evaluation methodology. |
| .claude/skills/programming-advisor/SKILL.md | 19 | used here | Delegation rule directing strategic build-versus-buy decisions (>$50K, multi-year) to buy-vs-build-framework. |

## Consumes
Proposed capability requirements, market research, candidate vendor options, and cost parameters.

## Produces
Tiered TCO analysis, scored decision matrix, reassessment triggers, and an ADR documenting build/buy/partner/defer recommendations.

## When applied
Invoked when evaluating whether to build software in-house or acquire external solutions for new capabilities exceeding tactical complexity.

## Sub-concepts
quick-tier

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path

## Design notes
A strategic evaluation methodology designed to prevent the default bias toward building custom in-house software. By enforcing a four-phase evaluation process—Core vs Context analysis, tiered TCO calculation, multi-criteria scoring, and explicit reassessment triggers—it ensures engineering investments align with strategic differentiation.
