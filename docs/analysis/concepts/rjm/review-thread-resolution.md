---
package: rjm
name: Review thread resolution
slug: review-thread-resolution
kind: technique
package_phase: rjm:review
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

# Review thread resolution

## Definition — verbatim
(used, not defined)

> "| Review thread resolution | Read-only | `resolveReviewThread` mutation | REST cannot resolve threads |" — docs/github-api-capabilities.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 35 | used here | Listed in the capability matrix as an operation requiring GitHub's GraphQL mutation because REST is read-only. |

## Consumes
Pull request review thread ID and resolution mutation payload.

## Produces
Resolved review thread state on GitHub pull requests.

## When applied
> "Review thread operations" — docs/github-api-capabilities.md:21

## Sub-concepts
resolvereviewthread

## Part of
pull-request-management

## Implementation status
defects: orphan

## Design notes
Review thread resolution is the operation of programmatically resolving discussion threads on GitHub pull requests. In rjm, it represents an automated lifecycle capability for review agents that must be executed via GraphQL because GitHub's REST API cannot resolve review comments.
