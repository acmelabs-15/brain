---
package: rjm
name: is_gh_authenticated
slug: is-gh-authenticated
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/gh_client.py, sha256: ee75d831a56d2b286fcf4d466bd6764a41fc49d5040b1ef6907abcbdad0caa45}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_gh_authenticated

## Definition — verbatim
(used, not defined)

> "def is_gh_authenticated() -> bool:" — scripts/github_core/api.py:482

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 482 | defined here | Boolean gate checking whether GitHub credentials authenticate across REST or GraphQL. |
| scripts/github_core/gh_client.py | 10 | used here | Imported and invoked by `GhCliClient.is_authenticated` to avoid misinterpreting transient outages. |

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
`is_gh_authenticated` is a Python helper function identifier verifying GitHub token authentication across REST and GraphQL transports rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
