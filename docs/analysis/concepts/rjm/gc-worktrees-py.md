---
package: rjm
name: gc_worktrees.py
slug: gc-worktrees-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# gc_worktrees.py

## Definition — verbatim
(used, not defined)

> "  uv run python scripts/maintenance/gc_worktrees.py" — scripts/maintenance/gc_worktrees.py:27

## Also called — verbatim
`scripts/maintenance/gc_worktrees.py` — scripts/README.md:223

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 27 | defined here | Maintenance CLI script entry point for inspecting and pruning stale worktrees. |
| scripts/maintenance/worktree_occupancy.py | 4 | used here | Referenced as the companion module separating git logic from process inspection. |
| scripts/README.md | 223 | used here | Documented in retained scripts table for reporting or removing stale worktrees. |

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
gc_worktrees.py is a Python maintenance script for cleaning up stale git worktrees rather than an SDLC lifecycle concept, classified as name-only per D-023.
