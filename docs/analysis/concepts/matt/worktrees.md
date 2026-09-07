---
package: matt
name: worktrees
slug: worktrees
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# worktrees

## Definition — verbatim
(used, not defined)

> "Git worktrees are the community workaround, and note that <code class="ah-code-inline">refs/stash</code> is shared across worktrees too, so worktrees alone do not fix the stash case." — external/implement.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/implement.md | 52 | used here | Cites worktrees when discussing concurrency limitations and shared stash pitfalls. |

## Consumes
Parallel agent tasks and repository working trees.

## Produces
Workspace concurrency isolation.

## When applied
When coordinating simultaneous branch development across multiple agent tasks.

## Sub-concepts
none

## Part of
implement

## Implementation status
defects: orphan, doc-drift, cross-file-contradiction, other

## Design notes
Worktrees provide separate working directories linked to a single Git database, allowing agents to manipulate distinct files and branches in parallel without colliding on working-tree changes or the Git index.
