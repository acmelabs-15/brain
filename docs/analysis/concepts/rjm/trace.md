---
package: rjm
name: Trace
slug: trace
kind: pattern
package_phase: cross-phase
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

# Trace

## Definition — verbatim
> "| Trace | End-to-end journey of a request |" — .claude/skills/analyze/references/reliability-observability-pillars.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 56 | defined here | Core distributed tracing concept representing the complete end-to-end journey of an execution request. |
| .claude/skills/observability/references/three-pillars-reference.md | 54 | defined here | Structural telemetry entity defined as the end-to-end journey of a request across services. |

## Consumes
Distributed context, root span initialization, downstream span linkages.

## Produces
Complete directed acyclic graph (DAG) of spans representing an entire request lifecycle.

## When applied
Across all distributed network calls, external service integrations, and cross-boundary workflow invocations.

## Sub-concepts
span

## Part of
traces

## Implementation status
defects: missing-path

## Design notes
A Trace represents the complete end-to-end journey of a discrete request or operation as it traverses multiple components, processes, or microservices. In rjm's observability framework, traces provide the structural backbone linking individual spans and correlating logs, making complex asynchronous workflows understandable and debuggable.
