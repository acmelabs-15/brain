---
package: rjm
name: _parse_response_body
slug: parse-response-body
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/gh_client.py, sha256: ee75d831a56d2b286fcf4d466bd6764a41fc49d5040b1ef6907abcbdad0caa45}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _parse_response_body

## Definition — verbatim
(used, not defined)

> "def _parse_response_body(stdout: str, description: str) -> dict[str, Any]:" — scripts/github_core/gh_client.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/gh_client.py | 40 | defined here | Parses REST JSON response bodies while safely treating 202/204 empty responses as empty dictionaries. |

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
Internal Python helper function for safe response body parsing in GitHub CLI interactions, classified as name-only per D-023.
