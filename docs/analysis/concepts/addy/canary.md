---
package: addy
name: canary
slug: canary
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# canary

## Definition — verbatim
> "4. CANARY rollout (flag ON for 5% of users)" — skills/shipping-and-launch/SKILL.md:127
> "Phase 2: New system handles 10% (canary)" — skills/deprecation-and-migration/SKILL.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 128 | used here | Phase 2 of the Strangler Pattern routing 10% of traffic to the new system. |
| skills/shipping-and-launch/SKILL.md | 127 | defined here | Step 4 of the staged rollout sequence enabling a feature flag for 5% of users. |

## Consumes
Production deploy behind a feature flag or traffic router, and established baseline telemetry metrics.

## Produces
Comparative telemetry (error rate, latency, user behavior) validating canary performance against baseline prior to wider rollout.

## When applied
Applied during staged deployment or system migration before expanding traffic beyond an initial limited test cohort.

## Sub-concepts
none

## Part of
shipping-and-launch, deprecation-and-migration

## Implementation status
clean

## Design notes
A deployment and migration technique exposing a new feature or service to a small subset (5–10%) of production traffic. Comparing canary metrics directly against the baseline population catches performance regressions and unexpected bugs before widespread impact.
