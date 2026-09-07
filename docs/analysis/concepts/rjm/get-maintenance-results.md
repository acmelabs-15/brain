---
package: rjm
name: get_maintenance_results
slug: get-maintenance-results
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_maintenance_results

## Definition — verbatim
(used, not defined)

> "def get_maintenance_results(log_path: str | Path) -> MaintenanceResults:" — scripts/pr_maintenance/maintenance.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 17 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 35 | defined here | Parses PR maintenance workflow log file to extract execution counts and blocked PRs. |

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
`get_maintenance_results` is a Python helper function identifier extracting metrics from maintenance workflow log files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
