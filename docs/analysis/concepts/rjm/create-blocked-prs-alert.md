---
package: rjm
name: create_blocked_prs_alert
slug: create-blocked-prs-alert
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# create_blocked_prs_alert

## Definition — verbatim
(used, not defined)

> "def create_blocked_prs_alert(" — scripts/pr_maintenance/maintenance.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 14 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 133 | defined here | Generates markdown issue body alerting maintainers of blocked PRs requiring human action. |

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
`create_blocked_prs_alert` is a Python helper function identifier formatting markdown issue bodies for blocked PR alerts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
