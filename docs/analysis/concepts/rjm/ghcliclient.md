---
package: rjm
name: GhCliClient
slug: ghcliclient
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/gh_client.py, sha256: ee75d831a56d2b286fcf4d466bd6764a41fc49d5040b1ef6907abcbdad0caa45}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GhCliClient

## Definition — verbatim
(used, not defined)

> "GhCliClient: concrete GitHubClient backed by the ``gh`` CLI." — scripts/github_core/gh_client.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/__init__.py | 49 | used here | Re-exported in the public module interface. |
| scripts/github_core/gh_client.py | 1 | defined here | Concrete client implementing GitHubClient backed by subprocess calls to the gh CLI. |

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
`GhCliClient` is a Python class identifier implementing the `GitHubClient` protocol via the GitHub CLI rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
