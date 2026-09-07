---
package: rjm
name: _branch_pr_merged
slug: branch-pr-merged
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/detect_unlanded_commits.py, sha256: 15fdb7d7a4802f2ef25f9db95d4751ef67ffee7a4738f3305770117ab0398371}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _branch_pr_merged

## Definition — verbatim
(used, not defined)

> "def _branch_pr_merged(branch: str) -> bool:" — scripts/maintenance/detect_unlanded_commits.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 75 | defined here | Helper querying GitHub CLI to check if the PR for a given branch was merged. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
_branch_pr_merged is a private helper querying the GitHub API for PR merge status rather than an SDLC lifecycle concept, classified as name-only per D-023.
