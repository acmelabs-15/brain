---
package: rjm
name: Pull request management
slug: pull-request-management
kind: technique
package_phase: rjm:ship
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

# Pull request management

## Definition — verbatim
(used, not defined)

> "| Pull request management | Full support | Full support | REST for simple, GraphQL for complex |" — docs/github-api-capabilities.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 46 | used here | Listed in the capability matrix as supported in both APIs, recommending REST for simple operations and GraphQL for complex tasks. |

## Consumes
Committed feature branches, review feedback, check runs, and target branch protection rules.

## Produces
Created, updated, reviewed, or merged pull requests.

## When applied
> "REST for simple, GraphQL for complex" — docs/github-api-capabilities.md:46

## Sub-concepts
review-thread-resolution

## Part of
none

## Implementation status
defects: orphan

## Design notes
Pull request management covers the automated lifecycle operations surrounding pull request creation, review comment handling, status monitoring, and merge execution. In rjm, it bridges code review and shipping phases across REST and GraphQL tooling.
