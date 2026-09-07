---
package: rjm
name: assign_milestone
slug: assign-milestone
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

# assign_milestone

## Definition — verbatim
(used, not defined)

> "def assign_milestone(" — .github/scripts/set_item_milestone.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/set_item_milestone.py | 125 | defined here | Function assigning a milestone title to a PR or issue via the gh CLI. |

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
`assign_milestone` is a Python helper function executing `gh issue edit` to assign a milestone to a GitHub issue or pull request rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
