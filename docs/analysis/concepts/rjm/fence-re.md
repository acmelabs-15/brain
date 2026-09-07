---
package: rjm
name: _FENCE_RE
slug: fence-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _FENCE_RE

## Definition — verbatim
(used, not defined)

> "_FENCE_RE = re.compile(" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 79 | defined here | Compiled regular expression matching CommonMark code fence opening and closing delimiters with backticks or tildes. |

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
defects: other, script-bug

## Design notes
`_FENCE_RE` is a regular expression pattern constant identifier in `fix_fences.py` matching markdown code fences rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
