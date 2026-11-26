---
description: Break work into small verifiable tasks with acceptance criteria and dependency ordering
disable-model-invocation: true
---

Invoke the brain:task-decomposition skill.

Read the existing spec (the spec's `spec.md`) and the relevant codebase sections. Then:

1. Identify the dependency graph between components
2. Slice work vertically (one complete path per task, not horizontal layers)
3. Write tasks with acceptance criteria and verification steps
4. Add checkpoints to the task graph
5. Present the plan for human review

Record each task in its own file in the spec's `tasks/` folder.

If task files already exist with incomplete tasks for different work, stop and ask before writing — never silently overwrite an incomplete plan.
