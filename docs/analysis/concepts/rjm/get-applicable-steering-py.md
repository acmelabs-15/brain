---
package: rjm
name: get_applicable_steering.py
slug: get-applicable-steering-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/SKILL.md, sha256: 267193c275adf53f2f2401fd3018a07c37d19c20259acb2c6f40224b68b6dcf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_applicable_steering.py

## Definition — verbatim
(used, not defined)

> "| `match steering for these files` | get_applicable_steering.py |" — .claude/skills/steering-matcher/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/SKILL.md | 17 | used here | Referenced as the CLI script operation triggered by the "match steering for these files" phrase. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
steering-matcher

## Implementation status
defects: missing-path

## Design notes
`get_applicable_steering.py` is the filename of the Python script implementing steering file pattern matching rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
