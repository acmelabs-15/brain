---
package: addy
name: Dashboards
slug: dashboards
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Dashboards

## Definition — verbatim
> "- [Dashboards](#dashboards)" — references/observability-checklist.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/observability-checklist.md | 12 | defined here | Checklist section defining requirements for service health dashboards, dependency health panels, and sensible default time ranges |

## Consumes
Metric streams, error rates, p99 latency queries, traffic counts, and resource saturation telemetry

## Produces
Visualized service health views answering core operational questions for on-call engineers

## When applied
Prior to production launch during telemetry setup and pre-launch review

## Sub-concepts
none

## Part of
observability-checklist, observability-and-instrumentation

## Implementation status
clean

## Design notes
Dashboards in addy serve as high-level operational visualization artifacts focused on answering key on-call questions during incidents. Rather than displaying exhaustive technical graphs that create cognitive clutter, dashboards display core service health metrics (traffic, error rate, p99 latency, saturation) and dependency health with sensible time windows, enabling rapid root-cause isolation.
