---
package: rjm
name: pipe-delimited format
slug: pipe-delimited-format
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/compress_markdown_content.py, sha256: 6ea240babb32b029c81725c73a1f4a7db221c67d87bde2598c7545c563f42de1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pipe-delimited format

## Definition — verbatim
> "Compress markdown documentation to minimal tokens using pipe-delimited format (Vercel pattern)." — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/compress_markdown_content.py | 3 | defined here | Module docstring defining pipe-delimited format as the Vercel pattern for minimal token representation. |
| .claude/skills/context-optimizer/SKILL.md | 195 | defined here | Skill documentation defining pipe-delimited format achieving 60-80% token reduction while maintaining 100% information density. |

## Consumes
Raw markdown documentation, tables, headers, and lists.

## Produces
Dense, token-compressed documentation using pipe (|) delimiters.

## When applied
Applied when compressing markdown documentation for LLM context injection.

## Sub-concepts
none

## Part of
context-optimizer, vercel-pattern

## Implementation status
defects: doc-drift

## Design notes
A compact text formatting convention derived from Vercel research that converts markdown tables, lists, and hierarchical sections into condensed pipe-delimited lines, drastically minimizing token overhead while retaining full semantic density for LLM context windows.
