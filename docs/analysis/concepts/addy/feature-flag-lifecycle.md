---
package: addy
name: "feature-flag lifecycle"
slug: feature-flag-lifecycle
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# feature-flag lifecycle

## Definition — verbatim
> "**Feature flag lifecycle:**" — skills/shipping-and-launch/SKILL.md:94

## Also called — verbatim
Flag lifecycle — skills/ci-cd-and-automation/SKILL.md:227

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/shipping-and-launch.md | 1 | defined here | Cited in page metadata as an essential launch control mechanism. |
| skills/shipping-and-launch/SKILL.md | 94 | defines | Details the five stages: Deploy with flag OFF, Enable for team/beta, Gradual rollout, Monitor, and Clean up. |

## Consumes
New feature implementations, feature flag service configurations.

## Produces
Controlled gradual exposure, instant shutoff capability, and eventual removal of flag technical debt.

## When applied
Used when shipping non-trivial changes that require progressive exposure or risk containment.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
A governance technique managing feature toggles through strict lifecycle stages from dark launch to full exposure and mandatory cleanup within two weeks, preventing flag accumulation and stale code branches.
