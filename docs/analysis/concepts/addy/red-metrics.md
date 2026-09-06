---
package: addy
name: RED metrics
slug: red-metrics
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# RED metrics

## Definition — verbatim
> "Structured logging, RED metrics, OpenTelemetry tracing, symptom-based alerting - instrument as you build" — README.md:281

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 105 | applies | Recommends retrofitting RED metrics along top incident sources during brownfield adoption |
| evals/cases/observability-and-instrumentation.json | 32 | applies | Eval test case expecting RED metrics to be defined to answer on-call operating questions |
| external/observability-and-instrumentation.md | 5 | references | External catalog summary cites RED metrics as part of observability instrumentation |
| README.md | 281 | references | README skill catalog lists RED metrics under observability-and-instrumentation |

## Consumes
Service endpoints, request handlers, and runtime instrumentation libraries.

## Produces
Telemetry metrics measuring Rate (requests per second), Errors (failed requests), and Duration (latency).

## When applied
When instrumenting services or features for production observability and operational monitoring.

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
clean in docs/adoption-guide.md and evals; defects: doc-drift, orphan in external documentation; defects: doc-drift in README.md

## Design notes
RED metrics (Rate, Errors, Duration) standardize service-level monitoring so agents instrument services consistently with metrics that directly inform on-call debugging and incident response.
