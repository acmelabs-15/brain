---
package: addy
name: Rollback Strategy
slug: rollback-strategy
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

# Rollback Strategy

## Definition — verbatim
> "Every deployment needs a rollback plan before it happens:" — skills/shipping-and-launch/SKILL.md:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/shipping-and-launch/SKILL.md | 238 | defined here | Mandates preparing explicit rollback plans, trigger conditions, execution steps, and database migration reversions prior to deploying |

## Consumes
Release artifacts, deployment runbooks, database schema migrations, feature flag configurations.

## Produces
A documented rollback plan specifying trigger conditions (e.g. error rate > 2x baseline), sequential rollback steps, database migration reversal procedures, and time-to-rollback targets.

## When applied
Mandated before any production deployment is authorized to commence.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
Rollback Strategy enforces the core operational principle that no release may proceed without a pre-tested, documented recovery plan. By articulating unambiguous trigger conditions (such as 2x error spikes or latency regressions), sequential execution steps (flag toggle, git revert, redeploy), database rollback commands, and strict time budgets (<1 min flag, <5 min deploy, <15 min database), addy ensures incidents are resolved swiftly under pressure.
