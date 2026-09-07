---
package: rjm
name: _cmd_tension_prefer
slug: cmd-tension-prefer
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _cmd_tension_prefer

## Definition — verbatim
(used, not defined)

> "def _cmd_tension_prefer(args: argparse.Namespace, paths: dict[str, Path]) -> int:" — scripts/skillbook.py:525

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 525 | defined here | Records a per-context resolution preference for a tension between two policies. |

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
`_cmd_tension_prefer` is an internal Python helper function handling per-context tension resolution updates rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
