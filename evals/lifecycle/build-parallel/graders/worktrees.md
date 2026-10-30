---
type: regex
target: trace
pattern: '^(?=[^\n]*"name": ?"Agent")(?=[^\n]*(?:count|longest|capitalize|reverse|distinct|summary)\.test\.ts)(?![^\n]*"isolation": ?"worktree")(?![^\n]*worktrees/T\d\d\b)'
flags: m
match: not_contains
---

Every Agent call for a task gives it a worktree of its own, so the tasks' edits never meet in one checkout: `"isolation": "worktree"` on the call, or, in the worktree fallback, the path of the worktree the main session made under `worktrees/T<NN>`. The grader fails on an Agent call for a task with neither.

A refused call carries isolation, so this grader does not flag it; the start graders do not count it as a start.
