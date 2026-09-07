---
package: rjm
name: _existing_objects
slug: existing-objects
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _existing_objects

## Definition — verbatim
(used, not defined)

> "def _existing_objects(oids: list[str], repo_dir: str, timeout: float) -> list[str] | None:" — scripts/maintenance/_gc_stale.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 177 | defined here | Helper filtering a list of object IDs via cat-file --batch-check to discard objects no longer present in the git object database. |

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
`_existing_objects` is a Python helper function in maintenance diagnostics filtering object IDs against the git object database rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
