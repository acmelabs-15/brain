---
package: rjm
name: get_pr_name_only
slug: get-pr-name-only
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_pr_name_only

## Definition — verbatim
(used, not defined)

> "def get_pr_name_only(pr_number: str, repository: str) -> str:" — scripts/ci/build_ai_review_context.py:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_ai_review_context.py | 114 | defined here | Function retrieving changed filenames for a pull request using GitHub CLI. |

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
`get_pr_name_only` is a Python utility function identifier retrieving changed filenames for a PR rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
