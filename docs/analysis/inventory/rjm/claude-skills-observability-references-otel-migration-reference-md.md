---
package: rjm
path: .claude/skills/observability/references/otel-migration-reference.md
type: reference
bytes: 3606
unit: inv-rjm-128
in_scope_via: .claude/skills/observability/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/otel-migration-reference.md, sha256: 9fb61670c70cb6839e200e0ca0e19771a0d1eab3ed5292345a86f8c490811bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/references/otel-migration-reference.md

## Purpose — required, verbatim
> "Migrate from legacy telemetry to OpenTelemetry (OTel) before legacy SDK retirement." — .claude/skills/observability/references/otel-migration-reference.md:9

## Design intent — required
Structured guide for migrating software telemetry stacks from legacy SDKs (such as IFx) to OpenTelemetry across four disciplined migration phases: Dual Ingestion, Validation, Cutover, and Cleanup. It specifies instrumentation best practices (favoring automatic instrumentation, standardizing on ActivitySource and Meter, following OTel Semantic Conventions v1.39), metric instrument mappings, cardinality control, end-to-end W3C Trace Context propagation, standard service and infrastructure metric naming, and mitigation of dimensionality regressions via OTel Collector enrichment pipelines. Without it, migration to modern telemetry would cause metric regressions, data gaps, cardinality explosions, or breaking dashboard discrepancies.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference otel-migration-reference.md — .claude/skills/observability/SKILL.md:148
- reference OTel — .claude/skills/observability/references/otel-semantic-conventions.md:76

## Concepts named — required, verbatim
- `OpenTelemetry` — .claude/skills/observability/references/otel-migration-reference.md:9 — used here
- `Dual Ingestion` — .claude/skills/observability/references/otel-migration-reference.md:15 — defined here
- `Validation` — .claude/skills/observability/references/otel-migration-reference.md:16 — defined here
- `Cutover` — .claude/skills/observability/references/otel-migration-reference.md:17 — defined here
- `Cleanup` — .claude/skills/observability/references/otel-migration-reference.md:18 — defined here
- `ActivitySource` — .claude/skills/observability/references/otel-migration-reference.md:24 — used here
- `Meter` — .claude/skills/observability/references/otel-migration-reference.md:24 — used here
- `OTel Semantic Conventions v1.39` — .claude/skills/observability/references/otel-migration-reference.md:25 — used here
- `Counter` — .claude/skills/observability/references/otel-migration-reference.md:31 — defined here
- `Histogram` — .claude/skills/observability/references/otel-migration-reference.md:32 — defined here
- `UpDownCounter` — .claude/skills/observability/references/otel-migration-reference.md:33 — defined here
- `ObservableGauge` — .claude/skills/observability/references/otel-migration-reference.md:34 — defined here
- `W3C Trace Context` — .claude/skills/observability/references/otel-migration-reference.md:44 — used here
- `Head-based sampling` — .claude/skills/observability/references/otel-migration-reference.md:45 — used here
- `tail-based` — .claude/skills/observability/references/otel-migration-reference.md:45 — used here
- `k8sattributesprocessor` — .claude/skills/observability/references/otel-migration-reference.md:53 — used here
- `resourcedetection` — .claude/skills/observability/references/otel-migration-reference.md:53 — used here
- `Dimensionality Regression Risk` — .claude/skills/observability/references/otel-migration-reference.md:73 — defined here
- `OTel Collector` — .claude/skills/observability/references/otel-migration-reference.md:77 — used here

## Structure
- `# OpenTelemetry Migration Reference` — .claude/skills/observability/references/otel-migration-reference.md:7
- `## Migration Phases` — .claude/skills/observability/references/otel-migration-reference.md:11
- `## Instrumentation Best Practices` — .claude/skills/observability/references/otel-migration-reference.md:20
- `## Metric Instrument Types` — .claude/skills/observability/references/otel-migration-reference.md:27
- `## Cardinality Control` — .claude/skills/observability/references/otel-migration-reference.md:36
- `## Tracing Practices` — .claude/skills/observability/references/otel-migration-reference.md:42
- `## Resource Configuration` — .claude/skills/observability/references/otel-migration-reference.md:49
- `## Recommended Standard Metrics` — .claude/skills/observability/references/otel-migration-reference.md:55
- `## Dimensionality Regression Risk` — .claude/skills/observability/references/otel-migration-reference.md:73
- `## Reliability Practices` — .claude/skills/observability/references/otel-migration-reference.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .claude/skills/observability/references/otel-migration-reference.md:2 — Frontmatter references `source: wiki/concepts/Observability/OpenTelemetry Migration.md`, but directory `sources/rjm/wiki` does not exist in repository.

## Observations
Warns against hardcoding dimensions into OTel instrumentation to replace legacy SDK dimensions, recommending instead the use of OTel Collector processors (e.g. k8sattributesprocessor) in sidecar or gateway configurations.

## Context cost
3606 bytes (~902 tokens).
