---
package: rjm
name: TOTAL_BUDGET_BYTES
slug: total-budget-bytes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TOTAL_BUDGET_BYTES

## Definition — verbatim
(used, not defined)

> "TOTAL_BUDGET_BYTES = 6600" — scripts/validate_workspace_budget.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 28 | defined here | Module constant setting the aggregate byte budget across shared-pool Claude workspace context files. |

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
`TOTAL_BUDGET_BYTES` is a Python module constant in `validate_workspace_budget.py` specifying the aggregate context budget threshold rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
