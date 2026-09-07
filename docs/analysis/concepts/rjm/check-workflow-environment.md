---
package: rjm
name: check_workflow_environment
slug: check-workflow-environment
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_workflow_environment

## Definition — verbatim
(used, not defined)

> "def check_workflow_environment() -> EnvironmentResult:" — scripts/pr_maintenance/maintenance.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 13 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 186 | defined here | Validates required CLI tools (Python, gh, git) are available for workflow execution. |

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
`check_workflow_environment` is a Python function identifier validating that required CLI utilities are present on the host system rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
