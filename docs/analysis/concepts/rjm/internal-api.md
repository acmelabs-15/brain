---
package: rjm
name: Internal API
slug: internal-api
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

# Internal API

## Definition — verbatim
> "| Internal API | Availability, Error Rate | 99.5% | 3.6 hr/month |" — .claude/skills/slo-designer/references/slo-design-patterns.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 10 | defined here | Service archetype row in the Pattern Selection Guide table specifying internal service targets of 99.5% availability and 3.6 hr/month downtime budget. |

## Consumes
Microservice architecture specifications for backend services invoked by other internal components.

## Produces
Target SLI recommendations (Availability 99.5%, Latency p99 < 500ms, Error Rate < 1%).

## When applied
When designing reliability specifications for backend services, RPC servers, and inter-service dependencies.

## Sub-concepts
latency-p99

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
Internal API characterizes services consumed exclusively by other internal systems; because downstream callers can implement retries, circuit breakers, and batching, internal APIs target 99.5% availability to avoid unnecessary reliability over-engineering.
