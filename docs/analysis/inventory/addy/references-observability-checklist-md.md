---
package: addy
path: references/observability-checklist.md
type: doc
bytes: 4931
unit: inv-addy-2
---

# references/observability-checklist.md

## Purpose — required, verbatim
> "# Observability Checklist\n\nQuick reference for instrumenting production code. Use alongside the `observability-and-instrumentation` skill." — references/observability-checklist.md:1-3

## Design intent — required
Provides an actionable, structured engineering checklist for instrumenting production software. It codifies operational telemetry best practices: defining 2–4 on-call questions before instrumenting, implementing structured JSON logging with correlation IDs and strict PII redaction, collecting RED metrics for endpoints and USE metrics for resources with bounded label cardinality, configuring distributed tracing with context propagation and head/tail sampling, setting symptom-based actionable alerts linked to runbooks across page/ticket tiers, designing dashboard layouts, and verifying telemetry through induced failure injection and pre-launch quality gates.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill `observability-and-instrumentation` — references/observability-checklist.md:3
- skill `security-and-hardening` — references/observability-checklist.md:30
- skill `shipping-and-launch` — references/observability-checklist.md:91

## Invoked by — required
- skill `skills/observability-and-instrumentation/SKILL.md` — skills/observability-and-instrumentation/SKILL.md:21

## Concepts named — required, verbatim
- `Observability Checklist` — references/observability-checklist.md:1 — defined here
- `observability-and-instrumentation` — references/observability-checklist.md:3 — used here
- `On-Call Questions` — references/observability-checklist.md:7,16 — defined here
- `Structured Logging` — references/observability-checklist.md:8,24 — defined here
- `Metrics` — references/observability-checklist.md:9,35 — defined here
- `Distributed Tracing` — references/observability-checklist.md:10,45 — defined here
- `Alerting` — references/observability-checklist.md:11,55 — defined here
- `Dashboards` — references/observability-checklist.md:12,65 — defined here
- `Verify the Telemetry` — references/observability-checklist.md:13,72 — defined here
- `Pre-Launch Gate` — references/observability-checklist.md:14,81 — defined here
- `correlation/request ID` — references/observability-checklist.md:27 — used here
- `security-and-hardening` — references/observability-checklist.md:30 — used here
- `PII` — references/observability-checklist.md:30 — used here
- `RED` — references/observability-checklist.md:37 — defined here
- `USE` — references/observability-checklist.md:38 — defined here
- `histogram` — references/observability-checklist.md:39 — used here
- `p50/p95/p99` — references/observability-checklist.md:39 — used here
- `label cardinality` — references/observability-checklist.md:41 — used here
- `OpenTelemetry` — references/observability-checklist.md:47 — used here
- `traceparent` — references/observability-checklist.md:49 — used here
- `tracestate` — references/observability-checklist.md:49 — used here
- `head-based sampling` — references/observability-checklist.md:53 — used here
- `tail sampling` — references/observability-checklist.md:53 — used here
- `symptom-based` — references/observability-checklist.md:57 — used here
- `runbook` — references/observability-checklist.md:59 — used here
- `SLO` — references/observability-checklist.md:60 — used here
- `page` — references/observability-checklist.md:61 — defined here
- `ticket` — references/observability-checklist.md:61 — defined here
- `shipping-and-launch` — references/observability-checklist.md:91 — used here

## Structure
- `# Observability Checklist` — line 1
- `## Table of Contents` — line 5
- `## On-Call Questions (Start Here)` — line 16
- `## Structured Logging` — line 24
- `## Metrics` — line 35
- `## Distributed Tracing` — line 45
- `## Alerting` — line 55
- `## Dashboards` — line 65
- `## Verify the Telemetry` — line 72
- `## Pre-Launch Gate` — line 81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exceptionally clear taxonomy and synthesis of observability practices. Key principles highlighted:
- Telemetry must start with 2–4 on-call questions.
- Signal differentiation: metrics indicate *that* something is wrong, traces show *where*, logs explain *why*.
- RED (Rate, Errors, Duration) for service endpoints, USE (Utilization, Saturation, Errors) for underlying resources.
- Strict bounded cardinality for metrics labels (preventing memory blowups from user IDs or raw errors).
- Clean separation between symptom alerts (page/ticket) and cause metrics (dashboards).

## Context cost
4,931 bytes (~1,232 tokens).
