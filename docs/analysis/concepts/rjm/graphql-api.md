---
package: rjm
name: GraphQL API
slug: graphql-api
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

# GraphQL API

## Definition — verbatim
> "**GraphQL API**: Flexible query language allowing precise data fetching and operations not available in REST" — docs/github-api-capabilities.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 10 | used here | Contrasted with REST API as GitHub's flexible query language required for review thread resolution and Projects v2. |

## Consumes
GraphQL queries and mutation documents via `gh api graphql`.

## Produces
Precision-structured JSON responses and state modifications on GitHub resources.

## When applied
> "Review thread operations" — docs/github-api-capabilities.md:21

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
GraphQL API is GitHub's schema-driven query interface utilized in rjm for specialized operations unavailable in REST—such as resolving pull request review threads and managing Projects v2 boards—and for executing complex nested queries in a single round trip.
