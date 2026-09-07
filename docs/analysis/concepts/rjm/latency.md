---
package: rjm
name: Latency
slug: latency
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Latency

## Definition — verbatim
> "### Latency" — .claude/skills/slo-designer/SKILL.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 32 | used here | Common SLI row tracking p50, p95, and p99 response times to detect degradation before outright failure. |
| .claude/skills/slo-designer/SKILL.md | 64 | defined here | SLI category section defining latency response time percentiles for APIs and web services. |

## Consumes
Request duration telemetry, response timestamps, and span metrics.

## Produces
Response time percentile distributions (p50, p95, p99) and latency threshold violation alerts.

## When applied
Monitored on all synchronous API endpoints, database queries, and inter-service calls.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, missing-path

## Design notes
Latency measures the duration required to process service operations. By tracking distribution percentiles (particularly tail latencies like p95 and p99), RJM detects queuing delays and performance degradation before failures become visible as outages.
