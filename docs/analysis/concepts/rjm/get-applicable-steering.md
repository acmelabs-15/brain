---
package: rjm
name: get_applicable_steering
slug: get-applicable-steering
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/get_applicable_steering.py, sha256: 15f73361277478c085d40035d5f99242107d46f25f493fce2a26c5870a6835b8}
  - {path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py, sha256: 8c5e992f69084b1f8530605061fcee606e41fd8d9bc17905d1930950764f6a53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_applicable_steering

## Definition — verbatim
(used, not defined)

> "def get_applicable_steering(" — .claude/skills/steering-matcher/get_applicable_steering.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/get_applicable_steering.py | 60 | defined here | Primary function identifying and sorting applicable steering files for given modified paths. |
| .claude/skills/steering-matcher/scripts/get_applicable_steering.py | 67 | defined here | CLI entry-point function scanning steering directories and returning matching steering rules. |

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
defects: orphan, other, script-bug, exit-code-mismatch

## Design notes
`get_applicable_steering` is a Python function implemented in steering matcher scripts that filters and orders steering files based on frontmatter glob patterns rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
