---
package: rjm
name: calculate_error_budget_minutes
slug: calculate-error-budget-minutes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/scripts/generate_slo_document.py, sha256: 6cfedee270c2143f72cb05e1d5d1984bd31db0761caa9f91c1d71d621d547e80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# calculate_error_budget_minutes

## Definition — verbatim
(used, not defined)

> "def calculate_error_budget_minutes(target: float, period_days: int = 30) -> float:" — .claude/skills/slo-designer/scripts/generate_slo_document.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/scripts/generate_slo_document.py | 92 | defined here | Function calculating error budget in minutes based on target percentage and period days. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, exit-code-mismatch

## Design notes
calculate_error_budget_minutes is a Python function identifier in generate_slo_document.py calculating downtime allowances rather than an operational lifecycle concept, classified as name-only per D-023.
