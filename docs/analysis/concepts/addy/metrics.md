---
package: addy
name: Metrics
slug: metrics
kind: technique
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

# Metrics

## Definition — verbatim
> "- [Metrics](#metrics)" — references/observability-checklist.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/observability-checklist.md | 9 | defined here | Checklist section defining RED/USE instrumentation standards, latency percentiles, and cardinality limits |

## Consumes
Service endpoints, external dependencies, system resources (queues, pools, hosts)

## Produces
Aggregatable numeric time-series data (RED/USE) with fixed-set labels for monitoring system health and performance

## When applied
When instrumenting request paths, background workers, or infrastructure resources for operational visibility

## Sub-concepts
use, red

## Part of
observability-checklist, observability-and-instrumentation

## Implementation status
clean

## Design notes
Metrics in addy's observability architecture provide numeric time-series tracking of system performance and resource health. By mandating RED for request-driven endpoints and USE for resources, using latency histograms instead of averages, and strictly enforcing small, fixed label sets to avoid cardinality explosion, metrics reliably indicate that a problem exists before alerts fire or deeper diagnostics begin.
