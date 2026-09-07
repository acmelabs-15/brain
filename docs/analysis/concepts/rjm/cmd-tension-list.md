---
package: rjm
name: _cmd_tension_list
slug: cmd-tension-list
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _cmd_tension_list

## Definition — verbatim
(used, not defined)

> "def _cmd_tension_list(args: argparse.Namespace, paths: dict[str, Path]) -> int:" — scripts/skillbook.py:502

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 502 | defined here | Displays all recorded policy tensions and per-context resolutions. |

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
`_cmd_tension_list` is an internal Python helper function implementing the tension list CLI command rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
