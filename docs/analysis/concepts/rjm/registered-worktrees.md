---
package: rjm
name: registered_worktrees
slug: registered-worktrees
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/testing/mutation_workspace_git.py, sha256: 57a9d9dfa073c1d628afccce78bde4137748c564d5f6a1f4d9e0eb4720c708d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# registered_worktrees

## Definition — verbatim
(used, not defined)

> "def registered_worktrees(repo_root: Path) -> set[Path]:" — scripts/testing/mutation_workspace_git.py:336

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 336 | defined here | Function querying git to retrieve the set of all registered worktree paths under file lock. |

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
registered_worktrees is a Python function identifier retrieving active worktree paths from git rather than a lifecycle concept.
