---
package: rjm
name: worktree_ref_oids
slug: worktree-ref-oids
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# worktree_ref_oids

## Definition — verbatim
(used, not defined)

> "def worktree_ref_oids(admin: Path) -> list[str] | None:" — scripts/maintenance/_gc_anchors.py:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 164 | defined here | Function discovering all object IDs referenced by refs in a worktree admin directory. |

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
Inspection helper function collecting object IDs anchored under a worktree's refs directory, classified as name-only per D-023.
