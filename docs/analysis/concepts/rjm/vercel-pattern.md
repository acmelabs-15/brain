---
package: rjm
name: Vercel pattern
slug: vercel-pattern
kind: pattern
package_phase: cross-phase
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

# Vercel pattern

## Definition — verbatim
(used, not defined)

> "Compress markdown documentation to minimal tokens using pipe-delimited format (Vercel pattern)." — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/compress_markdown_content.py | 3 | used here | Cited in script docstring as the markdown compression pattern using pipe-delimited format based on Vercel research. |

## Consumes
Markdown documentation files, reference manuals, or agent context files.

## Produces
Compressed markdown representations utilizing pipe-delimited notation for tables and lists to maximize token density.

## When applied
Applied when optimizing large markdown documents for LLM context consumption to achieve 60-80% token reduction.

## Sub-concepts
none

## Part of
context-optimizer

## Implementation status
defects: doc-drift

## Design notes
An information-dense markdown compression pattern derived from Vercel research that converts tabular, listed, and structured documentation into compact pipe-delimited notation while preserving code blocks and frontmatter, significantly reducing token overhead for agent context windows.
