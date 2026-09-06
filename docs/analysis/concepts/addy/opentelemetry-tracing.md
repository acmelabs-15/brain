---
package: addy
name: "OpenTelemetry tracing"
slug: opentelemetry-tracing
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# OpenTelemetry tracing

## Definition — verbatim
(used, not defined)

> "Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident." — external/observability-and-instrumentation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/observability-and-instrumentation.md | 5 | used here | Listed as one of four key instrumentation capabilities in the observability catalog summary. |

## Consumes
Application request paths, service boundaries, database queries, and third-party call sites.

## Produces
Distributed traces, trace context propagation, and span performance data.

## When applied
Implemented during the Ship phase (or built into services during implementation) to ensure request journeys across distributed systems are traceable.

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
defects: doc-drift

## Design notes
OpenTelemetry tracing provides standard distributed tracing across system boundaries. Addy highlights it as an essential observability pillar so that latency bottlenecks and cross-service failures can be diagnosed without guessing.
