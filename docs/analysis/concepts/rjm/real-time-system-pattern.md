---
package: rjm
name: Real-Time System Pattern
slug: real-time-system-pattern
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

# Real-Time System Pattern

## Definition — verbatim
> "## Real-Time System Pattern" — .claude/skills/slo-designer/references/slo-design-patterns.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 137 | defined here | Section heading introducing low-latency, high-availability system characteristics, recommended SLIs, and Prometheus configurations. |

## Consumes
Low-latency streaming, transaction processing, or safety-critical telemetry requirements.

## Produces
Prometheus health-check and latency percentile monitoring configurations for sub-100ms workloads.

## When applied
When setting SLO targets for financial trading, live streaming, or safety-critical real-time platforms.

## Sub-concepts
latency-p99

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
The Real-Time System Pattern defines four-nines (99.99%) availability and sub-50ms latency SLIs for mission-critical systems where delays or dropouts directly cause severe operational or financial loss.
