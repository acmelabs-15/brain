---
package: addy
name: Metric
slug: metric
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Metric

## Definition — verbatim
> "Fixed per series; cheap to query" — skills/observability-and-instrumentation/SKILL.md:47

## Also called — verbatim
- "Metrics" — skills/observability-and-instrumentation/SKILL.md:93

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/observability-and-instrumentation/SKILL.md | 47 | defined here | Defined in telemetry signal table as aggregate numeric measurement with fixed per-series query cost. |

## Consumes
Numerical measurements, latency samples, counters, and bounded label sets.

## Produces
Time-series aggregations (RED and USE patterns) plotted on dashboards and evaluated by alert rules.

## When applied
Continuously instrumented on endpoints and resources to answer whether and how often failures or latency spikes occur in aggregate.

## Sub-concepts
- cardinality

## Part of
- observability-and-instrumentation

## Implementation status
clean

## Design notes
An aggregated numerical telemetry signal designed for constant monitoring at predictable computational cost, providing immediate visibility into whether a system is deviating from operational norms.
