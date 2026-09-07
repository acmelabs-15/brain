---
package: rjm
name: gh_graphql
slug: gh-graphql
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gh_graphql

## Definition — verbatim
(used, not defined)

> "def gh_graphql(query: str, variables: dict | None = None) -> dict:" — scripts/github_core/api.py:869

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 869 | defined here | Executes GraphQL queries/mutations via gh CLI with bounded retry and jittered backoff. |

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
`gh_graphql` is a Python helper function identifier executing GraphQL queries with retry and backoff rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
