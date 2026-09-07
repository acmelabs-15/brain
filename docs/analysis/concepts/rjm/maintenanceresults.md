---
package: rjm
name: MaintenanceResults
slug: maintenanceresults
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MaintenanceResults

## Definition — verbatim
(used, not defined)

> "class MaintenanceResults:" — scripts/pr_maintenance/maintenance.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 12 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 20 | defined here | Dataclass holding extracted PR maintenance execution counts and blocked PR lists. |

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
`MaintenanceResults` is a Python dataclass identifier storing extracted PR maintenance execution counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
