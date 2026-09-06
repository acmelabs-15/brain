---
package: addy
name: OpenTelemetry
slug: opentelemetry
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# OpenTelemetry

## Definition — verbatim
> "As with tracing, the vendor-neutral path is the OpenTelemetry metrics API (same SDK and context as step 5)." — skills/observability-and-instrumentation/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 281 | used here | Catalogs OpenTelemetry tracing as a core capability of the observability skill |
| references/observability-checklist.md | 47 | used here | Mandates initializing OpenTelemetry or equivalent at service startup before other imports |
| skills/observability-and-instrumentation/SKILL.md | 97 | used here | Identifies the OpenTelemetry metrics and tracing API as the vendor-neutral instrumentation path |

## Consumes
Service initialization context, HTTP/gRPC/DB clients, request headers

## Produces
Distributed trace spans with context propagation (traceparent), metrics time series

## When applied
When instrumenting request-driven services, distributed calls, or external dependencies in the Ship phase

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
clean

## Design notes
In addy, OpenTelemetry is the canonical vendor-neutral instrumentation framework for distributed tracing and metrics APIs. It standardizes context propagation across process and network boundaries so on-call engineers can trace transactions end-to-end without vendor lock-in.
