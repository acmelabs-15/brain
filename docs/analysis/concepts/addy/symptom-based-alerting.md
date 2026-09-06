---
package: addy
name: "symptom-based alerting"
slug: symptom-based-alerting
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

# symptom-based alerting

## Definition — verbatim
(used, not defined)

> "Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident." — external/observability-and-instrumentation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/observability-and-instrumentation.md | 5 | used here | Listed as an essential monitoring capability in the observability skill catalog description. |

## Consumes
User-facing error rates, latency thresholds, availability signals, and RED metrics.

## Produces
High-signal alerting rules that trigger on actual user impact rather than transient system fluctuations.

## When applied
Configured during production readiness preparation in the Ship phase.

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
defects: doc-drift

## Design notes
Symptom-based alerting prioritizes notifying on user-visible degradation (e.g. elevated 5xx errors or unacceptable response latencies) rather than low-level causes (e.g. temporary CPU spikes). This reduces pager noise and keeps alerting aligned with service level objectives.
