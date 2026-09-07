---
package: rjm
name: isolated_mutation_worktree
slug: isolated-mutation-worktree
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/mutation_harness_ciperms.py, sha256: 814dca7906ebdabba9e13a5f2d72039965f792b5d6f534877b452e5e40084fba}
  - {path: scripts/mutation_test_proc_group.py, sha256: 74dd80167b2ade1656564eb8fd46a7aadf2dc51c53bf462d179014270bed8bfc}
  - {path: scripts/testing/mutation_workspace.py, sha256: 6dae0c8e7dbbb2330c629b9d71304b37544571558668154302e9b74eab92ab27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# isolated_mutation_worktree

## Definition — verbatim
> "Yield a detached worktree where mutation targets can be changed safely." — scripts/testing/mutation_workspace.py:271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/mutation_harness_ciperms.py | 27 | used here | Imports and uses isolated_mutation_worktree to execute permission mutations in an isolated worktree. |
| scripts/mutation_test_proc_group.py | 29 | used here | Imports and invokes isolated_mutation_worktree to safely mutate process group validation scripts. |
| scripts/testing/mutation_workspace.py | 267 | defined here | Context manager definition yielding a detached git worktree for mutating targets without affecting the host repository. |

## Consumes
Git repository root path and a sequence of target files to mutate.

## Produces
Context manager yielding a MutationWorkspace with temporary detached worktree isolation.

## When applied
Invoked whenever running mutation harnesses to prevent file modifications from altering or dirtying the host workspace.

## Sub-concepts
none

## Part of
mutation-workspace

## Implementation status
defects: orphan

## Design notes
A testing isolation technique providing temporary git worktrees for mutation testing, ensuring that bytecode and file mutations do not dirty the primary repository or persist across failed runs.
