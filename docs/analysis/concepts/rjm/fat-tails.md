---
package: rjm
name: Fat Tails
slug: fat-tails
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fat Tails

## Definition — verbatim
> "# Fat Tails" — .claude/skills/decision-critic/references/mental-models-fat-tails.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 7 | defined here | Reference document detailing fat-tailed distributions, risks of Gaussian assumptions, and operating moves. |
| .claude/skills/decision-critic/SKILL.md | 101 | used here | Catalogs Fat Tails reference for distrusting averages and Gaussian risk metrics in fat-tailed domains. |

## Consumes
Risk assessments, capacity plans, reliability models, and security threat evaluations.

## Produces
Tail-risk audits, buffer sizing recommendations, and warnings against Gaussian risk metrics.

## When applied
Applied when decisions rely on expected values, averages, or normal probability distributions in software engineering.

## Sub-concepts
gaussian, operating-moves, time-horizon-mismatch

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
Fat Tails is a critical probability mental model establishing that extreme outcomes in complex systems (outages, security breaches, overruns) occur far more frequently than normal bell curves predict. In rjm, it prevents planning systems to medians or averages.
