---
package: addy
name: symptom-based alerts
slug: symptom-based-alerts
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# symptom-based alerts

## Definition — verbatim
(used, not defined)
> "On-call questions defined first, then structured logs, RED metrics, and symptom-based alerts that answer them" — evals/cases/observability-and-instrumentation.json:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/observability-and-instrumentation.json | 32 | used here | Listed in expected evaluation output as the required alert design pattern. |

## Consumes
User-facing SLOs, RED metrics, error rates, and latency measurements.

## Produces
Actionable alert definitions paging on visible user degradation rather than transient internal causes.

## When applied
When configuring production monitoring and paging thresholds for a service or feature.

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
clean

## Design notes
`symptom-based alerts` mandates paging on manifestations of user pain (elevated error rates, latency spikes, dropped requests) rather than internal implementation causes (high CPU, disk utilization). This ensures that alerts are strictly actionable and represent genuine incidents. Without symptom-based alerting, teams suffer from alert fatigue caused by false positives while missing outages whose causes were unmonitored.
