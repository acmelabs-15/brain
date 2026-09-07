---
package: rjm
name: get_issue_comments
slug: get-issue-comments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_issue_comments

## Definition — verbatim
(used, not defined)

> "def get_issue_comments(" — scripts/github_core/api.py:1096

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/post_issue_comment.py | 36 | used here | Imported from `scripts.github_core.api` to retrieve existing comments on an issue or pull request. |
| scripts/github_core/api.py | 1096 | defined here | GitHub API client function retrieving comments for a specified issue or pull request. |

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
A Python API function identifier (`get_issue_comments`) wrapping GitHub REST comments retrieval rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
