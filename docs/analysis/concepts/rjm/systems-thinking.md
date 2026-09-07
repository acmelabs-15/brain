---
package: rjm
name: "Systems Thinking"
slug: systems-thinking
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Systems Thinking

## Definition — verbatim
> "# Systems Thinking" — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 74 | defined here | Analytical model assessing how sourcing decisions reverberate through hiring, team structure, and budget cycles. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 21 | used here | Analytical lens applied during capability value assessment to evaluate holistic systemic fit. |
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 79 | used here | Related model noting that review burden operates as a flow that unbounded claims can overflow. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 82 | used here | Related model mandating boundary and metric definitions prior to claiming system improvement. |
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 69 | used here | Related model emphasizing the need to examine the entire operational system rather than visible outputs alone. |
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 70 | used here | Related model highlighting that organizational and boundary shifts generate systemic second-order effects. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 7 | defined here | Dedicated reference guide establishing principles of feedback loops, component interactions, and emergent behavior. |
| .claude/skills/decision-critic/SKILL.md | 106 | used here | Reference library entry providing tools to trace second-order effects and feedback loops in decisions. |
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 30 | used here | XML template element designating systems thinking as a required multi-lens analysis perspective. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 130 | defined here | Lens 5 in the multi-lens framework interrogating component interactions and reinforcing/balancing feedback loops. |
| .claude/skills/skillforge/references/specification-template.md | 37 | used here | Specification template catalog entry listing systems thinking among applied analytical lenses. |

## Consumes
System boundary definitions, component interactions, workflows, and feedback mechanisms.

## Produces
Feedback loop analyses, ecosystem impact assessments, and identification of systemic bottlenecks or unintended side-effects.

## When applied
Applied during architectural reviews, critical decision evaluation, strategic buy-vs-build analysis, and skill authoring.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Systems thinking serves as an architectural anchor across rjm, preventing reductionist local optimizations. By framing agents, tooling, team workflows, and codebases as interconnected components within feedback loops, it ensures that changes in one subsystem do not destabilize overall system throughput or create catastrophic review and maintenance burdens.
