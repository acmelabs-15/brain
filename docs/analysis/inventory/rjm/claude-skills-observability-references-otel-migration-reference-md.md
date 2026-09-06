---
package: rjm
path: .claude/skills/observability/references/otel-migration-reference.md
type: reference
bytes: 3606
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/references/otel-migration-reference.md, sha256: 9fb61670c70cb6839e200e0ca0e19771a0d1eab3ed5292345a86f8c490811bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/references/otel-migration-reference.md

## Purpose — required, verbatim
> "Migrate from legacy telemetry to OpenTelemetry (OTel) before legacy SDK retirement." — .claude/skills/observability/references/otel-migration-reference.md:9

## Design intent — required
Provides phased architectural and implementation guidance for migrating systems from legacy proprietary telemetry SDKs to standard OpenTelemetry (OTel) before retirement deadlines. It defines a four-stage migration path (Dual Ingestion, Validation, Cutover, Cleanup), establishes instrument selection rules and cardinality limits, prescribes W3C Trace Context propagation and collector-level dimension enrichment, and outlines reliability practices for telemetry exporters. Without this reference, migration projects risk data loss, metric cardinality explosion, breaking dashboard regressions, or blocking synchronous I/O performance traps in application runtimes.

## Phase — required
cross-phase

## Inputs — required
Legacy telemetry SDK configurations, target service source code, OpenTelemetry collector pipeline specifications, and metric/alert definitions.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill observability — .claude/skills/observability/SKILL.md:148

## Concepts named — required, verbatim
- `OpenTelemetry Migration Reference` — .claude/skills/observability/references/otel-migration-reference.md:7 — defined here
- `OpenTelemetry` — .claude/skills/observability/references/otel-migration-reference.md:9 — used here
- `OTel` — .claude/skills/observability/references/otel-migration-reference.md:9 — used here
- `Dual Ingestion` — .claude/skills/observability/references/otel-migration-reference.md:15 — defined here
- `Validation` — .claude/skills/observability/references/otel-migration-reference.md:16 — defined here
- `Cutover` — .claude/skills/observability/references/otel-migration-reference.md:17 — defined here
- `Cleanup` — .claude/skills/observability/references/otel-migration-reference.md:18 — defined here
- `automatic instrumentation` — .claude/skills/observability/references/otel-migration-reference.md:22 — used here
- `Custom instrumentation` — .claude/skills/observability/references/otel-migration-reference.md:23 — used here
- `ActivitySource` — .claude/skills/observability/references/otel-migration-reference.md:24 — used here
- `Meter` — .claude/skills/observability/references/otel-migration-reference.md:24 — used here
- `OTel Semantic Conventions` — .claude/skills/observability/references/otel-migration-reference.md:25 — used here
- `Counter` — .claude/skills/observability/references/otel-migration-reference.md:31 — defined here
- `Histogram` — .claude/skills/observability/references/otel-migration-reference.md:32 — defined here
- `UpDownCounter` — .claude/skills/observability/references/otel-migration-reference.md:33 — defined here
- `ObservableGauge` — .claude/skills/observability/references/otel-migration-reference.md:34 — defined here
- `Cardinality Control` — .claude/skills/observability/references/otel-migration-reference.md:36 — defined here
- `Views` — .claude/skills/observability/references/otel-migration-reference.md:39 — used here
- `W3C Trace Context` — .claude/skills/observability/references/otel-migration-reference.md:44 — used here
- `Head-based sampling` — .claude/skills/observability/references/otel-migration-reference.md:45 — used here
- `span names` — .claude/skills/observability/references/otel-migration-reference.md:46 — used here
- `span status` — .claude/skills/observability/references/otel-migration-reference.md:47 — used here
- `service.name` — .claude/skills/observability/references/otel-migration-reference.md:51 — used here
- `k8sattributesprocessor` — .claude/skills/observability/references/otel-migration-reference.md:53 — used here
- `resourcedetection` — .claude/skills/observability/references/otel-migration-reference.md:53 — used here
- `http.server.request.duration` — .claude/skills/observability/references/otel-migration-reference.md:59 — used here
- `http.server.active_requests` — .claude/skills/observability/references/otel-migration-reference.md:60 — used here
- `process.runtime.dotnet.exceptions.count` — .claude/skills/observability/references/otel-migration-reference.md:61 — used here
- `process.runtime.dotnet.gc.collections.count` — .claude/skills/observability/references/otel-migration-reference.md:62 — used here
- `process.cpu.time` — .claude/skills/observability/references/otel-migration-reference.md:63 — used here
- `Dimensionality Regression Risk` — .claude/skills/observability/references/otel-migration-reference.md:73 — defined here
- `OTel Collector` — .claude/skills/observability/references/otel-migration-reference.md:77 — used here

## Structure
# OpenTelemetry Migration Reference — .claude/skills/observability/references/otel-migration-reference.md:7
## Migration Phases — .claude/skills/observability/references/otel-migration-reference.md:11
## Instrumentation Best Practices — .claude/skills/observability/references/otel-migration-reference.md:20
## Metric Instrument Types — .claude/skills/observability/references/otel-migration-reference.md:27
## Cardinality Control — .claude/skills/observability/references/otel-migration-reference.md:36
## Tracing Practices — .claude/skills/observability/references/otel-migration-reference.md:42
## Resource Configuration — .claude/skills/observability/references/otel-migration-reference.md:49
## Recommended Standard Metrics — .claude/skills/observability/references/otel-migration-reference.md:55
## Dimensionality Regression Risk — .claude/skills/observability/references/otel-migration-reference.md:73
## Reliability Practices — .claude/skills/observability/references/otel-migration-reference.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly addresses dimensionality regression risk when moving from legacy telemetry, prescribing OpenTelemetry Collector processors as sidecars or gateways to inject infrastructure dimensions automatically rather than hardcoding them into application code.

## Context cost
3606 bytes, ~900 tokens.
