---
package: addy
name: Feature Flag Strategy
slug: feature-flag-strategy
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

# Feature Flag Strategy

## Definition — verbatim
> "Ship behind feature flags to decouple deployment from release:" — skills/shipping-and-launch/SKILL.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/shipping-and-launch/SKILL.md | 77 | defined here | Defined as a deployment technique decoupling code deployment from feature exposure via runtime flags |

## Consumes
Application features, user targeting criteria, feature flag service or configuration store.

## Produces
Runtime feature flag checks, a 5-step flag lifecycle (Deploy off, Enable team/beta, Gradual rollout, Monitor, Clean up), and flag hygiene constraints.

## When applied
When deploying new capabilities to production that require controlled release, risk isolation, or instant kill-switch capability.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
Feature Flag Strategy is an operational technique that decouples physical deployment of code to production servers from the business release to end users. In addy, feature flags provide a controlled 5-stage rollout lifecycle, an instant mitigation mechanism against regressions, and strict hygiene constraints (ownership, expiration dates, and 2-week post-launch cleanup) to prevent codebase flag debt.
