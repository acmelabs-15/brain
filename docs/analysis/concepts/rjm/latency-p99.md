---
package: rjm
name: Latency p99
slug: latency-p99
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
  - {path: .claude/skills/slo-designer/templates/slo-config-template.yaml, sha256: e7371ba6f5c2a36e647af72ee6d8bbc7121c4e1c0ccebbce160477e54506a38d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Latency p99

## Definition — verbatim
> "2. **Latency p99**: < 200ms" — .claude/skills/slo-designer/references/slo-design-patterns.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 29 | used here | Listed as a recommended Service Level Indicator for consumer-facing APIs with a target threshold under 200ms. |
| .claude/skills/slo-designer/templates/slo-config-template.yaml | 28 | used here | Configured as an SLI entry with a Prometheus histogram quantile query measuring 99th percentile response duration. |

## Consumes
Request duration distribution metrics and histograms.

## Produces
Tail response time measurement capturing the latency of the slowest 1% of requests.

## When applied
When monitoring endpoint responsiveness to detect tail latency anomalies before they impact general user populations.

## Sub-concepts
none

## Part of
slo-design-patterns

## Implementation status
defects: orphan, internal-contradiction

## Design notes
Latency p99 measures tail latency (the boundary below which 99% of requests complete), capturing performance degradation that average or median metrics obscure and protecting user experience from outliers.
