---
package: rjm
name: FILE_SIZE_EXEMPT_SUFFIX
slug: file-size-exempt-suffix
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FILE_SIZE_EXEMPT_SUFFIX

## Definition — verbatim
(used, not defined)

> "FILE_SIZE_EXEMPT_SUFFIX = \".json\"" — .claude/skills/taste-lints/scripts/taste_lints.py:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 76 | defined here | Constant declaring file suffix (.json) exempt from line count ceilings in agent state directories. |

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
defects: doc-drift, other

## Design notes
FILE_SIZE_EXEMPT_SUFFIX is a Python script constant in taste_lints.py exempting JSON files in state directories from line limits rather than a lifecycle concept.
