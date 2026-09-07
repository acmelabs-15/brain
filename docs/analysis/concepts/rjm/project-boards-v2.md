---
package: rjm
name: Project boards v2
slug: project-boards-v2
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

# Project boards v2

## Definition — verbatim
(used, not defined)

> "| Project boards v2 | Not available | Full support | Projects v2 API is GraphQL-only |" — docs/github-api-capabilities.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 37 | used here | Listed in the capability matrix as a project management capability supported only via GraphQL. |

## Consumes
GitHub GraphQL API credentials and Projects v2 schema queries.

## Produces
Project boards, items, fields, and workflow views.

## When applied
> "Project boards v2" — docs/github-api-capabilities.md:23

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
Project boards v2 refers to GitHub's modern project management system. In rjm, it is documented as an external tracking surface that requires GraphQL queries and mutations because GitHub provides no REST endpoints for Projects v2.
