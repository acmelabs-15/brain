---
type: tool_used
tool: Agent
input_match: '"isolation"\s*:\s*"worktree"'
min: 5
arm: both
---

The five tasks of the first wave each run in a sub-agent with a worktree of its own, so their edits never meet in one checkout.
