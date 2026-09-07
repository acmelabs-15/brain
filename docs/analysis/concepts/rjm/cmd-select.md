---
package: rjm
name: cmd_select
slug: cmd-select
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# cmd_select

## Definition — verbatim
(used, not defined)

> "def cmd_select(args: argparse.Namespace, paths: dict[str, Path]) -> int:" — scripts/skillbook.py:551

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 551 | defined here | Implements the select CLI subcommand returning active policies for an agent in an operational context. |

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
`cmd_select` is a Python CLI subcommand handler function returning active policies for agent contexts rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
