---
package: rjm
name: measure_workspace_files
slug: measure-workspace-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# measure_workspace_files

## Definition — verbatim
(used, not defined)

> "def measure_workspace_files(" — scripts/validate_workspace_budget.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 81 | defined here | Inspects the filesystem to measure actual byte sizes and existence of specified workspace context files. |

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
`measure_workspace_files` is a Python function identifier in `validate_workspace_budget.py` calculating byte sizes of context files rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
