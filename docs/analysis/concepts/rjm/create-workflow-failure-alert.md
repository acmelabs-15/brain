---
package: rjm
name: create_workflow_failure_alert
slug: create-workflow-failure-alert
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# create_workflow_failure_alert

## Definition — verbatim
(used, not defined)

> "def create_workflow_failure_alert(" — scripts/pr_maintenance/maintenance.py:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 16 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 163 | defined here | Generates markdown issue body alerting maintainers of maintenance workflow run failures. |

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
`create_workflow_failure_alert` is a Python helper function identifier formatting markdown issue bodies for workflow failure alerts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
