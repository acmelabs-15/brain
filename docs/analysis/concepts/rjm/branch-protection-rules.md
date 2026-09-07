---
package: rjm
name: Branch protection rules
slug: branch-protection-rules
kind: gate
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

# Branch protection rules

## Definition — verbatim
(used, not defined)

> "| Branch protection rules | Full support | Full support | Either |" — docs/github-api-capabilities.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 45 | used here | Listed in the capability matrix as an operation supported across both REST and GraphQL APIs. |

## Consumes
Target repository branch and protection policy rules (required reviews, passing CI status checks).

## Produces
Enforced branch governance preventing direct pushes and ensuring lifecycle quality gates.

## When applied
> "Branch protection rules" — docs/github-api-capabilities.md:45

## Sub-concepts
none

## Part of
repository-management

## Implementation status
defects: orphan

## Design notes
Branch protection rules are repository security gates in GitHub that enforce automated status checks, code review sign-offs, and linear history before code can be merged into protected branches. Documented in rjm as accessible via either REST or GraphQL.
