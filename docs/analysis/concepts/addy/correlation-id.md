---
package: addy
name: correlation id
slug: correlation-id
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

# correlation id

## Definition — verbatim
(used, not defined)
> "Logs are structured events with a correlation id, not prose strings" — evals/cases/observability-and-instrumentation.json:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/observability-and-instrumentation.json | 38 | used here | Specified as an expectation for structured log evaluation to trace requests. |

## Consumes
Inbound HTTP request headers, message queue metadata, or newly generated UUID at entry boundary.

## Produces
A persistent identifier stamped on all log entries, spans, and outbound downstream requests for a transaction.

## When applied
Applied at ingress boundaries and passed through all asynchronous and inter-service call contexts.

## Sub-concepts
none

## Part of
structured-logging, observability-and-instrumentation

## Implementation status
clean

## Design notes
A `correlation id` binds disparate telemetry entries across asynchronous boundaries, database queries, and microservices into a single cohesive trace. By attaching the ID to every log line and downstream header, operators can filter entire request lifecycles instantaneously during triage. Without correlation IDs, isolating the execution sequence of a single failing request amidst concurrent traffic is nearly impossible.
