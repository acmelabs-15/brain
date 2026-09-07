---
package: rjm
name: Observability: Three Pillars
slug: observability-three-pillars
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Observability: Three Pillars

## Definition — verbatim
> "Observability is the ability to understand a system's internal state by examining its external outputs. Use during investigation and debugging phases of analysis." — .claude/skills/analyze/references/reliability-observability-pillars.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 7 | defined here | Document title and master guide establishing logs, metrics, and traces for investigation and debugging. |

## Consumes
Telemetry data streams, debugging hypotheses, production incident signals.

## Produces
Comprehensive diagnostic capability connecting high-level metrics to detailed traces and discrete log events.

## When applied
Applied during investigation and debugging phases of code analysis.

## Sub-concepts
logs, metrics

## Part of
analyze

## Implementation status
defects: missing-path

## Design notes
Observability: Three Pillars serves as rjm's primary reference on telemetry architecture, defining how logs, metrics, and traces interoperate to transform external system outputs into actionable internal state diagnostics during software analysis.
