---
package: rjm
name: Internal API Pattern
slug: internal-api-pattern
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

# Internal API Pattern

## Definition — verbatim
> "## Internal API Pattern" — .claude/skills/slo-designer/references/slo-design-patterns.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 58 | defined here | Section heading introducing internal service characteristics, recommended SLIs (Availability 99.5%, Latency p99 < 500ms, Error Rate < 1%), and gRPC PromQL examples. |

## Consumes
Backend RPC service telemetry, inter-service dependency topologies, and error-handling capabilities.

## Produces
SLI configurations utilizing gRPC status codes and realistic 99.5% availability targets.

## When applied
When defining reliability commitments for internal services and microservice dependencies.

## Sub-concepts
latency-p99

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
The Internal API Pattern specifies realistic reliability targets (99.5%) and gRPC metric queries for internal microservices, balancing operational costs against downstream client resilience mechanisms like retries and circuit breakers.
