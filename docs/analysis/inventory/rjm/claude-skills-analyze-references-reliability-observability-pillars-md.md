---
package: rjm
path: .claude/skills/analyze/references/reliability-observability-pillars.md
type: reference
bytes: 2988
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/reliability-observability-pillars.md

## Purpose — required, verbatim
> "Observability is the ability to understand a system's internal state by examining its external outputs. Use during investigation and debugging phases of analysis." — .claude/skills/analyze/references/reliability-observability-pillars.md:9

## Design intent — required
Provides an investigative framework and audit criteria for evaluating system telemetry across the three pillars of observability: structured logs, metrics (USE and RED methods), and distributed traces. It guides analysts in navigating system failure scenarios (alerts, user complaints, latency regressions) and provides a severity-graded gap analysis matrix for identifying missing telemetry, absent correlation IDs, and sensitive data leakage.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/reliability-observability-pillars.md — .claude/skills/analyze/SKILL.md:69

## Concepts named — required, verbatim
- `Observability vs Monitoring` — .claude/skills/analyze/references/reliability-observability-pillars.md:11 — defined here
- `The Three Pillars` — .claude/skills/analyze/references/reliability-observability-pillars.md:20 — defined here
- `Logs` — .claude/skills/analyze/references/reliability-observability-pillars.md:22 — defined here
- `Metrics` — .claude/skills/analyze/references/reliability-observability-pillars.md:33 — defined here
- `Counter` — .claude/skills/analyze/references/reliability-observability-pillars.md:39 — defined here
- `Gauge` — .claude/skills/analyze/references/reliability-observability-pillars.md:40 — defined here
- `Histogram` — .claude/skills/analyze/references/reliability-observability-pillars.md:41 — defined here
- `USE method` — .claude/skills/analyze/references/reliability-observability-pillars.md:45 — defined here
- `RED method` — .claude/skills/analyze/references/reliability-observability-pillars.md:46 — defined here
- `Traces` — .claude/skills/analyze/references/reliability-observability-pillars.md:50 — defined here
- `Investigation Workflow` — .claude/skills/analyze/references/reliability-observability-pillars.md:67 — defined here
- `Assessing Observability During Analysis` — .claude/skills/analyze/references/reliability-observability-pillars.md:76 — defined here
- `OpenTelemetry` — .claude/skills/analyze/references/reliability-observability-pillars.md:89 — defined here

## Structure
# Observability: Three Pillars — .claude/skills/analyze/references/reliability-observability-pillars.md:7
## Observability vs Monitoring — .claude/skills/analyze/references/reliability-observability-pillars.md:11
## The Three Pillars — .claude/skills/analyze/references/reliability-observability-pillars.md:20
### Logs — .claude/skills/analyze/references/reliability-observability-pillars.md:22
### Metrics — .claude/skills/analyze/references/reliability-observability-pillars.md:33
### Traces — .claude/skills/analyze/references/reliability-observability-pillars.md:50
## Investigation Workflow — .claude/skills/analyze/references/reliability-observability-pillars.md:67
## Assessing Observability During Analysis — .claude/skills/analyze/references/reliability-observability-pillars.md:76
## Modern Standard: OpenTelemetry — .claude/skills/analyze/references/reliability-observability-pillars.md:89

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Features a dedicated gap audit table mapping anti-patterns (unstructured logging, missing correlation IDs, lack of SLO alerting, logging PII/credentials) directly to severity classifications. Cites OpenTelemetry as the modern unifying standard. Frontmatter references `wiki/concepts/Reliability/Observability Three Pillars.md`.

## Context cost
2988 bytes, approximately 750 tokens.
