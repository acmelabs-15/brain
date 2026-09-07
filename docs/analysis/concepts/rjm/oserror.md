---
package: rjm
name: OSError
slug: oserror
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# OSError

## Definition — verbatim
(used, not defined)

> "``Path.is_file`` swallows every ``OSError`` and answers ``False``, so a" — scripts/maintenance/_gc_files.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_files.py | 3 | used here | Cited in module docstring explaining how Path.is_file swallows operating system exceptions. |

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
Python built-in operating system exception class identifier, classified as name-only per D-023.
