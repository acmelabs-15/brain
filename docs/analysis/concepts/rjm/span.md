---
package: rjm
name: Span
slug: span
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

# Span

## Definition — verbatim
> "| Span | Single operation within a trace |" — .claude/skills/analyze/references/reliability-observability-pillars.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 57 | defined here | Fundamental unit of work within distributed tracing representing a single operation. |
| .claude/skills/observability/references/three-pillars-reference.md | 55 | defined here | Telemetry primitive representing a single operation within an overarching distributed trace. |

## Consumes
Parent span context, operation name, start timestamp, span attributes.

## Produces
Timed operation record with status, duration, attributes, and optional span events.

## When applied
At boundaries of individual functions, network requests, database queries, and subagent tool executions.

## Sub-concepts
none

## Part of
trace, traces

## Implementation status
defects: missing-path

## Design notes
A Span is the fundamental building block of distributed tracing in rjm's observability model, encapsulating a single contiguous unit of execution. By capturing start/end timestamps, operational metadata, and hierarchical relationships to parent spans, spans provide the granular timing and attribute data required to pinpoint failures and performance bottlenecks.
