---
package: rjm
name: cmd_tension
slug: cmd-tension
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# cmd_tension

## Definition — verbatim
(used, not defined)

> "def cmd_tension(args: argparse.Namespace, paths: dict[str, Path]) -> int:" — scripts/skillbook.py:495

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 495 | defined here | Dispatches tension CLI subcommands (list, prefer) in the skillbook policy registry. |

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
`cmd_tension` is a Python CLI subcommand dispatcher function in `scripts/skillbook.py` rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
