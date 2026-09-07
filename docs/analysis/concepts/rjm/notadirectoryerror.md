---
package: rjm
name: NotADirectoryError
slug: notadirectoryerror
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# NotADirectoryError

## Definition — verbatim
(used, not defined)

> "``NotADirectoryError`` when a parent component is a regular file, which is" — scripts/maintenance/_gc_files.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_files.py | 29 | used here | Cited in docstring describing corrupted admin record states where a parent component is a regular file. |

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
Python built-in exception class identifier indicating a non-directory element in a path resolution, classified as name-only per D-023.
