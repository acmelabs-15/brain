---
package: rjm
name: resolveReviewThread
slug: resolvereviewthread
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/github-api-capabilities.md, sha256: ba3d6e9563db20b6b305b98637896d233aa22c3caeea83f79ff21be7769a23b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolveReviewThread

## Definition — verbatim
(used, not defined)

> "| Review thread resolution | Read-only | `resolveReviewThread` mutation | REST cannot resolve threads |" — docs/github-api-capabilities.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 35 | used here | Cited in the capability matrix as the GraphQL mutation identifier required to resolve PR review threads. |

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
defects: orphan

## Design notes
`resolveReviewThread` is a GitHub GraphQL API mutation identifier for resolving pull request review comment threads rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
