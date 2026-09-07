---
package: rjm
name: find_section
slug: find-section
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_section

## Definition — verbatim
(used, not defined)

> "def find_section(markdown: str, heading: str, level: int = 2) -> str | None:" — scripts/utils/markdown_parser.py:1055

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 1055 | defined here | Function locating and returning the body text of a section matching a specified heading and level. |

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
`find_section` is a Python utility function identifier in `scripts/utils/markdown_parser.py` extracting markdown section bodies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
