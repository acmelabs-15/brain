---
package: rjm
name: decision-critic
slug: decision-critic
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/business-strategy/references/made-to-stick.md, sha256: 5de46c0e87278655616732e8a810a2cbbc642565c3fcd3a9a3c7a43e89177cdd}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# decision-critic

## Definition — verbatim
> "When this skill activates, you become a structured decision critic. Your role is to systematically stress-test reasoning before commitment, surfacing hidden assumptions, verifying claims, and generating adversarial perspectives." — .claude/skills/decision-critic/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 56 | used here | Recommended adversarial mechanism for stress-testing a single decision's reasoning. |
| .claude/skills/business-strategy/references/made-to-stick.md | 103 | used here | Cross-referenced as tool for validating strategic decisions and communication rationale. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 16 | used here | Recommended to validate strategic reasoning and assumptions in buy-vs-build analyses. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 42 | used here | Cited in integration points for validating buy-vs-build recommendations. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 39 | used here | Related skill for challenging strategic build vs buy recommendations. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 55 | used here | Cross-referenced for adversarial scrutiny of customer value attribute rankings. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 308 | used here | Cited in documentation/help text as downstream reviewer of CVA matrices. |
| .claude/skills/cva-analysis/SKILL.md | 278 | used here | Listed as recommended follow-up skill to challenge CVA matrix conclusions. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 3 | defined here | Defined in script docstring as the automated runner for decision critic evaluations. |
| .claude/skills/decision-critic/SKILL.md | 2 | defined here | Frontmatter name identifying the structured decision critique skill. |
| .claude/skills/decision-critic/SKILL.md | 8 | defined here | Primary markdown title establishing the decision critic skill interface. |
| .claude/skills/pre-mortem/SKILL.md | 49 | used here | Differentiated from pre-mortem: used to stress-test rationale before committing. |
| .claude/skills/review/references/decision-rigor.md | 51 | used here | Integrated in review process to verify claims and unstated assumptions in proposals. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 296 | used here | Recommended to review prior art justifications and architectural selections. |
| scripts/eval/eval-knowledge-integration.py | 116 | used here | Evaluated as one of the core skills in knowledge integration eval benchmark suite. |

## Consumes
Decision proposals, rationale narratives, architectural claims, and explicit tradeoff statements.

## Produces
Decomposed claims (C1..Cn), verified assumptions, adversarial challenges, and structured verdicts (STAND, REVISE, ESCALATE).

## When applied
When users ask to validate thinking, poke holes in decisions, criticize approaches, or stress-test tradeoffs prior to architectural commitment.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
The decision-critic skill institutionalizes adversarial review for decision rationale across the development lifecycle. By systematically decomposing proposals into explicit claims, assumptions, and constraints, independently verifying each, and formulating counter-arguments, decision-critic prevents confirmation bias and premature commitment to flawed technical plans.
