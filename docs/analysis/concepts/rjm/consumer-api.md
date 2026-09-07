---
package: rjm
name: Consumer API
slug: consumer-api
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

# Consumer API

## Definition — verbatim
> "| Consumer API | Availability, Latency | 99.9% | 43 min/month |" — .claude/skills/slo-designer/references/slo-design-patterns.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 9 | defined here | Service archetype row in the Pattern Selection Guide table pairing consumer-facing APIs with 99.9% availability and 43 min/month downtime budget. |

## Consumes
Service architecture classifications where endpoints directly serve end-user web or mobile clients.

## Produces
Baseline SLI recommendations (Availability 99.9%, Latency p99 < 200ms, Latency p50 < 50ms, Error Rate < 0.1%).

## When applied
When establishing SLOs for public- or user-facing applications and HTTP APIs.

## Sub-concepts
latency-p99, latency-p50

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
Consumer API represents external-facing services where user experience is paramount, necessitating high availability (99.9%) and stringent latency boundaries (<200ms p99) because errors and delays directly impact customer satisfaction.
