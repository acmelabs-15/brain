---
package: rjm
name: get_all_prs_with_comments
slug: get-all-prs-with-comments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_all_prs_with_comments

## Definition — verbatim
(used, not defined)

> "def get_all_prs_with_comments(" — scripts/github_core/api.py:1020

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 1020 | defined here | Function querying PRs with review comments using GraphQL cursor-based pagination. |
| scripts/update_reviewer_signal_stats.py | 37 | used here | Imported and invoked to fetch PR review comment threads for signal stats analysis. |

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
defects: doc-drift, exit-code-mismatch, orphan

## Design notes
`get_all_prs_with_comments` is a Python helper function identifier paginating PR review comments via GraphQL rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
