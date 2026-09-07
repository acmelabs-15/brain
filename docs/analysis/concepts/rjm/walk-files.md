---
package: rjm
name: walk_files
slug: walk-files
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# walk_files

## Definition — verbatim
(used, not defined)

> "def walk_files(root: Path) -> list[Path] | None:" — scripts/maintenance/_gc_anchors.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 101 | defined here | Function traversing directory hierarchy collecting all regular files with explicit permission handling. |

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
Directory traversal helper function returning regular files while rejecting untrustworthy walks, classified as name-only per D-023.
