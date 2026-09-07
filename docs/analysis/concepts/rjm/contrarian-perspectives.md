---
package: rjm
name: Contrarian Perspectives
slug: contrarian-perspectives
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Contrarian Perspectives

## Definition — verbatim
(used, not defined)

> "### Contrarian Perspectives (Step 5)" — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 53 | used here | Provides Step 5 challenge questions regarding review burden asymmetry and refutation fairness. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 56 | used here | Prompts what empirical result would force admitting the proposed decision was wrong. |
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 40 | used here | Generates Step 5 challenges when survivorship bias is suspected in historical decision data. |
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 42 | used here | Formulates contrarian views on boundary, module split, and ownership decisions. |
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 42 | used here | Formulates contrarian views on risk, capacity, or probability decisions assuming thin tails. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 42 | used here | Formulates contrarian views on complex architecture proposals violating Gall's law. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 58 | used here | Generates contrarian questions examining whether a local fix produces worse systemic side-effects. |

## Consumes
Decomposed claims and assumptions with verified or uncertain statuses from Steps 1-4.

## Produces
Steel-manned counterarguments, alternative hypotheses, and opposing viewpoints challenging the primary proposal.

## When applied
Triggered in Step 5 of the decision-critic workflow during the Challenge phase.

## Sub-concepts
none

## Part of
challenge

## Implementation status
defects: missing-path

## Design notes
Contrarian Perspectives is an adversarial technique that systematically generates counter-arguments and steel-manned alternative interpretations of a proposal. It counters cognitive confirmation bias by requiring the critic to adopt the perspective of a knowledgeable skeptic before arriving at any verdict.
