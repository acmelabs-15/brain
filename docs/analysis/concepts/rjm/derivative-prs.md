---
package: rjm
name: derivative PRs
slug: derivative-prs
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# derivative PRs

## Definition — verbatim
> "PRs that target non-protected branches (derivative PRs)" — .github/scripts/invoke_pr_maintenance.py:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 249 | defined here | Defined in docstring as pull requests that target non-protected branches in stacked PR workflows. |

## Consumes
Feature branches and parent pull requests targeting repository branches.

## Produces
Stacked pull request relationships with parent PRs for coordinated maintenance and review.

## When applied
Applied when a developer or agent opens a pull request targeting an intermediate feature branch rather than a protected trunk branch.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, orphan

## Design notes
In rjm's PR maintenance architecture, derivative PRs represent dependent, stacked pull requests whose base branch is another active feature branch rather than a protected branch (main, master, develop). Identifying derivative PRs ensures that parent PRs are reconciled first and intermediate changes are not prematurely merged or orphaned.
