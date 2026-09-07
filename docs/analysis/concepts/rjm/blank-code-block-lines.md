---
package: rjm
name: blank_code_block_lines
slug: blank-code-block-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
