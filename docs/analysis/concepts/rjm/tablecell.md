---
package: rjm
name: TableCell
slug: tablecell
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TableCell

## Definition — verbatim
(used, not defined)

> "class TableCell:" — scripts/utils/markdown_parser.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 59 | defined here | Frozen dataclass combining cell segments with a 1-based source line number. |

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
`TableCell` is an internal Python dataclass identifier in `scripts/utils/markdown_parser.py` associating table cell runs with source line positions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
