---
package: rjm
name: preserve_code_blocks
slug: preserve-code-blocks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/compress_markdown_content.py, sha256: 6ea240babb32b029c81725c73a1f4a7db221c67d87bde2598c7545c563f42de1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# preserve_code_blocks

## Definition — verbatim
(used, not defined)

> "def preserve_code_blocks(content: str) -> tuple[str, list[str]]:" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/compress_markdown_content.py | 130 | defined here | Function extracting fenced code blocks and replacing them with placeholders during compression. |

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
preserve_code_blocks is a Python helper function identifier in compress_markdown_content.py protecting code syntax from transformation rather than an operational lifecycle concept, classified as name-only per D-023.
