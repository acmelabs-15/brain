---
package: rjm
name: StaleShebang
slug: staleshebang
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# StaleShebang

## Definition — verbatim
(used, not defined)

> "class StaleShebang:" — scripts/maintenance/repair_worktree_venv.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 57 | defined here | Dataclass representing a launcher script whose shebang names an interpreter outside the current worktree's `.venv`. |

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
A dataclass identifier in `repair_worktree_venv.py` representing a stale shebang finding rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
