---
description: "Alias for `/sessions:session start` — read the docs system in full (OVERVIEW, the plan and its PRD, every open session serving it, CONTEXT.md, the ADRs it cites), join the open session serving the plan part (or open one and mark the part in progress, or state none), and post the brief. A plan id typed after it is passed through; a plan that does not exist is written first. Typed only; never invoked by Claude on its own."
disable-model-invocation: true
argument-hint: "[PLAN-NNN]"
---

Invoke the `session` skill in `start` mode now — exactly what typing `/sessions:session start` does.

Typed after the alias: `$ARGUMENTS`

When that text contains a `PLAN-NNN` id, call the Skill tool with `skill: sessions:session` and
`args: start PLAN-NNN` (that id); otherwise `args: start`. Anything else typed is ignored. The
skill carries the whole procedure and its Done-when line; run it rather than reproducing
its steps here.
