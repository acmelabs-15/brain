---
package: rjm
name: Wardley Mapping
slug: wardley-mapping
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Wardley Mapping

## Definition — verbatim
> "Build vs buy decisions, technology evolution" — .claude/agents/analyst.md:238

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 238 | used here | Decision framework table entry recommending Wardley Mapping for build vs buy and technology evolution. |
| .claude/agents/high-level-advisor.md | 64 | used here | Strategic framework applied for situational awareness and architectural positioning. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 76 | defined here | Problem domain cross-reference classifying Wardley Mapping as a Tier 5 principal decision-making framework. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 223 | used here | Analysis artifact evaluating component evolution using Wardley Mapping principles. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 10 | used here | Specification reference embedding Wardley Mapping in the buy-vs-build decision methodology. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 408 | used here | Skill documentation incorporating evolutionary mapping into decision synthesis. |
| src/claude/analyst.md | 238 | used here | Source copy listing Wardley Mapping under analyst decision frameworks. |
| templates/agents/analyst.shared.md | 229 | used here | Shared analyst template including Wardley Mapping in the analytical framework catalog. |
| templates/agents/high-level-advisor.shared.md | 67 | used here | Shared advisory template referencing Wardley Mapping for long-term technology roadmapping. |

## Consumes
User needs, component value chains, and technology maturity assessments.

## Produces
A 2D situational awareness map positioning system components by visibility to the user and evolutionary stage.

## When applied
Applied during strategic architecture evaluations, roadmap planning, and buy-versus-build assessments.

## Sub-concepts
none

## Part of
investigation-methodology, strategic-decision

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-doc, missing-path

## Design notes
Wardley Mapping provides strategic situational awareness in rjm by mapping value chains against evolutionary stages (Genesis, Custom, Product, Commodity). It enables high-level-advisor and analyst agents to make informed build-vs-buy decisions based on component commoditization rather than intuition.
