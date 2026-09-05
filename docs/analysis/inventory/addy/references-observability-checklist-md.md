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
verified: 2026-09-04 quote-check+coverage
---

# references/observability-checklist.md

## Purpose — required, verbatim
> "Quick reference for instrumenting production code. Use alongside the `observability-and-instrumentation` skill." — references/observability-checklist.md:3

## Design intent — required
Provides an actionable operational checklist for instrumenting production services, enforcing that telemetry directly answers concrete on-call operational questions rather than creating noise. Spanning structured JSON logging with correlation IDs, RED/USE metrics, OpenTelemetry distributed tracing, symptom-based alerting with runbooks, dashboards, staging telemetry verification, and a mandatory pre-launch gate, it ensures production systems are operable and debuggable from telemetry alone.

## Phase — required
cross-phase

## Inputs — required
- Production feature or service requiring instrumentation — references/observability-checklist.md:3, 18
- On-call operational questions (2–4 questions an on-call engineer will ask) — references/observability-checklist.md:20

## Outputs — required
- Pre-launch gate verdict verifying structured logs, RED metrics, symptom alerts, and distributed tracing before production release — references/observability-checklist.md:81-90

## Invokes — required
- skill observability-and-instrumentation — references/observability-checklist.md:3
- skill security-and-hardening — references/observability-checklist.md:30
- skill shipping-and-launch — references/observability-checklist.md:91

## Invoked by — required
- doc README.md — README.md:312
- skill observability-and-instrumentation — skills/observability-and-instrumentation/SKILL.md:203
- doc docs/getting-started.md — docs/getting-started.md:138

## Concepts named — required, verbatim
- `Observability Checklist` — references/observability-checklist.md:1 — defined here
- `On-Call Questions` — references/observability-checklist.md:16 — defined here
- `Structured Logging` — references/observability-checklist.md:24 — defined here
- `correlation/request ID` — references/observability-checklist.md:27 — used here
- `Metrics` — references/observability-checklist.md:35 — defined here
- `RED` — references/observability-checklist.md:37 — used here
- `USE` — references/observability-checklist.md:38 — used here
- `Distributed Tracing` — references/observability-checklist.md:45 — defined here
- `OpenTelemetry` — references/observability-checklist.md:47 — used here
- `Alerting` — references/observability-checklist.md:55 — defined here
- `Dashboards` — references/observability-checklist.md:65 — defined here
- `Verify the Telemetry` — references/observability-checklist.md:72 — defined here
- `Pre-Launch Gate` — references/observability-checklist.md:81 — defined here

## Structure
- # Observability Checklist — references/observability-checklist.md:1
- ## Table of Contents — references/observability-checklist.md:5
- ## On-Call Questions (Start Here) — references/observability-checklist.md:16
- ## Structured Logging — references/observability-checklist.md:24
- ## Metrics — references/observability-checklist.md:35
- ## Distributed Tracing — references/observability-checklist.md:45
- ## Alerting — references/observability-checklist.md:55
- ## Dashboards — references/observability-checklist.md:65
- ## Verify the Telemetry — references/observability-checklist.md:72
- ## Pre-Launch Gate — references/observability-checklist.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces symptom-based alerts over cause-based alerts (symptoms page on-call, causes go to dashboards, line 57), strictly limits alert severities to two tiers: page and ticket (line 61), and mandates telemetry verification in staging by diagnosing induced failures purely from telemetry without inspecting source code (line 79).

## Context cost
4,931 bytes (approx. 1,200 tokens). Pure reference checklist with zero external script or asset dependencies.
