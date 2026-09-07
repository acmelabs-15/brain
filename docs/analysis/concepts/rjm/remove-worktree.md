---
package: rjm
name: remove_worktree
slug: remove-worktree
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_apply.py, sha256: 1e17387d7d9985af9f3df503778f048cb2d1db2644b8c31e3583759e072b0db6}
  - {path: scripts/testing/mutation_workspace_git.py, sha256: 57a9d9dfa073c1d628afccce78bde4137748c564d5f6a1f4d9e0eb4720c708d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# remove_worktree

## Definition — verbatim
(used, not defined)

> "def remove_worktree(path: str, run_git: Callable[..., str]) -> None:" — scripts/maintenance/_gc_apply.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 29 | defined here | Function executing git worktree remove via runner callable with failure raising. |
| scripts/testing/mutation_workspace_git.py | 311 | defined here | Function removing mutation test scratch worktree safely within designated scratch directory. |

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
Function identifier implementing worktree deletion operations in maintenance and test modules, classified as name-only per D-023.
