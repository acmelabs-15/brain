---
package: rjm
name: blank_non_prose_block_lines
slug: blank-non-prose-block-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
