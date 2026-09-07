---
package: rjm
name: cmd_status
slug: cmd-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# cmd_status

## Definition — verbatim
(used, not defined)

> "def cmd_status(args: argparse.Namespace, paths: dict[str, Path]) -> int:" — scripts/skillbook.py:417

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 417 | defined here | CLI command handler displaying registered policies, tiers, statuses, and confirmation counts. |

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
cmd_status is a Python CLI command handler function identifier printing policy statuses rather than an SDLC lifecycle concept, classified as name-only per D-023.
