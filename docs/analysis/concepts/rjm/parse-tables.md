---
package: rjm
name: parse_tables
slug: parse-tables
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# parse_tables

## Definition — verbatim
(used, not defined)

> "def parse_tables(markdown: str) -> list[ParsedTable]:" — scripts/utils/markdown_parser.py:311

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 311 | defined here | Function extracting all markdown tables into structured ParsedTable objects with headers and rows. |

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
`parse_tables` is a Python utility function identifier in `scripts/utils/markdown_parser.py` extracting table tokens rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
