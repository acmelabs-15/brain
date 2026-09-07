---
package: rjm
name: lstat
slug: lstat
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# lstat

## Definition — verbatim
(used, not defined)

> "``lstat`` answers the narrower question of whether anything" — scripts/maintenance/_gc_files.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_files.py | 31 | used here | Discussed in docstring as the probe determining if any directory entry occupies a path without following symlinks. |

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
Filesystem probe method identifier querying entry existence without following terminal symlinks, classified as name-only per D-023.
