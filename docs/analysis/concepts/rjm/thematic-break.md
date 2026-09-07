---
package: rjm
name: _THEMATIC_BREAK
slug: thematic-break
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _THEMATIC_BREAK

## Definition — verbatim
(used, not defined)

> "_THEMATIC_BREAK = re.compile(" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 91 | defined here | Compiled regular expression matching CommonMark thematic breaks consisting of runs of hyphens, asterisks, or underscores. |
| .claude/skills/fix-markdown-fences/SKILL.md | 115 | used here | Documented as a boundary block that never opens a list item even when matching bullet characters. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 114 | defined here | Regex constant recognizing thematic breaks to determine paragraph and container termination. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 411 | used here | Cited in Rule 5 explaining that a thematic break is never a list item despite bullet character matching. |

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
`_THEMATIC_BREAK` is a regular expression constant identifier recognizing thematic breaks / horizontal rules rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
