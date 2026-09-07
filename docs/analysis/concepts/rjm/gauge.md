---
package: rjm
name: Gauge
slug: gauge
kind: artifact
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Gauge

## Definition — verbatim
> "| Gauge | Point-in-time value | Current connections, queue depth |" — .claude/skills/analyze/references/reliability-observability-pillars.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 40 | defined here | Defined in metrics types table as a point-in-time value for instantaneous states like current connections or queue depth. |
| .claude/skills/observability/references/three-pillars-reference.md | 38 | defined here | Cataloged in metric instruments table as a point-in-time value for active connections and queue depth. |

## Consumes
Current system state readings (such as active memory, thread count, or queue length).

## Produces
Variable point-in-time numeric values that can fluctuate up or down.

## When applied
Applied when measuring instantaneous system capacity or resource saturation.

## Sub-concepts
none

## Part of
metrics

## Implementation status
defects: missing-path

## Design notes
Gauge is an observability instrument type in rjm representing instantaneous, fluctuating measurements, crucial for monitoring resource utilization, queue depths, and concurrency levels.
