---
"@acmelabs/brain": minor
---

New: `/build auto` starts every task that is ready at once, each in a worktree of its own, up to `max_parallel` in `docs/agents/workspace.md` (8 by default; `BRAIN_MAX_PARALLEL` overrides it). The main session merges the tasks one at a time and stops at each checkpoint for your review.
