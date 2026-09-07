---
package: rjm
name: count_tokens
slug: count-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/compress_markdown_content.py, sha256: 6ea240babb32b029c81725c73a1f4a7db221c67d87bde2598c7545c563f42de1}
  - {path: .claude/skills/context-optimizer/scripts/extract_and_index.py, sha256: 6d3e638453dc07f7586b49315c8539b2d9eaa0aad91b14e53cac345e8a0fcde4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# count_tokens

## Definition — verbatim
(used, not defined)

> "def count_tokens(text: str) -> int:" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/compress_markdown_content.py | 114 | defined here | Function counting tokens in input text using tiktoken with lazy module loading. |
| .claude/skills/context-optimizer/scripts/extract_and_index.py | 76 | defined here | Function calculating token counts for sections and index content via tiktoken cl100k_base encoding. |

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
defects: doc-drift, script-bug

## Design notes
count_tokens is a Python utility function identifier implemented across context optimizer scripts to measure token lengths rather than an operational lifecycle concept, classified as name-only per D-023.
