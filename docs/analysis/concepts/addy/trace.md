---
package: addy
name: Trace
slug: trace
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

# Trace

## Definition — verbatim
> "Per-request; usually sampled" — skills/observability-and-instrumentation/SKILL.md:48

## Also called — verbatim
- "Distributed tracing" — skills/observability-and-instrumentation/SKILL.md:119

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/observability-and-instrumentation/SKILL.md | 48 | defined here | Defined in signal table as request-level cross-service telemetry breaking down execution time by hop. |

## Consumes
Distributed spans, context propagation headers across service and asynchronous boundaries, and sampling policies.

## Produces
End-to-end directed acyclic graphs depicting request latency breakdowns across services and internal operations.

## When applied
Instrumented across network hops, database interactions, and meaningful internal units of work to answer where execution time was spent.

## Sub-concepts
none

## Part of
- observability-and-instrumentation

## Implementation status
clean

## Design notes
Distributed tracing telemetry that maps end-to-end execution paths across service boundaries, pinpointing exactly where latencies accumulate or failures occur in complex distributed architectures.
