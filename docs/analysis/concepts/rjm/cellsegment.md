---
package: rjm
name: CellSegment
slug: cellsegment
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CellSegment

## Definition — verbatim
(used, not defined)

> "class CellSegment:" — scripts/utils/markdown_parser.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 44 | defined here | Frozen dataclass holding an inline text run within a table cell and tracking whether it is code. |

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
`CellSegment` is an internal Python dataclass identifier in `scripts/utils/markdown_parser.py` distinguishing code spans from plain text inside table cells rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
