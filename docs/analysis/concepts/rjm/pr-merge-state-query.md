---
package: rjm
name: PR_MERGE_STATE_QUERY
slug: pr-merge-state-query
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/pr_merge_state.py, sha256: 11604a6b3e6c7d85f97f123b4a945a8b18465811c07e89316eee03a3d957afda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR_MERGE_STATE_QUERY

## Definition — verbatim
(used, not defined)

> "PR_MERGE_STATE_QUERY =" — scripts/github_core/pr_merge_state.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/pr_merge_state.py | 84 | defined here | Constant GraphQL query string fetching merge status, state, mergedAt, and mergedBy fields for a PR. |

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
defects: script-bug

## Design notes
Constant GraphQL query string for querying pull request merge state, classified as name-only per D-023.
