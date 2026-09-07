---
package: rjm
name: Repository discussions
slug: repository-discussions
kind: reference
package_phase: cross-phase
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

# Repository discussions

## Definition — verbatim
(used, not defined)

> "| Repository discussions | Not available | Full support | Discussions API is GraphQL-only |" — docs/github-api-capabilities.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 38 | used here | Listed in the capability matrix as a GitHub feature supported only via the GraphQL API. |

## Consumes
GitHub repository GraphQL endpoint and discussion query inputs.

## Produces
Discussion categories, discussion threads, and threaded community replies.

## When applied
> "Repository discussions" — docs/github-api-capabilities.md:24

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
Repository discussions represents GitHub's collaborative discussion forum feature. In rjm, it is documented as a GraphQL-exclusive capability necessary when agent workflows interact with community queries or RFC discussions.
