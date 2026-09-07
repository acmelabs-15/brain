---
package: rjm
name: get_repo_info
slug: get-repo-info
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_repo_info

## Definition — verbatim
(used, not defined)

> "def get_repo_info() -> RepoInfo | None:" — scripts/github_core/api.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 106 | defined here | Function inferring repository owner and repo name from git remote origin URL returning RepoInfo or None. |
| scripts/validation/pr_description.py | 241 | defined here | Function parsing repository owner and repo name from git remote origin URL. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`get_repo_info` is a Python utility function identifier parsing repository metadata from git remote URLs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
