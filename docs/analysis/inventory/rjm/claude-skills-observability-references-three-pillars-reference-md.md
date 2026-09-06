---
package: rjm
path: .claude/skills/observability/references/three-pillars-reference.md
type: reference
bytes: 2985
unit: inv-rjm-128
in_scope_via: .claude/skills/review/references/observability.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/references/three-pillars-reference.md

## Purpose — required, verbatim
> "Understand a system's internal state by examining its external outputs. Three complementary signal types provide complete visibility." — .claude/skills/observability/references/three-pillars-reference.md:9

## Design intent — required
Foundational taxonomy reference detailing the three pillars of observability: Logs (timestamped discrete events), Metrics (numeric measurements aggregated over time), and Traces (distributed end-to-end request journeys). Defines the conceptual distinction between monitoring (detecting known failure modes with predefined alerts) and observability (exploring unknown unknowns with contextual high-cardinality data). Introduces standard SRE telemetry methodologies (USE method for resources: Utilization, Saturation, Errors; RED method for services: Rate, Errors, Duration), trace context propagation standards (W3C Trace Context), a correlation triage matrix mapping incident scenarios to investigation order, and unification under OpenTelemetry.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference observability.md — .claude/skills/review/references/observability.md:52
- reference three-pillars-reference.md — .claude/skills/observability/SKILL.md:146
- reference three-pillars-reference.md — .claude/skills/observability/references/otel-semantic-conventions.md:16

## Concepts named — required, verbatim
- `Observability vs Monitoring` — .claude/skills/observability/references/three-pillars-reference.md:11 — defined here
- `Pillar 1: Logs` — .claude/skills/observability/references/three-pillars-reference.md:20 — defined here
- `Pillar 2: Metrics` — .claude/skills/observability/references/three-pillars-reference.md:31 — defined here
- `Counter` — .claude/skills/observability/references/three-pillars-reference.md:37 — defined here
- `Gauge` — .claude/skills/observability/references/three-pillars-reference.md:38 — defined here
- `Histogram` — .claude/skills/observability/references/three-pillars-reference.md:39 — defined here
- `USE method` — .claude/skills/observability/references/three-pillars-reference.md:43 — defined here
- `RED method` — .claude/skills/observability/references/three-pillars-reference.md:44 — defined here
- `Pillar 3: Traces` — .claude/skills/observability/references/three-pillars-reference.md:48 — defined here
- `Trace` — .claude/skills/observability/references/three-pillars-reference.md:54 — defined here
- `Span` — .claude/skills/observability/references/three-pillars-reference.md:55 — defined here
- `Context` — .claude/skills/observability/references/three-pillars-reference.md:56 — defined here
- `W3C Trace Context` — .claude/skills/observability/references/three-pillars-reference.md:60 — used here
- `Correlation Matrix` — .claude/skills/observability/references/three-pillars-reference.md:65 — defined here
- `OpenTelemetry Unification` — .claude/skills/observability/references/three-pillars-reference.md:74 — defined here
- `SLO/SLI/SLA` — .claude/skills/observability/references/three-pillars-reference.md:89 — used here
- `Error Budgets` — .claude/skills/observability/references/three-pillars-reference.md:90 — used here
- `Chaos Engineering` — .claude/skills/observability/references/three-pillars-reference.md:91 — used here
- `Incident Response` — .claude/skills/observability/references/three-pillars-reference.md:92 — used here

## Structure
- `# Observability Three Pillars` — .claude/skills/observability/references/three-pillars-reference.md:7
- `## Observability vs Monitoring` — .claude/skills/observability/references/three-pillars-reference.md:11
- `## Pillar 1: Logs` — .claude/skills/observability/references/three-pillars-reference.md:20
- `## Pillar 2: Metrics` — .claude/skills/observability/references/three-pillars-reference.md:31
- `## Pillar 3: Traces` — .claude/skills/observability/references/three-pillars-reference.md:48
- `## Correlation Matrix` — .claude/skills/observability/references/three-pillars-reference.md:65
- `## OpenTelemetry Unification` — .claude/skills/observability/references/three-pillars-reference.md:74
- `## Relationship to SRE` — .claude/skills/observability/references/three-pillars-reference.md:85

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .claude/skills/observability/references/three-pillars-reference.md:2 — Frontmatter references `source: wiki/concepts/Reliability/Observability Three Pillars.md`, but directory `sources/rjm/wiki` does not exist in repository.

## Observations
Provides a correlation triage matrix instructing operators on which telemetry pillar to start with and how to pivot depending on the investigation trigger (e.g. alerts -> metrics -> traces -> logs).

## Context cost
2985 bytes (~746 tokens).
