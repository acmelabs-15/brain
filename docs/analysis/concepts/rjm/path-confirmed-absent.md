---
package: rjm
name: _path_confirmed_absent
slug: path-confirmed-absent
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _path_confirmed_absent

## Definition — verbatim
(used, not defined)

> "def _path_confirmed_absent(path: str) -> bool:" — scripts/maintenance/_gc_reasons.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 49 | defined here | Helper function verifying path absence via os.lstat catching FileNotFoundError, treating other OSErrors as occupied or unknown. |

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
`_path_confirmed_absent` is an internal Python helper function identifier validating genuine filesystem absence rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
