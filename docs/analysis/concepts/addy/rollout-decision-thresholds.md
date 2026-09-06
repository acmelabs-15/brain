---
package: addy
name: Rollout Decision Thresholds
slug: rollout-decision-thresholds
kind: reference
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Rollout Decision Thresholds

## Definition — verbatim
> "Use these thresholds to decide whether to advance, hold, or roll back at each stage:" — skills/shipping-and-launch/SKILL.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/shipping-and-launch/SKILL.md | 142 | defined here | Establishes quantitative metric boundaries (green/yellow/red) governing whether to advance, hold, or roll back a staged release |

## Consumes
Live application performance metrics, error rates, client JavaScript error counts, business conversion metrics.

## Produces
Deterministic operational decisions: Advance (green), Hold and investigate (yellow), or Roll back (red).

## When applied
Evaluated at each transition point of a staged rollout (e.g. after internal testing, after 24-48 hour canary, between percentage tiers).

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
Rollout Decision Thresholds replace subjective deployment guesswork with explicit, quantitative criteria for release stage transitions. By defining clear metric boundaries across error rates, P95 latency, client JavaScript exceptions, and business KPIs, addy ensures releases are advanced with confidence or halted immediately when anomalies appear.
