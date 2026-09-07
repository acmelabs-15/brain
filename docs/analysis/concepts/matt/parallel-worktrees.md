---
package: matt
name: parallel worktrees
slug: parallel-worktrees
kind: technique
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parallel worktrees

## Definition — verbatim
(used, not defined)

> "One caveat from a user report on parallel worktrees: when sibling <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/session\">sessions</a> each build a ticket in their own tree, the merge back is best done by the session that wrote the change, because it is the one that already knows the intent." — external/resolving-merge-conflicts.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 39 | used here | Explains that when using parallel worktrees, merging back should be done by the session that authored the change. |

## Consumes
Multiple git worktrees and concurrent agent sessions building separate tickets.

## Produces
Isolated filesystem trees for concurrent development, alongside a disciplined merge-back practice preserving author intent.

## When applied
When concurrent agent sessions execute independent tickets simultaneously across dedicated git worktrees.

## Sub-concepts
worktree

## Part of
resolving-merge-conflicts

## Implementation status
defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30)

## Design notes
The practice of running multiple concurrent agent sessions in isolated git worktrees. To prevent loss of intent during branch reconciliation, matt emphasizes that the session that authored the changes in a worktree should perform the merge back, rather than batching all conflicts onto a separate agent lacking author context.
