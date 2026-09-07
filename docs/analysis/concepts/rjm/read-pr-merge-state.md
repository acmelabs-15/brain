---
package: rjm
name: read_pr_merge_state
slug: read-pr-merge-state
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

# read_pr_merge_state

## Definition — verbatim
(used, not defined)

> "def read_pr_merge_state(owner: str, repo: str, number: int) -> PrMergeState:" — scripts/github_core/pr_merge_state.py:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/pr_merge_state.py | 224 | defined here | Main query function reading PR merge status via GraphQL and returning an authoritative PrMergeState. |

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
Query function reading authoritative PR merge status via GraphQL without assuming unmerged on transport errors, classified as name-only per D-023.
