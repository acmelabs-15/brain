---
package: rjm
name: extract_lookup_references
slug: extract-lookup-references
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# extract_lookup_references

## Definition — verbatim
(used, not defined)

> "def extract_lookup_references(markdown: str) -> list[str]:" — scripts/utils/markdown_parser.py:838

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 838 | defined here | Function returning Markdown target paths extracted from rendered lookup rows and table cells. |

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
`extract_lookup_references` is a Python utility function identifier in `scripts/utils/markdown_parser.py` scanning table cells for referenced files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
