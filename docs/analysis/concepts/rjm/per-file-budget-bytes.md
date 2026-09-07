---
package: rjm
name: PER_FILE_BUDGET_BYTES
slug: per-file-budget-bytes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PER_FILE_BUDGET_BYTES

## Definition — verbatim
(used, not defined)

> "PER_FILE_BUDGET_BYTES = 3000" — scripts/validate_workspace_budget.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 29 | defined here | Module constant defining the maximum byte size allowed for an individual workspace context file. |

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
`PER_FILE_BUDGET_BYTES` is a Python module constant in `validate_workspace_budget.py` defining an individual file size limit rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
