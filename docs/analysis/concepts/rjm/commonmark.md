---
package: rjm
name: CommonMark
slug: commonmark
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CommonMark

## Definition — verbatim
> "Fence matching follows CommonMark, which is what keeps the tool from damaging" — .claude/skills/fix-markdown-fences/SKILL.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 33 | used here | Outlines CommonMark fence length and delimiter rules implemented in the repair script. |
| .claude/skills/fix-markdown-fences/SKILL.md | 98 | used here | Explains that fence matching follows CommonMark to prevent damaging documentation. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 83 | used here | Cites CommonMark rule capping fence marker indent at three spaces before becoming an indented block. |
| scripts/utils/markdown_parser.py | 100 | used here | Configures markdown-it parser with CommonMark default preset and bounded recursion limits. |
| scripts/validation/check_adr_links.py | 6 | used here | Cites CommonMark specification backing fence, reference-link, and label normalization. |
| scripts/validation/check_shipped_skill_routes.py | 56 | used here | Employs CommonMark parser to isolate table cells and exclude code blocks from route checks. |
| scripts/validation/pr_description.py | 417 | used here | References CommonMark rule requiring fences in columns 0..3 for tilde code block masking. |

## Consumes
Markdown source files, pull request bodies, documentation, and skill routing tables.

## Produces
Standardized token streams, parsed abstract syntax trees, and unambiguous block and inline segmentations.

## When applied
Governs all markdown parsing, syntax validation, linting, link checking, and fence repairs across repository scripts.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift, other

## Design notes
CommonMark is the standard specification adopted across repository linters, fence repair utilities, and link checkers. Adhering to CommonMark ensures consistent parsing of code fences, list items, and link references, preventing heuristic regex parsing bugs from corrupting documentation.
