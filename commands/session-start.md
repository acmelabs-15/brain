---
description: "Alias for `/session start` — read the docs system in full (OVERVIEW, the plan and its PRD, every open session serving it, CONTEXT.md, the ADRs it cites), join the open session serving the plan part (or open one and mark the part in progress, or state none), and post the brief. A plan id typed after it is passed through. Typed only; never invoked by Claude on its own."
disable-model-invocation: true
argument-hint: "[PLAN-NNN]"
---

Invoke the `session` skill in `start` mode now — exactly what typing `/session start` does: call
the Skill tool with `skill: session:session` and `args: start PLAN-NNN` when the text typed after
the command (`$ARGUMENTS`) is a plan id of that shape, else `args: start`; anything else typed
after the command is ignored. The skill carries the whole procedure and its completion criterion;
run it rather than reproducing its steps here.
