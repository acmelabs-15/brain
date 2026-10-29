---
description: setup-brain migrates a repo on the brain 0.8 layout into the workspace in one commit, runs the rest of its flow with the overlap step, and the migrated repo passes brain check.
tags: [setup]
max_turns: 40
allowed_tools: [Read, Glob, Grep, Skill, Bash, Write, Edit]
---

/brain:setup-brain Use the single-context layout. Here are my answers, so do not ask me: tasks/plan.md and tasks/todo.md belong to spec/SPEC-billing.md. Both intent docs in docs/intent/ become ideas. Remove the tracker files. Move CONTEXT.md to GLOSSARY.md. Move the ADR folder doc/adr/ into docs/decisions/. Write capabilities.md as proposed. Keep AGENTS.md as it is: report only. You have my yes for every write.
