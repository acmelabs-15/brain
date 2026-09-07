---
package: rjm
name: stat
slug: stat
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# stat

## Definition — verbatim
(used, not defined)

> "import stat" — scripts/maintenance/_gc_files.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_files.py | 12 | used here | Imported to inspect mode bits such as stat.S_ISREG on filesystem paths. |

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
Python standard library module identifier for interpreting file status modes, classified as name-only per D-023.
