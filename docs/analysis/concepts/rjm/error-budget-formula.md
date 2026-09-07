---
package: rjm
name: Error Budget Formula
slug: error-budget-formula
kind: pattern
package_phase: rjm:cross-phase
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

# Error Budget Formula

## Definition — verbatim
> "## Error Budget Formula" — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 36 | defined here | Section heading declaring mathematical calculation of error budgets from SLO targets. |

## Consumes
Service Level Objective target percentages.

## Produces
Exact allowable error percentage (100% - SLO), converted to allowed downtime minutes or failed transactions per window.

## When applied
Applied during service setup and reliability budget planning.

## Sub-concepts
none

## Part of
slo-sli-sla-reference

## Implementation status
defects: missing-path

## Design notes
The Error Budget Formula defines the mathematical inverse of an SLO (Error Budget = 100% - SLO). In RJM, it converts abstract reliability percentages into concrete operational margins that teams can safely spend on changes, deployments, or chaos experiments.
