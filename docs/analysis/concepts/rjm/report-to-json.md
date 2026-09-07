---
package: rjm
name: _report_to_json
slug: report-to-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _report_to_json

## Definition — verbatim
(used, not defined)

> "def _report_to_json(report: RepairReport) -> str:" — scripts/maintenance/repair_worktree_venv.py:266

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 266 | defined here | Serialization helper rendering `RepairReport` data to a JSON string. |

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
A JSON serialization helper function identifier in `repair_worktree_venv.py` rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
