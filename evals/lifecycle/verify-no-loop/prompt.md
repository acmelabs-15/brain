---
description: A bug with no possible feedback loop stops and asks before any hypothesis.
tags: [lifecycle]
max_turns: 12
allowed_tools: [Read, Glob, Grep, Skill, Bash, AskUserQuestion]
---

Users report that the nightly export sometimes comes back empty in production. Nothing in this repo reproduces it and there are no logs here. Fix it.
