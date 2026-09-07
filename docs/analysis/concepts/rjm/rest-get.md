---
package: rjm
name: rest_get
slug: rest-get
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/gh_client.py, sha256: ee75d831a56d2b286fcf4d466bd6764a41fc49d5040b1ef6907abcbdad0caa45}
  - {path: scripts/github_core/protocol.py, sha256: 76c0595da9bf62dbe6851c5ef98b2d32a8a75106eaafcbd9338ba03c92ed8c76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rest_get

## Definition — verbatim
(used, not defined)

> "def rest_get(self, endpoint: str) -> dict[str, Any]: ..." — scripts/github_core/protocol.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/gh_client.py | 79 | defined here | Implements REST GET execution via the gh CLI subprocess transport. |
| scripts/github_core/protocol.py | 16 | defined here | Declares the REST GET method contract on the GitHubClient protocol. |

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
Method identifier for HTTP GET transport operations on GitHub client classes, classified as name-only per D-023.
