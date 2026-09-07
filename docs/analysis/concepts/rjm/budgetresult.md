---
package: rjm
name: BudgetResult
slug: budgetresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BudgetResult

## Definition — verbatim
(used, not defined)

> "class BudgetResult:" — scripts/validate_workspace_budget.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 65 | defined here | Dataclass accumulating workspace file metrics, validation errors, warnings, and overall validity status. |

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
defects: orphan

## Design notes
`BudgetResult` is a Python dataclass identifier in `validate_workspace_budget.py` aggregating budget evaluation results rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
