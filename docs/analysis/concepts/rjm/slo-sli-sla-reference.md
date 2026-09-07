---
package: rjm
name: "SLO / SLI / SLA Reference"
slug: slo-sli-sla-reference
kind: reference
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SLO / SLI / SLA Reference

## Definition — verbatim
> "# SLO / SLI / SLA Reference" — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 7 | defined here | Reference document defining SRE reliability concepts, error budgets, and experiment integration. |

## Consumes
none

## Produces
Authoritative guidance on SRE metrics, error budget formulas, calculation mechanics, and chaos experiment gates.

## When applied
Consulted when designing service reliability targets, configuring telemetry alerts, or planning chaos experiments.

## Sub-concepts
sli-service-level-indicator, slo-service-level-objective, sla-service-level-agreement, error-budget-formula, error-budget-mechanics

## Part of
chaos-experiment

## Implementation status
defects: missing-path

## Design notes
The SLO / SLI / SLA Reference document codifies Site Reliability Engineering principles within RJM's chaos-experiment skill. It establishes explicit definitions and calculation frameworks for indicators, objectives, agreements, and error budgets.
