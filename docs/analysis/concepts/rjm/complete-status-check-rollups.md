---
package: rjm
name: complete_status_check_rollups
slug: complete-status-check-rollups
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# complete_status_check_rollups

## Definition — verbatim
(used, not defined)

> "def complete_status_check_rollups(" — scripts/pr_maintenance_rollup.py:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 174 | defined here | Orchestrator function paginating remaining status check contexts across PRs. |

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
clean

## Design notes
`complete_status_check_rollups` is a Python function identifier paginating status check contexts across pull requests rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
