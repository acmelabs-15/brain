---
description: "Alias for `/session continue` — pick a plan part already in progress back up: read the docs system in full, as `start` does, join the session the part names, and post the brief. With no plan id, lists the plans in progress and asks which. Typed only; never invoked by Claude on its own."
disable-model-invocation: true
argument-hint: "[PLAN-NNN]"
---

Invoke the `session` skill in `continue` mode now — exactly what typing `/session continue` does.

Typed after the command: `$ARGUMENTS`

When that text contains a `PLAN-NNN` id, call the Skill tool with `skill: sessions:session` and
`args: continue PLAN-NNN` (that id); otherwise `args: continue`. Anything else typed is ignored.
The skill carries the whole procedure and its completion criterion; run it rather than
reproducing its steps here.
