---
type: tool_used
tool: Agent
input_match: 'feat/text-tools'
min: 5
---

Each brief names the feature branch, whose head its worktree must start from. The remote's default branch lacks the feature's files, and Claude Code bases a worktree on it by default, so a brief that leaves the branch out builds on the wrong tree. Only `git branch` gives the name: no scaffold file and not the prompt holds it.
