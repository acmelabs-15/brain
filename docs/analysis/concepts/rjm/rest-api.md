---
package: rjm
name: REST API
slug: rest-api
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

# REST API

## Definition — verbatim
> "**REST API**: Simple, familiar HTTP-based interface with endpoint-per-resource design" — docs/github-api-capabilities.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 9 | used here | Contrasted with GraphQL API as GitHub's HTTP endpoint-per-resource design recommended for CRUD and file operations. |

## Consumes
HTTP client requests or GitHub CLI API calls (`gh api`).

## Produces
JSON resource payloads for repositories, issues, PRs, and webhooks.

## When applied
> "Simple CRUD operations" — docs/github-api-capabilities.md:18

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
REST API is GitHub's standard HTTP interface referenced in rjm for simple CRUD operations, file manipulations, webhook configurations, and release management due to its predictable endpoint design and broad tooling support.
