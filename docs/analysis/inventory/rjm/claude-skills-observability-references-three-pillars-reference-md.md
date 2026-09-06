---
package: rjm
path: .claude/skills/observability/references/three-pillars-reference.md
type: reference
bytes: 2985
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/references/three-pillars-reference.md

## Purpose — required, verbatim
> "Understand a system's internal state by examining its external outputs. Three complementary signal types provide complete visibility." — .claude/skills/observability/references/three-pillars-reference.md:9

## Design intent — required
Defines the three foundational pillars of system observability—structured logs, aggregated metrics, and distributed traces—and articulates how they differ from simple passive monitoring ("why is it broken" vs "is it broken"). It establishes a correlation matrix guiding operators on which signal to start with and how to traverse across signals during incidents, details instrumentation methodologies (USE and RED methods), and maps telemetry collection directly to Site Reliability Engineering (SRE) practices including SLO/SLI tracking, error budget consumption, and chaos engineering verification. Without this reference, observability practices remain siloed, leading to uncoordinated logging, unstandardized metrics, and missing distributed trace contexts during production triage.

## Phase — required
cross-phase

## Inputs — required
System runtime signals across logs (timestamped event records), metrics (numeric time-series aggregations), and traces (distributed request journeys and spans).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill observability — .claude/skills/observability/SKILL.md:146
- reference observability — .claude/skills/review/references/observability.md:52
- reference conventions — .claude/skills/observability/references/otel-semantic-conventions.md:16

## Concepts named — required, verbatim
- `Observability Three Pillars` — .claude/skills/observability/references/three-pillars-reference.md:7 — defined here
- `Observability vs Monitoring` — .claude/skills/observability/references/three-pillars-reference.md:11 — defined here
- `Monitoring` — .claude/skills/observability/references/three-pillars-reference.md:13 — used here
- `Observability` — .claude/skills/observability/references/three-pillars-reference.md:13 — used here
- `Pillar 1: Logs` — .claude/skills/observability/references/three-pillars-reference.md:20 — defined here
- `Logs` — .claude/skills/observability/references/three-pillars-reference.md:20 — used here
- `structured logging` — .claude/skills/observability/references/three-pillars-reference.md:26 — used here
- `correlation IDs` — .claude/skills/observability/references/three-pillars-reference.md:27 — used here
- `trace ID` — .claude/skills/observability/references/three-pillars-reference.md:27 — used here
- `Pillar 2: Metrics` — .claude/skills/observability/references/three-pillars-reference.md:31 — defined here
- `Metrics` — .claude/skills/observability/references/three-pillars-reference.md:31 — used here
- `Counter` — .claude/skills/observability/references/three-pillars-reference.md:37 — defined here
- `Gauge` — .claude/skills/observability/references/three-pillars-reference.md:38 — defined here
- `Histogram` — .claude/skills/observability/references/three-pillars-reference.md:39 — defined here
- `USE method` — .claude/skills/observability/references/three-pillars-reference.md:43 — used here
- `RED method` — .claude/skills/observability/references/three-pillars-reference.md:44 — used here
- `Pillar 3: Traces` — .claude/skills/observability/references/three-pillars-reference.md:48 — defined here
- `Traces` — .claude/skills/observability/references/three-pillars-reference.md:48 — used here
- `Trace` — .claude/skills/observability/references/three-pillars-reference.md:54 — defined here
- `Span` — .claude/skills/observability/references/three-pillars-reference.md:55 — defined here
- `Context` — .claude/skills/observability/references/three-pillars-reference.md:56 — defined here
- `W3C Trace Context` — .claude/skills/observability/references/three-pillars-reference.md:60 — used here
- `Correlation Matrix` — .claude/skills/observability/references/three-pillars-reference.md:65 — defined here
- `OpenTelemetry Unification` — .claude/skills/observability/references/three-pillars-reference.md:74 — defined here
- `Relationship to SRE` — .claude/skills/observability/references/three-pillars-reference.md:85 — defined here
- `SLO` — .claude/skills/observability/references/three-pillars-reference.md:89 — used here
- `SLI` — .claude/skills/observability/references/three-pillars-reference.md:89 — used here
- `SLA` — .claude/skills/observability/references/three-pillars-reference.md:89 — used here
- `Error Budgets` — .claude/skills/observability/references/three-pillars-reference.md:90 — used here
- `Chaos Engineering` — .claude/skills/observability/references/three-pillars-reference.md:91 — used here
- `Incident Response` — .claude/skills/observability/references/three-pillars-reference.md:92 — used here

## Structure
# Observability Three Pillars — .claude/skills/observability/references/three-pillars-reference.md:7
## Observability vs Monitoring — .claude/skills/observability/references/three-pillars-reference.md:11
## Pillar 1: Logs — .claude/skills/observability/references/three-pillars-reference.md:20
## Pillar 2: Metrics — .claude/skills/observability/references/three-pillars-reference.md:31
## Pillar 3: Traces — .claude/skills/observability/references/three-pillars-reference.md:48
## Correlation Matrix — .claude/skills/observability/references/three-pillars-reference.md:65
## OpenTelemetry Unification — .claude/skills/observability/references/three-pillars-reference.md:74
## Relationship to SRE — .claude/skills/observability/references/three-pillars-reference.md:85

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a practical multi-signal correlation matrix mapping typical operational scenarios (alert fires, user complaint, performance degradation, production bug) to the correct signal sequencing path.

## Context cost
2985 bytes, ~750 tokens.
