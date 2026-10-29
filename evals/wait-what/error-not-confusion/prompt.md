---
name: wait-what/error-not-confusion
description: An error message the user calls confusing is a debugging task, so wait-what stays out.
tags: [wait-what]
max_turns: 4
allowed_tools: [Read, Skill]
---

ok i ran migration 1 and got this, makes no sense to me:

ERROR:  column "display_name" of relation "accounts" already exists

nobody added that column, i checked the migrations folder. what's going on?
