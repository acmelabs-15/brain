---
package: rjm
name: check_gh_auth
slug: check-gh-auth
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_gh_auth

## Definition — verbatim
(used, not defined)

> "def check_gh_auth() -> GhAuthResult:" — scripts/github_core/api.py:448

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/measure_workflow_coalescing.py | 35 | used here | Imported from `scripts.github_core.api` to verify GitHub CLI authentication before running queries. |
| scripts/github_core/api.py | 448 | defined here | Function checking GitHub CLI authentication health across REST and GraphQL endpoints. |

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
defects: doc-drift, orphan, exit-code-mismatch

## Design notes
An API utility function classifying GitHub CLI authentication health rather than an independent lifecycle concept.
