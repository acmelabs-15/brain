---
package: rjm
name: validate_budget
slug: validate-budget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_budget

## Definition — verbatim
(used, not defined)

> "def validate_budget(" — scripts/validate_workspace_budget.py:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 98 | defined here | Validates file measurements against total shared pool limits and individual per-file ceiling overrides. |

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
`validate_budget` is a Python function identifier in `validate_workspace_budget.py` evaluating measured file metrics against budget limits rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
