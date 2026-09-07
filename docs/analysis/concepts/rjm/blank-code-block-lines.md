---
package: rjm
name: blank_code_block_lines
slug: blank-code-block-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# blank_code_block_lines

## Definition — verbatim
(used, not defined)

> "def blank_code_block_lines(markdown: str) -> str:" — scripts/utils/markdown_parser.py:225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 225 | defined here | Function blanking fenced and indented code block lines while preserving source line numbers and HTML blocks. |
| scripts/validation/check_skill_md_portability.py | 92 | used here | Imported to strip code blocks from markdown skills before checking prose portability. |

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
`blank_code_block_lines` is a Python utility function identifier in `scripts/utils/markdown_parser.py` replacing code lines with blank strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
