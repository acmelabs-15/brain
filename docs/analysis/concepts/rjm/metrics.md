---
package: rjm
name: Metrics
slug: metrics
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
  - {path: .claude/skills/observability/references/otel-semantic-conventions.md, sha256: 7e2b74749fe4c0049aea726658f344b495cda0e05525d52d149adeaa62316f13}
  - {path: scripts/measure_context_retrieval_metrics.py, sha256: 02cfed6442a9a6f67c9374b9808c64b11b04ed0fb0791e1b287b90180ffe27ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Metrics

## Definition — verbatim
> "Numeric measurements aggregated over time." — .claude/skills/analyze/references/reliability-observability-pillars.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 33 | defined here | Subsection defining metrics as numeric aggregations over time with counter, gauge, and histogram types. |
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 42 | defined here | TypedDict class name defining metrics collection structure for skill placement performance. |
| .claude/skills/observability/references/otel-semantic-conventions.md | 36 | defined here | Signal category defining instrument types, names, and units under OpenTelemetry conventions. |
| scripts/measure_context_retrieval_metrics.py | 39 | defined here | Dataclass / class definition recording evaluation metrics for context retrieval benchmarks. |

## Consumes
Raw numeric events, durations, counters, and gauges across execution runs.

## Produces
Aggregated time-series data, dashboard visualizations, and SLI calculations.

## When applied
Continuously emitted during runtime and aggregated to monitor system health and detect service degradation.

## Sub-concepts
counter, gauge

## Part of
observability-pillars

## Implementation status
defects: missing-path, doc-drift

## Design notes
Metrics provides the quantitative pillar of observability in rjm, aggregating numeric operational data over time to detect anomalies, power alerting thresholds, and evaluate service level objectives.
