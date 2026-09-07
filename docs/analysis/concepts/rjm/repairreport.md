---
package: rjm
name: RepairReport
slug: repairreport
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# RepairReport

## Definition — verbatim
(used, not defined)

> "class RepairReport:" — scripts/maintenance/repair_worktree_venv.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 65 | defined here | Dataclass capturing the scan result and stale shebang list for a worktree's virtual environment. |

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
A dataclass identifier in `repair_worktree_venv.py` aggregating virtual environment scan findings rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
