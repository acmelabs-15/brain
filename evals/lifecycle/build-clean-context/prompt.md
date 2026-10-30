---
description: build auto finds the active spec through workspace.md, hands each task's block from todo.md to its own sub-agent, and closes each plan row after the task's commit.
tags: [lifecycle]
max_turns: 40
timeout_seconds: 900
allowed_tools: [Read, Glob, Grep, Skill, Agent, Bash, Write, Edit]
---

/brain:build auto

The plan is approved. Go.
