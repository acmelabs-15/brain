---
package: addy
name: "observability"
slug: observability
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

# observability

## Definition — verbatim
(used, not defined)

> "Instruments code so production behavior is visible and diagnosable." — external/observability-and-instrumentation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/observability-and-instrumentation.md | 5 | used here | Named in skill title, summary, and topic chip as the discipline of making software behavior visible in production. |

## Consumes
Source code, telemetry frameworks, log aggregators, and metrics backends.

## Produces
Visible system state, structured logs, RED metrics, traces, and actionable alerts.

## When applied
Instrumented during development and finalized in the Ship phase before production deployment.

## Sub-concepts
opentelemetry-tracing, symptom-based-alerting

## Part of
observability-and-instrumentation

## Implementation status
defects: doc-drift

## Design notes
Observability ensures that an agent or human operator can infer internal system health from external runtime signals. Addy mandates that observability is built in as features are implemented, rather than bolted on after an outage.
