---
description: "Alias for `/brain:session log` — right after a commit: append and fill its entry in the session named (or the one in progress), tick the plan, update what the change made stale, gate, and commit it as docs(session). Typed only; never invoked by Claude on its own."
disable-model-invocation: true
argument-hint: "[SES-NNN]"
---

Invoke the `session` skill's `log` act now — exactly what typing `/brain:session log …` does.

Typed after the alias: `$ARGUMENTS`

When that text contains a `SES-NNN` id, call the Skill tool with `skill: brain:session` and
`args: log SES-NNN` (that id); otherwise `args: log`. Anything else typed is ignored. The skill
carries the whole procedure and its Done-when line; run it rather than reproducing its steps here.
