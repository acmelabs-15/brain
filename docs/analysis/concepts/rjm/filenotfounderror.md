---
package: rjm
name: FileNotFoundError
slug: filenotfounderror
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# FileNotFoundError

## Definition — verbatim
(used, not defined)

> "``FileNotFoundError`` as nothing being there, and it raises" — scripts/maintenance/_gc_files.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_files.py | 28 | used here | Cited in docstring explaining distinction between symlinks to missing targets and genuine path absence. |

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
Python built-in exception class identifier representing missing filesystem targets, classified as name-only per D-023.
