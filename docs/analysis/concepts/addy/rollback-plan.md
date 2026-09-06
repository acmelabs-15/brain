---
package: addy
name: Rollback plan
slug: rollback-plan
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Rollback plan

## Definition — verbatim
> "Every deployment needs a rollback plan before it happens:" — skills/shipping-and-launch/SKILL.md:240

## Also called — verbatim
`Rollback plan` — commands/ship.toml:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 54 | defines | Defined as mandatory subsection of the final release decision document. |
| commands/ship.toml | 54 | defines | Mandatory section of Phase C output establishing trigger conditions and steps. |
| evals/cases/shipping-and-launch.json | 14 | applies | Asserted in test cases verifying proper deployment readiness checks. |
| skills/ci-cd-and-automation/SKILL.md | 247 | defines | Details automated rollback workflow strategies within continuous deployment pipelines. |
| skills/shipping-and-launch/SKILL.md | 243 | defines | Provides structured template with trigger conditions, steps, and recovery time targets. |

## Consumes
Deployment configuration, feature flags, database migrations, and operational monitoring metrics

## Produces
An actionable operational plan documenting trigger conditions, step-by-step reversal procedures, and recovery time objectives

## When applied
Mandatory before any deployment occurs or any GO release verdict is finalized.

## Sub-concepts
none

## Part of
ship-decision-go-no-go, shipping-and-launch, ci-cd-and-automation

## Implementation status
clean

## Design notes
A rollback plan is an indispensable release artifact in addy, establishing that every deployment must be reversible before code reaches production. It specifies measurable trigger thresholds, exact rollback steps, database migration considerations, and strict recovery time objectives.
