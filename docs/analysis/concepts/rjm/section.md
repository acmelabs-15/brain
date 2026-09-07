---
package: rjm
name: Section
slug: section
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/extract_and_index.py, sha256: 6d3e638453dc07f7586b49315c8539b2d9eaa0aad91b14e53cac345e8a0fcde4}
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Section

## Definition — verbatim
(used, not defined)

> "class Section:" — .claude/skills/context-optimizer/scripts/extract_and_index.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/extract_and_index.py | 46 | defined here | Dataclass representing a parsed markdown section with heading, content, level, and slug. |
| scripts/utils/markdown_parser.py | 72 | defined here | Dataclass representing a markdown section with heading level, title, and body content. |

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
Section is a Python dataclass identifier representing parsed markdown document segments across context optimization and parsing utilities rather than an operational lifecycle concept, classified as name-only per D-023.
