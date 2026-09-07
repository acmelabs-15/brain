---
package: rjm
name: _ATX_HEADING
slug: atx-heading
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
  - {path: scripts/validation/citation_anchors.py, sha256: 9165c77d0218b1888a3f3efb6db925e7236f33a16b75c3b12419edad1a1ae50c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _ATX_HEADING

## Definition — verbatim
(used, not defined)

> "_ATX_HEADING = re.compile(" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 90 | defined here | Compiled regular expression matching ATX headings (1 to 6 hash characters) to identify paragraph and block boundaries. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 113 | defined here | Compiled regular expression detecting ATX headings for paragraph closure in prose analysis. |
| scripts/validation/citation_anchors.py | 151 | defined here | Helper function and regex detecting ATX headings (including blockquoted forms) to prevent sentence boundary merging. |

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
`_ATX_HEADING` is a regular expression constant identifier and validation helper for markdown ATX headings rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
