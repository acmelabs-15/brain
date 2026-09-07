---
package: rjm
name: find_worktree_root
slug: find-worktree-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_worktree_root

## Definition — verbatim
(used, not defined)

> "def find_worktree_root(start_path: Path) -> Path | None:" — scripts/maintenance/repair_packed_refs.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 35 | defined here | Function resolving the nearest ancestor directory containing a `.git` marker. |

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
A helper function identifier in `repair_packed_refs.py` that locates git worktree roots rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
