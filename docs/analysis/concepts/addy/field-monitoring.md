---
package: addy
name: field monitoring
slug: field-monitoring
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# field monitoring

## Definition — verbatim
(used, not defined)
> "A concrete guard is added after verification using a synthetic performance budget or field monitoring tied to the measured user-facing metric" — evals/cases/performance-optimization.json:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/performance-optimization.json | 49 | used here | Specified as a regression guard option tracking real user metrics in production. |

## Consumes
Real-user telemetry emissions, browser Performance APIs, and client-side error beacons.

## Produces
Production aggregate metrics and percentiles reflecting real-world user performance across diverse devices.

## When applied
Continuously active in production to safeguard against regressions under actual user conditions.

## Sub-concepts
none

## Part of
regression-guard, performance-optimization

## Implementation status
clean

## Design notes
`field monitoring` (Real User Monitoring / RUM) captures actual user experience in production, complementing synthetic lab tests. Addy utilizes field monitoring as a regression guard tied to user-facing metrics, ensuring that optimizations verified in staging perform equally well across varied network conditions and client devices. Without field monitoring, synthetic tests may report false clean bills of health while real users experience latency regressions.
