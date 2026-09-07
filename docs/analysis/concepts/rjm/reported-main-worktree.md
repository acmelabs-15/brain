---
package: rjm
name: _reported_main_worktree
slug: reported-main-worktree
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _reported_main_worktree

## Definition — verbatim
(used, not defined)

> "def _reported_main_worktree(repo_root: Path, budget: GitBudget) -> Path | None:" — scripts/validation/check_repo_health.py:295

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 295 | defined here | Helper function parsing the first worktree line of git worktree list --porcelain. |

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
clean

## Design notes
`_reported_main_worktree` is an internal Python helper function parsing `git worktree list --porcelain` to extract the primary worktree path, classified as `kind: name-only` per D-023.
