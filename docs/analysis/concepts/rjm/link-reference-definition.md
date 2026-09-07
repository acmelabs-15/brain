---
package: rjm
name: link reference definition
slug: link-reference-definition
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

# link reference definition

## Definition — verbatim
(used, not defined)

> "A link reference definition (`[foo]: /url`) is its own" — .claude/skills/fix-markdown-fences/SKILL.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 121 | used here | Documented as an independent block that leaves no paragraph open and cannot interrupt an active paragraph. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 120 | used here | Handled via specialized patterns to prevent false paragraph terminations. |

## Consumes
Bracketed label, colon, destination URL, and optional title

## Produces
Named link target in markdown document state

## When applied
When parsing markdown reference links and tracking paragraph state transitions.

## Sub-concepts
link-label, link-title

## Part of
none

## Implementation status
defects: doc-drift, other, script-bug

## Design notes
A standalone CommonMark block element defining a link target that does not leave an open paragraph. The package includes dedicated regexes and validation logic for link reference definitions so that subsequent list items or code fences are not misinterpreted as paragraph interruptions.
