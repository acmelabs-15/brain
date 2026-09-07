---
package: rjm
name: create_maintenance_summary
slug: create-maintenance-summary
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# create_maintenance_summary

## Definition — verbatim
(used, not defined)

> "def create_maintenance_summary(" — scripts/pr_maintenance/maintenance.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 15 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 90 | defined here | Generates markdown table summarizing PR maintenance metrics for GitHub Actions step summary. |

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
`create_maintenance_summary` is a Python helper function identifier formatting GitHub Actions step summaries rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
