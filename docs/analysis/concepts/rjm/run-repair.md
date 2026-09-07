---
package: rjm
name: run_repair
slug: run-repair
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# run_repair

## Definition — verbatim
(used, not defined)

> "def run_repair(root: Path) -> None:" — scripts/maintenance/repair_worktree_venv.py:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 189 | defined here | Function executing `uv sync --frozen --extra dev --reinstall` to recreate the virtual environment. |

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
An execution function identifier in `repair_worktree_venv.py` invoking the uv repair command rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
