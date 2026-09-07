---
package: rjm
name: OpenTelemetry
slug: opentelemetry
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/observability/references/otel-migration-reference.md, sha256: 9fb61670c70cb6839e200e0ca0e19771a0d1eab3ed5292345a86f8c490811bbd}
  - {path: .claude/skills/observability/references/otel-semantic-conventions.md, sha256: 7e2b74749fe4c0049aea726658f344b495cda0e05525d52d149adeaa62316f13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# OpenTelemetry

## Definition — verbatim
> "Vendor-neutral SDK unifying all three pillars." — .claude/skills/analyze/references/reliability-observability-pillars.md:89-91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 89 | defined here | Reference standard identifying vendor-neutral telemetry unification across metrics, logs, and traces. |
| .claude/skills/observability/references/otel-migration-reference.md | 9 | used here | Migration reference guideline targeting phased adoption of OpenTelemetry prior to legacy SDK retirement. |
| .claude/skills/observability/references/otel-semantic-conventions.md | 13 | used here | Standard semantic conventions reference establishing attribute uniformity and portability across OpenTelemetry signals. |

## Consumes
Application telemetry signals, legacy metrics/traces/logs configurations.

## Produces
Unified vendor-neutral telemetry pipelines and standardized semantic attributes.

## When applied
When modernizing observability infrastructure, replacing proprietary monitoring SDKs, or standardizing cross-service telemetry.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
OpenTelemetry serves as rjm's unified, vendor-neutral standard for telemetry collection across all three observability pillars (metrics, logs, traces). Standardizing on OpenTelemetry prevents vendor lock-in, ensures cross-language portability through shared semantic conventions, and establishes a single telemetry abstraction across diverse microservices and agent execution environments.
