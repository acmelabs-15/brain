---
package: rjm
name: markdown-it-py
slug: markdown-it-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# markdown-it-py

## Definition — verbatim
(used, not defined)

> "markdown-it-py instead of fragile regex patterns. Simple patterns (SHAs," — scripts/utils/markdown_parser.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 398 | used here | Reference benchmark parser used to reproduce and verify list parsing defect fixes. |
| scripts/utils/markdown_parser.py | 4 | used here | Core dependency used for structured AST extraction of markdown tables and checklists. |

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
defects: doc-drift, other, script-bug

## Design notes
A third-party Python library name used as an AST parsing dependency and reference benchmark rather than an operational lifecycle concept.
