---
package: rjm
name: iter_table_cell_text
slug: iter-table-cell-text
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# iter_table_cell_text

## Definition — verbatim
(used, not defined)

> "def iter_table_cell_text(markdown: str) -> Iterator[TableCell]:" — scripts/utils/markdown_parser.py:864

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 864 | defined here | Iterator yielding TableCell instances containing rendered cell text and line numbers. |

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
`iter_table_cell_text` is a Python generator function identifier in `scripts/utils/markdown_parser.py` streaming table cell text representations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
