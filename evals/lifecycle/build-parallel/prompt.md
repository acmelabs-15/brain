---
description: build auto starts every task on a five-wide frontier at once, each in a worktree brought to the feature branch's head, merges them one at a time, and stops at the checkpoint for review.
tags: [lifecycle]
max_turns: 80
timeout_seconds: 1800
allowed_tools: [Read, Glob, Grep, Skill, Agent, Bash, Write, Edit]
---

/brain:build auto

The plan is approved. Go.
