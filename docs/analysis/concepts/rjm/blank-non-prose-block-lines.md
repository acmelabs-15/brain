---
package: rjm
name: blank_non_prose_block_lines
slug: blank-non-prose-block-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# blank_non_prose_block_lines

## Definition — verbatim
(used, not defined)

> "def blank_non_prose_block_lines(markdown: str) -> str:" — scripts/utils/markdown_parser.py:244

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 244 | defined here | Function blanking code blocks and raw HTML content at block and inline granularities. |
| scripts/validation/check_adr_lifecycle.py | 124 | used here | Imported to mask code blocks and HTML comments before extracting ADR lifecycle statuses. |

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
`blank_non_prose_block_lines` is a Python utility function identifier in `scripts/utils/markdown_parser.py` masking code and HTML content rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
