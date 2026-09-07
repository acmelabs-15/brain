---
package: rjm
name: "Error Budget Mechanics"
slug: error-budget-mechanics
kind: technique
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

# Error Budget Mechanics

## Definition — verbatim
> "## Error Budget Mechanics" — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 46 | defined here | Reference section outlining step-by-step operational mechanics of managing error budgets. |

## Consumes
Defined SLOs, calculated error budgets, and continuous SLI consumption data.

## Produces
Four-step operational lifecycle governing definition, tracking, depletion policies, and budget reset cycles.

## When applied
Enforced continuously throughout monthly or quarterly operational windows.

## Sub-concepts
none

## Part of
slo-sli-sla-reference

## Implementation status
defects: missing-path

## Design notes
Error Budget Mechanics establish the operational rules governing reliability budget management in RJM. It defines how budgets are consumed by incidents or experiments and dictates release freezes or remediation actions when a budget is depleted.
