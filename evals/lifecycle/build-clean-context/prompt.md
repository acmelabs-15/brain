---
description: build auto hands each task to a sub-agent and commits per task.
tags: [lifecycle]
max_turns: 40
timeout_seconds: 900
allowed_tools: [Read, Glob, Grep, Skill, Agent, Bash, Write, Edit]
---

The plan in tasks/todo.md is approved. Run it in auto mode: every task, each in a clean context, one commit per task. Do not ask me anything.
