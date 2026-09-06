---
package: addy
name: Observability Checklist
slug: observability-checklist
kind: checklist
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Observability Checklist

## Definition — verbatim
> "Quick reference for instrumenting production code. Use alongside the `observability-and-instrumentation` skill." — references/observability-checklist.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/observability-checklist.md | 1 | defined here | Reference document establishing standards and quality gates for structured logging, metrics, tracing, alerting, and pre-launch verification |

## Consumes
Production feature code, system boundaries, dependencies, and on-call operational questions

## Produces
Production-grade telemetry specifications and verified pre-launch instrumentation

## When applied
Applied when adding instrumentation or conducting pre-launch audits prior to production deployment

## Sub-concepts
metrics, distributed-tracing, alerting, dashboards, pre-launch-gate

## Part of
observability-and-instrumentation, shipping-and-launch

## Implementation status
clean

## Design notes
The Observability Checklist provides a concrete, actionable quality standard for telemetry instrumentation in addy. It anchors all telemetry to questions on-call engineers actually ask, prevents metric cardinality explosions, requires symptom-based alerting linked to runbooks, and enforces a pre-launch gate so that production behavior is observable and diagnosable from day one.
