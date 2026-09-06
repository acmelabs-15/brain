---
package: addy
name: telemetry
slug: telemetry
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/deprecation-and-migration/api-inventory.md, sha256: ac739ed01a61c7dea2e9ce570948cfe5443fce471fe8e3d894bb42c82a7ca6c2}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# telemetry

## Definition — verbatim
(used, not defined)
> "Adding telemetry, or shipping anything that runs in production." — external/observability-and-instrumentation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/deprecation-and-migration/api-inventory.md | 7 | references | Notes that existing telemetry records API key, route, status, and response latency. |
| external/observability-and-instrumentation.md | 5 | references | Triggers the observability-and-instrumentation skill when adding telemetry to code. |

## Consumes
Application runtime instrumentation, logging frameworks, metrics emitters, or distributed tracing libraries.

## Produces
Observable system metrics, structured logs, traces, and operational diagnostic visibility.

## When applied
> "Adding telemetry, or shipping anything that runs in production." — external/observability-and-instrumentation.md:5

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
defects: doc-drift, orphan

## Design notes
Telemetry represents the automated collection and transmission of runtime diagnostics (metrics, traces, logs) in Addy's lifecycle. It provides the empirical operational evidence required to monitor production behavior and govern deprecation transitions safely.
