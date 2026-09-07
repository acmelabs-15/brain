---
package: matt
name: Git worktrees
slug: git-worktrees
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

# Git worktrees

## Definition — verbatim
(used, not defined)

> "Git worktrees are the community workaround, and note that <code class="ah-code-inline">refs/stash</code> is shared across worktrees too, so worktrees alone do not fix the stash case." — external/implement.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/implement.md | 52 | used here | Explains that Git worktrees are the community workaround for concurrent sessions, noting shared stash hazards. |

## Consumes
A Git repository and concurrent agent execution requirements.

## Produces
Isolated file checkouts sharing a single .git storage directory.

## When applied
When running multiple agent sessions in parallel to avoid index and commit collisions.

## Sub-concepts
none

## Part of
implement

## Implementation status
defects: orphan, doc-drift, cross-file-contradiction, other

## Design notes
Git worktrees allow multiple working trees to be attached to a single repository checkout. In agent workflows, they provide isolation for concurrent coding agents working on different tickets simultaneously, though Matt notes that shared refs (such as stashes) still require careful handling.
