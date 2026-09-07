---
package: rjm
name: find_launcher_dir
slug: find-launcher-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_launcher_dir

## Definition — verbatim
(used, not defined)

> "def find_launcher_dir(venv: Path) -> Path | None:" — scripts/maintenance/repair_worktree_venv.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 96 | defined here | Function discovering the platform-specific launcher directory (`bin` or `Scripts`) in a virtual environment. |

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
A filesystem locator function identifier in `repair_worktree_venv.py` finding virtual environment launcher directories rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
