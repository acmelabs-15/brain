---
package: rjm
name: _REPAIR_COMMAND
slug: repair-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _REPAIR_COMMAND

## Definition — verbatim
(used, not defined)

> "_REPAIR_COMMAND = \"uv sync --frozen --extra dev --reinstall\"" — scripts/maintenance/repair_worktree_venv.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 52 | defined here | Module constant defining the command string for recreating the virtual environment. |
| scripts/maintenance/repair_worktree_venv.py | 73 | defined here | Accessor function returning the `_REPAIR_COMMAND` string. |

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
A module constant identifier in `repair_worktree_venv.py` specifying the uv invocation for environment recreation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
