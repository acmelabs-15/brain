---
package: rjm
name: Merge Guards
slug: merge-guards
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Merge Guards

## Definition — verbatim
> "Add Merge Guards" — .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 143 | defined here | Remediation action item introducing automated technical barriers in CI to prevent merging PRs with unresolved or improperly dismissed review comments. |

## Consumes
Pull request metadata, review thread statuses, and security review approvals.

## Produces
Binary pass/fail merge gate enforcement in CI pipelines.

## When applied
Evaluated in CI pipelines prior to permitting branch merges into production or main branches.

## Sub-concepts
none

## Part of
remediation-plan

## Implementation status
defects: missing-path

## Design notes
`Merge Guards` are automated technical barriers implemented in rjm's CI pipeline to protect the main branch from premature or unverified pull request merges. They inspect GitHub review threads to ensure every comment is resolved, automatically block any pull request containing "won't fix" dismissals on security findings without human sign-off, and require successful QA verification before merging.
