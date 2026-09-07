---
package: rjm
name: get_latest_semantic_milestone
slug: get-latest-semantic-milestone
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/set_item_milestone.py, sha256: ce831ca6f6b26304284c8e4b1adf94e2f46165b58f91459c8b95ef1d3a6dbd1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_latest_semantic_milestone

## Definition — verbatim
(used, not defined)

> "def get_latest_semantic_milestone(" — .github/scripts/set_item_milestone.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/set_item_milestone.py | 50 | defined here | Function detecting the latest open semantic version milestone in a repository. |

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
clean

## Design notes
`get_latest_semantic_milestone` is a Python helper function querying open repository milestones to find the highest semantic version rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
