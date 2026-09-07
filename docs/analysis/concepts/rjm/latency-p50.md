---
package: rjm
name: Latency p50
slug: latency-p50
kind: artifact
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

# Latency p50

## Definition — verbatim
> "3. **Latency p50**: < 50ms" — .claude/skills/slo-designer/references/slo-design-patterns.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 30 | used here | Recommended SLI for consumer-facing APIs establishing a median latency target under 50ms. |

## Consumes
Request duration histograms or distribution metrics.

## Produces
Median response time measurement representing the typical experience of the 50th percentile of requests.

## When applied
When setting baseline expectations for typical user interaction speeds alongside tail latency guards.

## Sub-concepts
none

## Part of
consumer-facing-api-pattern

## Implementation status
defects: orphan

## Design notes
Latency p50 measures median service response duration, establishing the baseline expectation for normal user interactions and ensuring that optimizations for tail latency do not degrade typical throughput.
