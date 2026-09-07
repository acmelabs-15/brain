---
package: rjm
name: TableRow
slug: tablerow
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TableRow

## Definition — verbatim
(used, not defined)

> "class TableRow:" — scripts/utils/markdown_parser.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 29 | defined here | Dataclass representing a parsed table row as a list of cell string values. |

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
`TableRow` is an internal Python dataclass identifier in `scripts/utils/markdown_parser.py` modeling tabular markdown structures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
