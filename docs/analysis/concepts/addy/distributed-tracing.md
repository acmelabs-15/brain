---
package: addy
name: Distributed Tracing
slug: distributed-tracing
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Distributed Tracing

## Definition — verbatim
> "Use OpenTelemetry — it's the vendor-neutral standard, and auto-instrumentation covers HTTP, gRPC, and common DB clients with near-zero code:" — skills/observability-and-instrumentation/SKILL.md:121

## Also called — verbatim
`Distributed tracing` — skills/observability-and-instrumentation/SKILL.md:119

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/observability-checklist.md | 10 | defined here | Checklist section detailing OpenTelemetry initialization, context propagation across async boundaries, and span sampling |
| skills/observability-and-instrumentation/SKILL.md | 119 | defined here | Process step detailing OpenTelemetry setup, manual span insertion for critical units of work, and trace context propagation |

## Consumes
Cross-service requests, RPC calls, database queries, and asynchronous messaging boundaries

## Produces
End-to-end trace spans and timing context showing request paths across distributed components

## When applied
When implementing or configuring multi-service architectures, async queues, or database interactions

## Sub-concepts
opentelemetry

## Part of
observability-checklist, observability-and-instrumentation

## Implementation status
clean

## Design notes
Distributed Tracing in addy tracks execution flow and timing across service and async boundaries using OpenTelemetry. Where metrics indicate that an issue exists and logs reveal why an invariant failed, distributed traces pinpoint where latency or errors occurred along the request path, ensuring cross-boundary visibility without manual correlation guesswork.
