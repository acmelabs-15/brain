---
package: rjm
name: cmd_contradict
slug: cmd-contradict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# cmd_contradict

## Definition — verbatim
(used, not defined)

> "def cmd_contradict(args: argparse.Namespace, paths: dict[str, Path]) -> int:" — scripts/skillbook.py:474

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 474 | defined here | CLI command handler logging an eval-grounded contradiction for a policy. |

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
cmd_contradict is a Python CLI command handler function identifier recording policy contradictions rather than an SDLC lifecycle concept, classified as name-only per D-023.
