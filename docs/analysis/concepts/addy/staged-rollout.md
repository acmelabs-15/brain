---
package: addy
name: Staged Rollout
slug: staged-rollout
kind: technique
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

# Staged Rollout

## Definition — verbatim
(used, not defined)

> "## Staged Rollout" — skills/shipping-and-launch/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/shipping-and-launch/SKILL.md | 110 | defined here | Governs the progressive deployment sequence from staging through internal testing, canary, and full release |

## Consumes
Production build artifacts, staging environment verification, feature flag controls, production monitoring metrics.

## Produces
A 6-step incremental release sequence: Staging -> Production (flag OFF) -> Team (internal) -> Canary (5%) -> Gradual increase (25% -> 50% -> 100%) -> Full rollout.

## When applied
Whenever shipping non-trivial feature increments, system refactorings, or major architectural updates to production.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
Staged Rollout is addy's release sequence methodology designed to minimize the blast radius of production defects. By incrementally advancing traffic exposure through canary and percentage cohorts while continuously comparing live metrics against baseline thresholds, teams identify issues early and can halt or revert rollouts before widespread user impact occurs.
