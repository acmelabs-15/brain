---
package: addy
path: references/observability-checklist.md
type: doc
bytes: 4931
unit: inv-addy-34
deprecated: false
aliases: []
memo_inputs:
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# references/observability-checklist.md

## Purpose — required, verbatim
> "Quick reference for instrumenting production code. Use alongside the `observability-and-instrumentation` skill." — references/observability-checklist.md:3

## Design intent — required
Production telemetry and observability reference providing actionable checklists and quality gates across structured logging, RED/USE metrics, distributed tracing, symptom-based alerting, dashboards, telemetry verification, and a mandatory pre-launch gate. It ensures AI coding agents do not generate untargeted telemetry noise, mandating that every signal directly answers 2-4 concrete on-call operational questions.

## Phase — required
addy:Ship

## Inputs — required
Production code paths, endpoint definitions, external dependencies, system boundaries, and 2-4 concrete questions an on-call engineer will ask about the feature.

## Outputs — required
none

## Invokes — required
- skill observability-and-instrumentation — references/observability-checklist.md:3
- skill security-and-hardening — references/observability-checklist.md:30
- skill shipping-and-launch — references/observability-checklist.md:91

## Invoked by — required
- doc README.md — README.md:312
- doc docs/getting-started.md — docs/getting-started.md:138
- skill skills/observability-and-instrumentation — skills/observability-and-instrumentation/SKILL.md:203

## Concepts named — required, verbatim
- `Observability Checklist` — references/observability-checklist.md:1 — defined here
- `observability-and-instrumentation` — references/observability-checklist.md:3 — used here
- `Structured Logging` — references/observability-checklist.md:8, 24 — defined here
- `Metrics` — references/observability-checklist.md:9, 35 — defined here
- `Distributed Tracing` — references/observability-checklist.md:10, 45 — defined here
- `Alerting` — references/observability-checklist.md:11, 55 — defined here
- `Dashboards` — references/observability-checklist.md:12, 65 — defined here
- `Pre-Launch Gate` — references/observability-checklist.md:14, 81 — defined here
- `RED` — references/observability-checklist.md:37, 86 — defined here
- `USE` — references/observability-checklist.md:38 — defined here
- `OpenTelemetry` — references/observability-checklist.md:47 — used here
- `security-and-hardening` — references/observability-checklist.md:30 — used here
- `shipping-and-launch` — references/observability-checklist.md:91 — used here

## Structure
- # Observability Checklist
- ## Table of Contents
- ## On-Call Questions (Start Here)
- ## Structured Logging
- ## Metrics
- ## Distributed Tracing
- ## Alerting
- ## Dashboards
- ## Verify the Telemetry
- ## Pre-Launch Gate

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Cardinality safety rule: explicit prohibition of unbounded label values in metrics (no user IDs, tenant IDs, emails, raw URLs, request IDs, or error message strings) to prevent metric store explosion.
- Signal triage mapping: "metrics say that something is wrong, traces say where, logs say why" (line 22).
- Two-severity alerting rule: alerts must be symptom-based rather than cause-based, with only two allowable severities: page (user-facing, act now) and ticket (degradation, act this week).

## Context cost
4931 bytes, ~1200 tokens. Focused production telemetry and launch-gate checklist.
