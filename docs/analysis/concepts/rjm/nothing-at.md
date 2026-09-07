---
package: rjm
name: nothing_at
slug: nothing-at
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# nothing_at

## Definition — verbatim
(used, not defined)

> "def nothing_at(path: Path) -> bool:" — scripts/maintenance/_gc_files.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 21 | used here | Imported to verify absence of reftable directory and settle missing directory walks. |
| scripts/maintenance/_gc_files.py | 47 | defined here | Helper function determining if there is genuinely no directory entry at a given filesystem path. |

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
Filesystem helper function checking for genuine directory entry absence via lstat, classified as name-only per D-023.
