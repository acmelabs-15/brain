---
package: rjm
name: Gaussian
slug: gaussian
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Gaussian

## Definition — verbatim
(used, not defined)

> "A fat-tailed distribution is one where extreme outcomes, the events out at the tails, happen far more often than a normal (Gaussian) distribution predicts." — .claude/skills/decision-critic/references/mental-models-fat-tails.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 11 | used here | Referenced as the thin-tailed bell-curve model whose assumptions understate risk in fat-tailed domains. |

## Consumes
Statistical data sets, variance assumptions, and risk metrics (e.g., standard deviation, Sharpe ratios).

## Produces
Comparative contrast exposing where normal distribution assumptions fail in engineering systems.

## When applied
Examined whenever an engineering proposal justifies safety or capacity using standard deviation or bell-curve assumptions.

## Sub-concepts
none

## Part of
fat-tails

## Implementation status
defects: missing-path

## Design notes
Gaussian refers to the normal bell-curve probability distribution. In rjm, it is analyzed as a cautionary baseline: while appropriate for physical phenomena, applying Gaussian assumptions to human systems, networks, and software creates catastrophic underestimation of tail risk.
