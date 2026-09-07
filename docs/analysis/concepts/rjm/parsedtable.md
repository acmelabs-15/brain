---
package: rjm
name: ParsedTable
slug: parsedtable
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ParsedTable

## Definition — verbatim
(used, not defined)

> "class ParsedTable:" — scripts/utils/markdown_parser.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 36 | defined here | Dataclass representing a complete parsed markdown table with headers and rows. |

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
`ParsedTable` is an internal Python dataclass identifier in `scripts/utils/markdown_parser.py` structuring parsed table tokens rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
