---
package: addy
name: Post-Launch Verification
slug: post-launch-verification
kind: checklist
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

# Post-Launch Verification

## Definition — verbatim
(used, not defined)

> "### Post-Launch Verification" — skills/shipping-and-launch/SKILL.md:225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/shipping-and-launch/SKILL.md | 225 | defined here | Specifies a 6-point verification checklist executed during the first hour following a production deployment |

## Consumes
Completed production deployment, live service endpoints, monitoring dashboards, manual testing flows.

## Produces
Documented verification results confirming health endpoint status (HTTP 200), clean error dashboards, stable latency, manual user flow execution, log flow, and rollback readiness.

## When applied
Executed immediately within the first hour following any production launch.

## Sub-concepts
none

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
Post-Launch Verification is an immediate operational checklist executed in the golden hour after code reaches production. By mandating immediate health checks, error and latency dashboard reviews, manual user flow sanity tests, log flow confirmation, and rollback dry runs, addy ensures deployments are actively verified rather than passively assumed successful.
