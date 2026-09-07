---
package: rjm
name: _load_or_exit
slug: load-or-exit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _load_or_exit

## Definition — verbatim
(used, not defined)

> "def _load_or_exit(path: Path) -> dict[str, Any]:" — scripts/skillbook.py:405

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 405 | defined here | Loads a skillbook JSON file or prints a diagnostic error message and raises SystemExit. |

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
defects: doc-drift

## Design notes
_load_or_exit is a Python helper function identifier managing JSON file loading and error exits rather than an SDLC lifecycle concept, classified as name-only per D-023.
