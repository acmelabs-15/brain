---
package: rjm
name: _ListContainers
slug: listcontainers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _ListContainers

## Definition — verbatim
(used, not defined)

> "class _ListContainers:" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:338

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 338 | defined here | Python parser class tracking list item content columns, tab stops, and multi-line definitions. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 383 | defined here | Duplicated Python parser class tracking list item containers to calculate fence base indentation. |

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
defects: script-bug, doc-drift, other

## Design notes
`_ListContainers` is an internal Python parser class identifier tracking list container content columns in markdown linting scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
