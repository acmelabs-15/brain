---
package: rjm
name: Real-time System
slug: real-time-system
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Real-time System

## Definition — verbatim
> "| Real-time System | Latency, Availability | 99.99% | 4 min/month |" — .claude/skills/slo-designer/references/slo-design-patterns.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 12 | defined here | Service archetype row in the Pattern Selection Guide setting mission-critical targets of 99.99% availability and 4 min/month error budget. |

## Consumes
Low-latency streaming, telemetry, or safety/financial transaction requirements.

## Produces
Stringent SLI recommendations (Availability 99.99%, Latency p99 < 50ms, Latency p999 < 100ms).

## When applied
When designing SLOs for mission-critical, trading, streaming, or telemetry platforms.

## Sub-concepts
latency-p99

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
Real-time System represents safety-critical, financial, or real-time streaming architectures where even fractional-second latency or minutes of downtime cause catastrophic failures, demanding four-nines availability (99.99%) and sub-50ms p99 latency.
