---
package: rjm
name: regular_file
slug: regular-file
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# regular_file

## Definition — verbatim
(used, not defined)

> "def regular_file(path: Path) -> bool | None:" — scripts/maintenance/_gc_files.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 21 | used here | Imported to verify whether a reflog path is an accessible regular file before reading. |
| scripts/maintenance/_gc_files.py | 16 | defined here | Function checking whether a path is a regular file while distinguishing absence from permission or I/O errors. |
| scripts/maintenance/_gc_stale.py | 18 | used here | Imported to safely inspect file existence without conflating unreadable paths with absent ones. |

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
Three-valued filesystem probe function determining if a path is a regular file, classified as name-only per D-023.
