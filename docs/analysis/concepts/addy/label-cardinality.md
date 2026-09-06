---
package: addy
name: label cardinality
slug: label-cardinality
kind: pattern
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

# label cardinality

## Definition — verbatim
(used, not defined)
> "Metrics avoid unbounded label cardinality" — evals/cases/observability-and-instrumentation.json:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/observability-and-instrumentation.json | 39 | used here | Specified as a quality expectation when designing metrics to prevent resource exhaustion. |

## Consumes
Metric dimension tags, labels, and telemetry configuration.

## Produces
Bounded label value sets (enums, status categories) that protect metric storage engines.

## When applied
When defining tags and dimensions on counters, histograms, or gauges.

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
clean

## Design notes
Managing `label cardinality` is a critical engineering discipline in metrics instrumentation that prevents combinatorial explosion in timeseries databases. Addy requires bounding label values to finite sets (such as HTTP method or status code class) while explicitly forbidding high-cardinality data like user IDs or UUIDs in metric dimensions. Without cardinality bounds, metric ingestion degrades, causing monitoring infrastructure to crash during production traffic surges.
