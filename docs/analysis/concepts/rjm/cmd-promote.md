---
package: rjm
name: cmd_promote
slug: cmd-promote
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# cmd_promote

## Definition — verbatim
(used, not defined)

> "def cmd_promote(args: argparse.Namespace, paths: dict[str, Path]) -> int:" — scripts/skillbook.py:479

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 479 | defined here | Implements the promote CLI subcommand to re-evaluate policy tiers and statuses based on accumulated evidence. |

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
`cmd_promote` is a Python CLI subcommand handler function in the skillbook policy registry rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
