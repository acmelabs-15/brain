---
package: rjm
name: Probabilistic Thinking
slug: probabilistic-thinking
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Probabilistic Thinking

## Definition — verbatim
> "### 5. Probabilistic Thinking" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 80 | defined here | Thinking model replacing binary success/failure assumptions with probability distributions and confidence intervals. |
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 74 | used here | Related model explaining why naive Gaussian probability models fail when distributions exhibit heavy fat tails. |

## Consumes
Outcome estimates, risk variables, historical failure rates, and uncertainty ranges.

## Produces
Confidence intervals, probability distributions for ROI and cost models, and scenario sensitivity ranges.

## When applied
Applied during financial modeling, risk assessments, and decision critique when evaluating options under high uncertainty.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
Probabilistic thinking replaces simplistic point estimates with outcome distributions in rjm. In the buy-vs-build framework and decision critique, it guards against the illusion of certainty, ensuring that financial projections and risk analyses account for variance, confidence intervals, and tail risks rather than assuming single deterministic outcomes.
