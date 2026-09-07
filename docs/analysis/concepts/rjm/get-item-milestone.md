---
package: rjm
name: get_item_milestone
slug: get-item-milestone
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

# get_item_milestone

## Definition — verbatim
(used, not defined)

> "def get_item_milestone(" — .github/scripts/set_item_milestone.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/set_item_milestone.py | 89 | defined here | Function retrieving the existing milestone title for a GitHub pull request or issue. |

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
`get_item_milestone` is a Python helper function querying the GitHub API to inspect the assigned milestone of an issue or pull request rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
