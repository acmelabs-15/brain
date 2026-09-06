---
package: rjm
path: .claude/skills/slo-designer/references/slo-design-patterns.md
type: reference
bytes: 7081
unit: inv-rjm-168
in_scope_via: .claude/skills/slo-designer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slo-designer/references/slo-design-patterns.md

## Purpose — required, verbatim
> "Reference patterns for common service types based on Google SRE best practices." — .claude/skills/slo-designer/references/slo-design-patterns.md:3

## Design intent — required
Provides reusable architectural reference patterns and metric configurations for five distinct service categories (Consumer-Facing API, Internal API, Data Pipeline, Real-Time System, Batch Processing) adhering to Google SRE methodology. For each archetype, it catalogs recommended Service Level Indicators, Prometheus query examples, target values, dependency chain compounding reliability formulas, anti-patterns, and multi-window burn rate alert thresholds. Without this reference, teams defining SLOs would lack standardized baseline targets and metric calculation patterns across different system workloads.

## Phase — required
cross-phase

## Inputs — required
Service classification requirements, architecture dependency topologies, operational latency/error tolerances, and telemetry metric availability.

## Outputs — required
none (reference documentation providing architectural patterns, example PromQL and gRPC metric configurations, and burn rate tables).

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SLO Design Patterns` — .claude/skills/slo-designer/references/slo-design-patterns.md:1 — defined here
- `Google SRE best practices` — .claude/skills/slo-designer/references/slo-design-patterns.md:3 — used here
- `Pattern Selection Guide` — .claude/skills/slo-designer/references/slo-design-patterns.md:5 — defined here
- `Service Type` — .claude/skills/slo-designer/references/slo-design-patterns.md:7 — used here
- `Primary SLIs` — .claude/skills/slo-designer/references/slo-design-patterns.md:7 — used here
- `Typical Target` — .claude/skills/slo-designer/references/slo-design-patterns.md:7 — used here
- `Error Budget` — .claude/skills/slo-designer/references/slo-design-patterns.md:7 — used here
- `Consumer API` — .claude/skills/slo-designer/references/slo-design-patterns.md:9 — defined here
- `Internal API` — .claude/skills/slo-designer/references/slo-design-patterns.md:10 — defined here
- `Data Pipeline` — .claude/skills/slo-designer/references/slo-design-patterns.md:11 — defined here
- `Real-time System` — .claude/skills/slo-designer/references/slo-design-patterns.md:12 — defined here
- `Batch Processing` — .claude/skills/slo-designer/references/slo-design-patterns.md:13 — defined here
- `Consumer-Facing API Pattern` — .claude/skills/slo-designer/references/slo-design-patterns.md:15 — defined here
- `Availability` — .claude/skills/slo-designer/references/slo-design-patterns.md:28 — used here
- `Latency p99` — .claude/skills/slo-designer/references/slo-design-patterns.md:29 — used here
- `Latency p50` — .claude/skills/slo-designer/references/slo-design-patterns.md:30 — used here
- `Error Rate` — .claude/skills/slo-designer/references/slo-design-patterns.md:31 — used here
- `Internal API Pattern` — .claude/skills/slo-designer/references/slo-design-patterns.md:58 — defined here
- `Data Pipeline Pattern` — .claude/skills/slo-designer/references/slo-design-patterns.md:91 — defined here
- `Freshness` — .claude/skills/slo-designer/references/slo-design-patterns.md:104 — used here
- `Correctness` — .claude/skills/slo-designer/references/slo-design-patterns.md:105 — used here
- `Completeness` — .claude/skills/slo-designer/references/slo-design-patterns.md:106 — used here
- `Real-Time System Pattern` — .claude/skills/slo-designer/references/slo-design-patterns.md:137 — defined here
- `Dependency Chain Patterns` — .claude/skills/slo-designer/references/slo-design-patterns.md:178 — defined here
- `Chain Reliability Calculation` — .claude/skills/slo-designer/references/slo-design-patterns.md:180 — defined here
- `Circuit Breakers` — .claude/skills/slo-designer/references/slo-design-patterns.md:197 — used here
- `Fallbacks` — .claude/skills/slo-designer/references/slo-design-patterns.md:198 — used here
- `Retries with Backoff` — .claude/skills/slo-designer/references/slo-design-patterns.md:199 — used here
- `Bulkheads` — .claude/skills/slo-designer/references/slo-design-patterns.md:200 — used here
- `Anti-Patterns to Avoid` — .claude/skills/slo-designer/references/slo-design-patterns.md:202 — defined here
- `Error Budget Policy` — .claude/skills/slo-designer/references/slo-design-patterns.md:222 — used here
- `Burn Rate Reference` — .claude/skills/slo-designer/references/slo-design-patterns.md:234 — defined here
- `Multi-Window Alert Strategy` — .claude/skills/slo-designer/references/slo-design-patterns.md:247 — defined here

## Structure
# SLO Design Patterns
## Pattern Selection Guide
## Consumer-Facing API Pattern
### Consumer-Facing Characteristics
### Consumer-Facing Recommended SLIs
### Consumer-Facing Example Configuration
## Internal API Pattern
### Internal API Characteristics
### Internal API Recommended SLIs
### Internal API Example Configuration
## Data Pipeline Pattern
### Pipeline Characteristics
### Pipeline Recommended SLIs
### Pipeline Example Configuration
## Real-Time System Pattern
### Real-Time System Characteristics
### Real-Time System Recommended SLIs
### Real-Time System Example Configuration
## Dependency Chain Patterns
### Chain Reliability Calculation
### Mitigation Strategies
## Anti-Patterns to Avoid
### 1. Setting Unrealistic Targets
### 2. Too Many SLOs
### 3. SLO Higher Than Dependencies
### 4. No Error Budget Policy
### 5. SLO = SLA
## Burn Rate Reference
### Multi-Window Alert Strategy
## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .claude/skills/slo-designer/references/slo-design-patterns.md:1 · File is never referenced, loaded, or linked from SKILL.md or any other file in the repository.

## Observations
- Provides clear PromQL measurement snippets for rate and histogram quantile calculations across HTTP and gRPC services.
- Details multi-window alerting threshold rules combining 1-hour and 6-hour burn rates for page-worthy incidents vs 6-hour and 24-hour windows for ticketing.

## Context cost
7,081 bytes, approximately 1,770 tokens.
