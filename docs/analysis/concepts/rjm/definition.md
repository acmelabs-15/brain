---
package: rjm
name: _Definition
slug: definition
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

# _Definition

## Definition — verbatim
(used, not defined)

> "class _Definition:" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 254 | defined here | Python dataclass representing expected continuation state for parsed link reference definitions. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 277 | defined here | Python dataclass representing pending link reference title state in prose linting. |

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
`_Definition` is an internal Python dataclass identifier in markdown parsing scripts tracking multi-line link reference definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
