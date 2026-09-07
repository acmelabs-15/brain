---
package: rjm
name: holder lease
slug: holder-lease
kind: artifact
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# holder lease

## Definition — verbatim
> "Adopt a fail-closed, PR-comment-backed holder lease for PR branch mutation." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 34 | defined here | Defined as the fail-closed PR-comment-backed lease keyed by repository, PR number, and branch. |

## Consumes
Repository, PR number, branch name, holder id, and verified GitHub actor.

## Produces
Exclusive PR comment lease marker preventing concurrent branch mutation.

## When applied
Acquired prior to long-running tasks, test suites, and git push operations on PR branches.

## Sub-concepts
holder-id, verified-github-actor

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
A distributed lease record posted as a structured GitHub issue comment on a pull request. It establishes single-holder ownership for branch mutations, ensuring that background automated workflows and local agents do not clobber each other's work while running pre-push gates or landing commits.
