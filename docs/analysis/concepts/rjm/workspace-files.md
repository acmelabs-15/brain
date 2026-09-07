---
package: rjm
name: WORKSPACE_FILES
slug: workspace-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# WORKSPACE_FILES

## Definition — verbatim
(used, not defined)

> "WORKSPACE_FILES = [" — scripts/validate_workspace_budget.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 35 | defined here | Module constant list of workspace file paths injected into agent session contexts subject to budget validation. |

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
`WORKSPACE_FILES` is a Python module constant in `validate_workspace_budget.py` listing files injected into agent session contexts rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
