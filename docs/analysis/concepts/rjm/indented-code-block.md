---
package: rjm
name: indented code block
slug: indented-code-block
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# indented code block

## Definition — verbatim
(used, not defined)

> "a blank line, a fenced block, a list marker or an indented code block" — .claude/skills/fix-markdown-fences/SKILL.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 130 | used here | Listed among block types that cancel pending link definitions. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 84 | used here | Cited as the block type resulting when a fence marker exceeds the 3-space indentation ceiling. |

## Consumes
Text lines indented four or more spaces past container baseline

## Produces
Preformatted literal code block in markdown

## When applied
When lines are indented 4 or more spaces beyond container margin without fence markers.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other, script-bug

## Design notes
A CommonMark block format where lines indented 4 or more spaces past the container content column are rendered as literal code. The rjm fence repair and prose linting tools strictly model indented code blocks to avoid falsely treating literal backticks within indented blocks as active fences.
